import type {
	DeclarativeRestApiSettings,
	IDataObject,
	IExecutePaginationFunctions,
	INodeExecutionData,
} from 'n8n-workflow';

/**
 * How a list pages, as LinkedNav's OpenAPI file says (`x-pagination`):
 *
 *   by        "cursor" follows the cursor the answer hands back; "page" asks for page 1, 2, …; "offset" skips the rows already read
 *   input     the input that takes it, when its name is not `by`
 *   list      the field of the answer that holds the rows ("chats", "contacts", …)
 *   pageSize  the most rows the API gives in one call (its own `limit` maximum)
 *   next      cursor lists: the field of the answer that holds the next cursor
 *   more      a true/false in the answer that says another page exists
 *   pages     page lists: the answer's number of pages
 *   total     page and offset lists: the answer's number of rows
 */
export interface Paging {
	by: 'cursor' | 'page' | 'offset';
	input?: string;
	list: string;
	pageSize: number;
	next?: string;
	more?: string;
	pages?: string;
	total?: string;
}

/** A field of the answer by its dotted path. */
function at(data: IDataObject | undefined, path: string | undefined): unknown {
	if (!path || !data) return undefined;
	let value: unknown = data;
	for (const key of path.split('.')) {
		if (value === null || typeof value !== 'object') return undefined;
		value = (value as IDataObject)[key];
	}
	return value;
}

/**
 * The node turns a list's pages itself, so a workflow never copies a cursor or page number between runs. With
 * Return All it goes on until the list ends; otherwise it stops once it has Limit rows. Each row becomes one
 * item. An answer that holds no list (a free preview of a search before anything is spent, for instance) is
 * passed on whole.
 */
export function paginate(paging: Paging) {
	const input = paging.input ?? paging.by;
	return async function (
		this: IExecutePaginationFunctions,
		requestData: DeclarativeRestApiSettings.ResultOptions,
	): Promise<INodeExecutionData[]> {
		const returnAll = this.getNodeParameter('returnAll', false) as boolean;
		const limit = returnAll ? Infinity : (this.getNodeParameter('limit', 50) as number);
		const rows: INodeExecutionData[] = [];
		const cursorsSeen = new Set<string>();
		let cursor: string | undefined;
		let page = 1;
		let offset = 0;
		while (rows.length < limit) {
			// Page numbers count in pages of one size, so that size cannot change between calls.
			const size = Math.min(paging.pageSize, paging.by === 'page' ? limit : limit - rows.length);
			const body: IDataObject = { ...(requestData.options.body as IDataObject), limit: size };
			if (paging.by === 'page') body[input] = page;
			else if (paging.by === 'offset') body[input] = offset;
			else if (cursor) body[input] = cursor;
			const [answer] = await this.makeRoutingRequest({
				...requestData,
				options: { ...requestData.options, body },
			});
			const found = at(answer?.json, paging.list);
			if (!Array.isArray(found)) return rows.length ? rows : answer ? [answer] : [];
			for (const row of found) {
				rows.push({
					json: row !== null && typeof row === 'object' ? (row as IDataObject) : { value: row },
				});
			}
			if (!found.length) break;
			if (paging.more && at(answer.json, paging.more) === false) break;
			if (paging.by === 'cursor') {
				const next = at(answer.json, paging.next ?? 'nextCursor');
				// A cursor seen before would only fetch the same page again.
				if (typeof next !== 'string' || !next || cursorsSeen.has(next)) break;
				cursorsSeen.add(next);
				cursor = next;
				continue;
			}
			// A page or offset list has ended when a page comes back short.
			if (found.length < size) break;
			const total = at(answer.json, paging.total);
			if (paging.by === 'page') {
				const pages = at(answer.json, paging.pages);
				if (typeof pages === 'number' && page >= pages) break;
				if (typeof total === 'number' && page * size >= total) break;
				page += 1;
			} else {
				offset += found.length;
				if (typeof total === 'number' && offset >= total) break;
			}
		}
		return rows.slice(0, limit);
	};
}

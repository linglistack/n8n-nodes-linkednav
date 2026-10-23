#!/usr/bin/env node
/**
 * Writes nodes/LinkedNav/actions.ts from LinkedNav's own OpenAPI file, so the node always offers exactly the
 * actions the API has, with the API's own words for each input.
 *
 *   node scripts/generate.mjs                 reads https://api.linkednav.com/v1/openapi.json
 *   node scripts/generate.mjs openapi.json    reads a local copy
 *
 * One area of the API (a tag) becomes a Resource, one action becomes an Operation, and each input becomes a
 * field: the required ones on the node, the optional ones under "Additional Fields". A list that pages
 * (`x-pagination` in the file) gets n8n's Return All and Limit, and paginate.ts turns its pages.
 */
import { readFile, writeFile } from 'node:fs/promises';

const SOURCE = 'https://api.linkednav.com/v1/openapi.json';
const spec = JSON.parse(process.argv[2] ? await readFile(process.argv[2], 'utf8') : await (await fetch(SOURCE)).text());

const SMALL = new Set(['a', 'an', 'and', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'or', 'the', 'to', 'with']);
const UPPER = {
	id: 'ID', ids: 'IDs', url: 'URL', urls: 'URLs', api: 'API', inmail: 'InMail', linkedin: 'LinkedIn', totp: 'TOTP',
	cv: 'CV', us: 'US', ai: 'AI', icp: 'ICP', crm: 'CRM', '2fa': '2FA', csv: 'CSV',
};

const words = (key) => key.replace(/LinkedIn/g, 'Linkedin').replace(/InMail/g, 'Inmail').replace(/([a-z0-9])([A-Z])/g, '$1 $2').replace(/[_-]+/g, ' ').trim().split(/\s+/);
/** "profileUrl" or "send_invitation" as a title: "Profile URL", "Send Invitation". Small words stay small, except at either end. */
const title = (key) => words(key).map((word, i, all) => {
	const lower = word.toLowerCase();
	if (UPPER[lower]) return UPPER[lower];
	if (i > 0 && i < all.length - 1 && SMALL.has(lower)) return lower;
	return lower.charAt(0).toUpperCase() + lower.slice(1);
}).join(' ');
const camel = (text) => words(text).map((word, i) => (i ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() : word.toLowerCase())).join('');

/** A description as n8n wants it: starting with a capital, on one line, and with no full stop when it is one sentence. */
function tidy(text) {
	let out = String(text || '').replace(/\s+/g, ' ').trim();
	if (!out) return undefined;
	out = out.charAt(0).toUpperCase() + out.slice(1);
	// n8n writes these two words in capitals wherever they stand alone.
	out = out.replace(/\bids\b/gi, 'IDs').replace(/\bid\b/gi, 'ID').replace(/\burls\b/gi, 'URLs').replace(/\burl\b/gi, 'URL');
	// n8n's rule, counted the way its linter counts: one sentence has no full stop, two end with one.
	const parts = out.replace('e.g.', '').split('. ').length;
	if (parts === 1) out = out.replace(/\.$/, '');
	else if (parts === 2 && !out.endsWith('.')) out += '.';
	return out;
}
const firstSentence = (text) => tidy(String(text || '').split(/\n/)[0].split(/(?<=[.!?])\s+/)[0]);

/**
 * How an action is named in n8n's list of actions. n8n's package scanner wants plain sentence case there: one
 * capital at the start, no apostrophes, hyphens, commas or brackets, and product names in lower case. The API's
 * titles say "LinkedIn" and "InMail", so those actions are worded again here. A title the scanner would refuse
 * and that has no wording here stops the script, so a new action is noticed.
 */
const ACTION_WORDING = {
	get_unibox: 'Get the inbox',
	get_unibox_unread_count: 'Get the number of unread conversations',
	mark_unibox_thread_read: 'Mark a conversation read',
	sync_unibox: 'Sync the inbox',
	send_unibox_reply: 'Reply to a conversation',
	get_unibox_task_status: 'Get the status of an inbox sync or reply',
	crm_list_cards: 'List CRM cards',
	crm_upsert_cards: 'Add or update CRM cards',
	crm_delete_card: 'Delete a CRM card',
	get_inmail_inbox: 'Get the inmail inbox',
	get_inmail_conversation: 'Get an inmail conversation',
	send_inmail_reply: 'Reply to an inmail',
	get_inmail_credits: 'Get inmail credits',
	check_inmail_open_profiles: 'Check which people have an open profile',
	get_linkedin_accounts: 'List connected accounts',
	get_linkedin_contracts: 'List sales navigator contracts',
	switch_linkedin_contract: 'Switch sales navigator contract',
	enrich_linkedin_urls: 'Find emails and phones from profile links',
	start_linkedin_connect: 'Get a link to connect an account',
	start_linkedin_update: 'Get a link to update a connection',
	get_linkedin_connection: 'Get a connection',
	update_linkedin_connection: 'Update a connection',
	validate_linkedin_connection: 'Check that a connection works',
	get_linkedin_2fa_status: 'Get the 2FA status of a connection',
	reconnect_and_check_linkedin_2fa: 'Reconnect and check 2FA',
	lookup_search_ids: 'Look up the codes of search filters',
	search_linkedin: 'Search with any filter',
	search_linkedin_people: 'Search people with every filter typed',
	search_linkedin_companies: 'Search companies with every filter typed',
	search_linkedin_posts: 'Search posts with every filter typed',
	search_linkedin_jobs: 'Search jobs with every filter typed',
	search_linkedin_sales_navigator_people: 'Search people in my sales navigator with every filter typed',
	search_linkedin_sales_navigator_companies: 'Search companies in my sales navigator with every filter typed',
	search_linkedin_recruiter_people: 'Search candidates in my recruiter with every filter typed',
};
/** Plain sentence case, a little stricter than the scanner; words in capitals throughout (such as "AI") pass, as they do there. */
const plainSentence = (text) => /^[A-Z][a-z0-9]*( [a-z0-9]+)*$/.test(text.split(' ').filter((word) => word !== word.toUpperCase()).join(' '));
function actionName(id, summary) {
	const said = ACTION_WORDING[id] || tidy(summary) || title(id);
	if (!plainSentence(said)) throw new Error(`The action "${id}" is called "${said}", which n8n's scanner refuses. Add a plain wording for it to ACTION_WORDING.`);
	return said;
}

/** n8n's own names for a node's fields; an input with one of these names is shown under another. */
const RENAMED = { action: 'actionChoice', resource: 'resourceChoice', operation: 'operationChoice', returnAll: 'returnAllChoice' };

/** A schema that may also be null ("anyOf: [X, null]") as X: an empty field is simply not sent. */
function notNull(schema) {
	const options = Array.isArray(schema.anyOf) ? schema.anyOf.filter((one) => one.type !== 'null') : null;
	if (!options || options.length !== 1) return schema;
	const { anyOf, ...rest } = schema;
	return { ...options[0], ...rest };
}

/** One input of an action as an n8n field that sends itself in the request body. */
function field(key, rawSchema, required) {
	const schema = notNull(rawSchema);
	// n8n asks that a yes/no field says "Whether …"; the API's own words follow.
	const said = String(schema.description || '').trim();
	const whether = schema.type === 'boolean' && said && !/^Whether\b/i.test(said) ? `Whether to switch this on. ${said}` : said;
	const base = { displayName: title(key), name: RENAMED[key] || key, description: tidy(whether) };
	// A description that only repeats the name adds nothing.
	if (base.description && base.description.toLowerCase() === base.displayName.toLowerCase()) delete base.description;
	const send = { type: 'body', property: key };
	const items = schema.type === 'array' ? notNull(schema.items || {}) : null;
	let shape;
	if (Array.isArray(schema.enum) && schema.enum.length) {
		const options = schema.enum.map((value) => ({ name: title(String(value)), value })).sort((a, b) => a.name.localeCompare(b.name));
		shape = { type: 'options', options, default: schema.enum.includes(schema.default) ? schema.default : options[0].value };
	} else if (schema.type === 'boolean') {
		shape = { type: 'boolean', default: schema.default === true };
	} else if (schema.type === 'number' || schema.type === 'integer') {
		// A whole number with no limits of its own still comes with JavaScript's safe-integer range; that is not a limit to show.
		const bound = (value) => typeof value === 'number' && Math.abs(value) < Number.MAX_SAFE_INTEGER;
		const typeOptions = {};
		if (bound(schema.minimum)) typeOptions.minValue = schema.minimum;
		if (bound(schema.maximum)) typeOptions.maxValue = schema.maximum;
		shape = { type: 'number', default: typeof schema.default === 'number' ? schema.default : (bound(schema.minimum) ? schema.minimum : 0), ...(Object.keys(typeOptions).length ? { typeOptions } : {}) };
	} else if (items && Array.isArray(items.enum) && items.enum.length) {
		// A list picked from fixed choices.
		const options = items.enum.map((value) => ({ name: title(String(value)), value })).sort((a, b) => a.name.localeCompare(b.name));
		shape = { type: 'multiOptions', options, default: Array.isArray(schema.default) ? schema.default.filter((value) => items.enum.includes(value)) : [] };
	} else if (items && items.type === 'string') {
		shape = { type: 'string', typeOptions: { multipleValues: true }, default: [] };
	} else if (schema.type === 'array' || schema.type === 'object' || items || schema.anyOf) {
		shape = { type: 'json', default: schema.type === 'object' ? '{}' : '[]' };
		send.value = '={{ typeof $value === "string" ? JSON.parse($value) : $value }}';
	} else if (schema.format === 'date-time') {
		shape = { type: 'dateTime', default: '' };
	} else if (key === 'color') {
		// n8n's own picker for a colour; it gives "#rrggbb", which the API takes.
		shape = { type: 'color', default: typeof schema.default === 'string' ? schema.default : '' };
	} else {
		const email = schema.format === 'email' || /email/i.test(key);
		shape = { type: 'string', default: typeof schema.default === 'string' ? schema.default : '', ...(email ? { placeholder: 'name@email.com' } : {}) };
	}
	return { ...base, ...shape, ...(required ? { required: true } : {}), routing: { send } };
}

/** n8n's own pair for a list that pages. Limit shows only when Return All is off; paginate.ts reads both. */
const returnAllField = { displayName: 'Return All', name: 'returnAll', type: 'boolean', default: false, description: 'Whether to return all results or only up to a given limit' };
const pagedLimitField = { displayName: 'Limit', name: 'limit', type: 'number', typeOptions: { minValue: 1 }, default: 50, description: 'Max number of results to return' };

/** The `limit` of an action that cannot page, as n8n's standard Limit: at most what the API gives in one call. */
function limitField(schema) {
	const most = typeof schema.maximum === 'number' ? schema.maximum : undefined;
	const limit = { ...pagedLimitField, typeOptions: { minValue: 1 }, routing: { send: { type: 'body', property: 'limit' } } };
	if (most !== undefined && most >= limit.default) limit.typeOptions.maxValue = most;
	// n8n starts every Limit at 50; an action that gives fewer is asked for its most.
	else if (most !== undefined) limit.routing.send.value = `={{ Math.min($value, ${most}) }}`;
	return limit;
}

/** How a list pages, from the API's own file; the script stops on an entry it cannot use. */
function pagingOf(action, inputs) {
	const paging = action['x-pagination'];
	if (!paging) return undefined;
	const input = paging.input || paging.by;
	if (!['cursor', 'page', 'offset'].includes(paging.by) || !inputs[input] || typeof paging.pageSize !== 'number' || !paging.list) {
		throw new Error(`"${action.operationId}" has an x-pagination entry this script cannot use: ${JSON.stringify(paging)}`);
	}
	return paging;
}

const resources = new Map(); // resource value -> { name, value, operations: [] }
const pagings = [];
for (const [path, item] of Object.entries(spec.paths)) {
	const action = item.post;
	if (!action) continue;
	const name = action.tags?.[0] || 'Other';
	const value = camel(name);
	if (!resources.has(value)) resources.set(value, { name, value, operations: [] });
	const body = action.requestBody?.content?.['application/json']?.schema || {};
	const required = new Set(body.required || []);
	const paging = pagingOf(action, body.properties || {});
	const hidden = new Set(paging ? ['limit', paging.input || paging.by] : ['limit']);
	const inputs = Object.entries(body.properties || {}).filter(([key]) => !hidden.has(key));
	resources.get(value).operations.push({
		id: action.operationId,
		changes: action['x-changes-something'] === true,
		name: title(action.operationId),
		action: actionName(action.operationId, action.summary),
		description: firstSentence(action.description) || tidy(action.summary),
		path,
		paging,
		limit: !paging && body.properties?.limit ? limitField(body.properties.limit) : undefined,
		required: inputs.filter(([key]) => required.has(key)).map(([key, schema]) => field(key, schema, true)),
		optional: inputs.filter(([key]) => !required.has(key)).map(([key, schema]) => field(key, schema, false)).sort((a, b) => a.displayName.localeCompare(b.displayName)),
	});
}

const sorted = [...resources.values()].sort((a, b) => a.name.localeCompare(b.name));
const properties = [];
for (const resource of sorted) {
	resource.operations.sort((a, b) => a.name.localeCompare(b.name));
	properties.push({
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: [resource.value] } },
		options: resource.operations.map((operation) => {
			let pagination = {};
			if (operation.paging) {
				pagings.push(operation.paging);
				// Written as a call to paginate.ts below, after JSON.stringify.
				pagination = { send: { paginate: true }, operations: { pagination: `@@paginate:${pagings.length - 1}@@` } };
			}
			return {
				name: operation.name,
				value: operation.id,
				action: operation.action,
				description: operation.description,
				routing: {
					// An action with no inputs still has to be sent a JSON body: the API asks for {}.
					request: { method: 'POST', url: operation.path, body: {} },
					...pagination,
					// The API answers { ok: true, result: … }: the result is what the next node gets.
					output: { postReceive: [{ type: 'rootProperty', properties: { property: 'result' } }] },
				},
			};
		}),
		// What a new node starts on: an action that only reads, never the first in the alphabet (which can be a delete).
		default: (resource.operations.find((operation) => !operation.changes) || resource.operations[0]).id,
	});
	for (const operation of resource.operations) {
		const show = { resource: [resource.value], operation: [operation.id] };
		for (const input of operation.required) properties.push({ ...input, displayOptions: { show } });
		if (operation.paging) {
			properties.push({ ...returnAllField, displayOptions: { show } });
			properties.push({ ...pagedLimitField, displayOptions: { show: { ...show, returnAll: [false] } } });
		} else if (operation.limit) {
			properties.push({ ...operation.limit, displayOptions: { show } });
		}
		if (operation.optional.length) {
			properties.push({
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: { show },
				options: operation.optional,
			});
		}
	}
}

const actions = sorted.reduce((sum, resource) => sum + resource.operations.length, 0);
const file = `// Written by scripts/generate.mjs from ${SOURCE} (${actions} actions). Do not edit by hand: run the script again.
import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import { paginate } from './paginate';

export const resourceOptions: INodePropertyOptions[] = ${JSON.stringify(sorted.map(({ name, value }) => ({ name, value })), null, '\t')};

export const actionProperties: INodeProperties[] = ${JSON.stringify(properties, null, '\t').replace(/"@@paginate:(\d+)@@"/g, (_, index) => `paginate(${JSON.stringify(pagings[Number(index)])})`)};
`;
await writeFile(new URL('../nodes/LinkedNav/actions.ts', import.meta.url), file);
console.log(`${sorted.length} resources, ${actions} actions (${pagings.length} that page), ${properties.length} top-level properties written.`);

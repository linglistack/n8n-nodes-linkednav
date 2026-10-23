import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { actionProperties, resourceOptions } from './actions';

export class LinkedNav implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'LinkedNav',
		name: 'linkedNav',
		icon: { light: 'file:linkednav.svg', dark: 'file:linkednav.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"]}}',
		description:
			'LinkedIn outreach with LinkedNav: campaigns, leads, inbox, approvals and your own LinkedIn account',
		defaults: {
			name: 'LinkedNav',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'linkedNavApi', required: true }],
		requestDefaults: {
			baseURL: 'https://api.linkednav.com',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: resourceOptions,
				// A new node starts on Account, whose first action only reads and needs no inputs.
				default: 'account',
			},
			...actionProperties,
		],
	};
}

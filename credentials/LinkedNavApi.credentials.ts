import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	Icon,
	INodeProperties,
} from 'n8n-workflow';

export class LinkedNavApi implements ICredentialType {
	name = 'linkedNavApi';

	displayName = 'LinkedNav API';

	icon: Icon = {
		light: 'file:../nodes/LinkedNav/linkednav.svg',
		dark: 'file:../nodes/LinkedNav/linkednav.dark.svg',
	};

	documentationUrl =
		'https://github.com/linglistack/n8n-nodes-linkednav?tab=readme-ov-file#credentials';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
			description:
				'Your LinkedNav API key. Sign in at linkednav.com, open API Keys, and create a key. It is shown once.',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.apiKey}}',
			},
		},
	};

	// Lists the actions the key can run: answers 200 for a good key and 401 for a bad one.
	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.linkednav.com',
			url: '/v1/actions',
		},
	};
}

// Written by scripts/generate.mjs from https://api.linkednav.com/v1/openapi.json (241 actions). Do not edit by hand: run the script again.
import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import { paginate } from './paginate';

export const resourceOptions: INodePropertyOptions[] = [
	{
		name: 'Account',
		value: 'account',
	},
	{
		name: 'AI Setup',
		value: 'aiSetup',
	},
	{
		name: 'Analytics',
		value: 'analytics',
	},
	{
		name: 'Approval',
		value: 'approval',
	},
	{
		name: 'Campaign',
		value: 'campaign',
	},
	{
		name: 'Contact',
		value: 'contact',
	},
	{
		name: 'CRM',
		value: 'crm',
	},
	{
		name: 'Enrichment',
		value: 'enrichment',
	},
	{
		name: 'Inbox',
		value: 'inbox',
	},
	{
		name: 'List',
		value: 'list',
	},
	{
		name: 'Message',
		value: 'message',
	},
	{
		name: 'Network',
		value: 'network',
	},
	{
		name: 'Post',
		value: 'post',
	},
	{
		name: 'Profile',
		value: 'profile',
	},
	{
		name: 'Prompt',
		value: 'prompt',
	},
	{
		name: 'Recruiter',
		value: 'recruiter',
	},
	{
		name: 'Search',
		value: 'search',
	},
	{
		name: 'Signal Agent',
		value: 'signalAgent',
	},
	{
		name: 'Social Listening',
		value: 'socialListening',
	},
	{
		name: 'Task',
		value: 'task',
	},
];

export const actionProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['account'],
			},
		},
		options: [
			{
				name: 'Get Account Health',
				value: 'get_account_health',
				action: 'Get account health',
				description:
					'PROACTIVE ACCOUNT HEALTH CHECK: re-runs the full daily health audit and returns a ranked list of everything wrong across the whole account — billing, LinkedIn senders, AI setup, prompt/messages, lead supply, campaigns, funnel performance, and background-job/infra failures — including deep signals the other tools do not surface (task-failure buckets, per-source accept rate, reap clock, cron health)',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_account_health',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Account Status',
				value: 'get_account_status',
				action: 'Get account status',
				description:
					'Get read-safe LinkedNav account status: profile, plan, limits, credits, integrations, and LinkedIn account counts',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_account_status',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Action Usage',
				value: 'get_action_usage',
				action: 'Get action usage',
				description:
					'How many direct LinkedIn actions (invitations, messages, comments, reactions, posts, searches and the rest) your LinkedIn account has used today, the daily limit for each, and when the count resets',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_action_usage',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Billing Summary',
				value: 'get_billing_summary',
				action: 'Get billing summary',
				description:
					'Get subscription and credit summary, recent credit transactions, and account limits',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_billing_summary',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get InMail Credits',
				value: 'get_inmail_credits',
				action: 'Get inmail credits',
				description:
					"Read the LIVE InMail credit balance of the user's LinkedIn sender accounts — Sales Navigator, Premium, and Recruiter credits, per account",
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_inmail_credits',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Integration Status',
				value: 'get_integration_status',
				action: 'Get integration status',
				description: 'Get read-safe integration status for Slack, HubSpot, Clay, and Instantly',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_integration_status',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get LinkedIn 2FA Status',
				value: 'get_linkedin_2fa_status',
				action: 'Get the 2FA status of a connection',
				description:
					'Report, in plain terms, whether a LinkedIn sender is set up to run 24/7 with no manual babysitting — and if not, exactly what the account owner is stuck on',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_linkedin_2fa_status',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get LinkedIn Accounts',
				value: 'get_linkedin_accounts',
				action: 'List connected accounts',
				description:
					'List read-safe LinkedIn sender accounts for the active setup, each with its Sales Navigator seat status (salesNavigator.status: available / unavailable / unknown — what InMail campaigns need; "unknown" = no InMail sent from it yet) and a health verdict: whether it will run 24/7 (alwaysOnReady), whether it is connected, its login method (email+password vs cookie-only), its 2FA state (off / push / authenticator-code / unknown), a blockers list with how-to-fix steps, and its last login attempt (date, challenge, failure reason)',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_linkedin_accounts',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get LinkedIn Connection',
				value: 'get_linkedin_connection',
				action: 'Get a connection',
				description:
					'Read-safe detail + health for one LinkedIn sender: active state, cookie/login presence, auto-reconnect eligibility, 2FA (TOTP) status, PLUS a plain-English readiness verdict — whether it will run 24/7 (alwaysOnReady), whether 2FA is off / push / authenticator-code / unknown (from the last real login), a blockers list with how-to-fix steps, and its last login attempt (date, challenge, failure reason)',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_linkedin_connection',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get LinkedIn Contracts',
				value: 'get_linkedin_contracts',
				action: 'List sales navigator contracts',
				description:
					'List each LinkedIn account\'s Sales Navigator (and Recruiter) CONTRACTS live from LinkedIn — which one is active, the active contract\'s Sales Navigator InMail credits, and what LinkedNav remembers about the others (their last-seen credits; "out of credits" or "refused switch" cooling-down status)',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_linkedin_contracts',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Start LinkedIn Connect',
				value: 'start_linkedin_connect',
				action: 'Get a link to connect an account',
				description:
					'Create a private, secure web link the user opens to connect their LinkedIn account by entering their cookie OR email+password on a bare form — instead of pasting those secrets into this chat',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/start_linkedin_connect',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Start LinkedIn Update',
				value: 'start_linkedin_update',
				action: 'Get a link to update a connection',
				description:
					'Create a private, secure web link the user opens to UPDATE one existing LinkedIn sender — replace its expired cookie, change its saved email+password login, add/replace/remove its authenticator 2FA setup key, or edit its label/country — on a bare form instead of pasting secrets into this chat',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/start_linkedin_update',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Switch LinkedIn Contract',
				value: 'switch_linkedin_contract',
				action: 'Switch sales navigator contract',
				description: "Switch a LinkedIn account's ACTIVE Sales Navigator contract (e.g",
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/switch_linkedin_contract',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Update LinkedIn Connection',
				value: 'update_linkedin_connection',
				action: 'Update a connection',
				description:
					"Edit an existing LinkedIn sender's metadata: its friendly label and/or its 2-letter country (country drives proxy/locale coherence for logins and sends)",
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/update_linkedin_connection',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Validate LinkedIn Connection',
				value: 'validate_linkedin_connection',
				action: 'Check that a connection works',
				description: 'Check whether a LinkedIn session is still alive',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/validate_linkedin_connection',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
		],
		default: 'get_account_health',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['get_action_usage'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['get_billing_summary'],
			},
		},
		options: [
			{
				displayName: 'Transaction Limit',
				name: 'transactionLimit',
				type: 'number',
				default: 20,
				typeOptions: {
					minValue: 1,
					maxValue: 100,
				},
				routing: {
					send: {
						type: 'body',
						property: 'transactionLimit',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['get_inmail_credits'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'One LinkedIn account ID (get_linkedin_accounts). Omit for all accounts on the active setup.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Include All Setups',
				name: 'includeAllSetups',
				description:
					'Whether to switch this on. With no connectionId: read accounts across every setup, not just the active one.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'includeAllSetups',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['get_linkedin_2fa_status'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'One sender to check (from get_linkedin_accounts). Omit to check every sender in the active setup.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['get_linkedin_accounts'],
			},
		},
		options: [
			{
				displayName: 'Include All Setups',
				name: 'includeAllSetups',
				description:
					'Whether to switch this on. If true, return every LinkedIn account. Default returns accounts scoped to active setup.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'includeAllSetups',
					},
				},
			},
		],
	},
	{
		displayName: 'Connection ID',
		name: 'connectionId',
		description: 'The LinkedIn connection ID (from get_linkedin_accounts)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'connectionId',
			},
		},
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['get_linkedin_connection'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['get_linkedin_contracts'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'One LinkedIn account ID (get_linkedin_accounts). Omit for all accounts on the active setup.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Include All Setups',
				name: 'includeAllSetups',
				description:
					'Whether to switch this on. With no connectionId: accounts across every setup, not just the active one.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'includeAllSetups',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['start_linkedin_connect'],
			},
		},
		options: [
			{
				displayName: 'Country',
				name: 'country',
				description:
					'Optional country to pre-select — a name token (e.g. "UNITED_STATES", "UNITED_KINGDOM") or a 2-letter ISO code (e.g. "us", "gb"); the user can change it on the form.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'country',
					},
				},
			},
			{
				displayName: 'Label',
				name: 'label',
				description: 'Optional friendly name to pre-fill for this sender',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'label',
					},
				},
			},
		],
	},
	{
		displayName: 'Connection ID',
		name: 'connectionId',
		description: 'The ID of the existing LinkedIn sender to update (from get_linkedin_accounts)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'connectionId',
			},
		},
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['start_linkedin_update'],
			},
		},
	},
	{
		displayName: 'Connection ID',
		name: 'connectionId',
		description: 'The LinkedIn account ID (get_linkedin_accounts / get_linkedin_contracts)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'connectionId',
			},
		},
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['switch_linkedin_contract'],
			},
		},
	},
	{
		displayName: 'Contract ID',
		name: 'contractId',
		description:
			'The Sales Navigator contract ID to make active (from get_linkedin_contracts), e.g. "SALES_2062952500"',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'contractId',
			},
		},
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['switch_linkedin_contract'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['switch_linkedin_contract'],
			},
		},
		options: [
			{
				displayName: 'Confirm',
				name: 'confirm',
				description:
					'Whether to switch this on. false (default) = preview only, nothing changes. true = switch now (only after the user said yes).',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'confirm',
					},
				},
			},
		],
	},
	{
		displayName: 'Connection ID',
		name: 'connectionId',
		description: 'The LinkedIn connection ID to edit',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'connectionId',
			},
		},
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['update_linkedin_connection'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['update_linkedin_connection'],
			},
		},
		options: [
			{
				displayName: 'Country',
				name: 'country',
				description:
					'New account country as a name token (e.g. "UNITED_STATES") or a 2-letter ISO code (e.g. "us", "gb"). Pass an empty string to clear it.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'country',
					},
				},
			},
			{
				displayName: 'Label',
				name: 'label',
				description: 'New friendly name for this sender',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'label',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['validate_linkedin_connection'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description: "Validate this saved connection's stored cookie",
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['aiSetup'],
			},
		},
		options: [
			{
				name: 'Audit Setup',
				value: 'audit_setup',
				action: 'Audit setup',
				description:
					'EXPERT SETUP REVIEW: grades the AI setup like an outreach SME would before launch — business-context completeness, ICP precision, goal wiring, message/sequence assets on its campaigns, and the LinkedIn sender',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/audit_setup',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Create AI Setup',
				value: 'create_ai_setup',
				action: 'Create AI setup',
				description: 'Create a new LinkedNav AI setup when the account has an available setup slot',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/create_ai_setup',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Delete AI Setup',
				value: 'delete_ai_setup',
				action: 'Delete AI setup',
				description: 'Delete a draft or completed AI setup',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/delete_ai_setup',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Generate AI Setup ICP',
				value: 'generate_ai_setup_icp',
				action: 'Generate AI setup ICP',
				description: 'Generate ICP suggestions for an AI setup from its business context',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/generate_ai_setup_icp',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get AI Setup',
				value: 'get_ai_setup',
				action: 'Get AI setup',
				description:
					'Get the full LinkedNav AI setup context for one setup, including business context, ICP filters, campaign goal, and signal agent settings',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_ai_setup',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get AI Setups',
				value: 'get_ai_setups',
				action: 'Get AI setups',
				description:
					"List this LinkedNav account's AI setup configurations, including IDs, active/selected status, company, website, and setup status",
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_ai_setups',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Select AI Setup',
				value: 'select_ai_setup',
				action: 'Select AI setup',
				description: 'Switch the active selected LinkedNav AI setup for MCP',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/select_ai_setup',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Update AI Setup',
				value: 'update_ai_setup',
				action: 'Update AI setup',
				description: 'Update an existing LinkedNav AI setup',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/update_ai_setup',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
		],
		default: 'audit_setup',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['aiSetup'],
				operation: ['audit_setup'],
			},
		},
		options: [
			{
				displayName: 'Setup ID',
				name: 'setupId',
				description: 'Setup to audit. Omit to audit the active setup.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'setupId',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['aiSetup'],
				operation: ['create_ai_setup'],
			},
		},
		options: [
			{
				displayName: 'Business Context',
				name: 'businessContext',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'businessContext',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Campaign Settings',
				name: 'campaignSettings',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'campaignSettings',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Company',
				name: 'company',
				description: 'Company or product name',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'company',
					},
				},
			},
			{
				displayName: 'Description',
				name: 'description',
				description: 'Short setup description',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'description',
					},
				},
			},
			{
				displayName: 'Ideal Customer Profile',
				name: 'idealCustomerProfile',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'idealCustomerProfile',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Is Manual Mode',
				name: 'isManualMode',
				description:
					'Whether this setup was created from manually supplied context. Defaults to true.',
				type: 'boolean',
				default: true,
				routing: {
					send: {
						type: 'body',
						property: 'isManualMode',
					},
				},
			},
			{
				displayName: 'Make Active',
				name: 'makeActive',
				description:
					'Whether to switch this on. Set the new setup as the active selected setup. Defaults to true.',
				type: 'boolean',
				default: true,
				routing: {
					send: {
						type: 'body',
						property: 'makeActive',
					},
				},
			},
			{
				displayName: 'Name',
				name: 'name',
				description: 'Setup display name',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'name',
					},
				},
			},
			{
				displayName: 'Signal Agents',
				name: 'signalAgents',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'signalAgents',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Status',
				name: 'status',
				description: 'Create as completed or draft. Defaults to completed.',
				type: 'options',
				options: [
					{
						name: 'Completed',
						value: 'completed',
					},
					{
						name: 'Draft',
						value: 'draft',
					},
				],
				default: 'completed',
				routing: {
					send: {
						type: 'body',
						property: 'status',
					},
				},
			},
			{
				displayName: 'Website URL',
				name: 'websiteUrl',
				description: 'Website URL for this setup',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'websiteUrl',
					},
				},
			},
		],
	},
	{
		displayName: 'Setup ID',
		name: 'setupId',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'setupId',
			},
		},
		displayOptions: {
			show: {
				resource: ['aiSetup'],
				operation: ['delete_ai_setup'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['aiSetup'],
				operation: ['delete_ai_setup'],
			},
		},
		options: [
			{
				displayName: 'Confirm',
				name: 'confirm',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'confirm',
					},
				},
			},
		],
	},
	{
		displayName: 'Setup ID',
		name: 'setupId',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'setupId',
			},
		},
		displayOptions: {
			show: {
				resource: ['aiSetup'],
				operation: ['generate_ai_setup_icp'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['aiSetup'],
				operation: ['generate_ai_setup_icp'],
			},
		},
		options: [
			{
				displayName: 'Apply to Setup',
				name: 'applyToSetup',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'applyToSetup',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['aiSetup'],
				operation: ['get_ai_setup'],
			},
		},
		options: [
			{
				displayName: 'Setup ID',
				name: 'setupId',
				description: 'AI setup ID to read. Omit to read the active setup.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'setupId',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['aiSetup'],
				operation: ['get_ai_setups'],
			},
		},
		options: [
			{
				displayName: 'Include Details',
				name: 'includeDetails',
				description:
					'Whether to switch this on. Include full setup context for each returned setup. Defaults to false.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'includeDetails',
					},
				},
			},
			{
				displayName: 'Status',
				name: 'status',
				description: 'Which setups to list. Defaults to completed.',
				type: 'options',
				options: [
					{
						name: 'All',
						value: 'all',
					},
					{
						name: 'Completed',
						value: 'completed',
					},
					{
						name: 'Draft',
						value: 'draft',
					},
				],
				default: 'completed',
				routing: {
					send: {
						type: 'body',
						property: 'status',
					},
				},
			},
		],
	},
	{
		displayName: 'Setup ID',
		name: 'setupId',
		description: 'Completed AI setup ID to make active for future setup-scoped MCP tools',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'setupId',
			},
		},
		displayOptions: {
			show: {
				resource: ['aiSetup'],
				operation: ['select_ai_setup'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['aiSetup'],
				operation: ['update_ai_setup'],
			},
		},
		options: [
			{
				displayName: 'Business Context',
				name: 'businessContext',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'businessContext',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Campaign Settings',
				name: 'campaignSettings',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'campaignSettings',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Company',
				name: 'company',
				description: 'Company or product name',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'company',
					},
				},
			},
			{
				displayName: 'Description',
				name: 'description',
				description: 'Short setup description',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'description',
					},
				},
			},
			{
				displayName: 'Ideal Customer Profile',
				name: 'idealCustomerProfile',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'idealCustomerProfile',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Name',
				name: 'name',
				description: 'Setup display name',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'name',
					},
				},
			},
			{
				displayName: 'Setup ID',
				name: 'setupId',
				description: 'AI setup ID to update. Omit to update the active setup.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'setupId',
					},
				},
			},
			{
				displayName: 'Signal Agents',
				name: 'signalAgents',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'signalAgents',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Website URL',
				name: 'websiteUrl',
				description: 'Website URL for this setup',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'websiteUrl',
					},
				},
			},
		],
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['analytics'],
			},
		},
		options: [
			{
				name: 'Analyze Performance',
				value: 'analyze_performance',
				action: 'Analyze performance',
				description:
					'EXPERT ANALYSIS of outreach performance — use this (not raw stats) whenever the user asks how things are going, why results look the way they do, what to improve, which segment/industry converts best, or WHICH PROMPT/MESSAGE performs best',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/analyze_performance',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Analyze Pipeline',
				value: 'analyze_pipeline',
				action: 'Analyze pipeline',
				description:
					'DEAL-CLOSING VIEW: ranks the actual PEOPLE to act on — use for "who are my hottest/highest-ICP leads", "best opportunities", "who should I follow up with / reply to", "help me close deals"',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/analyze_pipeline',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Analyze Relationship',
				value: 'analyze_relationship',
				action: 'Analyze relationship',
				description:
					'Give a full 360 on your relationship with ONE person, in a single call — are you connected, is there a pending invite, do you have a conversation (InMail included — "none" is re-checked under their Sales Navigator ID and re-synced from LinkedIn first, which can take ~20s — not repeated within a day when the last re-sync found nothing (get_conversation with refresh:true re-syncs anyway); conversationCheck:"unverified" means that check couldn\'t finish) and who owes a reply, and their recent posts — plus a suggested next action',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/analyze_relationship',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Full Audit',
				value: 'full_audit',
				action: 'Full audit',
				description:
					'FULL ACCOUNT AUDIT — use when the user asks what is wrong with EVERYTHING (or several areas at once): "audit my whole account", "what\'s wrong with my campaign / setup / prompts / leads", "why am I not closing deals — check it all", "make it all better"',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/full_audit',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Dashboard Summary',
				value: 'get_dashboard_summary',
				action: 'Get dashboard summary',
				description:
					'Get a high-level overview of your LinkedNav account: contact counts, campaign stats, recent signal leads, and social listening activity',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_dashboard_summary',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Performance Analytics',
				value: 'get_performance_analytics',
				action: 'Get performance analytics',
				description: 'Rank LinkedNav performance by campaign, prompt, setup, or all',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_performance_analytics',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
		],
		default: 'analyze_performance',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['analytics'],
				operation: ['analyze_performance'],
			},
		},
		options: [
			{
				displayName: 'Campaign ID',
				name: 'campaignId',
				description:
					'Analyze one campaign only. Omit to analyze all campaigns on the active setup.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'campaignId',
					},
				},
			},
			{
				displayName: 'Days',
				name: 'days',
				description:
					'Trend window in days (default 30). Funnel totals are lifetime; only the weekly trend uses this window.',
				type: 'number',
				default: 30,
				typeOptions: {
					minValue: 7,
					maxValue: 90,
				},
				routing: {
					send: {
						type: 'body',
						property: 'days',
					},
				},
			},
		],
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
		routing: {
			send: {
				type: 'body',
				property: 'limit',
				value: '={{ Math.min($value, 25) }}',
			},
		},
		displayOptions: {
			show: {
				resource: ['analytics'],
				operation: ['analyze_pipeline'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['analytics'],
				operation: ['analyze_pipeline'],
			},
		},
		options: [
			{
				displayName: 'Campaign ID',
				name: 'campaignId',
				description: 'Scope to one campaign. Omit for all campaigns on the active setup.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'campaignId',
					},
				},
			},
			{
				displayName: 'Min ICP Score',
				name: 'minIcpScore',
				description:
					'Only include leads at or above this ICP score (warm bench always uses at least 8)',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 10,
				},
				routing: {
					send: {
						type: 'body',
						property: 'minIcpScore',
					},
				},
			},
		],
	},
	{
		displayName: 'Profile URL',
		name: 'profileUrl',
		description: "The person's LinkedIn profile URL (https://linkedin.com/in/…)",
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'profileUrl',
			},
		},
		displayOptions: {
			show: {
				resource: ['analytics'],
				operation: ['analyze_relationship'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['analytics'],
				operation: ['analyze_relationship'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description: "Which sender's relationship to analyze. Omit to use the first live sender.",
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['analytics'],
				operation: ['full_audit'],
			},
		},
		options: [
			{
				displayName: 'Days',
				name: 'days',
				description: 'Trend window for the performance section (default 30)',
				type: 'number',
				default: 30,
				typeOptions: {
					minValue: 7,
					maxValue: 90,
				},
				routing: {
					send: {
						type: 'body',
						property: 'days',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['analytics'],
				operation: ['get_dashboard_summary'],
			},
		},
		options: [
			{
				displayName: 'Days',
				name: 'days',
				description: 'Lookback window in days for recent activity (default 30, max 90)',
				type: 'number',
				default: 30,
				typeOptions: {
					minValue: 1,
					maxValue: 90,
				},
				routing: {
					send: {
						type: 'body',
						property: 'days',
					},
				},
			},
		],
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
		default: 50,
		description: 'Max number of results to return',
		routing: {
			send: {
				type: 'body',
				property: 'limit',
			},
		},
		displayOptions: {
			show: {
				resource: ['analytics'],
				operation: ['get_performance_analytics'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['analytics'],
				operation: ['get_performance_analytics'],
			},
		},
		options: [
			{
				displayName: 'Days',
				name: 'days',
				description: 'Only include campaigns created within this many days',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 365,
				},
				routing: {
					send: {
						type: 'body',
						property: 'days',
					},
				},
			},
			{
				displayName: 'Group By',
				name: 'groupBy',
				description: 'Group analytics by campaign, prompt, setup, or all',
				type: 'options',
				options: [
					{
						name: 'All',
						value: 'all',
					},
					{
						name: 'Campaign',
						value: 'campaign',
					},
					{
						name: 'Prompt',
						value: 'prompt',
					},
					{
						name: 'Setup',
						value: 'setup',
					},
				],
				default: 'all',
				routing: {
					send: {
						type: 'body',
						property: 'groupBy',
					},
				},
			},
			{
				displayName: 'Sort By',
				name: 'sortBy',
				type: 'options',
				options: [
					{
						name: 'Connection Rate',
						value: 'connectionRate',
					},
					{
						name: 'Connections',
						value: 'connections',
					},
					{
						name: 'Icp8 Plus Leads',
						value: 'icp8PlusLeads',
					},
					{
						name: 'Live Leads',
						value: 'liveLeads',
					},
					{
						name: 'Opportunities',
						value: 'opportunities',
					},
					{
						name: 'Opportunity Rate',
						value: 'opportunityRate',
					},
					{
						name: 'Replies',
						value: 'replies',
					},
				],
				default: 'opportunities',
				routing: {
					send: {
						type: 'body',
						property: 'sortBy',
					},
				},
			},
			{
				displayName: 'Status',
				name: 'status',
				description: 'Optional campaign status filter',
				type: 'options',
				options: [
					{
						name: 'Active',
						value: 'active',
					},
					{
						name: 'All',
						value: 'all',
					},
					{
						name: 'Completed',
						value: 'completed',
					},
					{
						name: 'Draft',
						value: 'draft',
					},
					{
						name: 'Paused',
						value: 'paused',
					},
				],
				default: 'all',
				routing: {
					send: {
						type: 'body',
						property: 'status',
					},
				},
			},
		],
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['approval'],
			},
		},
		options: [
			{
				name: 'Approve Pending Comment',
				value: 'approve_pending_comment',
				action: 'Approve pending comment',
				description: 'Approve an AI-generated LinkedIn comment and queue it to be posted',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/approve_pending_comment',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Approve Pending Outbound',
				value: 'approve_pending_outbound',
				action: 'Approve pending outbound',
				description:
					'Approve ONE held campaign message so it is sent on LinkedIn — exactly the text shown, or editedMessage if you pass one',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/approve_pending_outbound',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Approve Pending Reply',
				value: 'approve_pending_reply',
				action: 'Approve pending reply',
				description: 'Approve an AI-generated LinkedIn reply and queue it to be sent',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/approve_pending_reply',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Deny Pending Comment',
				value: 'deny_pending_comment',
				action: 'Deny pending comment',
				description: 'Deny a pending or failed AI comment so it will not be posted',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/deny_pending_comment',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Deny Pending Outbound',
				value: 'deny_pending_outbound',
				action: 'Deny pending outbound',
				description: 'Decide NOT to send ONE held campaign message',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/deny_pending_outbound',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Deny Pending Reply',
				value: 'deny_pending_reply',
				action: 'Deny pending reply',
				description: 'Deny a pending or failed AI reply so it will not be sent',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/deny_pending_reply',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Pending Comments',
				value: 'get_pending_comments',
				action: 'Get pending comments',
				description:
					'List AI-generated LinkedIn comments awaiting approval, including failed sends that can be retried',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_pending_comments',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Pending Comments Count',
				value: 'get_pending_comments_count',
				action: 'Get pending comments count',
				description: 'Count pending and failed AI comment approvals',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_pending_comments_count',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Pending Outbound',
				value: 'get_pending_outbound',
				action: 'Get pending outbound',
				description:
					'List the campaign messages held for approval before they are sent: connection invitations, welcome messages and follow-ups, each with who it is for and the exact text',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_pending_outbound',
						body: {},
					},
					send: {
						paginate: true,
					},
					operations: {
						pagination: paginate({
							by: 'cursor',
							list: 'items',
							pageSize: 100,
							next: 'nextCursor',
							input: 'before',
						}),
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Pending Outbound Count',
				value: 'get_pending_outbound_count',
				action: 'Get pending outbound count',
				description:
					'How many campaign messages are waiting for approval, in total and by kind (connect / welcome / followup)',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_pending_outbound_count',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Pending Replies',
				value: 'get_pending_replies',
				action: 'Get pending replies',
				description:
					'List AI-generated LinkedIn replies awaiting approval, including failed sends that can be retried',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_pending_replies',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Pending Replies Count',
				value: 'get_pending_replies_count',
				action: 'Get pending replies count',
				description: 'Count pending and failed AI reply approvals',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_pending_replies_count',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Regenerate Pending Reply',
				value: 'regenerate_pending_reply',
				action: 'Regenerate pending reply',
				description:
					'Generate a fresh alternative AI reply draft for a pending or failed reply approval',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/regenerate_pending_reply',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Retry Pending Comment',
				value: 'retry_pending_comment',
				action: 'Retry pending comment',
				description: 'Retry a failed AI comment send',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/retry_pending_comment',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Retry Pending Reply',
				value: 'retry_pending_reply',
				action: 'Retry pending reply',
				description: 'Retry a failed AI reply send',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/retry_pending_reply',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Update Pending Comment',
				value: 'update_pending_comment',
				action: 'Update pending comment',
				description: 'Edit a pending or failed AI comment draft before approving it',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/update_pending_comment',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Update Pending Outbound',
				value: 'update_pending_outbound',
				action: 'Update pending outbound',
				description: 'Replace the text of ONE held campaign message without sending it',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/update_pending_outbound',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Update Pending Reply',
				value: 'update_pending_reply',
				action: 'Update pending reply',
				description: 'Edit a pending or failed AI reply draft before approving it',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/update_pending_reply',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
		],
		default: 'get_pending_comments',
	},
	{
		displayName: 'Pending Comment ID',
		name: 'pendingCommentId',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'pendingCommentId',
			},
		},
		displayOptions: {
			show: {
				resource: ['approval'],
				operation: ['approve_pending_comment'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['approval'],
				operation: ['approve_pending_comment'],
			},
		},
		options: [
			{
				displayName: 'Edited Comment',
				name: 'editedComment',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'editedComment',
					},
				},
			},
		],
	},
	{
		displayName: 'Pending Outbound ID',
		name: 'pendingOutboundId',
		description: 'The held message ID (from get_pending_outbound)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'pendingOutboundId',
			},
		},
		displayOptions: {
			show: {
				resource: ['approval'],
				operation: ['approve_pending_outbound'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['approval'],
				operation: ['approve_pending_outbound'],
			},
		},
		options: [
			{
				displayName: 'Edited Message',
				name: 'editedMessage',
				description: 'Send this text instead of the held one',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'editedMessage',
					},
				},
			},
			{
				displayName: 'Send When Limit Clears',
				name: 'sendWhenLimitClears',
				description:
					"Whether to switch this on. For an invitation stopped by LinkedIn's invite limit: send it automatically when the limit resets.",
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'sendWhenLimitClears',
					},
				},
			},
		],
	},
	{
		displayName: 'Pending Reply ID',
		name: 'pendingReplyId',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'pendingReplyId',
			},
		},
		displayOptions: {
			show: {
				resource: ['approval'],
				operation: ['approve_pending_reply'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['approval'],
				operation: ['approve_pending_reply'],
			},
		},
		options: [
			{
				displayName: 'Edited Message',
				name: 'editedMessage',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'editedMessage',
					},
				},
			},
			{
				displayName: 'Expected Version',
				name: 'expectedVersion',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'expectedVersion',
					},
				},
			},
		],
	},
	{
		displayName: 'Pending Comment ID',
		name: 'pendingCommentId',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'pendingCommentId',
			},
		},
		displayOptions: {
			show: {
				resource: ['approval'],
				operation: ['deny_pending_comment'],
			},
		},
	},
	{
		displayName: 'Pending Outbound ID',
		name: 'pendingOutboundId',
		description: 'The held message ID (from get_pending_outbound)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'pendingOutboundId',
			},
		},
		displayOptions: {
			show: {
				resource: ['approval'],
				operation: ['deny_pending_outbound'],
			},
		},
	},
	{
		displayName: 'Pending Reply ID',
		name: 'pendingReplyId',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'pendingReplyId',
			},
		},
		displayOptions: {
			show: {
				resource: ['approval'],
				operation: ['deny_pending_reply'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['approval'],
				operation: ['deny_pending_reply'],
			},
		},
		options: [
			{
				displayName: 'Expected Version',
				name: 'expectedVersion',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'expectedVersion',
					},
				},
			},
		],
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 500,
		},
		default: 50,
		description: 'Max number of results to return',
		routing: {
			send: {
				type: 'body',
				property: 'limit',
			},
		},
		displayOptions: {
			show: {
				resource: ['approval'],
				operation: ['get_pending_comments'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['approval'],
				operation: ['get_pending_comments'],
			},
		},
		options: [
			{
				displayName: 'Campaign ID',
				name: 'campaignId',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'campaignId',
					},
				},
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				options: [
					{
						name: 'Approved',
						value: 'approved',
					},
					{
						name: 'Denied',
						value: 'denied',
					},
					{
						name: 'Pending',
						value: 'pending',
					},
					{
						name: 'Send Failed',
						value: 'send_failed',
					},
					{
						name: 'Sent',
						value: 'sent',
					},
				],
				default: 'approved',
				routing: {
					send: {
						type: 'body',
						property: 'status',
					},
				},
			},
		],
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['approval'],
				operation: ['get_pending_outbound'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['approval'],
				operation: ['get_pending_outbound'],
				returnAll: [false],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['approval'],
				operation: ['get_pending_outbound'],
			},
		},
		options: [
			{
				displayName: 'Campaign ID',
				name: 'campaignId',
				description: 'Only this campaign',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'campaignId',
					},
				},
			},
			{
				displayName: 'Type',
				name: 'type',
				description: 'Only this kind: connect (invitations), welcome, or followup',
				type: 'options',
				options: [
					{
						name: 'Connect',
						value: 'connect',
					},
					{
						name: 'Followup',
						value: 'followup',
					},
					{
						name: 'Welcome',
						value: 'welcome',
					},
				],
				default: 'connect',
				routing: {
					send: {
						type: 'body',
						property: 'type',
					},
				},
			},
		],
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 200,
		},
		default: 50,
		description: 'Max number of results to return',
		routing: {
			send: {
				type: 'body',
				property: 'limit',
			},
		},
		displayOptions: {
			show: {
				resource: ['approval'],
				operation: ['get_pending_replies'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['approval'],
				operation: ['get_pending_replies'],
			},
		},
		options: [
			{
				displayName: 'Campaign ID',
				name: 'campaignId',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'campaignId',
					},
				},
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				options: [
					{
						name: 'Approved',
						value: 'approved',
					},
					{
						name: 'Denied',
						value: 'denied',
					},
					{
						name: 'Expired',
						value: 'expired',
					},
					{
						name: 'Pending',
						value: 'pending',
					},
					{
						name: 'Send Failed',
						value: 'send_failed',
					},
					{
						name: 'Sent',
						value: 'sent',
					},
				],
				default: 'approved',
				routing: {
					send: {
						type: 'body',
						property: 'status',
					},
				},
			},
		],
	},
	{
		displayName: 'Pending Reply ID',
		name: 'pendingReplyId',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'pendingReplyId',
			},
		},
		displayOptions: {
			show: {
				resource: ['approval'],
				operation: ['regenerate_pending_reply'],
			},
		},
	},
	{
		displayName: 'Pending Comment ID',
		name: 'pendingCommentId',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'pendingCommentId',
			},
		},
		displayOptions: {
			show: {
				resource: ['approval'],
				operation: ['retry_pending_comment'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['approval'],
				operation: ['retry_pending_comment'],
			},
		},
		options: [
			{
				displayName: 'Edited Comment',
				name: 'editedComment',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'editedComment',
					},
				},
			},
		],
	},
	{
		displayName: 'Pending Reply ID',
		name: 'pendingReplyId',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'pendingReplyId',
			},
		},
		displayOptions: {
			show: {
				resource: ['approval'],
				operation: ['retry_pending_reply'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['approval'],
				operation: ['retry_pending_reply'],
			},
		},
		options: [
			{
				displayName: 'Edited Message',
				name: 'editedMessage',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'editedMessage',
					},
				},
			},
			{
				displayName: 'Expected Version',
				name: 'expectedVersion',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'expectedVersion',
					},
				},
			},
		],
	},
	{
		displayName: 'Pending Comment ID',
		name: 'pendingCommentId',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'pendingCommentId',
			},
		},
		displayOptions: {
			show: {
				resource: ['approval'],
				operation: ['update_pending_comment'],
			},
		},
	},
	{
		displayName: 'Edited Comment',
		name: 'editedComment',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'editedComment',
			},
		},
		displayOptions: {
			show: {
				resource: ['approval'],
				operation: ['update_pending_comment'],
			},
		},
	},
	{
		displayName: 'Pending Outbound ID',
		name: 'pendingOutboundId',
		description: 'The held message ID (from get_pending_outbound)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'pendingOutboundId',
			},
		},
		displayOptions: {
			show: {
				resource: ['approval'],
				operation: ['update_pending_outbound'],
			},
		},
	},
	{
		displayName: 'Edited Message',
		name: 'editedMessage',
		description: 'The new text',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'editedMessage',
			},
		},
		displayOptions: {
			show: {
				resource: ['approval'],
				operation: ['update_pending_outbound'],
			},
		},
	},
	{
		displayName: 'Pending Reply ID',
		name: 'pendingReplyId',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'pendingReplyId',
			},
		},
		displayOptions: {
			show: {
				resource: ['approval'],
				operation: ['update_pending_reply'],
			},
		},
	},
	{
		displayName: 'Edited Message',
		name: 'editedMessage',
		description: 'Edited reply message',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'editedMessage',
			},
		},
		displayOptions: {
			show: {
				resource: ['approval'],
				operation: ['update_pending_reply'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['approval'],
				operation: ['update_pending_reply'],
			},
		},
		options: [
			{
				displayName: 'Expected Version',
				name: 'expectedVersion',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'expectedVersion',
					},
				},
			},
		],
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['campaign'],
			},
		},
		options: [
			{
				name: 'Activate Campaign',
				value: 'activate_campaign',
				action: 'Activate campaign',
				description: 'Start or resume a LinkedNav campaign',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/activate_campaign',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Add Lead to Campaign',
				value: 'add_lead_to_campaign',
				action: 'Add lead to campaign',
				description: 'Add a single lead to a campaign',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/add_lead_to_campaign',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Add Leads Bulk to Campaign',
				value: 'add_leads_bulk_to_campaign',
				action: 'Add leads bulk to campaign',
				description: 'Add up to 50 existing contacts (by their IDs) to a campaign in one call',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/add_leads_bulk_to_campaign',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Add Message Targets',
				value: 'add_message_targets',
				action: 'Add message targets',
				description:
					'Add recipients to a MESSAGE campaign — the people it will DM (the message-campaign analog of add_lead_to_campaign for outreach)',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/add_message_targets',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Add Post Targets',
				value: 'add_post_targets',
				action: 'Add post targets',
				description:
					'Add LinkedIn post URLs to a COMMENT campaign — the posts it will auto-comment on (the comment-campaign analog of add_lead_to_campaign for outreach)',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/add_post_targets',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Check InMail Open Profiles',
				value: 'check_inmail_open_profiles',
				action: 'Check which people have an open profile',
				description:
					'Check which InMail recipients are LinkedIn OPEN PROFILES — people who accept an InMail for FREE (no Sales Navigator credit)',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/check_inmail_open_profiles',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Create Campaign',
				value: 'create_campaign',
				action: 'Create campaign',
				description: 'Create a new campaign in LinkedNav',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/create_campaign',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Create Comment Campaign',
				value: 'create_comment_campaign',
				action: 'Create comment campaign',
				description:
					'Create a new COMMENT campaign in LinkedNav — either "posts" mode (you supply LinkedIn post URLs to comment on) or "monitor" mode (you supply profile/company URLs and it auto-discovers each new post daily and comments on it)',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/create_comment_campaign',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Delete Campaign',
				value: 'delete_campaign',
				action: 'Delete campaign',
				description: 'Delete a campaign and remove its campaign membership from contacts',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/delete_campaign',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Diagnose Campaign',
				value: 'diagnose_campaign',
				action: 'Diagnose campaign',
				description:
					"CAMPAIGN DOCTOR — use whenever the user asks why a campaign won't start, can't activate, is paused, stopped sending, \"isn't working\", or what's wrong with its settings",
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/diagnose_campaign',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Duplicate Campaign',
				value: 'duplicate_campaign',
				action: 'Duplicate campaign',
				description: 'Duplicate a campaign configuration in the active setup',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/duplicate_campaign',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Campaign',
				value: 'get_campaign',
				action: 'Get campaign',
				description:
					'Get full details of a specific campaign including statistics and prospect count',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_campaign',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Campaigns',
				value: 'get_campaigns',
				action: 'Get campaigns',
				description: 'List outreach campaigns in LinkedNav',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_campaigns',
						body: {},
					},
					send: {
						paginate: true,
					},
					operations: {
						pagination: paginate({ by: 'page', list: 'campaigns', pageSize: 50, total: 'total' }),
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Campaigns Summary',
				value: 'get_campaigns_summary',
				action: 'Get campaigns summary',
				description:
					'Get a high-level summary across all campaigns: totals by status, aggregate prospect stats',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_campaigns_summary',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Message Targets',
				value: 'get_message_targets',
				action: 'Get message targets',
				description:
					"List the RECIPIENTS of a MESSAGE campaign (regular DM or Sales Navigator InMail) — the people it messages, with each one's ID (for retry_message_target / remove_message_targets), status (pending / sent / failed), sentAt, failReason, which LinkedIn account sent it, follow-up progress + whether they replied (repliedAt — also caught from the inbox when they write back), likeStatus when like-before-message ran, email { status, reason } when email after message is on, and per-recipient message overrides",
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_message_targets',
						body: {},
					},
					send: {
						paginate: true,
					},
					operations: {
						pagination: paginate({
							by: 'offset',
							list: 'recipients',
							pageSize: 200,
							more: 'hasMore',
							total: 'total',
						}),
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Link List to Campaign',
				value: 'link_list_to_campaign',
				action: 'Link list to campaign',
				description: 'Add all contacts from a specific list to a campaign at once',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/link_list_to_campaign',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Pause Campaign',
				value: 'pause_campaign',
				action: 'Pause campaign',
				description: 'Pause a running LinkedNav campaign',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/pause_campaign',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Prioritize Campaign Leads',
				value: 'prioritize_campaign_leads',
				action: 'Prioritize campaign leads',
				description:
					'Flag (or un-flag) up to 500 campaign leads so their LinkedIn connection invites are sent FIRST',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/prioritize_campaign_leads',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Remove Leads From Campaign',
				value: 'remove_leads_from_campaign',
				action: 'Remove leads from campaign',
				description: 'Remove contacts from a campaign without deleting the contacts',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/remove_leads_from_campaign',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Remove Message Targets',
				value: 'remove_message_targets',
				action: 'Remove message targets',
				description:
					'Remove recipients from a MESSAGE campaign — by their target IDs (from get_message_targets) and/or their profile URLs',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/remove_message_targets',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Remove Post Targets',
				value: 'remove_post_targets',
				action: 'Remove post targets',
				description: 'Remove post URLs from a COMMENT campaign by their post-target IDs',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/remove_post_targets',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Resume Lead Sequence',
				value: 'resume_lead_sequence',
				action: 'Resume lead sequence',
				description:
					'Undo stop_lead_sequence for up to 500 leads of an outreach campaign: their welcome message and follow-ups pick up again on the next scheduled run (a welcome or follow-up that is already overdue goes out then)',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/resume_lead_sequence',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Retry Message Target',
				value: 'retry_message_target',
				action: 'Retry message target',
				description:
					'Retry FAILED recipients in a message campaign — re-queues them for the next dispatch',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/retry_message_target',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Retry Post Target',
				value: 'retry_post_target',
				action: 'Retry post target',
				description:
					'Reset a failed / commented / denied post target back to "pending" so the next daily dispatch re-queues it',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/retry_post_target',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Set Campaign Approval Mode',
				value: 'set_campaign_approval_mode',
				action: 'Set campaign approval mode',
				description:
					'Choose, per step of a campaign, whether its messages are sent on their own ("autopilot") or held for approval first ("approval"): connection invitations, welcome messages, follow-ups',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/set_campaign_approval_mode',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Set Post Target Watcher',
				value: 'set_post_target_watcher',
				action: 'Set post target watcher',
				description: 'Toggle the "watcher" flag on a post target in a Reply-to-Commenters campaign',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/set_post_target_watcher',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Stop Lead Sequence',
				value: 'stop_lead_sequence',
				action: 'Stop lead sequence',
				description:
					'Stop the welcome message and follow-ups for up to 500 leads of an outreach campaign whose sequence already started (invite sent), so they get no more automated LinkedIn messages from THIS campaign — e.g',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/stop_lead_sequence',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Update Campaign',
				value: 'update_campaign',
				action: 'Update campaign',
				description: 'Update an existing LinkedNav campaign',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/update_campaign',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Update Comment Settings',
				value: 'update_comment_settings',
				action: 'Update comment settings',
				description:
					"Edit a comment campaign's comment definition — template, fixed/ai mode, approval mode, reply target, and the AI analyze flags",
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/update_comment_settings',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
		],
		default: 'diagnose_campaign',
	},
	{
		displayName: 'Campaign ID',
		name: 'campaignId',
		description: 'ID of the campaign to activate',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'campaignId',
			},
		},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['activate_campaign'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['activate_campaign'],
			},
		},
		options: [
			{
				displayName: 'LinkedIn Connection ID',
				name: 'linkedinConnectionId',
				description:
					'LinkedIn account ID to associate with this campaign. Required if the user has multiple LinkedIn accounts and none is set on the campaign yet.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'linkedinConnectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Campaign ID',
		name: 'campaignId',
		description: 'Campaign ID to add the lead to',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'campaignId',
			},
		},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['add_lead_to_campaign'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['add_lead_to_campaign'],
			},
		},
		options: [
			{
				displayName: 'Company',
				name: 'company',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'company',
					},
				},
			},
			{
				displayName: 'Connect Message',
				name: 'connectMessage',
				description:
					'Per-lead connection-request note overriding the campaign connect template for this lead only (only when creating via profileUrl; blank = campaign message)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectMessage',
					},
				},
			},
			{
				displayName: 'Contact ID',
				name: 'contactId',
				description: 'Existing contact ID (preferred if you already have it)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'contactId',
					},
				},
			},
			{
				displayName: 'Email',
				name: 'email',
				description: 'Email if known',
				type: 'string',
				default: '',
				placeholder: 'name@email.com',
				routing: {
					send: {
						type: 'body',
						property: 'email',
					},
				},
			},
			{
				displayName: 'First Name',
				name: 'firstName',
				description: 'First name — required when creating a new contact via profileUrl',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'firstName',
					},
				},
			},
			{
				displayName: 'Follow Up1',
				name: 'followUp1',
				description:
					'Per-lead 1st follow-up overriding the campaign follow-up-1 template for this lead only (only when creating via profileUrl)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'followUp1',
					},
				},
			},
			{
				displayName: 'Follow Up2',
				name: 'followUp2',
				description:
					'Per-lead 2nd follow-up overriding the campaign follow-up-2 template for this lead only (only when creating via profileUrl)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'followUp2',
					},
				},
			},
			{
				displayName: 'Follow Up3',
				name: 'followUp3',
				description:
					'Per-lead 3rd follow-up overriding the campaign follow-up-3 template for this lead only (only when creating via profileUrl)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'followUp3',
					},
				},
			},
			{
				displayName: 'Job Title',
				name: 'jobTitle',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'jobTitle',
					},
				},
			},
			{
				displayName: 'Last Name',
				name: 'lastName',
				description: 'Last name — required when creating a new contact via profileUrl',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'lastName',
					},
				},
			},
			{
				displayName: 'Location',
				name: 'location',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'location',
					},
				},
			},
			{
				displayName: 'Profile URL',
				name: 'profileUrl',
				description: 'LinkedIn profile URL — required when contactId is not provided',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'profileUrl',
					},
				},
			},
			{
				displayName: 'Welcome Message',
				name: 'welcomeMessage',
				description:
					'Per-lead welcome message overriding the campaign welcome template for this lead only (only when creating via profileUrl)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'welcomeMessage',
					},
				},
			},
		],
	},
	{
		displayName: 'Campaign ID',
		name: 'campaignId',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'campaignId',
			},
		},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['add_leads_bulk_to_campaign'],
			},
		},
	},
	{
		displayName: 'Contact IDs',
		name: 'contactIds',
		description: 'Array of contact IDs to add (1–50)',
		type: 'string',
		typeOptions: {
			multipleValues: true,
		},
		default: [],
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'contactIds',
			},
		},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['add_leads_bulk_to_campaign'],
			},
		},
	},
	{
		displayName: 'Campaign ID',
		name: 'campaignId',
		description: 'Message campaign ID to add recipients to',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'campaignId',
			},
		},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['add_message_targets'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['add_message_targets'],
			},
		},
		options: [
			{
				displayName: 'Contact IDs',
				name: 'contactIds',
				description:
					"CRM contact IDs (get_contacts) to add as recipients — must belong to this campaign's setup. InMail uses the LinkedIn member ID stored on each contact (or its profile URL when every sending account is a managed session); regular DM uses its profile URL.",
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'contactIds',
					},
				},
			},
			{
				displayName: 'List ID',
				name: 'listId',
				description:
					"A contact list ID (get_lists): every contact in it is added as a recipient (same resolution as contactIds; must be the campaign's setup)",
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'listId',
					},
				},
			},
			{
				displayName: 'URLs',
				name: 'urls',
				description:
					'Recipients to message (up to 1000). Each entry is a bare profile URL string, or an object {profileUrl?, providerId?, customMessage?, customSubject?, customFollowUp2?, customFollowUp3?}. Must be profile URLs, not post URLs.',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'urls',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'Campaign ID',
		name: 'campaignId',
		description: 'Comment campaign ID to add post URLs to',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'campaignId',
			},
		},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['add_post_targets'],
			},
		},
	},
	{
		displayName: 'URLs',
		name: 'urls',
		description:
			'LinkedIn post URLs to add (1–200). Must be post URLs (/posts/…, /feed/update/urn:li:…, /pulse/…, /company/…/posts/), not profile URLs.',
		type: 'string',
		typeOptions: {
			multipleValues: true,
		},
		default: [],
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'urls',
			},
		},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['add_post_targets'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['add_post_targets'],
			},
		},
		options: [
			{
				displayName: 'Watcher',
				name: 'watcher',
				description:
					'Whether to switch this on. Commenter mode: keep re-checking these posts daily for new commenters to engage, instead of completing after one comment.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'watcher',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['check_inmail_open_profiles'],
			},
		},
		options: [
			{
				displayName: 'Campaign ID',
				name: 'campaignId',
				description: 'InMail message campaign ID. Checks (and saves) its recipients.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'campaignId',
					},
				},
			},
			{
				displayName: 'Max Checks',
				name: 'maxChecks',
				description: 'Check fewer people this call (default 20) — a smaller batch returns faster',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 20,
				},
				routing: {
					send: {
						type: 'body',
						property: 'maxChecks',
					},
				},
			},
			{
				displayName: 'Profile URLs',
				name: 'profileUrls',
				description:
					'With campaignId: re-check exactly these recipients (any status). Without campaignId: the Sales Navigator lead URLs to pre-check (first 20 per call).',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'profileUrls',
					},
				},
			},
			{
				displayName: 'Sender Connection IDs',
				name: 'senderConnectionIds',
				description:
					'Pre-check only (no campaignId): the LinkedIn account(s) you plan to send from — the check prefers reading from one of them',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'senderConnectionIds',
					},
				},
			},
		],
	},
	{
		displayName: 'Name',
		name: 'name',
		description: 'Campaign name',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['create_campaign'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['create_campaign'],
			},
		},
		options: [
			{
				displayName: 'Attachments',
				name: 'attachments',
				description:
					'Message campaigns only: files sent with Message 1 (image/PDF/voice/video). Only live-session LinkedIn accounts can attach files. URLs must come from LinkedNav uploads — any other host is dropped.',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'attachments',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Auto Switch Sales Nav Contract',
				name: 'autoSwitchSalesNavContract',
				description:
					'Whether to switch this on. InMail message campaigns only: when a sender runs out of Sales Navigator InMail credits, automatically switch that LinkedIn account to another of its Sales Navigator contracts that still has credits and re-send (live-session accounts only; default false). Once a live-session sender has no credits left, Open Profiles still get a free InMail and people not checked yet get one free try; anyone else goes to another sender with credits or is marked failed "out of InMail credits" (retry them once credits renew). Check balances with get_inmail_credits.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'autoSwitchSalesNavContract',
					},
				},
			},
			{
				displayName: 'Campaign Type',
				name: 'campaignType',
				description:
					'"outreach" (default: connection requests + follow-ups) or "message" (fixed templated message)',
				type: 'options',
				options: [
					{
						name: 'Message',
						value: 'message',
					},
					{
						name: 'Outreach',
						value: 'outreach',
					},
				],
				default: 'outreach',
				routing: {
					send: {
						type: 'body',
						property: 'campaignType',
					},
				},
			},
			{
				displayName: 'Follow Ups',
				name: 'followUps',
				description:
					'Message campaigns (REGULAR DM) only, Pro only: the reply-gated follow-up sequence (Message 2 + Message 3). Ignored for InMail; enabling it without Pro errors.',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'followUps',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Goal',
				name: 'goal',
				description: 'Outreach only: campaign goal description (e.g. "Book a demo")',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'goal',
					},
				},
			},
			{
				displayName: 'Goal Link',
				name: 'goalLink',
				description: 'Outreach only: URL for the campaign goal (e.g. calendar link)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'goalLink',
					},
				},
			},
			{
				displayName: 'In Mail Subject',
				name: 'inMailSubject',
				description:
					'InMail-mode message campaigns only: the InMail subject line (supports {{firstName}} etc.). Required before a template-mode inmail campaign can send; AI mode generates the subject.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'inMailSubject',
					},
				},
			},
			{
				displayName: 'LinkedIn Connection ID',
				name: 'linkedinConnectionId',
				description:
					'Message campaigns only: a single LinkedIn account to send from (shorthand for linkedinConnectionIds with one ID)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'linkedinConnectionId',
					},
				},
			},
			{
				displayName: 'LinkedIn Connection IDs',
				name: 'linkedinConnectionIds',
				description:
					'Message campaigns only: the LinkedIn account(s) to send from (IDs from get_linkedin_accounts). A REGULAR DM campaign uses exactly one account (only the first is kept — a connection belongs to one account); an INMAIL campaign can round-robin several accounts, and each should have a Sales Navigator seat (get_linkedin_accounts → salesNavigator.status). Can also be set later with update_campaign or activate_campaign.',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'linkedinConnectionIds',
					},
				},
			},
			{
				displayName: 'Message AI Context',
				name: 'messageAiContext',
				description:
					'Message campaigns, AI mode only: optional guidance for Message 1 — highest priority, followed over the prompt where they conflict',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'messageAiContext',
					},
				},
			},
			{
				displayName: 'Message Mode',
				name: 'messageMode',
				description:
					'Message campaigns: "template" (default) sends messageTemplate verbatim; "ai" generates Message 1 (and, for InMail, the subject) at send time from the prompt\'s First follow-up (Follow-up tab; campaign Message N always follows the prompt\'s Follow-up N) + its Context + the AI setup + the recipient\'s live profile / prior conversation (Pro only). AI mode needs a promptId and makes messageTemplate/inMailSubject optional.',
				type: 'options',
				options: [
					{
						name: 'AI',
						value: 'ai',
					},
					{
						name: 'Template',
						value: 'template',
					},
				],
				default: 'ai',
				routing: {
					send: {
						type: 'body',
						property: 'messageMode',
					},
				},
			},
			{
				displayName: 'Message Template',
				name: 'messageTemplate',
				description:
					'Message campaigns, template mode: the fixed message body sent to each recipient (supports {{firstName}} etc.). Required before a template-mode campaign can send; optional/ignored when messageMode is "ai".',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'messageTemplate',
					},
				},
			},
			{
				displayName: 'Outreach Language',
				name: 'outreachLanguage',
				description: 'Outreach only: language for AI-generated messages',
				type: 'string',
				default: 'English',
				routing: {
					send: {
						type: 'body',
						property: 'outreachLanguage',
					},
				},
			},
			{
				displayName: 'Prompt ID',
				name: 'promptId',
				description:
					'Message campaigns: REQUIRED — the prompt AI-generated messages are written from (list them with get_prompts). Ignored for outreach campaigns (attach their prompt with update_campaign).',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'promptId',
					},
				},
			},
			{
				displayName: 'Send Mode',
				name: 'sendMode',
				description:
					'Message campaigns only, IMMUTABLE after creation: "regular" (DM to 1st-degree connections) or "inmail" (Sales Navigator InMail to any profile — Pro only)',
				type: 'options',
				options: [
					{
						name: 'InMail',
						value: 'inmail',
					},
					{
						name: 'Regular',
						value: 'regular',
					},
				],
				default: 'regular',
				routing: {
					send: {
						type: 'body',
						property: 'sendMode',
					},
				},
			},
			{
				displayName: 'Sends Per Day',
				name: 'sendsPerDay',
				description:
					'Max sends per day. InMail message campaigns cap at 500/day; outreach and regular message campaigns cap at 100/day (values above are clamped). Message default 10 in the wizard, but this tool defaults to 20. Higher volumes raise LinkedIn account risk.',
				type: 'number',
				default: 20,
				typeOptions: {
					minValue: 1,
					maxValue: 500,
				},
				routing: {
					send: {
						type: 'body',
						property: 'sendsPerDay',
					},
				},
			},
		],
	},
	{
		displayName: 'Name',
		name: 'name',
		description: 'Campaign name',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['create_comment_campaign'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['create_comment_campaign'],
			},
		},
		options: [
			{
				displayName: 'Additional Context',
				name: 'additionalContext',
				description:
					"AI mode: the owner's instructions for the comment writer — HIGHEST priority, overrides the default comment rules (e.g. mention the product or share the campaign goal link — the writer knows both from the setup and settings — change length/tone, use hashtags)",
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'additionalContext',
					},
				},
			},
			{
				displayName: 'Analyze Comments',
				name: 'analyzeComments',
				description:
					"Whether to switch this on. Reply-to-commenter mode: feed the commenter's comment to the model.",
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'analyzeComments',
					},
				},
			},
			{
				displayName: 'Analyze Post Content',
				name: 'analyzePostContent',
				description:
					'Whether to switch this on. AI mode: feed the post text to the model so the comment is on-topic.',
				type: 'boolean',
				default: true,
				routing: {
					send: {
						type: 'body',
						property: 'analyzePostContent',
					},
				},
			},
			{
				displayName: 'Approval Mode',
				name: 'approvalMode',
				description:
					"'approval' (default) = hold each AI draft for your approval first; 'auto' = post immediately",
				type: 'options',
				options: [
					{
						name: 'Approval',
						value: 'approval',
					},
					{
						name: 'Auto',
						value: 'auto',
					},
				],
				default: 'approval',
				routing: {
					send: {
						type: 'body',
						property: 'approvalMode',
					},
				},
			},
			{
				displayName: 'Like Before Comment',
				name: 'likeBeforeComment',
				description:
					'Whether to switch this on. Like each post right before commenting on it (managed accounts only).',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'likeBeforeComment',
					},
				},
			},
			{
				displayName: 'LinkedIn Connection ID',
				name: 'linkedinConnectionId',
				description: 'LinkedIn account that will post the comments',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'linkedinConnectionId',
					},
				},
			},
			{
				displayName: 'Mode',
				name: 'mode',
				description: "'fixed' = post the same template text; 'ai' = generate a comment per post",
				type: 'options',
				options: [
					{
						name: 'AI',
						value: 'ai',
					},
					{
						name: 'Fixed',
						value: 'fixed',
					},
				],
				default: 'fixed',
				routing: {
					send: {
						type: 'body',
						property: 'mode',
					},
				},
			},
			{
				displayName: 'Monitor URLs',
				name: 'monitorUrls',
				description:
					'Monitor mode only: initial profile (/in/…) or company (/company/…) URLs to watch',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'monitorUrls',
					},
				},
			},
			{
				displayName: 'Post URLs',
				name: 'postUrls',
				description:
					'Posts mode only: initial LinkedIn post URLs (validated / deduped / plan-capped by the shared service)',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'postUrls',
					},
				},
			},
			{
				displayName: 'Schedule Send',
				name: 'scheduleSend',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'scheduleSend',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Source Mode',
				name: 'sourceMode',
				description:
					"'posts' = you provide post URLs; 'monitor' = watch profiles/companies for fresh posts (Pro only). IMMUTABLE after creation.",
				type: 'options',
				options: [
					{
						name: 'Monitor',
						value: 'monitor',
					},
					{
						name: 'Posts',
						value: 'posts',
					},
				],
				default: 'posts',
				routing: {
					send: {
						type: 'body',
						property: 'sourceMode',
					},
				},
			},
			{
				displayName: 'Target',
				name: 'target',
				description:
					"'post' = comment on the post; 'commenter' = reply to each commenter (Pro only; posts mode only)",
				type: 'options',
				options: [
					{
						name: 'Commenter',
						value: 'commenter',
					},
					{
						name: 'Post',
						value: 'post',
					},
				],
				default: 'post',
				routing: {
					send: {
						type: 'body',
						property: 'target',
					},
				},
			},
			{
				displayName: 'Template',
				name: 'template',
				description:
					'Comment text (fixed mode). In ai mode it is only the fallback text posted if AI generation fails — put AI instructions in additionalContext.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'template',
					},
				},
			},
		],
	},
	{
		displayName: 'Campaign ID',
		name: 'campaignId',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'campaignId',
			},
		},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['delete_campaign'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['delete_campaign'],
			},
		},
		options: [
			{
				displayName: 'Confirm',
				name: 'confirm',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'confirm',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['diagnose_campaign'],
			},
		},
		options: [
			{
				displayName: 'Campaign ID',
				name: 'campaignId',
				description:
					'Campaign to diagnose. Omit to pick the most relevant one (single campaign, else the active one, else the most recently paused, else newest).',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'campaignId',
					},
				},
			},
		],
	},
	{
		displayName: 'Campaign ID',
		name: 'campaignId',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'campaignId',
			},
		},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['duplicate_campaign'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['duplicate_campaign'],
			},
		},
		options: [
			{
				displayName: 'Copy Prospects',
				name: 'copyProspects',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'copyProspects',
					},
				},
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'name',
					},
				},
			},
		],
	},
	{
		displayName: 'Campaign ID',
		name: 'campaignId',
		description: 'Campaign ID to look up',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'campaignId',
			},
		},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['get_campaign'],
			},
		},
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['get_campaigns'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['get_campaigns'],
				returnAll: [false],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['get_campaigns'],
			},
		},
		options: [
			{
				displayName: 'Status',
				name: 'status',
				description: 'Filter by campaign status',
				type: 'options',
				options: [
					{
						name: 'Active',
						value: 'active',
					},
					{
						name: 'Completed',
						value: 'completed',
					},
					{
						name: 'Draft',
						value: 'draft',
					},
					{
						name: 'Paused',
						value: 'paused',
					},
				],
				default: 'active',
				routing: {
					send: {
						type: 'body',
						property: 'status',
					},
				},
			},
		],
	},
	{
		displayName: 'Campaign ID',
		name: 'campaignId',
		description: 'Message campaign ID',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'campaignId',
			},
		},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['get_message_targets'],
			},
		},
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['get_message_targets'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['get_message_targets'],
				returnAll: [false],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['get_message_targets'],
			},
		},
		options: [
			{
				displayName: 'Include Messages',
				name: 'includeMessages',
				description:
					"Whether to switch this on. true = include each recipient's AI-generated messages (subject + body per step) and full override text. Default false returns flags only, to keep large lists compact.",
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'includeMessages',
					},
				},
			},
			{
				displayName: 'Open Profile',
				name: 'openProfile',
				description: 'InMail campaigns only: filter by Open Profile status (default any)',
				type: 'options',
				options: [
					{
						name: 'Any',
						value: 'any',
					},
					{
						name: 'Not Open',
						value: 'not_open',
					},
					{
						name: 'Open',
						value: 'open',
					},
					{
						name: 'Unchecked',
						value: 'unchecked',
					},
				],
				default: 'any',
				routing: {
					send: {
						type: 'body',
						property: 'openProfile',
					},
				},
			},
			{
				displayName: 'Search',
				name: 'search',
				description: 'Case-insensitive substring match on the recipient profile URL',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'search',
					},
				},
			},
			{
				displayName: 'Status',
				name: 'status',
				description: 'Only recipients in this state (default all)',
				type: 'options',
				options: [
					{
						name: 'All',
						value: 'all',
					},
					{
						name: 'Failed',
						value: 'failed',
					},
					{
						name: 'Pending',
						value: 'pending',
					},
					{
						name: 'Sent',
						value: 'sent',
					},
				],
				default: 'all',
				routing: {
					send: {
						type: 'body',
						property: 'status',
					},
				},
			},
		],
	},
	{
		displayName: 'Campaign ID',
		name: 'campaignId',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'campaignId',
			},
		},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['link_list_to_campaign'],
			},
		},
	},
	{
		displayName: 'List ID',
		name: 'listId',
		description: 'Contact list ID — every contact in this list will be added',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'listId',
			},
		},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['link_list_to_campaign'],
			},
		},
	},
	{
		displayName: 'Campaign ID',
		name: 'campaignId',
		description: 'ID of the campaign to pause',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'campaignId',
			},
		},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['pause_campaign'],
			},
		},
	},
	{
		displayName: 'Campaign ID',
		name: 'campaignId',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'campaignId',
			},
		},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['prioritize_campaign_leads'],
			},
		},
	},
	{
		displayName: 'Contact IDs',
		name: 'contactIds',
		type: 'string',
		typeOptions: {
			multipleValues: true,
		},
		default: [],
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'contactIds',
			},
		},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['prioritize_campaign_leads'],
			},
		},
	},
	{
		displayName: 'Prioritize',
		name: 'prioritize',
		description:
			'Whether to switch this on. true = send these invites first; false = remove priority.',
		type: 'boolean',
		default: false,
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'prioritize',
			},
		},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['prioritize_campaign_leads'],
			},
		},
	},
	{
		displayName: 'Campaign ID',
		name: 'campaignId',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'campaignId',
			},
		},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['remove_leads_from_campaign'],
			},
		},
	},
	{
		displayName: 'Contact IDs',
		name: 'contactIds',
		type: 'string',
		typeOptions: {
			multipleValues: true,
		},
		default: [],
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'contactIds',
			},
		},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['remove_leads_from_campaign'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['remove_leads_from_campaign'],
			},
		},
		options: [
			{
				displayName: 'Confirm',
				name: 'confirm',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'confirm',
					},
				},
			},
		],
	},
	{
		displayName: 'Campaign ID',
		name: 'campaignId',
		description: 'Message campaign ID',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'campaignId',
			},
		},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['remove_message_targets'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['remove_message_targets'],
			},
		},
		options: [
			{
				displayName: 'Profile URLs',
				name: 'profileUrls',
				description:
					'Or/also: recipient profile URLs to remove (matched on the canonical LinkedIn profile, so URL variants of the same person match)',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'profileUrls',
					},
				},
			},
			{
				displayName: 'Target IDs',
				name: 'targetIds',
				description: 'Recipient (message target) IDs to remove — from get_message_targets',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'targetIds',
					},
				},
			},
		],
	},
	{
		displayName: 'Campaign ID',
		name: 'campaignId',
		description: 'Comment campaign ID',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'campaignId',
			},
		},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['remove_post_targets'],
			},
		},
	},
	{
		displayName: 'Target IDs',
		name: 'targetIds',
		description: 'PostTarget subdocument IDs to remove (from get_campaign.postTargets[]._id)',
		type: 'string',
		typeOptions: {
			multipleValues: true,
		},
		default: [],
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'targetIds',
			},
		},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['remove_post_targets'],
			},
		},
	},
	{
		displayName: 'Campaign ID',
		name: 'campaignId',
		description: 'Outreach campaign ID',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'campaignId',
			},
		},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['resume_lead_sequence'],
			},
		},
	},
	{
		displayName: 'Contact IDs',
		name: 'contactIds',
		description: 'Contact IDs of the campaign leads to resume',
		type: 'string',
		typeOptions: {
			multipleValues: true,
		},
		default: [],
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'contactIds',
			},
		},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['resume_lead_sequence'],
			},
		},
	},
	{
		displayName: 'Campaign ID',
		name: 'campaignId',
		description: 'Message campaign ID',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'campaignId',
			},
		},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['retry_message_target'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['retry_message_target'],
			},
		},
		options: [
			{
				displayName: 'All Failed',
				name: 'allFailed',
				description:
					'Whether to switch this on. true = retry every failed recipient of the campaign (targetId / targetIds not needed).',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'allFailed',
					},
				},
			},
			{
				displayName: 'Target ID',
				name: 'targetId',
				description: 'Message target ID of a FAILED recipient',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'targetId',
					},
				},
			},
			{
				displayName: 'Target IDs',
				name: 'targetIds',
				description: 'Several FAILED recipient IDs to retry in one call (from get_message_targets)',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'targetIds',
					},
				},
			},
		],
	},
	{
		displayName: 'Campaign ID',
		name: 'campaignId',
		description: 'Comment campaign ID',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'campaignId',
			},
		},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['retry_post_target'],
			},
		},
	},
	{
		displayName: 'Target ID',
		name: 'targetId',
		description: 'PostTarget subdocument ID to retry',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'targetId',
			},
		},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['retry_post_target'],
			},
		},
	},
	{
		displayName: 'Campaign ID',
		name: 'campaignId',
		description: 'The campaign',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'campaignId',
			},
		},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['set_campaign_approval_mode'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['set_campaign_approval_mode'],
			},
		},
		options: [
			{
				displayName: 'Follow Ups',
				name: 'followUps',
				type: 'options',
				options: [
					{
						name: 'Approval',
						value: 'approval',
					},
					{
						name: 'Autopilot',
						value: 'autopilot',
					},
				],
				default: 'approval',
				routing: {
					send: {
						type: 'body',
						property: 'followUps',
					},
				},
			},
			{
				displayName: 'Invitations',
				name: 'invitations',
				type: 'options',
				options: [
					{
						name: 'Approval',
						value: 'approval',
					},
					{
						name: 'Autopilot',
						value: 'autopilot',
					},
				],
				default: 'approval',
				routing: {
					send: {
						type: 'body',
						property: 'invitations',
					},
				},
			},
			{
				displayName: 'Welcome Messages',
				name: 'welcomeMessages',
				type: 'options',
				options: [
					{
						name: 'Approval',
						value: 'approval',
					},
					{
						name: 'Autopilot',
						value: 'autopilot',
					},
				],
				default: 'approval',
				routing: {
					send: {
						type: 'body',
						property: 'welcomeMessages',
					},
				},
			},
		],
	},
	{
		displayName: 'Campaign ID',
		name: 'campaignId',
		description: 'Comment campaign ID',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'campaignId',
			},
		},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['set_post_target_watcher'],
			},
		},
	},
	{
		displayName: 'Target ID',
		name: 'targetId',
		description: 'PostTarget subdocument ID',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'targetId',
			},
		},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['set_post_target_watcher'],
			},
		},
	},
	{
		displayName: 'Watcher',
		name: 'watcher',
		description:
			'Whether to switch this on. true = keep re-checking daily for new commenters; false = stop.',
		type: 'boolean',
		default: false,
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'watcher',
			},
		},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['set_post_target_watcher'],
			},
		},
	},
	{
		displayName: 'Campaign ID',
		name: 'campaignId',
		description: 'Outreach campaign ID',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'campaignId',
			},
		},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['stop_lead_sequence'],
			},
		},
	},
	{
		displayName: 'Contact IDs',
		name: 'contactIds',
		description: 'Contact IDs of the campaign leads to stop',
		type: 'string',
		typeOptions: {
			multipleValues: true,
		},
		default: [],
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'contactIds',
			},
		},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['stop_lead_sequence'],
			},
		},
	},
	{
		displayName: 'Campaign ID',
		name: 'campaignId',
		description: 'Campaign ID to update',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'campaignId',
			},
		},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['update_campaign'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['update_campaign'],
			},
		},
		options: [
			{
				displayName: 'Attachments',
				name: 'attachments',
				description:
					'Message campaigns only: file/image/voice/video attachments sent with each message (replaces the existing set; pass [] to clear). URLs must come from LinkedNav uploads — they are fetched server-side at send time and any other host is dropped.',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'attachments',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Auto Email Enabled',
				name: 'autoEmailEnabled',
				description:
					'Whether to switch this on. Enable the parallel email channel (send emails alongside LinkedIn). Outreach: after the trigger (emailTrigger). Message campaigns: "email after message" — after Message 1 goes out, the person\'s email is looked up (managed LinkedIn account needed to identify them) and emailed. Pro only. Requires at least one email account selected (emailConnectionIds); the subject/body come from the prompt\'s Email tab.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'autoEmailEnabled',
					},
				},
			},
			{
				displayName: 'Auto Followup Enabled',
				name: 'autoFollowupEnabled',
				description:
					'Whether to switch this on. Enable scheduled follow-ups. Standard or Pro. A campaign has follow-ups or the welcome message, not both: turning follow-ups on turns the welcome message off (follow-up 1 then becomes the first message after someone accepts).',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'autoFollowupEnabled',
					},
				},
			},
			{
				displayName: 'Auto Reply Enabled',
				name: 'autoReplyEnabled',
				description: 'Whether to switch this on. Enable AI auto-reply. Pro only.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'autoReplyEnabled',
					},
				},
			},
			{
				displayName: 'Auto Reply Mode',
				name: 'autoReplyMode',
				type: 'options',
				options: [
					{
						name: 'Approval',
						value: 'approval',
					},
					{
						name: 'Autopilot',
						value: 'autopilot',
					},
				],
				default: 'approval',
				routing: {
					send: {
						type: 'body',
						property: 'autoReplyMode',
					},
				},
			},
			{
				displayName: 'Auto Switch Sales Nav Contract',
				name: 'autoSwitchSalesNavContract',
				description:
					'Whether to switch this on. InMail message campaigns only: when a sender runs out of Sales Navigator InMail credits, automatically switch that LinkedIn account to another of its Sales Navigator contracts that still has credits and re-send (live-session accounts only; default false). Once a live-session sender has no credits left, Open Profiles still get a free InMail and people not checked yet get one free try; anyone else goes to another sender with credits or is marked failed "out of InMail credits" (retry them once credits renew). Check balances with get_inmail_credits. Ignored for regular DM campaigns.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'autoSwitchSalesNavContract',
					},
				},
			},
			{
				displayName: 'Auto Welcome Message Enabled',
				name: 'autoWelcomeMessageEnabled',
				description:
					'Whether to switch this on. Enable welcome message. Standard or Pro. A campaign has either the welcome message or follow-ups, not both: turning the welcome on turns follow-ups off.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'autoWelcomeMessageEnabled',
					},
				},
			},
			{
				displayName: 'Connect with Note',
				name: 'connectWithNote',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'connectWithNote',
					},
				},
			},
			{
				displayName: 'Email Connection IDs',
				name: 'emailConnectionIds',
				description:
					'Email mailbox account ID(s) (User.emailConnections) to send from — round-robins across them. Replaces the set; pass [] to clear (which also forces autoEmail off).',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'emailConnectionIds',
					},
				},
			},
			{
				displayName: 'Email Delay Minutes',
				name: 'emailDelayMinutes',
				description: 'Minutes to wait after the trigger before sending the email (0-1440)',
				type: 'number',
				default: 0,
				typeOptions: {
					minValue: 0,
					maxValue: 1440,
				},
				routing: {
					send: {
						type: 'body',
						property: 'emailDelayMinutes',
					},
				},
			},
			{
				displayName: 'Email Mode',
				name: 'emailMode',
				description:
					'"template" = send the prompt\'s fixed email body; "generated" = AI writes each email',
				type: 'options',
				options: [
					{
						name: 'Generated',
						value: 'generated',
					},
					{
						name: 'Template',
						value: 'template',
					},
				],
				default: 'generated',
				routing: {
					send: {
						type: 'body',
						property: 'emailMode',
					},
				},
			},
			{
				displayName: 'Email Per Day',
				name: 'emailPerDay',
				description: 'Max emails to send per day for this campaign (1-500)',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 500,
				},
				routing: {
					send: {
						type: 'body',
						property: 'emailPerDay',
					},
				},
			},
			{
				displayName: 'Email Trigger',
				name: 'emailTrigger',
				description:
					'Outreach only: when to send the initial email relative to the LinkedIn sequence. MESSAGE campaigns always email after Message 1 goes out ("email after message"), so this is ignored there ("after_message" is accepted and ignored).',
				type: 'options',
				options: [
					{
						name: 'After Connect',
						value: 'after_connect',
					},
					{
						name: 'After Follow Up',
						value: 'after_follow_up',
					},
					{
						name: 'After Message',
						value: 'after_message',
					},
					{
						name: 'After Welcome',
						value: 'after_welcome',
					},
				],
				default: 'after_connect',
				routing: {
					send: {
						type: 'body',
						property: 'emailTrigger',
					},
				},
			},
			{
				displayName: 'Follow Ups',
				name: 'followUps',
				description:
					'Message campaigns (REGULAR DM) only, Pro only: the reply-gated follow-up sequence (Message 2 + Message 3). Ignored for InMail; enabling it without Pro errors.',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'followUps',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Goal',
				name: 'goal',
				description: 'Campaign goal description',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'goal',
					},
				},
			},
			{
				displayName: 'Goal Link',
				name: 'goalLink',
				description: 'Campaign goal URL',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'goalLink',
					},
				},
			},
			{
				displayName: 'In Mail Subject',
				name: 'inMailSubject',
				description:
					'InMail-mode message campaigns only: set/replace the InMail subject line (supports {{firstName}} etc.). Ignored for regular DM campaigns. Send mode itself is immutable.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'inMailSubject',
					},
				},
			},
			{
				displayName: 'Like Before Connect',
				name: 'likeBeforeConnect',
				description:
					'Outreach: like each lead\'s latest post at timeEST (HH:mm EST, before the invite time). MESSAGE campaigns: "like before message" — the send likes the person\'s latest post right before Message 1, from the same account (managed accounts only; timeEST is ignored). Standard or Pro.',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'likeBeforeConnect',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'LinkedIn Connection ID',
				name: 'linkedinConnectionId',
				description: 'LinkedIn account ID to use, or null to clear',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'linkedinConnectionId',
					},
				},
			},
			{
				displayName: 'LinkedIn Connection IDs',
				name: 'linkedinConnectionIds',
				description:
					'Message campaigns only: the set of LinkedIn accounts to round-robin sends across (multi-sender). Takes precedence over linkedinConnectionId; the scalar is mirrored to the first ID.',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'linkedinConnectionIds',
					},
				},
			},
			{
				displayName: 'Message AI Context',
				name: 'messageAiContext',
				description:
					'Message campaigns, AI mode only: optional guidance for Message 1 — highest priority, followed over the prompt where they conflict',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'messageAiContext',
					},
				},
			},
			{
				displayName: 'Message Mode',
				name: 'messageMode',
				description:
					'Message campaigns: switch Message 1 between "template" (send messageTemplate verbatim) and "ai" (generate at send time from the prompt\'s First follow-up + recipient profile / prior conversation; Pro only). Switching to "ai" needs a prompt — pass promptId in the same call if none is attached; switching to "template" needs messageTemplate (and inMailSubject for InMail).',
				type: 'options',
				options: [
					{
						name: 'AI',
						value: 'ai',
					},
					{
						name: 'Template',
						value: 'template',
					},
				],
				default: 'ai',
				routing: {
					send: {
						type: 'body',
						property: 'messageMode',
					},
				},
			},
			{
				displayName: 'Message Template',
				name: 'messageTemplate',
				description:
					'Message campaigns only: set/replace the fixed message body sent to each recipient (supports {{firstName}} etc.)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'messageTemplate',
					},
				},
			},
			{
				displayName: 'Name',
				name: 'name',
				description: 'Campaign name',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'name',
					},
				},
			},
			{
				displayName: 'Outreach Language',
				name: 'outreachLanguage',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'outreachLanguage',
					},
				},
			},
			{
				displayName: 'Prompt ID',
				name: 'promptId',
				description: 'Prompt ID to use, or null to clear',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'promptId',
					},
				},
			},
			{
				displayName: 'Schedule Send',
				name: 'scheduleSend',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'scheduleSend',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Welcome Message Mode',
				name: 'welcomeMessageMode',
				type: 'options',
				options: [
					{
						name: 'Generated',
						value: 'generated',
					},
					{
						name: 'Template',
						value: 'template',
					},
				],
				default: 'generated',
				routing: {
					send: {
						type: 'body',
						property: 'welcomeMessageMode',
					},
				},
			},
			{
				displayName: 'Withdraw Settings',
				name: 'withdrawSettings',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'withdrawSettings',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'Campaign ID',
		name: 'campaignId',
		description: 'Comment campaign ID',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'campaignId',
			},
		},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['update_comment_settings'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['campaign'],
				operation: ['update_comment_settings'],
			},
		},
		options: [
			{
				displayName: 'Additional Context',
				name: 'additionalContext',
				description:
					"AI mode: the owner's instructions for the comment writer — HIGHEST priority, overrides the default comment rules (e.g. mention the product or share the campaign goal link — the writer knows both from the setup and settings — change length/tone, use hashtags)",
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'additionalContext',
					},
				},
			},
			{
				displayName: 'Analyze Comments',
				name: 'analyzeComments',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'analyzeComments',
					},
				},
			},
			{
				displayName: 'Analyze Post Content',
				name: 'analyzePostContent',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'analyzePostContent',
					},
				},
			},
			{
				displayName: 'Approval Mode',
				name: 'approvalMode',
				type: 'options',
				options: [
					{
						name: 'Approval',
						value: 'approval',
					},
					{
						name: 'Auto',
						value: 'auto',
					},
				],
				default: 'approval',
				routing: {
					send: {
						type: 'body',
						property: 'approvalMode',
					},
				},
			},
			{
				displayName: 'Like Before Comment',
				name: 'likeBeforeComment',
				description:
					'Whether to switch this on. Like each post right before commenting on it (managed accounts only).',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'likeBeforeComment',
					},
				},
			},
			{
				displayName: 'Mode',
				name: 'mode',
				type: 'options',
				options: [
					{
						name: 'AI',
						value: 'ai',
					},
					{
						name: 'Fixed',
						value: 'fixed',
					},
				],
				default: 'ai',
				routing: {
					send: {
						type: 'body',
						property: 'mode',
					},
				},
			},
			{
				displayName: 'Target',
				name: 'target',
				description: "'post' or 'commenter' (Pro; not allowed on monitor campaigns)",
				type: 'options',
				options: [
					{
						name: 'Commenter',
						value: 'commenter',
					},
					{
						name: 'Post',
						value: 'post',
					},
				],
				default: 'commenter',
				routing: {
					send: {
						type: 'body',
						property: 'target',
					},
				},
			},
			{
				displayName: 'Template',
				name: 'template',
				description:
					'Comment text (fixed mode). In ai mode it is only the fallback text posted if AI generation fails — put AI instructions in additionalContext.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'template',
					},
				},
			},
		],
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['contact'],
			},
		},
		options: [
			{
				name: 'Bulk Delete Contacts',
				value: 'bulk_delete_contacts',
				action: 'Bulk delete contacts',
				description: 'Delete up to 500 contacts from the active setup',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/bulk_delete_contacts',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Bulk Move Contacts',
				value: 'bulk_move_contacts',
				action: 'Bulk move contacts',
				description: 'Move up to 500 contacts to another list in the active setup',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/bulk_move_contacts',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Create Contact',
				value: 'create_contact',
				action: 'Create contact',
				description:
					'Add one LinkedIn profile as a new contact in LinkedNav (the "Contacts" page, /app/contacts)',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/create_contact',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Create Lead',
				value: 'create_lead',
				action: 'Create lead',
				description:
					'Add one LinkedIn profile as a new contact in LinkedNav (the "Contacts" page, /app/contacts)',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/create_lead',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Create Leads Bulk',
				value: 'create_leads_bulk',
				action: 'Create leads bulk',
				description:
					'Add up to 50 LinkedIn profiles as contacts/leads in a single call (the "Contacts" page)',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/create_leads_bulk',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Delete Contact',
				value: 'delete_contact',
				action: 'Delete contact',
				description: 'Delete one contact from the active setup',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/delete_contact',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Contact',
				value: 'get_contact',
				action: 'Get contact',
				description: 'Get detailed information about a specific contact by their ID',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_contact',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Contacts',
				value: 'get_contacts',
				action: 'Get contacts',
				description: 'Search and list your contacts (the "Contacts" page, /app/contacts)',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_contacts',
						body: {},
					},
					send: {
						paginate: true,
					},
					operations: {
						pagination: paginate({
							by: 'page',
							list: 'contacts',
							pageSize: 500,
							pages: 'totalPages',
							more: 'hasMore',
							total: 'total',
						}),
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Contacts Summary',
				value: 'get_contacts_summary',
				action: 'Get contacts summary',
				description:
					'Get a high-level summary of all contacts: total count, counts per list, and recent imports',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_contacts_summary',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Update Contact',
				value: 'update_contact',
				action: 'Update contact',
				description:
					'Update an existing LinkedNav contact (also called a lead, or a "prospect" when inside a campaign)',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/update_contact',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
		],
		default: 'get_contact',
	},
	{
		displayName: 'Contact IDs',
		name: 'contactIds',
		type: 'string',
		typeOptions: {
			multipleValues: true,
		},
		default: [],
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'contactIds',
			},
		},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['bulk_delete_contacts'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['bulk_delete_contacts'],
			},
		},
		options: [
			{
				displayName: 'Confirm',
				name: 'confirm',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'confirm',
					},
				},
			},
		],
	},
	{
		displayName: 'Contact IDs',
		name: 'contactIds',
		type: 'string',
		typeOptions: {
			multipleValues: true,
		},
		default: [],
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'contactIds',
			},
		},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['bulk_move_contacts'],
			},
		},
	},
	{
		displayName: 'List ID',
		name: 'listId',
		description: 'Destination list ID in the active setup',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'listId',
			},
		},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['bulk_move_contacts'],
			},
		},
	},
	{
		displayName: 'Profile URL',
		name: 'profileUrl',
		description: 'Full LinkedIn profile URL (e.g. https://linkedin.com/in/jane-doe)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'profileUrl',
			},
		},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['create_contact'],
			},
		},
	},
	{
		displayName: 'First Name',
		name: 'firstName',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'firstName',
			},
		},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['create_contact'],
			},
		},
	},
	{
		displayName: 'Last Name',
		name: 'lastName',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'lastName',
			},
		},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['create_contact'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['create_contact'],
			},
		},
		options: [
			{
				displayName: 'Company',
				name: 'company',
				description: 'Current company name',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'company',
					},
				},
			},
			{
				displayName: 'Connect Message',
				name: 'connectMessage',
				description:
					'Per-lead connection-request note that OVERRIDES the campaign connect template for this lead only. Blank/omitted = use the campaign message.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectMessage',
					},
				},
			},
			{
				displayName: 'Email',
				name: 'email',
				description: 'Email address if known',
				type: 'string',
				default: '',
				placeholder: 'name@email.com',
				routing: {
					send: {
						type: 'body',
						property: 'email',
					},
				},
			},
			{
				displayName: 'Engager Type',
				name: 'engagerType',
				description:
					'How they engaged with the post: "commenter" (wrote a comment) or "reactor" (only liked/reacted). Powers {{action}} and lets one template fit both — {{comment}} is auto-blanked for reactors.',
				type: 'options',
				options: [
					{
						name: 'Commenter',
						value: 'commenter',
					},
					{
						name: 'Reactor',
						value: 'reactor',
					},
				],
				default: 'commenter',
				routing: {
					send: {
						type: 'body',
						property: 'engagerType',
					},
				},
			},
			{
				displayName: 'Follow Up1',
				name: 'followUp1',
				description:
					'Per-lead 1st follow-up that OVERRIDES the campaign follow-up-1 template for this lead only',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'followUp1',
					},
				},
			},
			{
				displayName: 'Follow Up2',
				name: 'followUp2',
				description:
					'Per-lead 2nd follow-up that OVERRIDES the campaign follow-up-2 template for this lead only',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'followUp2',
					},
				},
			},
			{
				displayName: 'Follow Up3',
				name: 'followUp3',
				description:
					'Per-lead 3rd follow-up that OVERRIDES the campaign follow-up-3 template for this lead only',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'followUp3',
					},
				},
			},
			{
				displayName: 'Headline',
				name: 'headline',
				description: 'LinkedIn headline',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'headline',
					},
				},
			},
			{
				displayName: 'ICP Reason',
				name: 'icpReason',
				description: 'Short reason for the ICP score (a few words)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'icpReason',
					},
				},
			},
			{
				displayName: 'ICP Score',
				name: 'icpScore',
				description:
					'ICP fit score 1-10 from a signal agent, if known. NOT the auto-computed Intent Score.',
				type: 'number',
				default: 0,
				routing: {
					send: {
						type: 'body',
						property: 'icpScore',
					},
				},
			},
			{
				displayName: 'Industry',
				name: 'industry',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'industry',
					},
				},
			},
			{
				displayName: 'Intent',
				name: 'intent',
				description:
					'Freeform note on why this contact was added / the intent signal. NOT the numeric "Intent Score" (that is auto-computed by LinkedNav).',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'intent',
					},
				},
			},
			{
				displayName: 'Job Title',
				name: 'jobTitle',
				description: 'Job title / position',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'jobTitle',
					},
				},
			},
			{
				displayName: 'List ID',
				name: 'listId',
				description:
					'Contact list ID to add this contact to (uses default list if omitted). Obtain list IDs via get_lists.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'listId',
					},
				},
			},
			{
				displayName: 'Location',
				name: 'location',
				description: 'Location (city, country, etc.)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'location',
					},
				},
			},
			{
				displayName: 'Note',
				name: 'note',
				description:
					'The lead\'s own comment on the post → {{comment}}. Leave empty for reactors (set engagerType:"reactor").',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'note',
					},
				},
			},
			{
				displayName: 'Provider ID',
				name: 'providerId',
				description:
					'LinkedIn member/provider ID (ACo…/ACw…) if known — e.g. the "providerId" returned by search_people. Stored as the canonical send handle so the contact stays sendable even if its URL is imperfect; only a well-formed member ID is kept. A Sales Navigator ID (ACw…) is kept only as a backup — invites resolve the profile URL first.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'providerId',
					},
				},
			},
			{
				displayName: 'Source Post Author',
				name: 'sourcePostAuthor',
				description:
					'Display name of the author of the post they engaged with → {{postAuthor}} (e.g. the influencer or competitor)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'sourcePostAuthor',
					},
				},
			},
			{
				displayName: 'Source Post Date',
				name: 'sourcePostDate',
				description: 'ISO date the post was published → {{postDate}} (rendered as M/D)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'sourcePostDate',
					},
				},
			},
			{
				displayName: 'Source Post Excerpt',
				name: 'sourcePostExcerpt',
				description: 'Short snippet of the post they engaged with → {{postText}}',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'sourcePostExcerpt',
					},
				},
			},
			{
				displayName: 'Source Post URL',
				name: 'sourcePostUrl',
				description: 'LinkedIn post URL that triggered this contact',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'sourcePostUrl',
					},
				},
			},
			{
				displayName: 'Welcome Message',
				name: 'welcomeMessage',
				description:
					'Per-lead welcome message (sent right after they accept) that OVERRIDES the campaign welcome template for this lead only',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'welcomeMessage',
					},
				},
			},
		],
	},
	{
		displayName: 'Profile URL',
		name: 'profileUrl',
		description: 'Full LinkedIn profile URL (e.g. https://linkedin.com/in/jane-doe)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'profileUrl',
			},
		},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['create_lead'],
			},
		},
	},
	{
		displayName: 'First Name',
		name: 'firstName',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'firstName',
			},
		},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['create_lead'],
			},
		},
	},
	{
		displayName: 'Last Name',
		name: 'lastName',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'lastName',
			},
		},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['create_lead'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['create_lead'],
			},
		},
		options: [
			{
				displayName: 'Company',
				name: 'company',
				description: 'Current company name',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'company',
					},
				},
			},
			{
				displayName: 'Connect Message',
				name: 'connectMessage',
				description:
					'Per-lead connection-request note that OVERRIDES the campaign connect template for this lead only. Blank/omitted = use the campaign message.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectMessage',
					},
				},
			},
			{
				displayName: 'Email',
				name: 'email',
				description: 'Email address if known',
				type: 'string',
				default: '',
				placeholder: 'name@email.com',
				routing: {
					send: {
						type: 'body',
						property: 'email',
					},
				},
			},
			{
				displayName: 'Engager Type',
				name: 'engagerType',
				description:
					'How they engaged with the post: "commenter" (wrote a comment) or "reactor" (only liked/reacted). Powers {{action}} and lets one template fit both — {{comment}} is auto-blanked for reactors.',
				type: 'options',
				options: [
					{
						name: 'Commenter',
						value: 'commenter',
					},
					{
						name: 'Reactor',
						value: 'reactor',
					},
				],
				default: 'commenter',
				routing: {
					send: {
						type: 'body',
						property: 'engagerType',
					},
				},
			},
			{
				displayName: 'Follow Up1',
				name: 'followUp1',
				description:
					'Per-lead 1st follow-up that OVERRIDES the campaign follow-up-1 template for this lead only',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'followUp1',
					},
				},
			},
			{
				displayName: 'Follow Up2',
				name: 'followUp2',
				description:
					'Per-lead 2nd follow-up that OVERRIDES the campaign follow-up-2 template for this lead only',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'followUp2',
					},
				},
			},
			{
				displayName: 'Follow Up3',
				name: 'followUp3',
				description:
					'Per-lead 3rd follow-up that OVERRIDES the campaign follow-up-3 template for this lead only',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'followUp3',
					},
				},
			},
			{
				displayName: 'Headline',
				name: 'headline',
				description: 'LinkedIn headline',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'headline',
					},
				},
			},
			{
				displayName: 'ICP Reason',
				name: 'icpReason',
				description: 'Short reason for the ICP score (a few words)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'icpReason',
					},
				},
			},
			{
				displayName: 'ICP Score',
				name: 'icpScore',
				description:
					'ICP fit score 1-10 from a signal agent, if known. NOT the auto-computed Intent Score.',
				type: 'number',
				default: 0,
				routing: {
					send: {
						type: 'body',
						property: 'icpScore',
					},
				},
			},
			{
				displayName: 'Industry',
				name: 'industry',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'industry',
					},
				},
			},
			{
				displayName: 'Intent',
				name: 'intent',
				description:
					'Freeform note on why this lead was added / the intent signal. NOT the numeric "Intent Score" (that is auto-computed by LinkedNav).',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'intent',
					},
				},
			},
			{
				displayName: 'Job Title',
				name: 'jobTitle',
				description: 'Job title / position',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'jobTitle',
					},
				},
			},
			{
				displayName: 'List ID',
				name: 'listId',
				description:
					'Contact list ID to add this lead to (uses default list if omitted). Obtain list IDs via get_lists.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'listId',
					},
				},
			},
			{
				displayName: 'Location',
				name: 'location',
				description: 'Location (city, country, etc.)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'location',
					},
				},
			},
			{
				displayName: 'Note',
				name: 'note',
				description:
					'The lead\'s own comment on the post → {{comment}}. Leave empty for reactors (set engagerType:"reactor").',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'note',
					},
				},
			},
			{
				displayName: 'Provider ID',
				name: 'providerId',
				description:
					'LinkedIn member/provider ID (ACo…/ACw…) if known — e.g. the "providerId" returned by search_people. Stored as the canonical send handle so the lead stays sendable even if its URL is imperfect; only a well-formed member ID is kept. A Sales Navigator ID (ACw…) is kept only as a backup — invites resolve the profile URL first.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'providerId',
					},
				},
			},
			{
				displayName: 'Source Post Author',
				name: 'sourcePostAuthor',
				description:
					'Display name of the author of the post they engaged with → {{postAuthor}} (e.g. the influencer or competitor)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'sourcePostAuthor',
					},
				},
			},
			{
				displayName: 'Source Post Date',
				name: 'sourcePostDate',
				description: 'ISO date the post was published → {{postDate}} (rendered as M/D)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'sourcePostDate',
					},
				},
			},
			{
				displayName: 'Source Post Excerpt',
				name: 'sourcePostExcerpt',
				description: 'Short snippet of the post they engaged with → {{postText}}',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'sourcePostExcerpt',
					},
				},
			},
			{
				displayName: 'Source Post URL',
				name: 'sourcePostUrl',
				description: 'LinkedIn post URL that triggered this lead',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'sourcePostUrl',
					},
				},
			},
			{
				displayName: 'Welcome Message',
				name: 'welcomeMessage',
				description:
					'Per-lead welcome message (sent right after they accept) that OVERRIDES the campaign welcome template for this lead only',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'welcomeMessage',
					},
				},
			},
		],
	},
	{
		displayName: 'Leads',
		name: 'leads',
		description: 'Array of lead objects to create (1–50)',
		type: 'json',
		default: '[]',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'leads',
				value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
			},
		},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['create_leads_bulk'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['create_leads_bulk'],
			},
		},
		options: [
			{
				displayName: 'List ID',
				name: 'listId',
				description: 'Contact list ID for all leads (uses default list if omitted)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'listId',
					},
				},
			},
		],
	},
	{
		displayName: 'Contact ID',
		name: 'contactId',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'contactId',
			},
		},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['delete_contact'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['delete_contact'],
			},
		},
		options: [
			{
				displayName: 'Confirm',
				name: 'confirm',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'confirm',
					},
				},
			},
		],
	},
	{
		displayName: 'Contact ID',
		name: 'contactId',
		description: 'The contact ID to look up',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'contactId',
			},
		},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['get_contact'],
			},
		},
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['get_contacts'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['get_contacts'],
				returnAll: [false],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['get_contacts'],
			},
		},
		options: [
			{
				displayName: 'Campaign ID',
				name: 'campaignId',
				description: "Filter to a campaign's prospects (contacts) by campaign ID",
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'campaignId',
					},
				},
			},
			{
				displayName: 'Connected',
				name: 'connected',
				description:
					'Whether to switch this on. Filter leads that are connected in at least one campaign.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'connected',
					},
				},
			},
			{
				displayName: 'Follow Up Sent',
				name: 'followUpSent',
				description:
					'Whether to switch this on. Filter leads that have at least one campaign follow-up sent.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'followUpSent',
					},
				},
			},
			{
				displayName: 'Has Email',
				name: 'hasEmail',
				description:
					'Whether to switch this on. Filter contacts that have or do not have an email.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'hasEmail',
					},
				},
			},
			{
				displayName: 'Has Phone',
				name: 'hasPhone',
				description:
					'Whether to switch this on. Filter contacts that have or do not have a phone number.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'hasPhone',
					},
				},
			},
			{
				displayName: 'ICP Score',
				name: 'icpScore',
				description:
					'Exact Intent Score (1-10). Shown in the app as the "Intent Score" column (Hot=8-10, Warm=5-7, Low=1-4).',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 10,
				},
				routing: {
					send: {
						type: 'body',
						property: 'icpScore',
					},
				},
			},
			{
				displayName: 'Invited Since',
				name: 'invitedSince',
				description:
					'Only people a campaign sent a connection invite to at or after this time (ISO date or date-time, e.g. "2026-10-18" or "2026-10-18T00:00:00-04:00"), newest invite first — use it for "who did I invite today / this week". With campaignId, invites from that campaign.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'invitedSince',
					},
				},
			},
			{
				displayName: 'List ID',
				name: 'listId',
				description: 'Filter to a specific list ID. Obtain list IDs via get_lists.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'listId',
					},
				},
			},
			{
				displayName: 'Min ICP Score',
				name: 'minIcpScore',
				description:
					'Minimum Intent Score (1-10) — use this for "show my hot/high-intent leads". Shown in the app as the "Intent Score" filter: Hot=8-10, Warm=5-7, Low=1-4.',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 10,
				},
				routing: {
					send: {
						type: 'body',
						property: 'minIcpScore',
					},
				},
			},
			{
				displayName: 'Opportunity',
				name: 'opportunity',
				description:
					'Whether to switch this on. Filter leads flagged as Opportunities (the "Opportunity" badge in Contacts/Unibox, set by campaign auto-reply analysis).',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'opportunity',
					},
				},
			},
			{
				displayName: 'Search',
				name: 'search',
				description: 'Search by name, company, title, or email',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'search',
					},
				},
			},
			{
				displayName: 'Signal Engager Type',
				name: 'signalEngagerType',
				description: 'Filter social/signal leads by commenter or reactor source',
				type: 'options',
				options: [
					{
						name: 'Commenter',
						value: 'commenter',
					},
					{
						name: 'Reactor',
						value: 'reactor',
					},
				],
				default: 'commenter',
				routing: {
					send: {
						type: 'body',
						property: 'signalEngagerType',
					},
				},
			},
			{
				displayName: 'Source Post URL',
				name: 'sourcePostUrl',
				description: 'Filter contacts/leads imported from a specific LinkedIn post URL',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'sourcePostUrl',
					},
				},
			},
		],
	},
	{
		displayName: 'Contact ID',
		name: 'contactId',
		description: 'Contact ID to update',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'contactId',
			},
		},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['update_contact'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['update_contact'],
			},
		},
		options: [
			{
				displayName: 'Company',
				name: 'company',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'company',
					},
				},
			},
			{
				displayName: 'Connection Degree',
				name: 'connectionDegree',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionDegree',
					},
				},
			},
			{
				displayName: 'Email',
				name: 'email',
				type: 'string',
				default: '',
				placeholder: 'name@email.com',
				routing: {
					send: {
						type: 'body',
						property: 'email',
					},
				},
			},
			{
				displayName: 'First Name',
				name: 'firstName',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'firstName',
					},
				},
			},
			{
				displayName: 'Headline',
				name: 'headline',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'headline',
					},
				},
			},
			{
				displayName: 'Industry',
				name: 'industry',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'industry',
					},
				},
			},
			{
				displayName: 'Intent',
				name: 'intent',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'intent',
					},
				},
			},
			{
				displayName: 'Job Title',
				name: 'jobTitle',
				description: 'Job title / role',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'jobTitle',
					},
				},
			},
			{
				displayName: 'Last Name',
				name: 'lastName',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'lastName',
					},
				},
			},
			{
				displayName: 'List ID',
				name: 'listId',
				description: 'Move contact to this list ID. Must belong to active setup.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'listId',
					},
				},
			},
			{
				displayName: 'Location',
				name: 'location',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'location',
					},
				},
			},
			{
				displayName: 'Note',
				name: 'note',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'note',
					},
				},
			},
			{
				displayName: 'Position',
				name: 'position',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'position',
					},
				},
			},
			{
				displayName: 'Profile URL',
				name: 'profileUrl',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'profileUrl',
					},
				},
			},
			{
				displayName: 'Source Post URL',
				name: 'sourcePostUrl',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'sourcePostUrl',
					},
				},
			},
			{
				displayName: 'Title',
				name: 'title',
				description: 'Alias for jobTitle',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'title',
					},
				},
			},
		],
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['crm'],
			},
		},
		options: [
			{
				name: 'CRM Delete Card',
				value: 'crm_delete_card',
				action: 'Delete a CRM card',
				description:
					"Permanently delete one CRM board card by its key (as returned by crm_list_cards), including the user's notes on it",
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/crm_delete_card',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'CRM List Cards',
				value: 'crm_list_cards',
				action: 'List CRM cards',
				description: 'List the CRM board cards (compact: no conversation)',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/crm_list_cards',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'CRM Upsert Cards',
				value: 'crm_upsert_cards',
				action: 'Add or update CRM cards',
				description:
					'Create or update CRM board cards (one per person), up to 50 per call, matched by key (normalized LinkedIn URL, else lowercased name)',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/crm_upsert_cards',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
		],
		default: 'crm_list_cards',
	},
	{
		displayName: 'Key',
		name: 'key',
		description: 'The card key (normalized LinkedIn URL or lowercased name)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'key',
			},
		},
		displayOptions: {
			show: {
				resource: ['crm'],
				operation: ['crm_delete_card'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['crm'],
				operation: ['crm_list_cards'],
			},
		},
		options: [
			{
				displayName: 'Needs Follow Up',
				name: 'needsFollowUp',
				description:
					'Whether to switch this on. Only cards flagged (true) or not flagged (false) for follow-up.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'needsFollowUp',
					},
				},
			},
			{
				displayName: 'Stage',
				name: 'stage',
				description: 'Only cards in this stage',
				type: 'options',
				options: [
					{
						name: 'Booked',
						value: 'booked',
					},
					{
						name: 'Closed',
						value: 'closed',
					},
					{
						name: 'Doc Sent',
						value: 'doc_sent',
					},
					{
						name: 'Follow Up',
						value: 'follow_up',
					},
					{
						name: 'In Conversation',
						value: 'in_conversation',
					},
					{
						name: 'Interested',
						value: 'interested',
					},
					{
						name: 'No Reply',
						value: 'no_reply',
					},
				],
				default: 'booked',
				routing: {
					send: {
						type: 'body',
						property: 'stage',
					},
				},
			},
		],
	},
	{
		displayName: 'Cards',
		name: 'cards',
		description: 'Cards to create or update',
		type: 'json',
		default: '[]',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'cards',
				value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
			},
		},
		displayOptions: {
			show: {
				resource: ['crm'],
				operation: ['crm_upsert_cards'],
			},
		},
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['enrichment'],
			},
		},
		options: [
			{
				name: 'Enrich Contact Company',
				value: 'enrich_contact_company',
				action: 'Enrich contact company',
				description:
					"Enrich ONE contact with company firmographics (revenue, employee size, type, industry, HQ, funding) from the user's own Clay workspace",
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/enrich_contact_company',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Enrich Contact Email',
				value: 'enrich_contact_email',
				action: 'Enrich contact email',
				description: 'Queue an email enrichment job for a contact',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/enrich_contact_email',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Enrich Contact Phone',
				value: 'enrich_contact_phone',
				action: 'Enrich contact phone',
				description: 'Queue a phone enrichment job for a contact',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/enrich_contact_phone',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Enrich Contacts Company Bulk',
				value: 'enrich_contacts_company_bulk',
				action: 'Enrich contacts company bulk',
				description:
					"Enrich multiple contacts (up to the per-request cap) with company firmographics from the user's own Clay workspace",
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/enrich_contacts_company_bulk',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Enrich Contacts Email Bulk',
				value: 'enrich_contacts_email_bulk',
				action: 'Enrich contacts email bulk',
				description: 'Queue email enrichment for up to 20 contacts at once',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/enrich_contacts_email_bulk',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Enrich Contacts Phone Bulk',
				value: 'enrich_contacts_phone_bulk',
				action: 'Enrich contacts phone bulk',
				description: 'Queue phone enrichment for up to 20 contacts at once',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/enrich_contacts_phone_bulk',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Enrich LinkedIn URLs',
				value: 'enrich_linkedin_urls',
				action: 'Find emails and phones from profile links',
				description:
					'Turn raw LinkedIn profile URLs into verified work emails (and optionally mobile phones) — no need to create contacts first',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/enrich_linkedin_urls',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Enrich Profiles',
				value: 'enrich_profiles',
				action: 'Enrich profiles',
				description:
					'Enrich LinkedIn profiles with location, current company, headline/seniority, experience and skills so you can FILTER or SEGMENT leads by those attributes (e.g',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/enrich_profiles',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Company Enrichment Status',
				value: 'get_company_enrichment_status',
				action: 'Get company enrichment status',
				description:
					'Read the stored Clay company enrichment for a contact (status, company, revenue/size buckets, industry, funding) without spending Clay credits',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_company_enrichment_status',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Enriched Profiles',
				value: 'get_enriched_profiles',
				action: 'Get enriched profiles',
				description:
					'Read enriched attributes (location, city, current company, headline/job title, follower count, skills) for a list of LinkedIn profile URLs, so you can filter/segment leads or feed ICP',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_enriched_profiles',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Enrichment Status',
				value: 'get_enrichment_status',
				action: 'Get enrichment status',
				description:
					'Check the current EMAIL enrichment status for a contact: whether it has been enriched, is queued, or has no task',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_enrichment_status',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Phone Enrichment Status',
				value: 'get_phone_enrichment_status',
				action: 'Get phone enrichment status',
				description:
					'Check the current phone enrichment status for a contact: whether it has been enriched, is queued, or has no task',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_phone_enrichment_status',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get URL Enrichments',
				value: 'get_url_enrichments',
				action: 'Get URL enrichments',
				description:
					'Read already-known email/phone for LinkedIn profile URLs from the shared cache — FREE, no lookups, nothing charged',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_url_enrichments',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
		],
		default: 'get_company_enrichment_status',
	},
	{
		displayName: 'Contact ID',
		name: 'contactId',
		description: 'Contact ID to enrich',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'contactId',
			},
		},
		displayOptions: {
			show: {
				resource: ['enrichment'],
				operation: ['enrich_contact_company'],
			},
		},
	},
	{
		displayName: 'Contact ID',
		name: 'contactId',
		description: 'Contact ID to enrich',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'contactId',
			},
		},
		displayOptions: {
			show: {
				resource: ['enrichment'],
				operation: ['enrich_contact_email'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['enrichment'],
				operation: ['enrich_contact_email'],
			},
		},
		options: [
			{
				displayName: 'Force Reenrich',
				name: 'forceReenrich',
				description: 'Whether to switch this on. Set true to re-enrich even if already done.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'forceReenrich',
					},
				},
			},
		],
	},
	{
		displayName: 'Contact ID',
		name: 'contactId',
		description: 'Contact ID to enrich',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'contactId',
			},
		},
		displayOptions: {
			show: {
				resource: ['enrichment'],
				operation: ['enrich_contact_phone'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['enrichment'],
				operation: ['enrich_contact_phone'],
			},
		},
		options: [
			{
				displayName: 'Force Reenrich',
				name: 'forceReenrich',
				description: 'Whether to switch this on. Set true to re-enrich even if already done.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'forceReenrich',
					},
				},
			},
		],
	},
	{
		displayName: 'Contact IDs',
		name: 'contactIds',
		description: 'Contact IDs to enrich (deduped; capped per request)',
		type: 'string',
		typeOptions: {
			multipleValues: true,
		},
		default: [],
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'contactIds',
			},
		},
		displayOptions: {
			show: {
				resource: ['enrichment'],
				operation: ['enrich_contacts_company_bulk'],
			},
		},
	},
	{
		displayName: 'Contact IDs',
		name: 'contactIds',
		description: 'Array of contact IDs to enrich (1–20)',
		type: 'string',
		typeOptions: {
			multipleValues: true,
		},
		default: [],
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'contactIds',
			},
		},
		displayOptions: {
			show: {
				resource: ['enrichment'],
				operation: ['enrich_contacts_email_bulk'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['enrichment'],
				operation: ['enrich_contacts_email_bulk'],
			},
		},
		options: [
			{
				displayName: 'Force Reenrich',
				name: 'forceReenrich',
				description:
					'Whether to switch this on. Set true to re-enrich contacts that were already enriched.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'forceReenrich',
					},
				},
			},
		],
	},
	{
		displayName: 'Contact IDs',
		name: 'contactIds',
		description: 'Array of contact IDs to enrich (1–20)',
		type: 'string',
		typeOptions: {
			multipleValues: true,
		},
		default: [],
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'contactIds',
			},
		},
		displayOptions: {
			show: {
				resource: ['enrichment'],
				operation: ['enrich_contacts_phone_bulk'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['enrichment'],
				operation: ['enrich_contacts_phone_bulk'],
			},
		},
		options: [
			{
				displayName: 'Force Reenrich',
				name: 'forceReenrich',
				description:
					'Whether to switch this on. Set true to re-enrich contacts that were already enriched.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'forceReenrich',
					},
				},
			},
		],
	},
	{
		displayName: 'Profile URLs',
		name: 'profileUrls',
		description:
			'LinkedIn profile URLs (1–200) — e.g. the linkedinUrl values from search_people / get_signal_leads, or a list the user pastes',
		type: 'string',
		typeOptions: {
			multipleValues: true,
		},
		default: [],
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'profileUrls',
			},
		},
		displayOptions: {
			show: {
				resource: ['enrichment'],
				operation: ['enrich_linkedin_urls'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['enrichment'],
				operation: ['enrich_linkedin_urls'],
			},
		},
		options: [
			{
				displayName: 'Confirm',
				name: 'confirm',
				description:
					'Whether to switch this on. false (default) = return the cost estimate only (nothing charged). true = run the lookups and charge for values found, after the user agreed.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'confirm',
					},
				},
			},
			{
				displayName: 'Fields',
				name: 'fields',
				description:
					'What to enrich: ["email"] (default), ["email","phone"], or ["phone"]. Each found value costs 1 credit.',
				type: 'multiOptions',
				options: [
					{
						name: 'Email',
						value: 'email',
					},
					{
						name: 'Phone',
						value: 'phone',
					},
				],
				default: ['email'],
				routing: {
					send: {
						type: 'body',
						property: 'fields',
					},
				},
			},
			{
				displayName: 'Force Reenrich',
				name: 'forceReenrich',
				description:
					'Whether to switch this on. Set true to re-query URLs already in cache (charges again on a find). Default false serves cache hits free.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'forceReenrich',
					},
				},
			},
		],
	},
	{
		displayName: 'Profile URLs',
		name: 'profileUrls',
		description:
			'LinkedIn profile URLs to enrich (1–500). Use the linkedinUrl values from get_signal_leads / social listening, or a raw list from the user.',
		type: 'string',
		typeOptions: {
			multipleValues: true,
		},
		default: [],
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'profileUrls',
			},
		},
		displayOptions: {
			show: {
				resource: ['enrichment'],
				operation: ['enrich_profiles'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['enrichment'],
				operation: ['enrich_profiles'],
			},
		},
		options: [
			{
				displayName: 'Confirm',
				name: 'confirm',
				description:
					'Whether to switch this on. false (default) = return the credit-cost estimate only (nothing is charged/queued). true = queue enrichment after the user has agreed to spend the credits.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'confirm',
					},
				},
			},
			{
				displayName: 'Force Reenrich',
				name: 'forceReenrich',
				description:
					'Whether to switch this on. Set true to re-enrich profiles that are already enriched (charges again). Default false skips them for free.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'forceReenrich',
					},
				},
			},
		],
	},
	{
		displayName: 'Contact ID',
		name: 'contactId',
		description: 'Contact ID to check',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'contactId',
			},
		},
		displayOptions: {
			show: {
				resource: ['enrichment'],
				operation: ['get_company_enrichment_status'],
			},
		},
	},
	{
		displayName: 'Profile URLs',
		name: 'profileUrls',
		description:
			'LinkedIn profile URLs to look up (1–500) — the same URLs you passed to enrich_profiles, or linkedinUrl values from get_signal_leads / social listening',
		type: 'string',
		typeOptions: {
			multipleValues: true,
		},
		default: [],
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'profileUrls',
			},
		},
		displayOptions: {
			show: {
				resource: ['enrichment'],
				operation: ['get_enriched_profiles'],
			},
		},
	},
	{
		displayName: 'Contact ID',
		name: 'contactId',
		description: 'Contact ID to check',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'contactId',
			},
		},
		displayOptions: {
			show: {
				resource: ['enrichment'],
				operation: ['get_enrichment_status'],
			},
		},
	},
	{
		displayName: 'Contact ID',
		name: 'contactId',
		description: 'Contact ID to check',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'contactId',
			},
		},
		displayOptions: {
			show: {
				resource: ['enrichment'],
				operation: ['get_phone_enrichment_status'],
			},
		},
	},
	{
		displayName: 'Profile URLs',
		name: 'profileUrls',
		description: 'LinkedIn profile URLs to look up (1–500)',
		type: 'string',
		typeOptions: {
			multipleValues: true,
		},
		default: [],
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'profileUrls',
			},
		},
		displayOptions: {
			show: {
				resource: ['enrichment'],
				operation: ['get_url_enrichments'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['enrichment'],
				operation: ['get_url_enrichments'],
			},
		},
		options: [
			{
				displayName: 'Fields',
				name: 'fields',
				description: 'Which cached fields to read: ["email"] (default), ["phone"], or both',
				type: 'multiOptions',
				options: [
					{
						name: 'Email',
						value: 'email',
					},
					{
						name: 'Phone',
						value: 'phone',
					},
				],
				default: ['email'],
				routing: {
					send: {
						type: 'body',
						property: 'fields',
					},
				},
			},
		],
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['inbox'],
			},
		},
		options: [
			{
				name: 'Find Cold Conversations',
				value: 'find_cold_conversations',
				action: 'Find cold conversations',
				description:
					'Find conversations that have gone quiet — no message from either side in N days (default 14) — so you can re-engage before they go fully cold',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/find_cold_conversations',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Find Unanswered Replies',
				value: 'find_unanswered_replies',
				action: 'Find unanswered replies',
				description:
					"Find conversations where the OTHER person sent the last message and you haven't replied — the people actively waiting on you (your warmest, most time-sensitive leads)",
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/find_unanswered_replies',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Conversation',
				value: 'get_conversation',
				action: 'Get conversation',
				description:
					'Read the message history of ONE LinkedIn conversation, oldest→newest, with each message flagged isFromMe',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_conversation',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get InMail Conversation',
				value: 'get_inmail_conversation',
				action: 'Get an inmail conversation',
				description:
					"Read the full history of ONE InMail conversation (or any conversation of the user's by chatId), oldest→newest, live from LinkedIn",
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_inmail_conversation',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get InMail Inbox',
				value: 'get_inmail_inbox',
				action: 'Get the inmail inbox',
				description:
					"List the user's InMail conversations — threads in LinkedIn's Sales Navigator / Recruiter inbox and InMail threads — read LIVE from LinkedIn, newest first",
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_inmail_inbox',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Unibox',
				value: 'get_unibox',
				action: 'Get the inbox',
				description: 'Get merged LinkedIn Unibox conversations for the active setup',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_unibox',
						body: {},
					},
					send: {
						paginate: true,
					},
					operations: {
						pagination: paginate({
							by: 'page',
							list: 'inbox',
							pageSize: 200,
							pages: 'totalPages',
							more: 'hasMore',
							total: 'total',
						}),
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Unibox Task Status',
				value: 'get_unibox_task_status',
				action: 'Get the status of an inbox sync or reply',
				description: 'Get task status for Unibox sync, thread fetch, or reply send tasks',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_unibox_task_status',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Unibox Unread Count',
				value: 'get_unibox_unread_count',
				action: 'Get the number of unread conversations',
				description: 'Count unread LinkedIn Unibox inbox items for the active setup',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_unibox_unread_count',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Mark Unibox Thread Read',
				value: 'mark_unibox_thread_read',
				action: 'Mark a conversation read',
				description: 'Mark a Unibox thread as read using the readKey returned by get_unibox',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/mark_unibox_thread_read',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Send InMail Reply',
				value: 'send_inmail_reply',
				action: 'Reply to an inmail',
				description:
					"Reply inside an existing InMail conversation (by chatId from get_inmail_inbox), from the user's own LinkedIn account",
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/send_inmail_reply',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Send Unibox Reply',
				value: 'send_unibox_reply',
				action: 'Reply to a conversation',
				description: 'Queue a manual LinkedIn reply from Unibox',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/send_unibox_reply',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Sync Unibox',
				value: 'sync_unibox',
				action: 'Sync the inbox',
				description:
					'Queue a LinkedIn Unibox sync for the active setup, or fetch one conversation thread',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/sync_unibox',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
		],
		default: 'find_cold_conversations',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 200,
		},
		default: 50,
		description: 'Max number of results to return',
		routing: {
			send: {
				type: 'body',
				property: 'limit',
			},
		},
		displayOptions: {
			show: {
				resource: ['inbox'],
				operation: ['find_cold_conversations'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['inbox'],
				operation: ['find_cold_conversations'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description: 'Restrict to one LinkedIn sender. Omit to span all live senders.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Days',
				name: 'days',
				description:
					"Consider a conversation cold when there's been no message for at least this many days (default 14)",
				type: 'number',
				default: 14,
				typeOptions: {
					minValue: 1,
					maxValue: 365,
				},
				routing: {
					send: {
						type: 'body',
						property: 'days',
					},
				},
			},
			{
				displayName: 'Only with Reply',
				name: 'onlyWithReply',
				description:
					'Whether to switch this on. true = only threads where the other person replied at least once (skips pure no-response outreach). Requires the full thread to be synced.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'onlyWithReply',
					},
				},
			},
		],
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 200,
		},
		default: 50,
		description: 'Max number of results to return',
		routing: {
			send: {
				type: 'body',
				property: 'limit',
			},
		},
		displayOptions: {
			show: {
				resource: ['inbox'],
				operation: ['find_unanswered_replies'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['inbox'],
				operation: ['find_unanswered_replies'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Restrict to one LinkedIn sender. Omit to span all live senders in this setup.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Conversation URL',
		name: 'conversationUrl',
		description:
			"The other person's LinkedIn profile URL (https://linkedin.com/in/…) — preferred — or a /messaging/thread/ URL",
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'conversationUrl',
			},
		},
		displayOptions: {
			show: {
				resource: ['inbox'],
				operation: ['get_conversation'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['inbox'],
				operation: ['get_conversation'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your senders owns this conversation (its linkedinConnections _id). Omit to search your live senders; for a live fetch the first live sender is used.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Refresh',
				name: 'refresh',
				description:
					"Whether to switch this on. true = fetch live from LinkedIn even if cached, and when no chat is found re-sync the person's chats even if a re-sync in the last day found nothing. false (default) = return the cached thread when available, else fetch live.",
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'refresh',
					},
				},
			},
		],
	},
	{
		displayName: 'Chat ID',
		name: 'chatId',
		description: 'The chatId from get_inmail_inbox',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'chatId',
			},
		},
		displayOptions: {
			show: {
				resource: ['inbox'],
				operation: ['get_inmail_conversation'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['inbox'],
				operation: ['get_inmail_conversation'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description: 'The sender account that owns this thread (optional)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Refresh',
				name: 'refresh',
				description:
					"Whether to switch this on. true = first re-sync this conversation from LinkedIn, then read (slower, up to ~25s). Use when messages you know were sent — e.g. from the LinkedIn or Sales Navigator UI — are missing. The result's refresh field reports how the re-sync went.",
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'refresh',
					},
				},
			},
		],
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
		default: 50,
		description: 'Max number of results to return',
		routing: {
			send: {
				type: 'body',
				property: 'limit',
			},
		},
		displayOptions: {
			show: {
				resource: ['inbox'],
				operation: ['get_inmail_inbox'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['inbox'],
				operation: ['get_inmail_inbox'],
			},
		},
		options: [
			{
				displayName: 'Awaiting Reply Only',
				name: 'awaitingReplyOnly',
				description:
					'Whether to switch this on. Only threads where the other person wrote last (they are waiting on you).',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'awaitingReplyOnly',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Only this sender account (its linkedinConnections _id). Omit to read every live sender on the active setup.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Profile URL',
				name: 'profileUrl',
				description:
					"The person's LinkedIn profile URL (linkedin.com/in/…) or Sales Navigator lead URL. Returns every conversation with that one person — InMail and classic, each tagged by inbox — instead of scanning the inbox.",
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'profileUrl',
					},
				},
			},
			{
				displayName: 'Refresh',
				name: 'refresh',
				description:
					"Whether to switch this on. With profileUrl: true = re-sync the person's chats from LinkedIn when none are found, even if a re-sync in the last day found nothing. false (default) = skip that repeat (each re-sync is a LinkedIn read).",
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'refresh',
					},
				},
			},
			{
				displayName: 'Search',
				name: 'search',
				description:
					'Filter by participant name, headline or latest message text. Ranked: name/headline matches first, then latest-message matches, each newest first; every row says matchedBy. To find one known person, prefer profileUrl.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'search',
					},
				},
			},
			{
				displayName: 'Sync Inbox',
				name: 'syncInbox',
				description:
					"Whether to switch this on. true = first pull the ACTIVE Sales Navigator contract's InMail inbox from LinkedIn (after a contract switch, or when threads seem missing), then read. Slower (~25s).",
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'syncInbox',
					},
				},
			},
			{
				displayName: 'Unread Only',
				name: 'unreadOnly',
				description: 'Whether to switch this on. Only threads with unread messages.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'unreadOnly',
					},
				},
			},
		],
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['inbox'],
				operation: ['get_unibox'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['inbox'],
				operation: ['get_unibox'],
				returnAll: [false],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['inbox'],
				operation: ['get_unibox'],
			},
		},
		options: [
			{
				displayName: 'Include Threads',
				name: 'includeThreads',
				description:
					'Whether to switch this on. Attach the full message history (oldest→newest) to each conversation row under `thread`, resolved server-side — not just the latest message. Use this to read a specific conversation by searching the lead name.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'includeThreads',
					},
				},
			},
			{
				displayName: 'Search',
				name: 'search',
				description: 'Search by participant, headline, message, or connection label',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'search',
					},
				},
			},
			{
				displayName: 'Unread Only',
				name: 'unreadOnly',
				description: 'Whether to switch this on. Only return unread conversations.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'unreadOnly',
					},
				},
			},
		],
	},
	{
		displayName: 'Task ID',
		name: 'taskId',
		description: 'Task ID returned by sync_unibox or send_unibox_reply',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'taskId',
			},
		},
		displayOptions: {
			show: {
				resource: ['inbox'],
				operation: ['get_unibox_task_status'],
			},
		},
	},
	{
		displayName: 'Read Key',
		name: 'readKey',
		description: 'ReadKey returned by get_unibox',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'readKey',
			},
		},
		displayOptions: {
			show: {
				resource: ['inbox'],
				operation: ['mark_unibox_thread_read'],
			},
		},
	},
	{
		displayName: 'Chat ID',
		name: 'chatId',
		description: 'The chatId from get_inmail_inbox / get_inmail_conversation',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'chatId',
			},
		},
		displayOptions: {
			show: {
				resource: ['inbox'],
				operation: ['send_inmail_reply'],
			},
		},
	},
	{
		displayName: 'Message',
		name: 'message',
		description: 'Reply text (1-8000 chars)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'message',
			},
		},
		displayOptions: {
			show: {
				resource: ['inbox'],
				operation: ['send_inmail_reply'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['inbox'],
				operation: ['send_inmail_reply'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description: 'The sender account that owns this thread (optional)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Conversation URL',
		name: 'conversationUrl',
		description: 'LinkedIn conversation/thread URL to reply to',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'conversationUrl',
			},
		},
		displayOptions: {
			show: {
				resource: ['inbox'],
				operation: ['send_unibox_reply'],
			},
		},
	},
	{
		displayName: 'Message',
		name: 'message',
		description: 'Reply text to send (1-8000 chars)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'message',
			},
		},
		displayOptions: {
			show: {
				resource: ['inbox'],
				operation: ['send_unibox_reply'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['inbox'],
				operation: ['send_unibox_reply'],
			},
		},
		options: [
			{
				displayName: 'LinkedIn Connection ID',
				name: 'linkedinConnectionId',
				description:
					'LinkedIn account to send from. Omit to use the active connected account for the setup.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'linkedinConnectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['inbox'],
				operation: ['sync_unibox'],
			},
		},
		options: [
			{
				displayName: 'Conversation URL',
				name: 'conversationUrl',
				description:
					"LinkedIn conversation/thread URL, or the person's profile URL. Required when threadOnly=true to fetch just that one conversation.",
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'conversationUrl',
					},
				},
			},
			{
				displayName: 'LinkedIn Connection ID',
				name: 'linkedinConnectionId',
				description:
					'LinkedIn account to sync from. Omit to use all active accounts for the setup.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'linkedinConnectionId',
					},
				},
			},
			{
				displayName: 'Thread Only',
				name: 'threadOnly',
				description:
					'Whether to switch this on. When true (with conversationUrl set), fetch only that one conversation thread instead of syncing the whole inbox.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'threadOnly',
					},
				},
			},
		],
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['list'],
			},
		},
		options: [
			{
				name: 'Create List',
				value: 'create_list',
				action: 'Create list',
				description: 'Create a new LinkedNav contact list in the active setup',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/create_list',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Delete List',
				value: 'delete_list',
				action: 'Delete list',
				description: 'Delete a non-default list from the active setup',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/delete_list',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get List Contacts',
				value: 'get_list_contacts',
				action: 'Get list contacts',
				description: 'Get contacts belonging to a specific list',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_list_contacts',
						body: {},
					},
					send: {
						paginate: true,
					},
					operations: {
						pagination: paginate({ by: 'page', list: 'contacts', pageSize: 100, total: 'total' }),
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Lists',
				value: 'get_lists',
				action: 'Get lists',
				description: 'Get all contact lists in LinkedNav for this account',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_lists',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Update List',
				value: 'update_list',
				action: 'Update list',
				description: 'Update an existing LinkedNav contact list in the active setup',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/update_list',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
		],
		default: 'get_list_contacts',
	},
	{
		displayName: 'Name',
		name: 'name',
		description: 'List name',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
		displayOptions: {
			show: {
				resource: ['list'],
				operation: ['create_list'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['list'],
				operation: ['create_list'],
			},
		},
		options: [
			{
				displayName: 'Color',
				name: 'color',
				description: 'Hex color, e.g. #0077b5',
				type: 'color',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'color',
					},
				},
			},
			{
				displayName: 'Description',
				name: 'description',
				description: 'Optional list description',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'description',
					},
				},
			},
			{
				displayName: 'Message Template',
				name: 'messageTemplate',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'messageTemplate',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'List ID',
		name: 'listId',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'listId',
			},
		},
		displayOptions: {
			show: {
				resource: ['list'],
				operation: ['delete_list'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['list'],
				operation: ['delete_list'],
			},
		},
		options: [
			{
				displayName: 'Confirm',
				name: 'confirm',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'confirm',
					},
				},
			},
		],
	},
	{
		displayName: 'List ID',
		name: 'listId',
		description: 'The list ID to fetch contacts for',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'listId',
			},
		},
		displayOptions: {
			show: {
				resource: ['list'],
				operation: ['get_list_contacts'],
			},
		},
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['list'],
				operation: ['get_list_contacts'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['list'],
				operation: ['get_list_contacts'],
				returnAll: [false],
			},
		},
	},
	{
		displayName: 'List ID',
		name: 'listId',
		description: 'List ID to update',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'listId',
			},
		},
		displayOptions: {
			show: {
				resource: ['list'],
				operation: ['update_list'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['list'],
				operation: ['update_list'],
			},
		},
		options: [
			{
				displayName: 'Color',
				name: 'color',
				type: 'color',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'color',
					},
				},
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'description',
					},
				},
			},
			{
				displayName: 'Message Template',
				name: 'messageTemplate',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'messageTemplate',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'name',
					},
				},
			},
		],
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['message'],
			},
		},
		options: [
			{
				name: 'Delete Chat',
				value: 'delete_chat',
				action: 'Delete chat',
				description: 'Delete ONE of your LinkedIn conversations from your inbox',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/delete_chat',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Delete Message',
				value: 'delete_message',
				action: 'Delete message',
				description: 'Delete ONE message you sent on LinkedIn, for everyone in the conversation',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/delete_message',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Edit Message',
				value: 'edit_message',
				action: 'Edit message',
				description: 'Change the text of ONE message you sent on LinkedIn',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/edit_message',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Chat',
				value: 'get_chat',
				action: 'Get chat',
				description:
					'Read ONE of your LinkedIn conversations by ID: who it is with, its subject, unread count and last activity',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_chat',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Chat Attendee',
				value: 'get_chat_attendee',
				action: 'Get chat attendee',
				description:
					'Read ONE person your LinkedIn account has talked to, by participant ID: name, profile URL, member ID, headline',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_chat_attendee',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Chat Attendee Picture',
				value: 'get_chat_attendee_picture',
				action: 'Get chat attendee picture',
				description:
					'Download the profile picture of ONE person your LinkedIn account has talked to',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_chat_attendee_picture',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Message',
				value: 'get_message',
				action: 'Get message',
				description:
					'Read ONE of your LinkedIn messages by ID: text, sender, time, attachments and reactions',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_message',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Message Attachment',
				value: 'get_message_attachment',
				action: 'Get message attachment',
				description:
					'Download ONE file attached to one of your LinkedIn messages (an image, document, voice or video note)',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_message_attachment',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'List Attendee Chats',
				value: 'list_attendee_chats',
				action: 'List attendee chats',
				description:
					'List the one-to-one conversations your LinkedIn account has with ONE person (their participant ID or LinkedIn member ID)',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/list_attendee_chats',
						body: {},
					},
					send: {
						paginate: true,
					},
					operations: {
						pagination: paginate({
							by: 'cursor',
							list: 'chats',
							pageSize: 250,
							next: 'nextCursor',
						}),
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'List Attendee Messages',
				value: 'list_attendee_messages',
				action: 'List attendee messages',
				description:
					'Read every message exchanged between your LinkedIn account and ONE person (their participant ID or LinkedIn member ID), newest first, across all conversations with them',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/list_attendee_messages',
						body: {},
					},
					send: {
						paginate: true,
					},
					operations: {
						pagination: paginate({
							by: 'cursor',
							list: 'messages',
							pageSize: 250,
							next: 'nextCursor',
						}),
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'List Chat Attendees',
				value: 'list_chat_attendees',
				action: 'List chat attendees',
				description:
					"List everyone your LinkedIn account has a conversation with: each person's participant ID, name, profile URL and member ID",
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/list_chat_attendees',
						body: {},
					},
					send: {
						paginate: true,
					},
					operations: {
						pagination: paginate({
							by: 'cursor',
							list: 'attendees',
							pageSize: 250,
							next: 'nextCursor',
						}),
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'List Chat Messages',
				value: 'list_chat_messages',
				action: 'List chat messages',
				description:
					'Read the messages of ONE of your LinkedIn conversations, newest first: text, sender, time, attachments (their IDs work with get_message_attachment) and reactions',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/list_chat_messages',
						body: {},
					},
					send: {
						paginate: true,
					},
					operations: {
						pagination: paginate({
							by: 'cursor',
							list: 'messages',
							pageSize: 250,
							next: 'nextCursor',
						}),
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'List Chat Participants',
				value: 'list_chat_participants',
				action: 'List chat participants',
				description:
					"List who is in ONE of your LinkedIn conversations: each participant's ID, name, profile URL and member ID",
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/list_chat_participants',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'List Chats',
				value: 'list_chats',
				action: 'List chats',
				description:
					"List your LinkedIn conversations, newest first, read live from your own account: each conversation's ID, who it is with, unread count and last activity",
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/list_chats',
						body: {},
					},
					send: {
						paginate: true,
					},
					operations: {
						pagination: paginate({
							by: 'cursor',
							list: 'chats',
							pageSize: 250,
							next: 'nextCursor',
						}),
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'List Messages',
				value: 'list_messages',
				action: 'List messages',
				description:
					'Read your LinkedIn messages across ALL conversations, newest first — useful for "what came in since yesterday"',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/list_messages',
						body: {},
					},
					send: {
						paginate: true,
					},
					operations: {
						pagination: paginate({
							by: 'cursor',
							list: 'messages',
							pageSize: 250,
							next: 'nextCursor',
						}),
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'React to Message',
				value: 'react_to_message',
				action: 'React to message',
				description: 'Add an emoji reaction to ONE message in one of your LinkedIn conversations',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/react_to_message',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Resync Attendee Chats',
				value: 'resync_attendee_chats',
				action: 'Resync attendee chats',
				description:
					'Re-read every conversation between your LinkedIn account and ONE person, when their history looks incomplete',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/resync_attendee_chats',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Resync Chat',
				value: 'resync_chat',
				action: 'Resync chat',
				description:
					'Re-read ONE of your LinkedIn conversations from its beginning, when its history looks incomplete',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/resync_chat',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Send Chat Message',
				value: 'send_chat_message',
				action: 'Send chat message',
				description:
					'Send ONE message into one of your existing LinkedIn conversations, now — with files, a voice note or a video note, and optionally as an answer to a specific message',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/send_chat_message',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Send Message',
				value: 'send_message',
				action: 'Send message',
				description: 'Send ONE LinkedIn message from your own account, now',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/send_message',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Set Chat Status',
				value: 'set_chat_status',
				action: 'Set chat status',
				description:
					'Mark ONE of your LinkedIn conversations as read or unread, and / or mute or unmute it',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/set_chat_status',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Start Conversation',
				value: 'start_conversation',
				action: 'Start conversation',
				description:
					'Start a NEW LinkedIn conversation from your own account, now — for the cases send_message does not cover: an InMail to someone you are not connected to, a message through Sales Navigator or Recruiter, a group conversation, a message to a company page, a job applicant, or someone whose invitation you have not answered',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/start_conversation',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
		],
		default: 'get_chat',
	},
	{
		displayName: 'Chat ID',
		name: 'chatId',
		description: 'The conversation ID (from list_chats)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'chatId',
			},
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['delete_chat'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['delete_chat'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Message ID',
		name: 'messageId',
		description: 'The message ID (from list_chat_messages)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'messageId',
			},
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['delete_message'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['delete_message'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Message ID',
		name: 'messageId',
		description: 'The message ID (from list_chat_messages)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'messageId',
			},
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['edit_message'],
			},
		},
	},
	{
		displayName: 'Text',
		name: 'text',
		description: 'The new text',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'text',
			},
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['edit_message'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['edit_message'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Chat ID',
		name: 'chatId',
		description: 'The conversation ID (from list_chats)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'chatId',
			},
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['get_chat'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['get_chat'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Attendee ID',
		name: 'attendeeId',
		description: 'The participant ID (from list_chat_attendees or list_chat_participants)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'attendeeId',
			},
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['get_chat_attendee'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['get_chat_attendee'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Attendee ID',
		name: 'attendeeId',
		description: 'The participant ID (from list_chat_attendees or list_chat_participants)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'attendeeId',
			},
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['get_chat_attendee_picture'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['get_chat_attendee_picture'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Message ID',
		name: 'messageId',
		description: 'The message ID (from list_chat_messages)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'messageId',
			},
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['get_message'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['get_message'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Message ID',
		name: 'messageId',
		description: 'The message ID (from list_chat_messages)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'messageId',
			},
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['get_message_attachment'],
			},
		},
	},
	{
		displayName: 'Attachment ID',
		name: 'attachmentId',
		description: "The attachment ID (from the message's attachments)",
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'attachmentId',
			},
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['get_message_attachment'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['get_message_attachment'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Attendee ID',
		name: 'attendeeId',
		description: 'The participant ID (from list_chat_attendees or list_chat_participants)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'attendeeId',
			},
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['list_attendee_chats'],
			},
		},
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['list_attendee_chats'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['list_attendee_chats'],
				returnAll: [false],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['list_attendee_chats'],
			},
		},
		options: [
			{
				displayName: 'After',
				name: 'after',
				description:
					'Only items created after this moment (ISO 8601 UTC, e.g. 2026-10-01T00:00:00.000Z)',
				type: 'dateTime',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'after',
					},
				},
			},
			{
				displayName: 'Before',
				name: 'before',
				description:
					'Only items created before this moment (ISO 8601 UTC, e.g. 2026-10-01T00:00:00.000Z)',
				type: 'dateTime',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'before',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Attendee ID',
		name: 'attendeeId',
		description: 'The participant ID (from list_chat_attendees or list_chat_participants)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'attendeeId',
			},
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['list_attendee_messages'],
			},
		},
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['list_attendee_messages'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['list_attendee_messages'],
				returnAll: [false],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['list_attendee_messages'],
			},
		},
		options: [
			{
				displayName: 'After',
				name: 'after',
				description:
					'Only items created after this moment (ISO 8601 UTC, e.g. 2026-10-01T00:00:00.000Z)',
				type: 'dateTime',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'after',
					},
				},
			},
			{
				displayName: 'Before',
				name: 'before',
				description:
					'Only items created before this moment (ISO 8601 UTC, e.g. 2026-10-01T00:00:00.000Z)',
				type: 'dateTime',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'before',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['list_chat_attendees'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['list_chat_attendees'],
				returnAll: [false],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['list_chat_attendees'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Chat ID',
		name: 'chatId',
		description: 'The conversation ID (from list_chats)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'chatId',
			},
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['list_chat_messages'],
			},
		},
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['list_chat_messages'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['list_chat_messages'],
				returnAll: [false],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['list_chat_messages'],
			},
		},
		options: [
			{
				displayName: 'After',
				name: 'after',
				description:
					'Only items created after this moment (ISO 8601 UTC, e.g. 2026-10-01T00:00:00.000Z)',
				type: 'dateTime',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'after',
					},
				},
			},
			{
				displayName: 'Before',
				name: 'before',
				description:
					'Only items created before this moment (ISO 8601 UTC, e.g. 2026-10-01T00:00:00.000Z)',
				type: 'dateTime',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'before',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Sender ID',
				name: 'senderId',
				description: 'Only messages from this participant ID',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'senderId',
					},
				},
			},
		],
	},
	{
		displayName: 'Chat ID',
		name: 'chatId',
		description: 'The conversation ID (from list_chats)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'chatId',
			},
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['list_chat_participants'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['list_chat_participants'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['list_chats'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['list_chats'],
				returnAll: [false],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['list_chats'],
			},
		},
		options: [
			{
				displayName: 'After',
				name: 'after',
				description:
					'Only items created after this moment (ISO 8601 UTC, e.g. 2026-10-01T00:00:00.000Z)',
				type: 'dateTime',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'after',
					},
				},
			},
			{
				displayName: 'Before',
				name: 'before',
				description:
					'Only items created before this moment (ISO 8601 UTC, e.g. 2026-10-01T00:00:00.000Z)',
				type: 'dateTime',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'before',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Unread',
				name: 'unread',
				description:
					'Whether to switch this on. true: only unread conversations. false: only read ones. Omit for both.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'unread',
					},
				},
			},
		],
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['list_messages'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['list_messages'],
				returnAll: [false],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['list_messages'],
			},
		},
		options: [
			{
				displayName: 'After',
				name: 'after',
				description:
					'Only items created after this moment (ISO 8601 UTC, e.g. 2026-10-01T00:00:00.000Z)',
				type: 'dateTime',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'after',
					},
				},
			},
			{
				displayName: 'Before',
				name: 'before',
				description:
					'Only items created before this moment (ISO 8601 UTC, e.g. 2026-10-01T00:00:00.000Z)',
				type: 'dateTime',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'before',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Sender ID',
				name: 'senderId',
				description: 'Only messages from this participant ID',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'senderId',
					},
				},
			},
		],
	},
	{
		displayName: 'Message ID',
		name: 'messageId',
		description: 'The message ID (from list_chat_messages)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'messageId',
			},
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['react_to_message'],
			},
		},
	},
	{
		displayName: 'Reaction',
		name: 'reaction',
		description: 'The emoji to react with, e.g. 👍',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'reaction',
			},
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['react_to_message'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['react_to_message'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Attendee ID',
		name: 'attendeeId',
		description: 'The participant ID (from list_chat_attendees or list_chat_participants)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'attendeeId',
			},
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['resync_attendee_chats'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['resync_attendee_chats'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Chat ID',
		name: 'chatId',
		description: 'The conversation ID (from list_chats)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'chatId',
			},
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['resync_chat'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['resync_chat'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Chat ID',
		name: 'chatId',
		description: 'The conversation ID (from list_chats)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'chatId',
			},
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['send_chat_message'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['send_chat_message'],
			},
		},
		options: [
			{
				displayName: 'Attachment URLs',
				name: 'attachmentUrls',
				description:
					'Files or images to attach. Public https links; each file up to 10 MB, 20 MB in total.',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'attachmentUrls',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Reply to Message ID',
				name: 'replyToMessageId',
				description: 'Quote and answer this message of the conversation',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'replyToMessageId',
					},
				},
			},
			{
				displayName: 'Text',
				name: 'text',
				description: 'The message text. Optional when a file or note is sent.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'text',
					},
				},
			},
			{
				displayName: 'Video Message URL',
				name: 'videoMessageUrl',
				description: 'A video file to send as a video note. A public https link, up to 10 MB.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'videoMessageUrl',
					},
				},
			},
			{
				displayName: 'Voice Message URL',
				name: 'voiceMessageUrl',
				description:
					'An audio file to send as a voice note (.m4a preferred). A public https link, up to 10 MB.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'voiceMessageUrl',
					},
				},
			},
		],
	},
	{
		displayName: 'Text',
		name: 'text',
		description: 'The message text',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'text',
			},
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['send_message'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['send_message'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Conversation ID',
				name: 'conversationId',
				description: 'ID of an existing conversation to send into, instead of a profile URL',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'conversationId',
					},
				},
			},
			{
				displayName: 'Profile URL',
				name: 'profileUrl',
				description: 'LinkedIn profile URL of the 1st-degree connection to message',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'profileUrl',
					},
				},
			},
		],
	},
	{
		displayName: 'Chat ID',
		name: 'chatId',
		description: 'The conversation ID (from list_chats)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'chatId',
			},
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['set_chat_status'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['set_chat_status'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Muted',
				name: 'muted',
				description: 'Whether to switch this on. true mutes its notifications, false unmutes.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'muted',
					},
				},
			},
			{
				displayName: 'Read',
				name: 'read',
				description: 'Whether to switch this on. true marks it read, false marks it unread.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'read',
					},
				},
			},
		],
	},
	{
		displayName: 'To',
		name: 'to',
		description:
			'Who to write to: LinkedIn profile URLs or member IDs. One person, or several for a group conversation. For a company page pass its messaging ID.',
		type: 'string',
		typeOptions: {
			multipleValues: true,
		},
		default: [],
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'to',
			},
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['start_conversation'],
			},
		},
	},
	{
		displayName: 'Text',
		name: 'text',
		description: 'The first message',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'text',
			},
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['start_conversation'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['start_conversation'],
			},
		},
		options: [
			{
				displayName: 'Applicant ID',
				name: 'applicantId',
				description:
					'Required when writing to an applicant of your job posting (from list_job_applicants)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'applicantId',
					},
				},
			},
			{
				displayName: 'Attachment URLs',
				name: 'attachmentUrls',
				description:
					'Files or images to attach. Public https links; each file up to 10 MB, 20 MB in total.',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'attachmentUrls',
					},
				},
			},
			{
				displayName: 'Company Topic',
				name: 'companyTopic',
				description: 'Required when writing to a company page',
				type: 'options',
				options: [
					{
						name: 'Careers',
						value: 'careers',
					},
					{
						name: 'Other',
						value: 'other',
					},
					{
						name: 'Request Demo',
						value: 'request_demo',
					},
					{
						name: 'Service Request',
						value: 'service_request',
					},
					{
						name: 'Support',
						value: 'support',
					},
				],
				default: 'careers',
				routing: {
					send: {
						type: 'body',
						property: 'companyTopic',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Group ID',
				name: 'groupId',
				description: 'Required when writing to someone through a LinkedIn group you share',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'groupId',
					},
				},
			},
			{
				displayName: 'InMail',
				name: 'inmail',
				description:
					'Whether to switch this on. classic only: send as an InMail (to someone you are not connected to).',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'inmail',
					},
				},
			},
			{
				displayName: 'Invitation ID',
				name: 'invitationId',
				description:
					'Required when writing to someone whose invitation you have neither accepted nor declined (from list_received_invitations)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'invitationId',
					},
				},
			},
			{
				displayName: 'Recruiter',
				name: 'recruiter',
				description:
					'Via recruiter only: signature, hiringProjectId (the project to start the conversation in), jobPostingId, sourcingChannel, emailAddress (send by email instead of InMail), visibility (default PRIVATE), inmailIntent, and followUp { subject, text, days 3–28 or weeks 1–4, timezone } to schedule a follow-up (Recruiter PRO)',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'recruiter',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Subject',
				name: 'subject',
				description: 'Subject line (InMail)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'subject',
					},
				},
			},
			{
				displayName: 'Via',
				name: 'via',
				description:
					'Which LinkedIn product sends it. sales_navigator and recruiter need that seat on your account.',
				type: 'options',
				options: [
					{
						name: 'Classic',
						value: 'classic',
					},
					{
						name: 'Recruiter',
						value: 'recruiter',
					},
					{
						name: 'Sales Navigator',
						value: 'sales_navigator',
					},
				],
				default: 'classic',
				routing: {
					send: {
						type: 'body',
						property: 'via',
					},
				},
			},
			{
				displayName: 'Video Message URL',
				name: 'videoMessageUrl',
				description: 'A video file to send as a video note. A public https link, up to 10 MB.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'videoMessageUrl',
					},
				},
			},
			{
				displayName: 'Voice Message URL',
				name: 'voiceMessageUrl',
				description:
					'An audio file to send as a voice note (.m4a preferred). A public https link, up to 10 MB.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'voiceMessageUrl',
					},
				},
			},
		],
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['network'],
			},
		},
		options: [
			{
				name: 'Find Connections Never Messaged',
				value: 'find_connections_never_messaged',
				action: 'Find connections never messaged',
				description:
					'Find people you are CONNECTED WITH on LinkedIn but have NEVER exchanged a message with — the warm-but-untapped part of your network',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/find_connections_never_messaged',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Find Engagers Not Connected',
				value: 'find_engagers_not_connected',
				action: 'Find engagers not connected',
				description:
					'From the people who reacted or commented on a LinkedIn post, return only the ones you are NOT already connected to — lead-ready rows shaped for create_leads_bulk (with engagerType and, for commenters, their comment as {{comment}})',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/find_engagers_not_connected',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get My Connections',
				value: 'get_my_connections',
				action: 'Get my connections',
				description:
					"List the connected LinkedIn account's own 1st-degree connections (people you're connected WITH), near-instantly",
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_my_connections',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Pending Invitations',
				value: 'get_pending_invitations',
				action: 'Get pending invitations',
				description:
					"List the connection invitations you've SENT that are still pending (not yet accepted), newest first, with each person and how many days ago it was sent",
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_pending_invitations',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'List Followers',
				value: 'list_followers',
				action: 'List followers',
				description:
					"List who follows you on LinkedIn — or, with `of`, who follows another person or a company page (their member ID or the company's numeric ID)",
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/list_followers',
						body: {},
					},
					send: {
						paginate: true,
					},
					operations: {
						pagination: paginate({
							by: 'cursor',
							list: 'followers',
							pageSize: 100,
							next: 'nextCursor',
						}),
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'List Received Invitations',
				value: 'list_received_invitations',
				action: 'List received invitations',
				description:
					'List the connection invitations other people have sent you that you have not answered yet, read live from your own LinkedIn account: who sent each one, their headline, any note, and the invitationId that respond_to_invitation takes',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/list_received_invitations',
						body: {},
					},
					send: {
						paginate: true,
					},
					operations: {
						pagination: paginate({
							by: 'cursor',
							list: 'invitations',
							pageSize: 50,
							next: 'nextCursor',
						}),
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Preview Withdraw Connections',
				value: 'preview_withdraw_connections',
				action: 'Preview withdraw connections',
				description: 'Standard/Pro plans only',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/preview_withdraw_connections',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Respond to Invitation',
				value: 'respond_to_invitation',
				action: 'Respond to invitation',
				description:
					'Accept or decline ONE connection invitation you received (its invitationId from list_received_invitations)',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/respond_to_invitation',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Send Invitation',
				value: 'send_invitation',
				action: 'Send invitation',
				description: 'Send ONE LinkedIn connection invitation from your own account, now',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/send_invitation',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Withdraw Connections',
				value: 'withdraw_connections',
				action: 'Withdraw connections',
				description: 'Standard/Pro plans only',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/withdraw_connections',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Withdraw Invitation',
				value: 'withdraw_invitation',
				action: 'Withdraw invitation',
				description:
					'Take back ONE connection invitation you sent that is still unanswered, now: its invitationId from get_pending_invitations, or the one send_invitation returned',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/withdraw_invitation',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
		],
		default: 'find_connections_never_messaged',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 200,
		},
		default: 50,
		description: 'Max number of results to return',
		routing: {
			send: {
				type: 'body',
				property: 'limit',
			},
		},
		displayOptions: {
			show: {
				resource: ['network'],
				operation: ['find_connections_never_messaged'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['network'],
				operation: ['find_connections_never_messaged'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Restrict to one LinkedIn sender. Omit to span all live senders in this setup.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Refresh',
				name: 'refresh',
				description:
					'Whether to switch this on. true = pull the latest connections live before the join. false (default) = use the cached connection list.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'refresh',
					},
				},
			},
			{
				displayName: 'Since',
				name: 'since',
				description:
					"ISO date. Only consider connections made on/after this date (e.g. focus on recent connects you haven't reached out to).",
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'since',
					},
				},
			},
		],
	},
	{
		displayName: 'Post URL',
		name: 'postUrl',
		description: 'The LinkedIn post URL (activity/share/ugcPost URL)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'postUrl',
			},
		},
		displayOptions: {
			show: {
				resource: ['network'],
				operation: ['find_engagers_not_connected'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 200,
		},
		default: 50,
		description: 'Max number of results to return',
		routing: {
			send: {
				type: 'body',
				property: 'limit',
			},
		},
		displayOptions: {
			show: {
				resource: ['network'],
				operation: ['find_engagers_not_connected'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['network'],
				operation: ['find_engagers_not_connected'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description: 'Which sender to read through. Omit to use the first live sender.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Max Comments',
				name: 'maxComments',
				description: 'Max commenters to scan (1–100, default 100)',
				type: 'number',
				default: 100,
				typeOptions: {
					minValue: 1,
					maxValue: 100,
				},
				routing: {
					send: {
						type: 'body',
						property: 'maxComments',
					},
				},
			},
			{
				displayName: 'Max Reactions',
				name: 'maxReactions',
				description: 'Max reactors to scan (1–100, default 100)',
				type: 'number',
				default: 100,
				typeOptions: {
					minValue: 1,
					maxValue: 100,
				},
				routing: {
					send: {
						type: 'body',
						property: 'maxReactions',
					},
				},
			},
		],
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 500,
		},
		default: 50,
		description: 'Max number of results to return',
		routing: {
			send: {
				type: 'body',
				property: 'limit',
			},
		},
		displayOptions: {
			show: {
				resource: ['network'],
				operation: ['get_my_connections'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['network'],
				operation: ['get_my_connections'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Restrict to one LinkedIn sender (its linkedinConnections _id from get_linkedin_accounts). Omit to merge across all your live senders in this setup.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Refresh',
				name: 'refresh',
				description:
					'Whether to switch this on. true = pull the latest connections live from LinkedIn and refresh the cache (slower). false (default) = serve from cache, refreshing live only when the cache is empty or stale.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'refresh',
					},
				},
			},
			{
				displayName: 'Search',
				name: 'search',
				description: "Case-insensitive substring matched against each person's name and headline",
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'search',
					},
				},
			},
			{
				displayName: 'Since',
				name: 'since',
				description:
					'ISO date (e.g. "2026-01-01"). Only return connections made on/after this date.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'since',
					},
				},
			},
		],
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 300,
		},
		default: 50,
		description: 'Max number of results to return',
		routing: {
			send: {
				type: 'body',
				property: 'limit',
			},
		},
		displayOptions: {
			show: {
				resource: ['network'],
				operation: ['get_pending_invitations'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['network'],
				operation: ['get_pending_invitations'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description: 'Restrict to one LinkedIn sender. Omit to span all live senders.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['network'],
				operation: ['list_followers'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['network'],
				operation: ['list_followers'],
				returnAll: [false],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['network'],
				operation: ['list_followers'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Of',
				name: 'of',
				description: "A member ID or a company's numeric ID. Omit for your own followers.",
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'of',
					},
				},
			},
		],
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['network'],
				operation: ['list_received_invitations'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['network'],
				operation: ['list_received_invitations'],
				returnAll: [false],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['network'],
				operation: ['list_received_invitations'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['network'],
				operation: ['preview_withdraw_connections'],
			},
		},
		options: [
			{
				displayName: 'Campaign ID',
				name: 'campaignId',
				description:
					'ID of a specific campaign to withdraw invites for. Provide either campaignId OR linkedinConnectionId, not both.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'campaignId',
					},
				},
			},
			{
				displayName: 'Days Threshold',
				name: 'daysThreshold',
				description:
					'Only withdraw invites that have been pending for at least this many days (default: 7)',
				type: 'number',
				default: 7,
				typeOptions: {
					minValue: 1,
					maxValue: 90,
				},
				routing: {
					send: {
						type: 'body',
						property: 'daysThreshold',
					},
				},
			},
			{
				displayName: 'LinkedIn Connection ID',
				name: 'linkedinConnectionId',
				description:
					'LinkedIn sender account ID. When provided (without campaignId), withdraws eligible invites across ALL campaigns using this account.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'linkedinConnectionId',
					},
				},
			},
			{
				displayName: 'Withdraw Limit',
				name: 'withdrawLimit',
				description: 'Max number of profiles to withdraw per campaign run. Omit for no limit.',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 500,
				},
				routing: {
					send: {
						type: 'body',
						property: 'withdrawLimit',
					},
				},
			},
		],
	},
	{
		displayName: 'Invitation ID',
		name: 'invitationId',
		description: 'The invitation to answer (from list_received_invitations)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'invitationId',
			},
		},
		displayOptions: {
			show: {
				resource: ['network'],
				operation: ['respond_to_invitation'],
			},
		},
	},
	{
		displayName: 'Action',
		name: 'actionChoice',
		description: 'Accept or decline',
		type: 'options',
		options: [
			{
				name: 'Accept',
				value: 'accept',
			},
			{
				name: 'Decline',
				value: 'decline',
			},
		],
		default: 'accept',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'action',
			},
		},
		displayOptions: {
			show: {
				resource: ['network'],
				operation: ['respond_to_invitation'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['network'],
				operation: ['respond_to_invitation'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Profile URL',
		name: 'profileUrl',
		description: "The person's LinkedIn profile URL (linkedin.com/in/…)",
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'profileUrl',
			},
		},
		displayOptions: {
			show: {
				resource: ['network'],
				operation: ['send_invitation'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['network'],
				operation: ['send_invitation'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Email',
				name: 'email',
				description:
					"The person's email address — only for someone whose LinkedIn settings ask for it before they can be invited",
				type: 'string',
				default: '',
				placeholder: 'name@email.com',
				routing: {
					send: {
						type: 'body',
						property: 'email',
					},
				},
			},
			{
				displayName: 'Note',
				name: 'note',
				description:
					'Optional note sent with the invitation (max 300 characters; 200 on a free LinkedIn account)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'note',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['network'],
				operation: ['withdraw_connections'],
			},
		},
		options: [
			{
				displayName: 'Campaign ID',
				name: 'campaignId',
				description:
					'ID of a specific campaign to withdraw invites for. Provide either campaignId OR linkedinConnectionId, not both.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'campaignId',
					},
				},
			},
			{
				displayName: 'Days Threshold',
				name: 'daysThreshold',
				description:
					'Only withdraw invites that have been pending for at least this many days (default: 7)',
				type: 'number',
				default: 7,
				typeOptions: {
					minValue: 1,
					maxValue: 90,
				},
				routing: {
					send: {
						type: 'body',
						property: 'daysThreshold',
					},
				},
			},
			{
				displayName: 'LinkedIn Connection ID',
				name: 'linkedinConnectionId',
				description:
					'LinkedIn sender account ID. When provided (without campaignId), withdraws eligible invites across ALL campaigns using this account.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'linkedinConnectionId',
					},
				},
			},
			{
				displayName: 'Withdraw Limit',
				name: 'withdrawLimit',
				description: 'Max number of profiles to withdraw per campaign run. Omit for no limit.',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 500,
				},
				routing: {
					send: {
						type: 'body',
						property: 'withdrawLimit',
					},
				},
			},
		],
	},
	{
		displayName: 'Invitation ID',
		name: 'invitationId',
		description:
			'The sent invitation to take back (from get_pending_invitations, or returned by send_invitation)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'invitationId',
			},
		},
		displayOptions: {
			show: {
				resource: ['network'],
				operation: ['withdraw_invitation'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['network'],
				operation: ['withdraw_invitation'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['post'],
			},
		},
		options: [
			{
				name: 'Comment on Post',
				value: 'comment_on_post',
				action: 'Comment on post',
				description:
					'Post ONE comment on a LinkedIn post from your own account, now (max 1250 characters)',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/comment_on_post',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Create Post',
				value: 'create_post',
				action: 'Create post',
				description: 'Publish ONE post on your own LinkedIn profile, now (max 3000 characters)',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/create_post',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Post',
				value: 'get_post',
				action: 'Get post',
				description:
					'Read ONE LinkedIn post: its text, author, date, attachments, and how many comments, reactions, reposts and impressions it has',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_post',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Post Engagers',
				value: 'get_post_engagers',
				action: 'Get post engagers',
				description:
					'Get the people who engaged with a LinkedIn post — everyone who REACTED (liked) and everyone who COMMENTED — read live',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_post_engagers',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Recent Posts',
				value: 'get_recent_posts',
				action: 'Get recent posts',
				description:
					'Get a person\'s recent LinkedIn posts — text, date, link, and engagement (reactions, comments, reposts, impressions) — to PERSONALIZE outreach ("saw your post about X…")',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_recent_posts',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'List Comments by Person',
				value: 'list_comments_by_person',
				action: 'List comments by person',
				description:
					'List the comments ONE person has written on LinkedIn posts, newest first: the comment, the post it is on, and when',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/list_comments_by_person',
						body: {},
					},
					send: {
						paginate: true,
					},
					operations: {
						pagination: paginate({
							by: 'cursor',
							list: 'comments',
							pageSize: 100,
							next: 'nextCursor',
						}),
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'List Post Comments',
				value: 'list_post_comments',
				action: 'List post comments',
				description:
					'List the comments on ONE LinkedIn post — or, with commentId, the replies to one comment: who wrote each, the text, time, and its ID (which comment_on_post and react_to_post take)',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/list_post_comments',
						body: {},
					},
					send: {
						paginate: true,
					},
					operations: {
						pagination: paginate({
							by: 'cursor',
							list: 'comments',
							pageSize: 100,
							next: 'nextCursor',
						}),
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'List Post Reactions',
				value: 'list_post_reactions',
				action: 'List post reactions',
				description:
					'List who reacted to ONE LinkedIn post — or, with commentId, to one comment on it — and with which reaction',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/list_post_reactions',
						body: {},
					},
					send: {
						paginate: true,
					},
					operations: {
						pagination: paginate({
							by: 'cursor',
							list: 'reactions',
							pageSize: 100,
							next: 'nextCursor',
						}),
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'List Posts by Author',
				value: 'list_posts_by_author',
				action: 'List posts by author',
				description:
					"List the posts ONE person or company page has published, newest first, with paging: text, date, counts and each post's socialId",
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/list_posts_by_author',
						body: {},
					},
					send: {
						paginate: true,
					},
					operations: {
						pagination: paginate({
							by: 'cursor',
							list: 'posts',
							pageSize: 100,
							next: 'nextCursor',
						}),
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'List Reactions by Person',
				value: 'list_reactions_by_person',
				action: 'List reactions by person',
				description:
					'List the posts and comments ONE person has reacted to on LinkedIn, newest first, and with which reaction',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/list_reactions_by_person',
						body: {},
					},
					send: {
						paginate: true,
					},
					operations: {
						pagination: paginate({
							by: 'cursor',
							list: 'reactions',
							pageSize: 100,
							next: 'nextCursor',
						}),
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'React to Post',
				value: 'react_to_post',
				action: 'React to post',
				description:
					'Add ONE reaction to a LinkedIn post — or, with commentId, to a comment on it — from your own account, now',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/react_to_post',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Search Posts',
				value: 'search_posts',
				action: 'Search posts',
				description:
					'Search LinkedIn posts by keyword and filters — LinkedIn\'s own "Posts" search, across all of LinkedIn, read live',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/search_posts',
						body: {},
					},
					send: {
						paginate: true,
					},
					operations: {
						pagination: paginate({
							by: 'cursor',
							list: 'posts',
							pageSize: 50,
							next: 'nextCursor',
							more: 'hasMore',
						}),
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
		],
		default: 'get_post',
	},
	{
		displayName: 'Post URL',
		name: 'postUrl',
		description: 'The LinkedIn post URL',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'postUrl',
			},
		},
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['comment_on_post'],
			},
		},
	},
	{
		displayName: 'Text',
		name: 'text',
		description: 'The comment text',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'text',
			},
		},
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['comment_on_post'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['comment_on_post'],
			},
		},
		options: [
			{
				displayName: 'As Organization',
				name: 'asOrganization',
				description:
					"Act as a company page you administer instead of yourself: that page's numeric ID",
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'asOrganization',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Image URL',
				name: 'imageUrl',
				description: 'One image to attach (a public https link, up to 10 MB)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'imageUrl',
					},
				},
			},
			{
				displayName: 'Link',
				name: 'link',
				description:
					'A link to show as a preview card. It should also appear in the text; otherwise LinkedIn adds it at the end.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'link',
					},
				},
			},
			{
				displayName: 'Mentions',
				name: 'mentions',
				description:
					'People or companies to mention. Put {{0}}, {{1}}, … in the text where each one goes (its position in this list).',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'mentions',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Reply to Comment ID',
				name: 'replyToCommentId',
				description: 'ID of a comment on that post to reply to (from list_post_comments)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'replyToCommentId',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['create_post'],
			},
		},
		options: [
			{
				displayName: 'As Organization',
				name: 'asOrganization',
				description:
					"Act as a company page you administer instead of yourself: that page's numeric ID",
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'asOrganization',
					},
				},
			},
			{
				displayName: 'Attachment URLs',
				name: 'attachmentUrls',
				description:
					'Images, one video or one document to attach. Public https links; each file up to 10 MB, 20 MB in total.',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'attachmentUrls',
					},
				},
			},
			{
				displayName: 'Audience',
				name: 'audience',
				description:
					'Limit who sees the post (company-page posts). Each list holds LinkedIn IDs from lookup_search_ids (types LANGUAGE, POST_JOB_FUNCTION, SCHOOL, SENIORITY, INDUSTRY, REGION, LOCATION); headcount is company-size ranges such as { min: 51, max: 200 }.',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'audience',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Job Posting ID',
				name: 'jobPostingId',
				description: 'ID of one of your job postings to show as a card (from list_job_postings)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'jobPostingId',
					},
				},
			},
			{
				displayName: 'Link',
				name: 'link',
				description:
					'A link to show as a preview card. It should also appear in the text; otherwise LinkedIn adds it at the end.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'link',
					},
				},
			},
			{
				displayName: 'Mentions',
				name: 'mentions',
				description:
					'People or companies to mention. Put {{0}}, {{1}}, … in the text where each one goes (its position in this list).',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'mentions',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Repost Of',
				name: 'repostOf',
				description:
					'URL of an existing LinkedIn post to repost. With empty text it is a plain repost; with text, a repost with your thoughts.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'repostOf',
					},
				},
			},
			{
				displayName: 'Text',
				name: 'text',
				description:
					'The post text, exactly as it should appear. May be empty only for a plain repost.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'text',
					},
				},
			},
			{
				displayName: 'Video Thumbnail URL',
				name: 'videoThumbnailUrl',
				description: 'Cover image for an attached video (a public https link)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'videoThumbnailUrl',
					},
				},
			},
		],
	},
	{
		displayName: 'Post',
		name: 'post',
		description: 'The LinkedIn post: its URL, or its ID (socialId) from an earlier result',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'post',
			},
		},
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['get_post'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['get_post'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Post URL',
		name: 'postUrl',
		description: 'The LinkedIn post URL (activity/share/ugcPost URL)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'postUrl',
			},
		},
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['get_post_engagers'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['get_post_engagers'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description: 'Which sender to read through. Omit to use the first live sender.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Max Comments',
				name: 'maxComments',
				description: 'Max commenters to return (1–100, default 100)',
				type: 'number',
				default: 100,
				typeOptions: {
					minValue: 1,
					maxValue: 100,
				},
				routing: {
					send: {
						type: 'body',
						property: 'maxComments',
					},
				},
			},
			{
				displayName: 'Max Reactions',
				name: 'maxReactions',
				description: 'Max reactors (likers) to return (1–100, default 100)',
				type: 'number',
				default: 100,
				typeOptions: {
					minValue: 1,
					maxValue: 100,
				},
				routing: {
					send: {
						type: 'body',
						property: 'maxReactions',
					},
				},
			},
		],
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
		routing: {
			send: {
				type: 'body',
				property: 'limit',
				value: '={{ Math.min($value, 20) }}',
			},
		},
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['get_recent_posts'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['get_recent_posts'],
			},
		},
		options: [
			{
				displayName: 'Profile URL',
				name: 'profileUrl',
				description:
					'LinkedIn profile URL of the person, e.g. a linkedinUrl from search_people ("https://linkedin.com/in/…")',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'profileUrl',
					},
				},
			},
			{
				displayName: 'Provider ID',
				name: 'providerId',
				description:
					"The person's providerId from search_people (an ACwAA… ID). Faster than profileUrl — skips the profile-resolution lookup.",
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'providerId',
					},
				},
			},
		],
	},
	{
		displayName: 'Person',
		name: 'person',
		description: 'The person: a LinkedIn profile URL or member ID',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'person',
			},
		},
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['list_comments_by_person'],
			},
		},
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['list_comments_by_person'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['list_comments_by_person'],
				returnAll: [false],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['list_comments_by_person'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Post',
		name: 'post',
		description: 'The LinkedIn post: its URL, or its ID (socialId) from an earlier result',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'post',
			},
		},
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['list_post_comments'],
			},
		},
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['list_post_comments'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['list_post_comments'],
				returnAll: [false],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['list_post_comments'],
			},
		},
		options: [
			{
				displayName: 'Comment ID',
				name: 'commentId',
				description: "List the replies to this comment instead of the post's top-level comments",
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'commentId',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Sort By',
				name: 'sortBy',
				description: 'Order (default MOST_RECENT)',
				type: 'options',
				options: [
					{
						name: 'Most Recent',
						value: 'MOST_RECENT',
					},
					{
						name: 'Most Relevant',
						value: 'MOST_RELEVANT',
					},
				],
				default: 'MOST_RECENT',
				routing: {
					send: {
						type: 'body',
						property: 'sortBy',
					},
				},
			},
		],
	},
	{
		displayName: 'Post',
		name: 'post',
		description: 'The LinkedIn post: its URL, or its ID (socialId) from an earlier result',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'post',
			},
		},
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['list_post_reactions'],
			},
		},
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['list_post_reactions'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['list_post_reactions'],
				returnAll: [false],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['list_post_reactions'],
			},
		},
		options: [
			{
				displayName: 'Comment ID',
				name: 'commentId',
				description: 'List the reactions to this comment instead of the post',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'commentId',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Author',
		name: 'author',
		description: "A LinkedIn profile URL or member ID — or a company's numeric ID",
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'author',
			},
		},
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['list_posts_by_author'],
			},
		},
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['list_posts_by_author'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['list_posts_by_author'],
				returnAll: [false],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['list_posts_by_author'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Is Company',
				name: 'isCompany',
				description: 'Whether to switch this on. True when author is a company ID.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'isCompany',
					},
				},
			},
		],
	},
	{
		displayName: 'Person',
		name: 'person',
		description: 'The person: a LinkedIn profile URL or member ID',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'person',
			},
		},
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['list_reactions_by_person'],
			},
		},
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['list_reactions_by_person'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['list_reactions_by_person'],
				returnAll: [false],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['list_reactions_by_person'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Post URL',
		name: 'postUrl',
		description: 'The LinkedIn post URL',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'postUrl',
			},
		},
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['react_to_post'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['react_to_post'],
			},
		},
		options: [
			{
				displayName: 'As Organization',
				name: 'asOrganization',
				description:
					"Act as a company page you administer instead of yourself: that page's numeric ID",
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'asOrganization',
					},
				},
			},
			{
				displayName: 'Comment ID',
				name: 'commentId',
				description:
					'React to this comment on the post instead of the post itself (its ID from list_post_comments)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'commentId',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Reaction',
				name: 'reaction',
				description: 'Which reaction to add (default like)',
				type: 'options',
				options: [
					{
						name: 'Celebrate',
						value: 'celebrate',
					},
					{
						name: 'Funny',
						value: 'funny',
					},
					{
						name: 'Insightful',
						value: 'insightful',
					},
					{
						name: 'Like',
						value: 'like',
					},
					{
						name: 'Love',
						value: 'love',
					},
					{
						name: 'Support',
						value: 'support',
					},
				],
				default: 'like',
				routing: {
					send: {
						type: 'body',
						property: 'reaction',
					},
				},
			},
		],
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['search_posts'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['search_posts'],
				returnAll: [false],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['search_posts'],
			},
		},
		options: [
			{
				displayName: 'Author Companies',
				name: 'authorCompanies',
				description: 'Company names — posts written by PEOPLE who work at these companies',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'authorCompanies',
					},
				},
			},
			{
				displayName: 'Author Industries',
				name: 'authorIndustries',
				description: 'Industry names the author works in, e.g. ["Software Development"]',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'authorIndustries',
					},
				},
			},
			{
				displayName: 'Author Keywords',
				name: 'authorKeywords',
				description: 'Words in the AUTHOR\'s headline / title, e.g. "founder" or "head of sales"',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'authorKeywords',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn senders to search through (its ID from get_linkedin_accounts). Omit to use your first live sender, or the shared account when you have none.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Content Type',
				name: 'contentType',
				description: 'Only posts with this kind of content',
				type: 'options',
				options: [
					{
						name: 'Collaborative Articles',
						value: 'collaborative_articles',
					},
					{
						name: 'Documents',
						value: 'documents',
					},
					{
						name: 'Images',
						value: 'images',
					},
					{
						name: 'Jobs',
						value: 'jobs',
					},
					{
						name: 'Live Videos',
						value: 'live_videos',
					},
					{
						name: 'Videos',
						value: 'videos',
					},
				],
				default: 'collaborative_articles',
				routing: {
					send: {
						type: 'body',
						property: 'contentType',
					},
				},
			},
			{
				displayName: 'Date Posted',
				name: 'datePosted',
				description: 'Only posts from the past day, week or month',
				type: 'options',
				options: [
					{
						name: 'Past Day',
						value: 'past_day',
					},
					{
						name: 'Past Month',
						value: 'past_month',
					},
					{
						name: 'Past Week',
						value: 'past_week',
					},
				],
				default: 'past_day',
				routing: {
					send: {
						type: 'body',
						property: 'datePosted',
					},
				},
			},
			{
				displayName: 'From Companies',
				name: 'fromCompanies',
				description: 'Company names — posts published by these COMPANY PAGES themselves',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'fromCompanies',
					},
				},
			},
			{
				displayName: 'Keywords',
				name: 'keywords',
				description:
					'Words to search for in posts, e.g. "cold email deliverability". LinkedIn search operators work ("exact phrase", AND, OR, NOT).',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'keywords',
					},
				},
			},
			{
				displayName: 'Mentioning Companies',
				name: 'mentioningCompanies',
				description: 'Company names — posts that @mention these companies (e.g. a competitor)',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'mentioningCompanies',
					},
				},
			},
			{
				displayName: 'Posted By',
				name: 'postedBy',
				description:
					'Only posts by you ("me"), by your 1st-degree connections, or by people you follow. Runs on your own LinkedIn sender, so one must be connected.',
				type: 'options',
				options: [
					{
						name: 'First Connections',
						value: 'first_connections',
					},
					{
						name: 'Me',
						value: 'me',
					},
					{
						name: 'People You Follow',
						value: 'people_you_follow',
					},
				],
				default: 'first_connections',
				routing: {
					send: {
						type: 'body',
						property: 'postedBy',
					},
				},
			},
			{
				displayName: 'Sort By',
				name: 'sortBy',
				description: '"relevance" (LinkedIn\'s default) or "date" (newest first)',
				type: 'options',
				options: [
					{
						name: 'Date',
						value: 'date',
					},
					{
						name: 'Relevance',
						value: 'relevance',
					},
				],
				default: 'date',
				routing: {
					send: {
						type: 'body',
						property: 'sortBy',
					},
				},
			},
		],
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['profile'],
			},
		},
		options: [
			{
				name: 'Endorse Skill',
				value: 'endorse_skill',
				action: 'Endorse skill',
				description: "Endorse ONE skill on someone's LinkedIn profile, from your own account",
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/endorse_skill',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get My Profile',
				value: 'get_my_profile',
				action: 'Get my profile',
				description:
					"Get the connected LinkedIn account owner's OWN profile (name, public identifier, profile URL, providerId), per live sender",
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_my_profile',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Profile',
				value: 'get_profile',
				action: 'Get profile',
				description:
					'Get a rich profile card for ANY LinkedIn person by their profile URL — name, headline, current company/role, location, about, and recent posts — PLUS details on their current company (industry, size, HQ, and a short description of what the company does), read live through your connected account',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_profile',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Profile Details',
				value: 'get_profile_details',
				action: 'Get profile details',
				description:
					'Read ONE LinkedIn profile in depth, live from your own account: choose the sections you need (about, experience, education, languages, skills, certifications, volunteering_experience, projects, recommendations_received, recommendations_given, recruiting_activity, or "*" for all)',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_profile_details',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Update My Profile',
				value: 'update_my_profile',
				action: 'Update my profile',
				description:
					'Read or edit the connected LinkedIn account owner\'s OWN profile on LinkedIn: headline, about, location, a website link, ONE experience or education entry per call (add or edit), skills (add), the profile picture and cover picture (from an image link), and the "open to work" preferences',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/update_my_profile',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
		],
		default: 'get_my_profile',
	},
	{
		displayName: 'Profile ID',
		name: 'profileId',
		description: "The person's LinkedIn member ID (from get_profile_details)",
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'profileId',
			},
		},
		displayOptions: {
			show: {
				resource: ['profile'],
				operation: ['endorse_skill'],
			},
		},
	},
	{
		displayName: 'Skill Endorsement ID',
		name: 'skillEndorsementId',
		description: "The skill's endorsement ID (from the skills section of get_profile_details)",
		type: 'number',
		default: 0,
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'skillEndorsementId',
			},
		},
		displayOptions: {
			show: {
				resource: ['profile'],
				operation: ['endorse_skill'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['profile'],
				operation: ['endorse_skill'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['profile'],
				operation: ['get_my_profile'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Restrict to one LinkedIn sender. Omit to report every live sender in this setup.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Profile URL',
		name: 'profileUrl',
		description:
			"The person's LinkedIn profile URL (https://linkedin.com/in/…) or public identifier",
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'profileUrl',
			},
		},
		displayOptions: {
			show: {
				resource: ['profile'],
				operation: ['get_profile'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['profile'],
				operation: ['get_profile'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description: 'Which sender to read through. Omit to use the first live sender.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Person',
		name: 'person',
		description: 'The person: a LinkedIn profile URL or member ID',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'person',
			},
		},
		displayOptions: {
			show: {
				resource: ['profile'],
				operation: ['get_profile_details'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['profile'],
				operation: ['get_profile_details'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Notify',
				name: 'notify',
				description: 'Whether the person is told you viewed their profile (default false)',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'notify',
					},
				},
			},
			{
				displayName: 'Sections',
				name: 'sections',
				description: 'Which sections to include in full. Omit for the basic profile.',
				type: 'multiOptions',
				options: [
					{
						name: '*',
						value: '*',
					},
					{
						name: 'About',
						value: 'about',
					},
					{
						name: 'Certifications',
						value: 'certifications',
					},
					{
						name: 'Education',
						value: 'education',
					},
					{
						name: 'Experience',
						value: 'experience',
					},
					{
						name: 'Languages',
						value: 'languages',
					},
					{
						name: 'Projects',
						value: 'projects',
					},
					{
						name: 'Recommendations Given',
						value: 'recommendations_given',
					},
					{
						name: 'Recommendations Received',
						value: 'recommendations_received',
					},
					{
						name: 'Recruiting Activity',
						value: 'recruiting_activity',
					},
					{
						name: 'Skills',
						value: 'skills',
					},
					{
						name: 'Volunteering Experience',
						value: 'volunteering_experience',
					},
				],
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'sections',
					},
				},
			},
			{
				displayName: 'Via',
				name: 'via',
				description: 'Read through this product instead of ordinary LinkedIn',
				type: 'options',
				options: [
					{
						name: 'Recruiter',
						value: 'recruiter',
					},
					{
						name: 'Sales Navigator',
						value: 'sales_navigator',
					},
				],
				default: 'recruiter',
				routing: {
					send: {
						type: 'body',
						property: 'via',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['profile'],
				operation: ['update_my_profile'],
			},
		},
		options: [
			{
				displayName: 'About',
				name: 'about',
				description: 'New About section (max 2600 characters). Replaces the whole section.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'about',
					},
				},
			},
			{
				displayName: 'Add Skills',
				name: 'addSkills',
				description:
					'Skills to ADD to the profile, by name (up to 20 per call). Skills already on the profile are kept; removing a skill is not possible here.',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'addSkills',
					},
				},
			},
			{
				displayName: 'Confirm',
				name: 'confirm',
				description:
					'Whether to switch this on. false (default) = preview only, nothing changes. true = change the profile now (only after the user said yes).',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'confirm',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Whose profile to edit: the LinkedIn account ID from get_linkedin_accounts. May be omitted only when the setup has exactly one live sender.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Cover Picture URL',
				name: 'coverPictureUrl',
				description:
					"New COVER (banner) picture: a public https:// link straight to a JPEG or PNG file (max 8MB). LinkedIn's banner is 1584×396.",
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'coverPictureUrl',
					},
				},
			},
			{
				displayName: 'Education',
				name: 'education',
				description: 'Add or edit ONE education entry',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'education',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Experience',
				name: 'experience',
				description: 'Add or edit ONE experience entry',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'experience',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Headline',
				name: 'headline',
				description: 'New headline — the line under the name (max 220 characters)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'headline',
					},
				},
			},
			{
				displayName: 'Location',
				name: 'location',
				description:
					'New profile location as a place name, e.g. "Austin, Texas". Matched to a LinkedIn place — the preview shows the match.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'location',
					},
				},
			},
			{
				displayName: 'Location ID',
				name: 'locationId',
				description:
					'An exact LinkedIn place ID, taken from locationOptions in a preview. Overrides location.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'locationId',
					},
				},
			},
			{
				displayName: 'Open to Work',
				name: 'openToWork',
				description: 'Set the "open to work" job preferences. It cannot be turned off from here.',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'openToWork',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Picture URL',
				name: 'pictureUrl',
				description:
					'New PROFILE picture: a public https:// link straight to a JPEG or PNG file (max 8MB). LinkedIn applies its default crop.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'pictureUrl',
					},
				},
			},
			{
				displayName: 'Postal Code',
				name: 'postalCode',
				description: '5-digit postal code to go with the location (optional)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'postalCode',
					},
				},
			},
			{
				displayName: 'Website Link',
				name: 'websiteLink',
				description: 'The link shown near the top of the profile',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'websiteLink',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['prompt'],
			},
		},
		options: [
			{
				name: 'Create Prompt',
				value: 'create_prompt',
				action: 'Create prompt',
				description: 'Create a new LinkedNav prompt template',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/create_prompt',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Delete Prompt',
				value: 'delete_prompt',
				action: 'Delete prompt',
				description: 'Delete a LinkedNav prompt template by ID',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/delete_prompt',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Generate Message Templates',
				value: 'generate_message_templates',
				action: 'Generate message templates',
				description:
					"EXPERT COPYWRITER: drafts the complete outreach sequence — connect note, first message, and three follow-ups — grounded ONLY in this account's stored setup (business context, ICP, goal) and its own best-performing note when one exists",
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/generate_message_templates',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Prompt',
				value: 'get_prompt',
				action: 'Get prompt',
				description:
					'Get one LinkedNav prompt template by ID, including connection message, first message, context (also used for reply generation), and follow-up sequence',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_prompt',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Prompts',
				value: 'get_prompts',
				action: 'Get prompts',
				description: 'List LinkedNav prompt templates for the active setup',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_prompts',
						body: {},
					},
					send: {
						paginate: true,
					},
					operations: {
						pagination: paginate({ by: 'page', list: 'prompts', pageSize: 100, total: 'total' }),
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Update Prompt',
				value: 'update_prompt',
				action: 'Update prompt',
				description: 'Update an existing LinkedNav prompt template by ID',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/update_prompt',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
		],
		default: 'generate_message_templates',
	},
	{
		displayName: 'Name',
		name: 'name',
		description: 'Prompt name',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
		displayOptions: {
			show: {
				resource: ['prompt'],
				operation: ['create_prompt'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['prompt'],
				operation: ['create_prompt'],
			},
		},
		options: [
			{
				displayName: 'AI Model',
				name: 'aiModel',
				type: 'string',
				default: 'Claude Opus 5.5',
				routing: {
					send: {
						type: 'body',
						property: 'aiModel',
					},
				},
			},
			{
				displayName: 'Connect Message',
				name: 'connectMessage',
				description:
					'Connection request note template (sent with the connect invite when connectWithNote is true)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectMessage',
					},
				},
			},
			{
				displayName: 'Connect Message Instruction',
				name: 'connectMessageInstruction',
				description:
					'AI instruction for the connect note, used when connectMessageMode="generated"',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectMessageInstruction',
					},
				},
			},
			{
				displayName: 'Connect Message Mode',
				name: 'connectMessageMode',
				description:
					'"template" (default) = send the fixed connectMessage note; "generated" = AI writes each invite note from the prospect profile using connectMessageInstruction (supported senders only; legacy senders keep the fixed note)',
				type: 'options',
				options: [
					{
						name: 'Generated',
						value: 'generated',
					},
					{
						name: 'Template',
						value: 'template',
					},
				],
				default: 'template',
				routing: {
					send: {
						type: 'body',
						property: 'connectMessageMode',
					},
				},
			},
			{
				displayName: 'Connect with Note',
				name: 'connectWithNote',
				description:
					'Whether to switch this on. When true, send the connect request with connectMessage as a note; when false, connect without a note.',
				type: 'boolean',
				default: true,
				routing: {
					send: {
						type: 'body',
						property: 'connectWithNote',
					},
				},
			},
			{
				displayName: 'Content',
				name: 'content',
				description: 'Legacy combined prompt content. Prefer context instead.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'content',
					},
				},
			},
			{
				displayName: 'Context',
				name: 'context',
				description:
					'Main AI instruction / business+product context used to generate messages (the live field; prefer over legacy content)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'context',
					},
				},
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'description',
					},
				},
			},
			{
				displayName: 'First Message',
				name: 'firstMessage',
				description: 'AI instruction for the first message, used when firstMessageMode="generated"',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'firstMessage',
					},
				},
			},
			{
				displayName: 'First Message Attachments',
				name: 'firstMessageAttachments',
				description:
					'Welcome (first) message media attachments (supported senders only). LinkedNav-hosted URLs only.',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'firstMessageAttachments',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'First Message Delay Minutes',
				name: 'firstMessageDelayMinutes',
				description:
					'Minutes to wait after connection is accepted before sending the first message (0-1440)',
				type: 'number',
				default: 0,
				typeOptions: {
					minValue: 0,
					maxValue: 1440,
				},
				routing: {
					send: {
						type: 'body',
						property: 'firstMessageDelayMinutes',
					},
				},
			},
			{
				displayName: 'First Message Mode',
				name: 'firstMessageMode',
				description:
					'"generated" = AI writes the first message from firstMessage; "template" = send the fixed firstMessageTemplate text',
				type: 'options',
				options: [
					{
						name: 'Generated',
						value: 'generated',
					},
					{
						name: 'Template',
						value: 'template',
					},
				],
				default: 'generated',
				routing: {
					send: {
						type: 'body',
						property: 'firstMessageMode',
					},
				},
			},
			{
				displayName: 'First Message Template',
				name: 'firstMessageTemplate',
				description: 'Fixed first-message text, used when firstMessageMode="template"',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'firstMessageTemplate',
					},
				},
			},
			{
				displayName: 'Follow Up',
				name: 'followUp',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'followUp',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Source AI Setup ID',
				name: 'sourceAiSetupId',
				description: 'Setup ID to attach the prompt to. Omit to use active setup.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'sourceAiSetupId',
					},
				},
			},
			{
				displayName: 'Type',
				name: 'type',
				description:
					'Prompt category. Use "outreach" for a standard connect + DM / follow-up sequence — this is what the UI\'s "Direct Messages" prompt actually stores. Use "post-comments" for a post-comment engagement campaign. ("direct-messages" is a legacy value; the app saves DM prompts as "outreach".)',
				type: 'options',
				options: [
					{
						name: 'Direct Messages',
						value: 'direct-messages',
					},
					{
						name: 'Outreach',
						value: 'outreach',
					},
					{
						name: 'Post Comments',
						value: 'post-comments',
					},
				],
				default: 'outreach',
				routing: {
					send: {
						type: 'body',
						property: 'type',
					},
				},
			},
			{
				displayName: 'Variables',
				name: 'variables',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'variables',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'Prompt ID',
		name: 'promptId',
		description: 'Prompt ID to delete',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'promptId',
			},
		},
		displayOptions: {
			show: {
				resource: ['prompt'],
				operation: ['delete_prompt'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['prompt'],
				operation: ['delete_prompt'],
			},
		},
		options: [
			{
				displayName: 'Confirm',
				name: 'confirm',
				description:
					'Whether to switch this on. Must be true to actually delete. Leave unset/false to be reminded of the cascade instead.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'confirm',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['prompt'],
				operation: ['generate_message_templates'],
			},
		},
		options: [
			{
				displayName: 'Campaign ID',
				name: 'campaignId',
				description:
					'Campaign whose goal/prompt the drafts target. Omit to use the newest outreach campaign on the active setup.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'campaignId',
					},
				},
			},
			{
				displayName: 'Focus',
				name: 'focus',
				description:
					'Optional specific angle the user asked to lead with (e.g. one product, a pain point, an event). Plain text.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'focus',
					},
				},
			},
			{
				displayName: 'Language',
				name: 'language',
				description:
					"Override the outreach language. Defaults to the setup's outreachLanguage, else English.",
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'language',
					},
				},
			},
			{
				displayName: 'Tone',
				name: 'tone',
				description: 'Writing voice for the sequence',
				type: 'options',
				options: [
					{
						name: 'Consultative',
						value: 'consultative',
					},
					{
						name: 'Direct',
						value: 'direct',
					},
					{
						name: 'Friendly',
						value: 'friendly',
					},
					{
						name: 'Playful',
						value: 'playful',
					},
				],
				default: 'consultative',
				routing: {
					send: {
						type: 'body',
						property: 'tone',
					},
				},
			},
		],
	},
	{
		displayName: 'Prompt ID',
		name: 'promptId',
		description: 'Prompt ID to read',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'promptId',
			},
		},
		displayOptions: {
			show: {
				resource: ['prompt'],
				operation: ['get_prompt'],
			},
		},
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['prompt'],
				operation: ['get_prompts'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['prompt'],
				operation: ['get_prompts'],
				returnAll: [false],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['prompt'],
				operation: ['get_prompts'],
			},
		},
		options: [
			{
				displayName: 'Search',
				name: 'search',
				description: 'Search by prompt name, description, context, or message text',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'search',
					},
				},
			},
			{
				displayName: 'Type',
				name: 'type',
				description: 'Optional prompt type filter',
				type: 'options',
				options: [
					{
						name: 'Direct Messages',
						value: 'direct-messages',
					},
					{
						name: 'Outreach',
						value: 'outreach',
					},
					{
						name: 'Post Comments',
						value: 'post-comments',
					},
				],
				default: 'direct-messages',
				routing: {
					send: {
						type: 'body',
						property: 'type',
					},
				},
			},
		],
	},
	{
		displayName: 'Prompt ID',
		name: 'promptId',
		description: 'Prompt ID to update',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'promptId',
			},
		},
		displayOptions: {
			show: {
				resource: ['prompt'],
				operation: ['update_prompt'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['prompt'],
				operation: ['update_prompt'],
			},
		},
		options: [
			{
				displayName: 'AI Model',
				name: 'aiModel',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'aiModel',
					},
				},
			},
			{
				displayName: 'Connect Message',
				name: 'connectMessage',
				description:
					'Connection request note template (sent with the connect invite when connectWithNote is true)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectMessage',
					},
				},
			},
			{
				displayName: 'Connect Message Instruction',
				name: 'connectMessageInstruction',
				description:
					'AI instruction for the connect note, used when connectMessageMode="generated"',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectMessageInstruction',
					},
				},
			},
			{
				displayName: 'Connect Message Mode',
				name: 'connectMessageMode',
				description:
					'"template" = send the fixed connectMessage note; "generated" = AI writes each invite note from the prospect profile using connectMessageInstruction (supported senders only; legacy senders keep the fixed note)',
				type: 'options',
				options: [
					{
						name: 'Generated',
						value: 'generated',
					},
					{
						name: 'Template',
						value: 'template',
					},
				],
				default: 'generated',
				routing: {
					send: {
						type: 'body',
						property: 'connectMessageMode',
					},
				},
			},
			{
				displayName: 'Connect with Note',
				name: 'connectWithNote',
				description:
					'Whether to switch this on. When true, send the connect request with connectMessage as a note; when false, connect without a note.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'connectWithNote',
					},
				},
			},
			{
				displayName: 'Content',
				name: 'content',
				description: 'Legacy combined prompt content. Prefer context instead.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'content',
					},
				},
			},
			{
				displayName: 'Context',
				name: 'context',
				description:
					'Main AI instruction / business+product context used to generate messages (the live field; prefer over legacy content)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'context',
					},
				},
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'description',
					},
				},
			},
			{
				displayName: 'First Message',
				name: 'firstMessage',
				description: 'AI instruction for the first message, used when firstMessageMode="generated"',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'firstMessage',
					},
				},
			},
			{
				displayName: 'First Message Attachments',
				name: 'firstMessageAttachments',
				description:
					'Welcome (first) message media attachments (supported senders only). Omit to keep existing files; pass [] to clear. LinkedNav-hosted URLs only.',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'firstMessageAttachments',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'First Message Delay Minutes',
				name: 'firstMessageDelayMinutes',
				description:
					'Minutes to wait after connection is accepted before sending the first message (0-1440)',
				type: 'number',
				default: 0,
				typeOptions: {
					minValue: 0,
					maxValue: 1440,
				},
				routing: {
					send: {
						type: 'body',
						property: 'firstMessageDelayMinutes',
					},
				},
			},
			{
				displayName: 'First Message Mode',
				name: 'firstMessageMode',
				description:
					'"generated" = AI writes the first message from firstMessage; "template" = send the fixed firstMessageTemplate text',
				type: 'options',
				options: [
					{
						name: 'Generated',
						value: 'generated',
					},
					{
						name: 'Template',
						value: 'template',
					},
				],
				default: 'generated',
				routing: {
					send: {
						type: 'body',
						property: 'firstMessageMode',
					},
				},
			},
			{
				displayName: 'First Message Template',
				name: 'firstMessageTemplate',
				description: 'Fixed first-message text, used when firstMessageMode="template"',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'firstMessageTemplate',
					},
				},
			},
			{
				displayName: 'Follow Up',
				name: 'followUp',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'followUp',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'name',
					},
				},
			},
			{
				displayName: 'Type',
				name: 'type',
				description:
					'Prompt category. Use "outreach" for a standard connect + DM / follow-up sequence — this is what the UI\'s "Direct Messages" prompt actually stores. Use "post-comments" for a post-comment engagement campaign. ("direct-messages" is a legacy value; the app saves DM prompts as "outreach".)',
				type: 'options',
				options: [
					{
						name: 'Direct Messages',
						value: 'direct-messages',
					},
					{
						name: 'Outreach',
						value: 'outreach',
					},
					{
						name: 'Post Comments',
						value: 'post-comments',
					},
				],
				default: 'direct-messages',
				routing: {
					send: {
						type: 'body',
						property: 'type',
					},
				},
			},
			{
				displayName: 'Variables',
				name: 'variables',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'variables',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['recruiter'],
			},
		},
		options: [
			{
				name: 'Close Job Posting',
				value: 'close_job_posting',
				action: 'Close job posting',
				description:
					"Close ONE of your LinkedIn job postings: it stops accepting applications and leaves LinkedIn's job search",
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/close_job_posting',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Create Job Posting',
				value: 'create_job_posting',
				action: 'Create job posting',
				description:
					'Create ONE LinkedIn job posting as a DRAFT on your own account — nothing is public and nothing is charged until publish_job_posting',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/create_job_posting',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Edit Job Posting',
				value: 'edit_job_posting',
				action: 'Edit job posting',
				description: 'Change ONE of your LinkedIn job postings: pass only the fields to change',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/edit_job_posting',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Hiring Project',
				value: 'get_hiring_project',
				action: 'Get hiring project',
				description: 'Read ONE of your LinkedIn Recruiter hiring projects by ID',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_hiring_project',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Job Applicant',
				value: 'get_job_applicant',
				action: 'Get job applicant',
				description:
					'Read ONE applicant to one of your LinkedIn job postings: their details, answers to the screening questions and contact information they shared',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_job_applicant',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Job Applicant Resume',
				value: 'get_job_applicant_resume',
				action: 'Get job applicant resume',
				description:
					'Download the resume ONE applicant attached to their application — the file itself, up to 5 MB',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_job_applicant_resume',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Job Posting',
				value: 'get_job_posting',
				action: 'Get job posting',
				description: 'Read ONE of your LinkedIn job postings in full',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_job_posting',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'List Hiring Projects',
				value: 'list_hiring_projects',
				action: 'List hiring projects',
				description: 'List your LinkedIn Recruiter hiring projects: ID, name, state and activity',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/list_hiring_projects',
						body: {},
					},
					send: {
						paginate: true,
					},
					operations: {
						pagination: paginate({
							by: 'cursor',
							list: 'projects',
							pageSize: 100,
							next: 'nextCursor',
						}),
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'List Job Applicants',
				value: 'list_job_applicants',
				action: 'List job applicants',
				description:
					'List the people who applied to ONE of your LinkedIn job postings: name, headline, when they applied, their rating, and the applicant ID (which get_job_applicant, get_job_applicant_resume and start_conversation take)',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/list_job_applicants',
						body: {},
					},
					send: {
						paginate: true,
					},
					operations: {
						pagination: paginate({
							by: 'cursor',
							list: 'applicants',
							pageSize: 100,
							next: 'nextCursor',
						}),
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'List Job Postings',
				value: 'list_job_postings',
				action: 'List job postings',
				description: 'List the job postings you have on LinkedIn: open, draft or closed',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/list_job_postings',
						body: {},
					},
					send: {
						paginate: true,
					},
					operations: {
						pagination: paginate({
							by: 'cursor',
							list: 'jobPostings',
							pageSize: 100,
							next: 'nextCursor',
						}),
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Move Recruiter Candidate',
				value: 'move_recruiter_candidate',
				action: 'Move recruiter candidate',
				description:
					"Put ONE person into a LinkedIn Recruiter hiring project's pipeline, or move them to another stage of it",
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/move_recruiter_candidate',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Publish Job Posting',
				value: 'publish_job_posting',
				action: 'Publish job posting',
				description: 'Publish ONE job posting draft on LinkedIn',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/publish_job_posting',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Reject Recruiter Applicant',
				value: 'reject_recruiter_applicant',
				action: 'Reject recruiter applicant',
				description: 'Reject ONE applicant in a LinkedIn Recruiter hiring project, with a reason',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/reject_recruiter_applicant',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Solve Job Posting Checkpoint',
				value: 'solve_job_posting_checkpoint',
				action: 'Solve job posting checkpoint',
				description:
					'Finish publishing a job posting when LinkedIn asked to verify your right to post for the company: send the code LinkedIn emailed you',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/solve_job_posting_checkpoint',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
		],
		default: 'get_hiring_project',
	},
	{
		displayName: 'Job ID',
		name: 'jobId',
		description: 'The job posting ID (from list_job_postings)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'jobId',
			},
		},
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['close_job_posting'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['close_job_posting'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Service',
				name: 'service',
				description: 'Which LinkedIn product the job posting belongs to (default CLASSIC)',
				type: 'options',
				options: [
					{
						name: 'Classic',
						value: 'CLASSIC',
					},
					{
						name: 'Recruiter',
						value: 'RECRUITER',
					},
				],
				default: 'CLASSIC',
				routing: {
					send: {
						type: 'body',
						property: 'service',
					},
				},
			},
		],
	},
	{
		displayName: 'Job Title',
		name: 'jobTitle',
		type: 'json',
		default: '{}',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'jobTitle',
				value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
			},
		},
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['create_job_posting'],
			},
		},
	},
	{
		displayName: 'Company',
		name: 'company',
		type: 'json',
		default: '{}',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'company',
				value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
			},
		},
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['create_job_posting'],
			},
		},
	},
	{
		displayName: 'Workplace',
		name: 'workplace',
		type: 'options',
		options: [
			{
				name: 'Hybrid',
				value: 'HYBRID',
			},
			{
				name: 'On Site',
				value: 'ON_SITE',
			},
			{
				name: 'Remote',
				value: 'REMOTE',
			},
		],
		default: 'HYBRID',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'workplace',
			},
		},
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['create_job_posting'],
			},
		},
	},
	{
		displayName: 'Location',
		name: 'location',
		description: "LinkedIn's ID for the place (lookup_search_ids type LOCATION)",
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'location',
			},
		},
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['create_job_posting'],
			},
		},
	},
	{
		displayName: 'Description',
		name: 'description',
		description: 'The job description. HTML tags may be used to structure it.',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'description',
			},
		},
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['create_job_posting'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['create_job_posting'],
			},
		},
		options: [
			{
				displayName: 'Apply Method',
				name: 'applyMethod',
				description:
					'How people apply: on LinkedIn (applications are emailed to notificationEmail) or on an external site',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'applyMethod',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Auto Rejection Template',
				name: 'autoRejectionTemplate',
				description:
					'Message sent automatically to applicants who do not pass the screening questions',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'autoRejectionTemplate',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Employment Status',
				name: 'employmentStatus',
				type: 'options',
				options: [
					{
						name: 'Contract',
						value: 'CONTRACT',
					},
					{
						name: 'Full Time',
						value: 'FULL_TIME',
					},
					{
						name: 'Internship',
						value: 'INTERNSHIP',
					},
					{
						name: 'Other',
						value: 'OTHER',
					},
					{
						name: 'Part Time',
						value: 'PART_TIME',
					},
					{
						name: 'Temporary',
						value: 'TEMPORARY',
					},
					{
						name: 'Volunteer',
						value: 'VOLUNTEER',
					},
				],
				default: 'CONTRACT',
				routing: {
					send: {
						type: 'body',
						property: 'employmentStatus',
					},
				},
			},
			{
				displayName: 'Recruiter',
				name: 'recruiter',
				description:
					'Recruiter job postings only. To create one LinkedIn requires project, functions, industries, seniority and applyMethod.',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'recruiter',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Screening Questions',
				name: 'screeningQuestions',
				description: 'Questions applicants must answer',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'screeningQuestions',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'Job ID',
		name: 'jobId',
		description: 'The job posting ID (from list_job_postings)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'jobId',
			},
		},
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['edit_job_posting'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['edit_job_posting'],
			},
		},
		options: [
			{
				displayName: 'Apply Method',
				name: 'applyMethod',
				description:
					'How people apply: on LinkedIn (applications are emailed to notificationEmail) or on an external site',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'applyMethod',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Auto Rejection Template',
				name: 'autoRejectionTemplate',
				description:
					'Message sent automatically to applicants who do not pass the screening questions',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'autoRejectionTemplate',
					},
				},
			},
			{
				displayName: 'Company',
				name: 'company',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'company',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Description',
				name: 'description',
				description: 'The job description. HTML tags may be used to structure it.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'description',
					},
				},
			},
			{
				displayName: 'Employment Status',
				name: 'employmentStatus',
				type: 'options',
				options: [
					{
						name: 'Contract',
						value: 'CONTRACT',
					},
					{
						name: 'Full Time',
						value: 'FULL_TIME',
					},
					{
						name: 'Internship',
						value: 'INTERNSHIP',
					},
					{
						name: 'Other',
						value: 'OTHER',
					},
					{
						name: 'Part Time',
						value: 'PART_TIME',
					},
					{
						name: 'Temporary',
						value: 'TEMPORARY',
					},
					{
						name: 'Volunteer',
						value: 'VOLUNTEER',
					},
				],
				default: 'CONTRACT',
				routing: {
					send: {
						type: 'body',
						property: 'employmentStatus',
					},
				},
			},
			{
				displayName: 'Job Title',
				name: 'jobTitle',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'jobTitle',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Location',
				name: 'location',
				description: "LinkedIn's ID for the place (lookup_search_ids type LOCATION)",
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'location',
					},
				},
			},
			{
				displayName: 'Recruiter',
				name: 'recruiter',
				description:
					'Recruiter job postings only. To create one LinkedIn requires project, functions, industries, seniority and applyMethod.',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'recruiter',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Screening Questions',
				name: 'screeningQuestions',
				description: 'Questions applicants must answer',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'screeningQuestions',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Workplace',
				name: 'workplace',
				type: 'options',
				options: [
					{
						name: 'Hybrid',
						value: 'HYBRID',
					},
					{
						name: 'On Site',
						value: 'ON_SITE',
					},
					{
						name: 'Remote',
						value: 'REMOTE',
					},
				],
				default: 'HYBRID',
				routing: {
					send: {
						type: 'body',
						property: 'workplace',
					},
				},
			},
		],
	},
	{
		displayName: 'Project ID',
		name: 'projectId',
		description: 'The hiring project ID (from list_hiring_projects)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'projectId',
			},
		},
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['get_hiring_project'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['get_hiring_project'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Applicant ID',
		name: 'applicantId',
		description: 'The applicant ID (from list_job_applicants)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'applicantId',
			},
		},
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['get_job_applicant'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['get_job_applicant'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Applicant ID',
		name: 'applicantId',
		description: 'The applicant ID (from list_job_applicants)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'applicantId',
			},
		},
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['get_job_applicant_resume'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['get_job_applicant_resume'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Service',
				name: 'service',
				description: 'Which LinkedIn product the job posting belongs to (default CLASSIC)',
				type: 'options',
				options: [
					{
						name: 'Classic',
						value: 'CLASSIC',
					},
					{
						name: 'Recruiter',
						value: 'RECRUITER',
					},
				],
				default: 'CLASSIC',
				routing: {
					send: {
						type: 'body',
						property: 'service',
					},
				},
			},
		],
	},
	{
		displayName: 'Job ID',
		name: 'jobId',
		description: 'The job posting ID (from list_job_postings)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'jobId',
			},
		},
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['get_job_posting'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['get_job_posting'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Service',
				name: 'service',
				description: 'Which LinkedIn product the job posting belongs to (default CLASSIC)',
				type: 'options',
				options: [
					{
						name: 'Classic',
						value: 'CLASSIC',
					},
					{
						name: 'Recruiter',
						value: 'RECRUITER',
					},
				],
				default: 'CLASSIC',
				routing: {
					send: {
						type: 'body',
						property: 'service',
					},
				},
			},
		],
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['list_hiring_projects'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['list_hiring_projects'],
				returnAll: [false],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['list_hiring_projects'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Sort By',
				name: 'sortBy',
				description: 'Order by (default ACCESSED_TIME)',
				type: 'options',
				options: [
					{
						name: 'Accessed Time',
						value: 'ACCESSED_TIME',
					},
					{
						name: 'Created Time',
						value: 'CREATED_TIME',
					},
					{
						name: 'Engaged Time',
						value: 'ENGAGED_TIME',
					},
					{
						name: 'Engagement Count',
						value: 'ENGAGEMENT_COUNT',
					},
					{
						name: 'Favorite',
						value: 'FAVORITE',
					},
					{
						name: 'Name',
						value: 'NAME',
					},
				],
				default: 'ACCESSED_TIME',
				routing: {
					send: {
						type: 'body',
						property: 'sortBy',
					},
				},
			},
			{
				displayName: 'Sort Order',
				name: 'sortOrder',
				description: 'Default DESCENDING',
				type: 'options',
				options: [
					{
						name: 'Ascending',
						value: 'ASCENDING',
					},
					{
						name: 'Descending',
						value: 'DESCENDING',
					},
				],
				default: 'ASCENDING',
				routing: {
					send: {
						type: 'body',
						property: 'sortOrder',
					},
				},
			},
			{
				displayName: 'State',
				name: 'state',
				description: 'Which projects (default ACTIVE)',
				type: 'multiOptions',
				options: [
					{
						name: 'Active',
						value: 'ACTIVE',
					},
					{
						name: 'Archived',
						value: 'ARCHIVED',
					},
				],
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'state',
					},
				},
			},
		],
	},
	{
		displayName: 'Job ID',
		name: 'jobId',
		description: 'The job posting ID (from list_job_postings)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'jobId',
			},
		},
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['list_job_applicants'],
			},
		},
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['list_job_applicants'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['list_job_applicants'],
				returnAll: [false],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['list_job_applicants'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Exclude Degree',
				name: 'excludeDegree',
				description: 'RECRUITER only: degree IDs to exclude',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'excludeDegree',
					},
				},
			},
			{
				displayName: 'Include Archived',
				name: 'includeArchived',
				description: 'Whether to switch this on. RECRUITER only: include archived applicants.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'includeArchived',
					},
				},
			},
			{
				displayName: 'Include Degree',
				name: 'includeDegree',
				description: 'RECRUITER only: degree IDs to include (lookup_search_ids type DEGREE)',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'includeDegree',
					},
				},
			},
			{
				displayName: 'Keywords',
				name: 'keywords',
				description: 'Only applicants matching these words',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'keywords',
					},
				},
			},
			{
				displayName: 'Ratings',
				name: 'ratings',
				description: 'CLASSIC only: only these ratings',
				type: 'multiOptions',
				options: [
					{
						name: 'Good Fit',
						value: 'GOOD_FIT',
					},
					{
						name: 'Maybe',
						value: 'MAYBE',
					},
					{
						name: 'Not a Fit',
						value: 'NOT_A_FIT',
					},
					{
						name: 'Unrated',
						value: 'UNRATED',
					},
				],
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'ratings',
					},
				},
			},
			{
				displayName: 'Service',
				name: 'service',
				description: 'Which LinkedIn product the job posting belongs to (default CLASSIC)',
				type: 'options',
				options: [
					{
						name: 'Classic',
						value: 'CLASSIC',
					},
					{
						name: 'Recruiter',
						value: 'RECRUITER',
					},
				],
				default: 'CLASSIC',
				routing: {
					send: {
						type: 'body',
						property: 'service',
					},
				},
			},
			{
				displayName: 'Sort By',
				name: 'sortBy',
				description: 'RECRUITER only',
				type: 'options',
				options: [
					{
						name: 'Alphabetical',
						value: 'alphabetical',
					},
					{
						name: 'Newest First',
						value: 'newest_first',
					},
					{
						name: 'Relevance',
						value: 'relevance',
					},
					{
						name: 'Screening Requirements',
						value: 'screening_requirements',
					},
				],
				default: 'alphabetical',
				routing: {
					send: {
						type: 'body',
						property: 'sortBy',
					},
				},
			},
			{
				displayName: 'Years in Company',
				name: 'yearsInCompany',
				description: 'RECRUITER only: years in current company',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'yearsInCompany',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Years in Position',
				name: 'yearsInPosition',
				description: 'RECRUITER only: years in current position',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'yearsInPosition',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Years of Experience',
				name: 'yearsOfExperience',
				description: 'RECRUITER only',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'yearsOfExperience',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['list_job_postings'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['list_job_postings'],
				returnAll: [false],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['list_job_postings'],
			},
		},
		options: [
			{
				displayName: 'Category',
				name: 'category',
				description: 'Which postings (default active)',
				type: 'options',
				options: [
					{
						name: 'Active',
						value: 'active',
					},
					{
						name: 'Closed',
						value: 'closed',
					},
					{
						name: 'Draft',
						value: 'draft',
					},
				],
				default: 'active',
				routing: {
					send: {
						type: 'body',
						property: 'category',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Candidate ID',
		name: 'candidateId',
		description: "The person's Recruiter ID (AE…)",
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'candidateId',
			},
		},
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['move_recruiter_candidate'],
			},
		},
	},
	{
		displayName: 'Action',
		name: 'actionChoice',
		description:
			'Add_candidate: add someone you sourced. add_applicant: add someone who applied. change_stage: move someone already in the pipeline.',
		type: 'options',
		options: [
			{
				name: 'Add Applicant',
				value: 'add_applicant',
			},
			{
				name: 'Add Candidate',
				value: 'add_candidate',
			},
			{
				name: 'Change Stage',
				value: 'change_stage',
			},
		],
		default: 'add_applicant',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'action',
			},
		},
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['move_recruiter_candidate'],
			},
		},
	},
	{
		displayName: 'Hiring Project ID',
		name: 'hiringProjectId',
		description: 'The hiring project (from list_hiring_projects)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'hiringProjectId',
			},
		},
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['move_recruiter_candidate'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['move_recruiter_candidate'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Stage',
				name: 'stage',
				description: 'The pipeline stage (default UNCONTACTED)',
				type: 'options',
				options: [
					{
						name: 'Contacted',
						value: 'CONTACTED',
					},
					{
						name: 'Replied',
						value: 'REPLIED',
					},
					{
						name: 'Uncontacted',
						value: 'UNCONTACTED',
					},
				],
				default: 'CONTACTED',
				routing: {
					send: {
						type: 'body',
						property: 'stage',
					},
				},
			},
		],
	},
	{
		displayName: 'Draft ID',
		name: 'draftId',
		description: 'The draft ID (from create_job_posting, or list_job_postings category draft)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'draftId',
			},
		},
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['publish_job_posting'],
			},
		},
	},
	{
		displayName: 'Mode',
		name: 'mode',
		description:
			'FREE costs nothing. PROMOTED and PROMOTED_PLUS (ordinary postings only) are paid.',
		type: 'options',
		options: [
			{
				name: 'Free',
				value: 'FREE',
			},
			{
				name: 'Promoted',
				value: 'PROMOTED',
			},
			{
				name: 'Promoted Plus',
				value: 'PROMOTED_PLUS',
			},
		],
		default: 'FREE',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'mode',
			},
		},
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['publish_job_posting'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['publish_job_posting'],
			},
		},
		options: [
			{
				displayName: 'Budget',
				name: 'budget',
				description: 'Paid modes only: the most to spend per day or per month',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'budget',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Bypass Email Verification',
				name: 'bypassEmailVerification',
				description:
					"Whether to switch this on. Skip LinkedIn's check that you may post for this company.",
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'bypassEmailVerification',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Hiring Photo Frame',
				name: 'hiringPhotoFrame',
				description: 'Whether to switch this on. Add the #Hiring frame to your profile picture.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'hiringPhotoFrame',
					},
				},
			},
			{
				displayName: 'Service',
				name: 'service',
				description: 'Which LinkedIn product the job posting belongs to (default CLASSIC)',
				type: 'options',
				options: [
					{
						name: 'Classic',
						value: 'CLASSIC',
					},
					{
						name: 'Recruiter',
						value: 'RECRUITER',
					},
				],
				default: 'CLASSIC',
				routing: {
					send: {
						type: 'body',
						property: 'service',
					},
				},
			},
		],
	},
	{
		displayName: 'Applicant ID',
		name: 'applicantId',
		description: "The applicant's Recruiter ID (AE…)",
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'applicantId',
			},
		},
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['reject_recruiter_applicant'],
			},
		},
	},
	{
		displayName: 'Hiring Project ID',
		name: 'hiringProjectId',
		description: 'The hiring project (from list_hiring_projects)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'hiringProjectId',
			},
		},
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['reject_recruiter_applicant'],
			},
		},
	},
	{
		displayName: 'Reason',
		name: 'reason',
		type: 'options',
		options: [
			{
				name: 'More Qualified Candidates',
				value: 'MORE_QUALIFIED_CANDIDATES',
			},
			{
				name: 'Not Considered or Reason Not Specified',
				value: 'NOT_CONSIDERED_OR_REASON_NOT_SPECIFIED',
			},
			{
				name: 'Not in Desired Location',
				value: 'NOT_IN_DESIRED_LOCATION',
			},
			{
				name: 'Not Meet Basic Qualifications',
				value: 'NOT_MEET_BASIC_QUALIFICATIONS',
			},
			{
				name: 'Withdrew Application',
				value: 'WITHDREW_APPLICATION',
			},
		],
		default: 'MORE_QUALIFIED_CANDIDATES',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'reason',
			},
		},
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['reject_recruiter_applicant'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['reject_recruiter_applicant'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Notify At',
				name: 'notifyAt',
				description: 'When to send the notice (ISO 8601 UTC). Default: now.',
				type: 'dateTime',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'notifyAt',
					},
				},
			},
			{
				displayName: 'Notify Message',
				name: 'notifyMessage',
				description:
					'Text of the rejection notice to send the applicant. Omit to reject without telling them.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'notifyMessage',
					},
				},
			},
		],
	},
	{
		displayName: 'Draft ID',
		name: 'draftId',
		description: 'The draft ID whose publishing is waiting',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'draftId',
			},
		},
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['solve_job_posting_checkpoint'],
			},
		},
	},
	{
		displayName: 'Code',
		name: 'code',
		description: 'The verification code LinkedIn sent',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'code',
			},
		},
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['solve_job_posting_checkpoint'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['recruiter'],
				operation: ['solve_job_posting_checkpoint'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['search'],
			},
		},
		options: [
			{
				name: 'Count People',
				value: 'count_people',
				action: 'Count people',
				description: 'Count how many LinkedIn people match a filter set — FREE, instant, and exact',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/count_people',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Find Companies',
				value: 'find_companies',
				action: 'Find companies',
				description:
					'Find companies by BUYING SIGNALS and firmographics — hiring now, fast-growing headcount, revenue band, new leadership, and/or recently funded — optionally scoped by industry, HQ location, and size',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/find_companies',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Find Decision Makers',
				value: 'find_decision_makers',
				action: 'Find decision makers',
				description:
					'Find the senior decision-makers at a company — C-level, VP, Head-of, Director, Founder — by company name',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/find_decision_makers',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Company',
				value: 'get_company',
				action: 'Get company',
				description:
					'Read ONE LinkedIn company page live: name, description, website, industry, size, locations, follower count, and its numeric ID (which list_posts_by_author, list_followers and the search filters take)',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_company',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'List Funding Signals',
				value: 'list_funding_signals',
				action: 'List funding signals',
				description:
					'List companies that recently had a FUNDING event (recently raised) — great for timing outreach while budget is fresh',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/list_funding_signals',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Lookup Search IDs',
				value: 'lookup_search_ids',
				action: 'Look up the codes of search filters',
				description:
					'Find the LinkedIn ID for a name — LinkedIn search and post audience filters take IDs, not text',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/lookup_search_ids',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Save Lead',
				value: 'save_lead',
				action: 'Save lead',
				description:
					'Save ONE person as a lead in your Sales Navigator, optionally into one of your lead lists',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/save_lead',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Search LinkedIn',
				value: 'search_linkedin',
				action: 'Search with any filter',
				description: "Search LinkedIn on your OWN account with any of LinkedIn's filters",
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/search_linkedin',
						body: {},
					},
					send: {
						paginate: true,
					},
					operations: {
						pagination: paginate({
							by: 'cursor',
							list: 'results',
							pageSize: 100,
							next: 'nextCursor',
							more: 'hasMore',
						}),
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Search LinkedIn Companies',
				value: 'search_linkedin_companies',
				action: 'Search companies with every filter typed',
				description:
					'Search company pages on ordinary LinkedIn, with each LinkedIn filter as its own typed input',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/search_linkedin_companies',
						body: {},
					},
					send: {
						paginate: true,
					},
					operations: {
						pagination: paginate({
							by: 'cursor',
							list: 'results',
							pageSize: 10,
							next: 'nextCursor',
							more: 'hasMore',
						}),
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Search LinkedIn Jobs',
				value: 'search_linkedin_jobs',
				action: 'Search jobs with every filter typed',
				description:
					'Search job listings on LinkedIn, with each LinkedIn filter as its own typed input',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/search_linkedin_jobs',
						body: {},
					},
					send: {
						paginate: true,
					},
					operations: {
						pagination: paginate({
							by: 'cursor',
							list: 'results',
							pageSize: 50,
							next: 'nextCursor',
							more: 'hasMore',
						}),
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Search LinkedIn People',
				value: 'search_linkedin_people',
				action: 'Search people with every filter typed',
				description:
					'Search people on ordinary LinkedIn, with each LinkedIn filter as its own typed input',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/search_linkedin_people',
						body: {},
					},
					send: {
						paginate: true,
					},
					operations: {
						pagination: paginate({
							by: 'cursor',
							list: 'results',
							pageSize: 10,
							next: 'nextCursor',
							more: 'hasMore',
						}),
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Search LinkedIn Posts',
				value: 'search_linkedin_posts',
				action: 'Search posts with every filter typed',
				description: 'Search posts on LinkedIn, with each LinkedIn filter as its own typed input',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/search_linkedin_posts',
						body: {},
					},
					send: {
						paginate: true,
					},
					operations: {
						pagination: paginate({
							by: 'cursor',
							list: 'results',
							pageSize: 49,
							next: 'nextCursor',
							more: 'hasMore',
						}),
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Search LinkedIn Recruiter People',
				value: 'search_linkedin_recruiter_people',
				action: 'Search candidates in my recruiter with every filter typed',
				description:
					'Search candidates in Recruiter on your own seat, with each Recruiter filter as its own typed input',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/search_linkedin_recruiter_people',
						body: {},
					},
					send: {
						paginate: true,
					},
					operations: {
						pagination: paginate({
							by: 'cursor',
							list: 'results',
							pageSize: 100,
							next: 'nextCursor',
							more: 'hasMore',
						}),
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Search LinkedIn Sales Navigator Companies',
				value: 'search_linkedin_sales_navigator_companies',
				action: 'Search companies in my sales navigator with every filter typed',
				description:
					'Search companies in Sales Navigator on your own seat, with each Sales Navigator filter as its own typed input',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/search_linkedin_sales_navigator_companies',
						body: {},
					},
					send: {
						paginate: true,
					},
					operations: {
						pagination: paginate({
							by: 'cursor',
							list: 'results',
							pageSize: 100,
							next: 'nextCursor',
							more: 'hasMore',
						}),
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Search LinkedIn Sales Navigator People',
				value: 'search_linkedin_sales_navigator_people',
				action: 'Search people in my sales navigator with every filter typed',
				description:
					'Search people in Sales Navigator on your own seat, with each Sales Navigator filter as its own typed input',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/search_linkedin_sales_navigator_people',
						body: {},
					},
					send: {
						paginate: true,
					},
					operations: {
						pagination: paginate({
							by: 'cursor',
							list: 'results',
							pageSize: 100,
							next: 'nextCursor',
							more: 'hasMore',
						}),
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Search People',
				value: 'search_people',
				action: 'Search people',
				description:
					'Pull LinkedIn people matching a filter set — each person returns name, current title & company, headline, location, industry, the LinkedIn profile URL, providerId (feed to get_recent_posts to personalize), salesNavLeadUrl (the InMail-ready URL — pass it, or {profileUrl, providerId}, to add_message_targets on an InMail campaign), openProfile (true = accepts InMail for free), connectionDegree, sharedConnectionsCount (warm-intro signal), tenureInRole/tenureInCompany (a SHORT tenure means newly in seat — a timing signal for outreach), and pendingInvitation (true = already invited, skip it)',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/search_people',
						body: {},
					},
					send: {
						paginate: true,
					},
					operations: {
						pagination: paginate({
							by: 'cursor',
							list: 'leads',
							pageSize: 100,
							next: 'nextCursor',
							more: 'hasMore',
						}),
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Search People Classic',
				value: 'search_people_classic',
				action: 'Search people classic',
				description:
					"Search people with LinkedIn's ordinary people search, run on your OWN LinkedIn account — the same results you would see searching LinkedIn yourself, with no Sales Navigator seat needed and no credits",
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/search_people_classic',
						body: {},
					},
					send: {
						paginate: true,
					},
					operations: {
						pagination: paginate({
							by: 'cursor',
							list: 'people',
							pageSize: 10,
							next: 'nextCursor',
							more: 'hasMore',
						}),
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
		],
		default: 'count_people',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['count_people'],
			},
		},
		options: [
			{
				displayName: 'Changed Jobs',
				name: 'changedJobs',
				description:
					'Whether to switch this on. Only people who recently changed jobs (buying signal).',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'changedJobs',
					},
				},
			},
			{
				displayName: 'Companies',
				name: 'companies',
				description:
					'Current companies by name, e.g. ["Google","Stripe"]. Each name is looked up and the top match used — when you already have LinkedIn company IDs (find_companies / list_funding_signals return companyId), pass companyIds instead.',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'companies',
					},
				},
			},
			{
				displayName: 'Company Headcounts',
				name: 'companyHeadcounts',
				description:
					'Company size bands. Valid: self-employed, 1-10, 11-50, 51-200, 201-500, 501-1000, 1001-5000, 5001-10000, 10001+.',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'companyHeadcounts',
					},
				},
			},
			{
				displayName: 'Company IDs',
				name: 'companyIds',
				description:
					'Current companies by LinkedIn company ID — the companyId values find_companies / list_funding_signals return (up to 100). Exact: no name lookup, so no same-name mix-ups. Combine with seniorities and changedJobs / postedOnLinkedIn to get the decision-makers at signal companies who just moved / are posting.',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'companyIds',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Company Max Revenue Millions',
				name: 'companyMaxRevenueMillions',
				description:
					'Only people at companies with at most this annual revenue, in millions (e.g. 100 = up to $100M). Same brackets as companyMinRevenueMillions.',
				type: 'number',
				default: 0,
				typeOptions: {
					minValue: 0,
				},
				routing: {
					send: {
						type: 'body',
						property: 'companyMaxRevenueMillions',
					},
				},
			},
			{
				displayName: 'Company Min Revenue Millions',
				name: 'companyMinRevenueMillions',
				description:
					"Only people at companies with at least this annual revenue, in millions (e.g. 10 = $10M+) — use it to target companies that can afford the user's price. LinkedIn uses fixed brackets (0, 0.2, 1, 2.5, 5, 10, 20, 50, 100, 500, 1000); other values widen to the nearest one. The companies are matched on the same industries / companyHeadcounts / locations (as HQ location). Revenue is LinkedIn's estimate — companies without one are left out.",
				type: 'number',
				default: 0,
				typeOptions: {
					minValue: 0,
				},
				routing: {
					send: {
						type: 'body',
						property: 'companyMinRevenueMillions',
					},
				},
			},
			{
				displayName: 'Functions',
				name: 'functions',
				description: 'Job functions/departments, e.g. ["Engineering","Sales","Marketing"]',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'functions',
					},
				},
			},
			{
				displayName: 'Industries',
				name: 'industries',
				description: 'Company industries in plain English, e.g. ["Software","Financial Services"]',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'industries',
					},
				},
			},
			{
				displayName: 'Keywords',
				name: 'keywords',
				description:
					'Free-text keywords searched across all profile fields (title, headline, about, company)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'keywords',
					},
				},
			},
			{
				displayName: 'Locations',
				name: 'locations',
				description:
					'Person locations in plain English, e.g. ["United States","London"]. Resolved to LinkedIn regions automatically.',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'locations',
					},
				},
			},
			{
				displayName: 'Posted on LinkedIn',
				name: 'postedOnLinkedIn',
				description:
					'Whether to switch this on. Only people who recently posted on LinkedIn (active/reachable signal).',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'postedOnLinkedIn',
					},
				},
			},
			{
				displayName: 'Revenue Currency',
				name: 'revenueCurrency',
				description: 'ISO currency of the revenue band, e.g. "USD" (default), "EUR", "GBP"',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'revenueCurrency',
					},
				},
			},
			{
				displayName: 'Seniorities',
				name: 'seniorities',
				description:
					'Seniority levels, e.g. ["CXO","VP","Director","Manager"] (owner/partner, cxo, vice_president, director, experienced_manager, entry_level_manager, strategic, senior, entry_level, in_training)',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'seniorities',
					},
				},
			},
			{
				displayName: 'Titles',
				name: 'titles',
				description:
					'Job titles, e.g. ["Chief Technology Officer","VP of Engineering"]. Matched as OR\'d keywords — pass variants to go broad.',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'titles',
					},
				},
			},
		],
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
		default: 50,
		description: 'Max number of results to return',
		routing: {
			send: {
				type: 'body',
				property: 'limit',
			},
		},
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['find_companies'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['find_companies'],
			},
		},
		options: [
			{
				displayName: 'Growing Team Min Pct',
				name: 'growingTeamMinPct',
				description: 'Minimum headcount-growth percent, e.g. 20 = teams that grew ≥20%',
				type: 'number',
				default: 0,
				routing: {
					send: {
						type: 'body',
						property: 'growingTeamMinPct',
					},
				},
			},
			{
				displayName: 'Headcounts',
				name: 'headcounts',
				description:
					'Company size bands. Valid: self-employed, 1-10, 11-50, 51-200, 201-500, 501-1000, 1001-5000, 5001-10000, 10001+.',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'headcounts',
					},
				},
			},
			{
				displayName: 'Hiring',
				name: 'hiring',
				description:
					'Whether to switch this on. Only companies with open job posts right now (hiring signal).',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'hiring',
					},
				},
			},
			{
				displayName: 'Industries',
				name: 'industries',
				description: 'Company industries, e.g. ["Software","Financial Services"]',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'industries',
					},
				},
			},
			{
				displayName: 'Locations',
				name: 'locations',
				description: 'Company HQ locations, e.g. ["United States"]',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'locations',
					},
				},
			},
			{
				displayName: 'Max Revenue Millions',
				name: 'maxRevenueMillions',
				description: 'Maximum annual revenue in millions (same brackets)',
				type: 'number',
				default: 0,
				typeOptions: {
					minValue: 0,
				},
				routing: {
					send: {
						type: 'body',
						property: 'maxRevenueMillions',
					},
				},
			},
			{
				displayName: 'Min Revenue Millions',
				name: 'minRevenueMillions',
				description:
					"Minimum annual revenue in millions (e.g. 10 = $10M+). LinkedIn uses fixed brackets (0, 0.2, 1, 2.5, 5, 10, 20, 50, 100, 500, 1000); other values widen to the nearest one. Revenue is LinkedIn's estimate — companies without one are left out.",
				type: 'number',
				default: 0,
				typeOptions: {
					minValue: 0,
				},
				routing: {
					send: {
						type: 'body',
						property: 'minRevenueMillions',
					},
				},
			},
			{
				displayName: 'Recent Funding',
				name: 'recentFunding',
				description:
					'Whether to switch this on. Only companies with a recent funding event (same as list_funding_signals).',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'recentFunding',
					},
				},
			},
			{
				displayName: 'Recent Leadership Change',
				name: 'recentLeadershipChange',
				description:
					'Whether to switch this on. Only companies with a recent senior-leadership change (new-boss signal).',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'recentLeadershipChange',
					},
				},
			},
			{
				displayName: 'Revenue Currency',
				name: 'revenueCurrency',
				description: 'Currency for the revenue band (default USD)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'revenueCurrency',
					},
				},
			},
		],
	},
	{
		displayName: 'Company',
		name: 'company',
		description: 'Company name, e.g. "Stripe". Resolved to the LinkedIn company automatically.',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'company',
			},
		},
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['find_decision_makers'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
		default: 50,
		description: 'Max number of results to return',
		routing: {
			send: {
				type: 'body',
				property: 'limit',
			},
		},
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['find_decision_makers'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['find_decision_makers'],
			},
		},
		options: [
			{
				displayName: 'Confirm',
				name: 'confirm',
				description:
					'Whether to switch this on. false (default) = cost estimate only. true = pull and charge after the user agreed.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'confirm',
					},
				},
			},
			{
				displayName: 'Format',
				name: 'format',
				description:
					'Table (default) = rows for a table. csv = also return an export-ready CSV string.',
				type: 'options',
				options: [
					{
						name: 'CSV',
						value: 'csv',
					},
					{
						name: 'Table',
						value: 'table',
					},
				],
				default: 'table',
				routing: {
					send: {
						type: 'body',
						property: 'format',
					},
				},
			},
			{
				displayName: 'Functions',
				name: 'functions',
				description: 'Narrow by job function/department, e.g. ["Sales","Marketing","Engineering"]',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'functions',
					},
				},
			},
			{
				displayName: 'Locations',
				name: 'locations',
				description: 'Optional person locations to narrow to, e.g. ["United States"]',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'locations',
					},
				},
			},
			{
				displayName: 'Seniorities',
				name: 'seniorities',
				description:
					'Narrow by seniority level, e.g. ["CXO","VP","Director"] (owner/partner, cxo, vice_president, director, experienced_manager, entry_level_manager, strategic, senior, entry_level, in_training)',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'seniorities',
					},
				},
			},
			{
				displayName: 'Titles',
				name: 'titles',
				description:
					'Specific senior roles to target, e.g. ["VP of Sales","Head of Growth"]. Omit for the full decision-maker set (C-level/VP/Director/Founder).',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'titles',
					},
				},
			},
		],
	},
	{
		displayName: 'Company',
		name: 'company',
		description:
			'The company: its LinkedIn page URL, its name as it appears in that URL, or its numeric ID',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'company',
			},
		},
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['get_company'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['get_company'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
		],
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
		default: 50,
		description: 'Max number of results to return',
		routing: {
			send: {
				type: 'body',
				property: 'limit',
			},
		},
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['list_funding_signals'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['list_funding_signals'],
			},
		},
		options: [
			{
				displayName: 'Headcounts',
				name: 'headcounts',
				description:
					'Company size bands. Valid: self-employed, 1-10, 11-50, 51-200, 201-500, 501-1000, 1001-5000, 5001-10000, 10001+.',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'headcounts',
					},
				},
			},
			{
				displayName: 'Industries',
				name: 'industries',
				description: 'Company industries in plain English, e.g. ["Software","Financial Services"]',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'industries',
					},
				},
			},
			{
				displayName: 'Locations',
				name: 'locations',
				description: 'Company HQ locations, e.g. ["United States","Europe"]',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'locations',
					},
				},
			},
			{
				displayName: 'Max Revenue Millions',
				name: 'maxRevenueMillions',
				description: 'Maximum annual revenue in millions (same brackets)',
				type: 'number',
				default: 0,
				typeOptions: {
					minValue: 0,
				},
				routing: {
					send: {
						type: 'body',
						property: 'maxRevenueMillions',
					},
				},
			},
			{
				displayName: 'Min Revenue Millions',
				name: 'minRevenueMillions',
				description:
					"Minimum annual revenue in millions (e.g. 10 = $10M+). LinkedIn uses fixed brackets (0, 0.2, 1, 2.5, 5, 10, 20, 50, 100, 500, 1000); other values widen to the nearest one. Revenue is LinkedIn's estimate — companies without one are left out.",
				type: 'number',
				default: 0,
				typeOptions: {
					minValue: 0,
				},
				routing: {
					send: {
						type: 'body',
						property: 'minRevenueMillions',
					},
				},
			},
			{
				displayName: 'Revenue Currency',
				name: 'revenueCurrency',
				description: 'Currency for the revenue band (default USD)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'revenueCurrency',
					},
				},
			},
		],
	},
	{
		displayName: 'Type',
		name: 'type',
		description: 'What kind of thing to look up',
		type: 'options',
		options: [
			{
				name: 'Account Lists',
				value: 'ACCOUNT_LISTS',
			},
			{
				name: 'Company',
				value: 'COMPANY',
			},
			{
				name: 'Connections',
				value: 'CONNECTIONS',
			},
			{
				name: 'Degree',
				value: 'DEGREE',
			},
			{
				name: 'Department',
				value: 'DEPARTMENT',
			},
			{
				name: 'Employment Type',
				value: 'EMPLOYMENT_TYPE',
			},
			{
				name: 'Groups',
				value: 'GROUPS',
			},
			{
				name: 'Hiring Projects',
				value: 'HIRING_PROJECTS',
			},
			{
				name: 'Industry',
				value: 'INDUSTRY',
			},
			{
				name: 'Job Function',
				value: 'JOB_FUNCTION',
			},
			{
				name: 'Job Title',
				value: 'JOB_TITLE',
			},
			{
				name: 'Language',
				value: 'LANGUAGE',
			},
			{
				name: 'Lead Lists',
				value: 'LEAD_LISTS',
			},
			{
				name: 'Location',
				value: 'LOCATION',
			},
			{
				name: 'People',
				value: 'PEOPLE',
			},
			{
				name: 'Persona',
				value: 'PERSONA',
			},
			{
				name: 'Post Job Function',
				value: 'POST_JOB_FUNCTION',
			},
			{
				name: 'Postal Code',
				value: 'POSTAL_CODE',
			},
			{
				name: 'Recent Searches',
				value: 'RECENT_SEARCHES',
			},
			{
				name: 'Region',
				value: 'REGION',
			},
			{
				name: 'Sales Industry',
				value: 'SALES_INDUSTRY',
			},
			{
				name: 'Saved Accounts',
				value: 'SAVED_ACCOUNTS',
			},
			{
				name: 'Saved Filters',
				value: 'SAVED_FILTERS',
			},
			{
				name: 'Saved Searches',
				value: 'SAVED_SEARCHES',
			},
			{
				name: 'School',
				value: 'SCHOOL',
			},
			{
				name: 'Seniority',
				value: 'SENIORITY',
			},
			{
				name: 'Service',
				value: 'SERVICE',
			},
			{
				name: 'Skill',
				value: 'SKILL',
			},
			{
				name: 'Technologies',
				value: 'TECHNOLOGIES',
			},
		],
		default: 'ACCOUNT_LISTS',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'type',
			},
		},
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['lookup_search_ids'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
		default: 50,
		description: 'Max number of results to return',
		routing: {
			send: {
				type: 'body',
				property: 'limit',
			},
		},
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['lookup_search_ids'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['lookup_search_ids'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Keywords',
				name: 'keywords',
				description:
					'The name to look for, e.g. "Berlin" or "Software". Not used for EMPLOYMENT_TYPE.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'keywords',
					},
				},
			},
			{
				displayName: 'Service',
				name: 'service',
				description: 'Whose list to search (default CLASSIC)',
				type: 'options',
				options: [
					{
						name: 'Classic',
						value: 'CLASSIC',
					},
					{
						name: 'Recruiter',
						value: 'RECRUITER',
					},
					{
						name: 'Sales Navigator',
						value: 'SALES_NAVIGATOR',
					},
				],
				default: 'CLASSIC',
				routing: {
					send: {
						type: 'body',
						property: 'service',
					},
				},
			},
		],
	},
	{
		displayName: 'Lead',
		name: 'lead',
		description: "The person's Sales Navigator lead URL, or their Sales Navigator ID (ACw…)",
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'lead',
			},
		},
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['save_lead'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['save_lead'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'List ID',
				name: 'listId',
				description:
					'Save into this lead list (lookup_search_ids type LEAD_LISTS, service SALES_NAVIGATOR). Omit to save without a list.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'listId',
					},
				},
			},
		],
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['search_linkedin'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['search_linkedin'],
				returnAll: [false],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['search_linkedin'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Filters',
				name: 'filters',
				description:
					'The search filters for that kind, e.g. { keywords: "head of sales", network_distance: [2], location: ["106967730"] }',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'filters',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Kind',
				name: 'kind',
				description: 'What to search. Required unless URL is given.',
				type: 'options',
				options: [
					{
						name: 'Classic/companies',
						value: 'classic/companies',
					},
					{
						name: 'Classic/jobs',
						value: 'classic/jobs',
					},
					{
						name: 'Classic/people',
						value: 'classic/people',
					},
					{
						name: 'Classic/posts',
						value: 'classic/posts',
					},
					{
						name: 'Recruiter/people',
						value: 'recruiter/people',
					},
					{
						name: 'Sales Navigator/companies',
						value: 'sales_navigator/companies',
					},
					{
						name: 'Sales Navigator/people',
						value: 'sales_navigator/people',
					},
				],
				default: 'classic/companies',
				routing: {
					send: {
						type: 'body',
						property: 'kind',
					},
				},
			},
			{
				displayName: 'URL',
				name: 'url',
				description:
					'A LinkedIn / Sales Navigator / Recruiter search URL to run instead of kind + filters',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'url',
					},
				},
			},
		],
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['search_linkedin_companies'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['search_linkedin_companies'],
				returnAll: [false],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['search_linkedin_companies'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Has Job Offers',
				name: 'hasJobOffers',
				description: 'Whether to switch this on. Only companies with job listings on LinkedIn.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'hasJobOffers',
					},
				},
			},
			{
				displayName: 'Headcount',
				name: 'headcount',
				description: "Company sizes, as LinkedIn's own bands, e.g. { min: 51, max: 200 }",
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'headcount',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Industry',
				name: 'industry',
				description: 'Industries: IDs from lookup_search_ids type INDUSTRY',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'industry',
					},
				},
			},
			{
				displayName: 'Keywords',
				name: 'keywords',
				description: 'Words to search for',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'keywords',
					},
				},
			},
			{
				displayName: 'Location',
				name: 'location',
				description: 'Places: IDs from lookup_search_ids type LOCATION',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'location',
					},
				},
			},
			{
				displayName: 'Network Distance',
				name: 'networkDistance',
				description: 'Connection degrees from you: 1, 2, 3',
				type: 'multiOptions',
				options: [
					{
						name: '1',
						value: 1,
					},
					{
						name: '2',
						value: 2,
					},
					{
						name: '3',
						value: 3,
					},
				],
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'networkDistance',
					},
				},
			},
		],
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['search_linkedin_jobs'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['search_linkedin_jobs'],
				returnAll: [false],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['search_linkedin_jobs'],
			},
		},
		options: [
			{
				displayName: 'Benefits',
				name: 'benefits',
				description: 'Benefits offered',
				type: 'multiOptions',
				options: [
					{
						name: '401(k)',
						value: '401(k)',
					},
					{
						name: 'Commuter Benefits',
						value: 'commuter_benefits',
					},
					{
						name: 'Dental Insurance',
						value: 'dental_insurance',
					},
					{
						name: 'Disability Insurance',
						value: 'disability_insurance',
					},
					{
						name: 'Medical Insurance',
						value: 'medical_insurance',
					},
					{
						name: 'Paid Maternity Leave',
						value: 'paid_maternity_leave',
					},
					{
						name: 'Paid Paternity Leave',
						value: 'paid_paternity_leave',
					},
					{
						name: 'Pension Plan',
						value: 'pension_plan',
					},
					{
						name: 'Student Loan Assistance',
						value: 'student_loan_assistance',
					},
					{
						name: 'Tuition Assistance',
						value: 'tuition_assistance',
					},
					{
						name: 'Vision Insurance',
						value: 'vision_insurance',
					},
				],
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'benefits',
					},
				},
			},
			{
				displayName: 'Commitments',
				name: 'commitments',
				description: 'Company commitments',
				type: 'multiOptions',
				options: [
					{
						name: 'Career Growth and Learning',
						value: 'career_growth_and_learning',
					},
					{
						name: 'Diversity Equity and Inclusion',
						value: 'diversity_equity_and_inclusion',
					},
					{
						name: 'Environmental Sustainability',
						value: 'environmental_sustainability',
					},
					{
						name: 'Social Impact',
						value: 'social_impact',
					},
					{
						name: 'Work Life Balance',
						value: 'work_life_balance',
					},
				],
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'commitments',
					},
				},
			},
			{
				displayName: 'Company',
				name: 'company',
				description: 'Companies: IDs from lookup_search_ids type COMPANY',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'company',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Date Posted',
				name: 'datePosted',
				description: 'Posted within this many days',
				type: 'number',
				default: 0,
				routing: {
					send: {
						type: 'body',
						property: 'datePosted',
					},
				},
			},
			{
				displayName: 'Easy Apply',
				name: 'easyApply',
				description: 'Whether to switch this on. Only Easy Apply jobs.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'easyApply',
					},
				},
			},
			{
				displayName: 'Fair Chance Employer',
				name: 'fairChanceEmployer',
				description: 'Whether to switch this on. Only fair-chance employers.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'fairChanceEmployer',
					},
				},
			},
			{
				displayName: 'Function',
				name: 'function',
				description: 'Job functions: IDs from lookup_search_ids type JOB_FUNCTION',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'function',
					},
				},
			},
			{
				displayName: 'Has Verifications',
				name: 'hasVerifications',
				description: 'Whether to switch this on. Only jobs with verifications.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'hasVerifications',
					},
				},
			},
			{
				displayName: 'In Your Network',
				name: 'inYourNetwork',
				description: 'Whether to switch this on. Only jobs at companies where you know someone.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'inYourNetwork',
					},
				},
			},
			{
				displayName: 'Industry',
				name: 'industry',
				description: 'Industries: IDs from lookup_search_ids type INDUSTRY',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'industry',
					},
				},
			},
			{
				displayName: 'Job Type',
				name: 'jobType',
				description: 'Job types',
				type: 'multiOptions',
				options: [
					{
						name: 'Contract',
						value: 'contract',
					},
					{
						name: 'Full Time',
						value: 'full_time',
					},
					{
						name: 'Internship',
						value: 'internship',
					},
					{
						name: 'Other',
						value: 'other',
					},
					{
						name: 'Part Time',
						value: 'part_time',
					},
					{
						name: 'Temporary',
						value: 'temporary',
					},
					{
						name: 'Volunteer',
						value: 'volunteer',
					},
				],
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'jobType',
					},
				},
			},
			{
				displayName: 'Keywords',
				name: 'keywords',
				description: 'Words to search for',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'keywords',
					},
				},
			},
			{
				displayName: 'Location',
				name: 'location',
				description: 'Places: IDs from lookup_search_ids type LOCATION',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'location',
					},
				},
			},
			{
				displayName: 'Location Within Area',
				name: 'locationWithinArea',
				description: 'Miles around the location',
				type: 'number',
				default: 0,
				routing: {
					send: {
						type: 'body',
						property: 'locationWithinArea',
					},
				},
			},
			{
				displayName: 'Minimum Salary',
				name: 'minimumSalary',
				description:
					"Lowest yearly salary, in thousands: one of LinkedIn's own steps for that currency",
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'minimumSalary',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Presence',
				name: 'presence',
				description: 'On site, hybrid or remote',
				type: 'multiOptions',
				options: [
					{
						name: 'Hybrid',
						value: 'hybrid',
					},
					{
						name: 'On Site',
						value: 'on_site',
					},
					{
						name: 'Remote',
						value: 'remote',
					},
				],
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'presence',
					},
				},
			},
			{
				displayName: 'Region',
				name: 'region',
				description: 'A country or region: an ID from lookup_search_ids type LOCATION',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'region',
					},
				},
			},
			{
				displayName: 'Role',
				name: 'role',
				description: 'Job titles: IDs from lookup_search_ids type JOB_TITLE',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'role',
					},
				},
			},
			{
				displayName: 'Seniority',
				name: 'seniority',
				description: 'Experience levels',
				type: 'multiOptions',
				options: [
					{
						name: 'Associate',
						value: 'associate',
					},
					{
						name: 'Director',
						value: 'director',
					},
					{
						name: 'Entry',
						value: 'entry',
					},
					{
						name: 'Executive',
						value: 'executive',
					},
					{
						name: 'Intern',
						value: 'intern',
					},
					{
						name: 'Mid Senior',
						value: 'mid_senior',
					},
				],
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'seniority',
					},
				},
			},
			{
				displayName: 'Sort By',
				name: 'sortBy',
				description: 'Order (default relevance)',
				type: 'options',
				options: [
					{
						name: 'Date',
						value: 'date',
					},
					{
						name: 'Relevance',
						value: 'relevance',
					},
				],
				default: 'date',
				routing: {
					send: {
						type: 'body',
						property: 'sortBy',
					},
				},
			},
			{
				displayName: 'Under10 Applicants',
				name: 'under10Applicants',
				description: 'Whether to switch this on. Only jobs with fewer than 10 applicants.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'under10Applicants',
					},
				},
			},
		],
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['search_linkedin_people'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['search_linkedin_people'],
				returnAll: [false],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['search_linkedin_people'],
			},
		},
		options: [
			{
				displayName: 'Advanced Keywords',
				name: 'advancedKeywords',
				description:
					'Words that must appear in one part of the profile: first name, last name, title, company or school',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'advancedKeywords',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Company',
				name: 'company',
				description: 'Current companies: IDs from lookup_search_ids type COMPANY',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'company',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Connections Of',
				name: 'connectionsOf',
				description:
					'People whose connections to search: IDs from lookup_search_ids type CONNECTIONS',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'connectionsOf',
					},
				},
			},
			{
				displayName: 'Followers Of',
				name: 'followersOf',
				description: 'People whose followers to search: IDs from lookup_search_ids type PEOPLE',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'followersOf',
					},
				},
			},
			{
				displayName: 'Industry',
				name: 'industry',
				description: 'Industries: IDs from lookup_search_ids type INDUSTRY',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'industry',
					},
				},
			},
			{
				displayName: 'Keywords',
				name: 'keywords',
				description: 'Name, title, company or any words',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'keywords',
					},
				},
			},
			{
				displayName: 'Location',
				name: 'location',
				description: 'Places: IDs from lookup_search_ids type LOCATION',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'location',
					},
				},
			},
			{
				displayName: 'Network Distance',
				name: 'networkDistance',
				description: 'Connection degrees from you: 1, 2, 3',
				type: 'multiOptions',
				options: [
					{
						name: '1',
						value: 1,
					},
					{
						name: '2',
						value: 2,
					},
					{
						name: '3',
						value: 3,
					},
				],
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'networkDistance',
					},
				},
			},
			{
				displayName: 'Open To',
				name: 'openTo',
				description: 'Open to pro bono work or to a board seat',
				type: 'multiOptions',
				options: [
					{
						name: 'Board Member',
						value: 'boardMember',
					},
					{
						name: 'Pro Bono',
						value: 'proBono',
					},
				],
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'openTo',
					},
				},
			},
			{
				displayName: 'Past Company',
				name: 'pastCompany',
				description: 'Past companies: IDs from lookup_search_ids type COMPANY',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'pastCompany',
					},
				},
			},
			{
				displayName: 'Profile Language',
				name: 'profileLanguage',
				description: 'Profile languages, as two-letter codes such as "en"',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'profileLanguage',
					},
				},
			},
			{
				displayName: 'School',
				name: 'school',
				description: 'Schools: IDs from lookup_search_ids type SCHOOL',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'school',
					},
				},
			},
			{
				displayName: 'Service',
				name: 'service',
				description: 'Service categories they offer: IDs from lookup_search_ids type SERVICE',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'service',
					},
				},
			},
		],
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['search_linkedin_posts'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['search_linkedin_posts'],
				returnAll: [false],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['search_linkedin_posts'],
			},
		},
		options: [
			{
				displayName: 'Author',
				name: 'author',
				description: 'Who the author is: their industry, their company, or words in their headline',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'author',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Content Type',
				name: 'contentType',
				description: 'Only posts with this kind of content',
				type: 'options',
				options: [
					{
						name: 'Collaborative Articles',
						value: 'collaborative_articles',
					},
					{
						name: 'Documents',
						value: 'documents',
					},
					{
						name: 'Images',
						value: 'images',
					},
					{
						name: 'Jobs',
						value: 'jobs',
					},
					{
						name: 'Live Videos',
						value: 'live_videos',
					},
					{
						name: 'Videos',
						value: 'videos',
					},
				],
				default: 'collaborative_articles',
				routing: {
					send: {
						type: 'body',
						property: 'contentType',
					},
				},
			},
			{
				displayName: 'Date Posted',
				name: 'datePosted',
				description: 'How recent',
				type: 'options',
				options: [
					{
						name: 'Past Day',
						value: 'past_day',
					},
					{
						name: 'Past Month',
						value: 'past_month',
					},
					{
						name: 'Past Week',
						value: 'past_week',
					},
				],
				default: 'past_day',
				routing: {
					send: {
						type: 'body',
						property: 'datePosted',
					},
				},
			},
			{
				displayName: 'Keywords',
				name: 'keywords',
				description: 'Words to search for',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'keywords',
					},
				},
			},
			{
				displayName: 'Mentioning',
				name: 'mentioning',
				description: 'Posts that mention these people or company pages',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'mentioning',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Posted By',
				name: 'postedBy',
				description:
					'Who posted it: given people, given company pages, you, your 1st-degree connections, or people you follow',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'postedBy',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Sort By',
				name: 'sortBy',
				description: 'Order (default relevance)',
				type: 'options',
				options: [
					{
						name: 'Date',
						value: 'date',
					},
					{
						name: 'Relevance',
						value: 'relevance',
					},
				],
				default: 'date',
				routing: {
					send: {
						type: 'body',
						property: 'sortBy',
					},
				},
			},
		],
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['search_linkedin_recruiter_people'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['search_linkedin_recruiter_people'],
				returnAll: [false],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['search_linkedin_recruiter_people'],
			},
		},
		options: [
			{
				displayName: 'Company',
				name: 'company',
				description: 'Companies: each one by ID or by keywords',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'company',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Company Headcount',
				name: 'companyHeadcount',
				description: "Company sizes, as LinkedIn's own bands, e.g. { min: 51, max: 200 }",
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'companyHeadcount',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Current Company',
				name: 'currentCompany',
				description: 'Current companies',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'currentCompany',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Degree',
				name: 'degree',
				description: 'Degrees to include and to leave out',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'degree',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Employment Type',
				name: 'employmentType',
				description: 'Employment types. Recruiter PRO contracts only.',
				type: 'multiOptions',
				options: [
					{
						name: 'Contract',
						value: 'CONTRACT',
					},
					{
						name: 'Full Time',
						value: 'FULL_TIME',
					},
					{
						name: 'Internship',
						value: 'INTERNSHIP',
					},
					{
						name: 'Part Time',
						value: 'PART_TIME',
					},
				],
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'employmentType',
					},
				},
			},
			{
				displayName: 'First Name',
				name: 'firstName',
				description: 'First names',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'firstName',
					},
				},
			},
			{
				displayName: 'Function',
				name: 'function',
				description: 'Job functions: IDs from lookup_search_ids type DEPARTMENT, service RECRUITER',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'function',
					},
				},
			},
			{
				displayName: 'Graduation Year',
				name: 'graduationYear',
				description: 'Graduation years, from and to',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'graduationYear',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Groups',
				name: 'groups',
				description: 'LinkedIn groups: IDs from lookup_search_ids type GROUPS, service RECRUITER',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'groups',
					},
				},
			},
			{
				displayName: 'Has Military Background',
				name: 'hasMilitaryBackground',
				description: 'Whether to switch this on. Only people with a US military background.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'hasMilitaryBackground',
					},
				},
			},
			{
				displayName: 'Hide Previously Viewed',
				name: 'hidePreviouslyViewed',
				description: 'Leave out people you viewed within this many days',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'hidePreviouslyViewed',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Hiring Projects',
				name: 'hiringProjects',
				description: 'Your hiring projects to include and to leave out',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'hiringProjects',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Industry',
				name: 'industry',
				description: 'Industries to include and to leave out',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'industry',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Keywords',
				name: 'keywords',
				description:
					'Words to search for. AND, OR and NOT may be used, e.g. developers AND product owners NOT managers.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'keywords',
					},
				},
			},
			{
				displayName: 'Last Name',
				name: 'lastName',
				description: 'Last names',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'lastName',
					},
				},
			},
			{
				displayName: 'Locale',
				name: 'locale',
				description: 'The language your Recruiter is set to, when results look inconsistent',
				type: 'options',
				options: [
					{
						name: 'Arabic',
						value: 'arabic',
					},
					{
						name: 'Bangla',
						value: 'bangla',
					},
					{
						name: 'Chinese Simplified',
						value: 'chinese_simplified',
					},
					{
						name: 'Chinese Traditional',
						value: 'chinese_traditional',
					},
					{
						name: 'Czech',
						value: 'czech',
					},
					{
						name: 'Danish',
						value: 'danish',
					},
					{
						name: 'Dutch',
						value: 'dutch',
					},
					{
						name: 'English',
						value: 'english',
					},
					{
						name: 'Finnish',
						value: 'finnish',
					},
					{
						name: 'French',
						value: 'french',
					},
					{
						name: 'German',
						value: 'german',
					},
					{
						name: 'Greek',
						value: 'greek',
					},
					{
						name: 'Hebrew',
						value: 'hebrew',
					},
					{
						name: 'Hindi',
						value: 'hindi',
					},
					{
						name: 'Hungarian',
						value: 'hungarian',
					},
					{
						name: 'Indonesian',
						value: 'indonesian',
					},
					{
						name: 'Italian',
						value: 'italian',
					},
					{
						name: 'Japanese',
						value: 'japanese',
					},
					{
						name: 'Korean',
						value: 'korean',
					},
					{
						name: 'Malay',
						value: 'malay',
					},
					{
						name: 'Marathi',
						value: 'marathi',
					},
					{
						name: 'Norwegian',
						value: 'norwegian',
					},
					{
						name: 'Persian',
						value: 'persian',
					},
					{
						name: 'Polish',
						value: 'polish',
					},
					{
						name: 'Portuguese',
						value: 'portuguese',
					},
					{
						name: 'Punjabi',
						value: 'punjabi',
					},
					{
						name: 'Romanian',
						value: 'romanian',
					},
					{
						name: 'Russian',
						value: 'russian',
					},
					{
						name: 'Spanish',
						value: 'spanish',
					},
					{
						name: 'Swedish',
						value: 'swedish',
					},
					{
						name: 'Tagalog',
						value: 'tagalog',
					},
					{
						name: 'Telugu',
						value: 'telugu',
					},
					{
						name: 'Thai',
						value: 'thai',
					},
					{
						name: 'Turkish',
						value: 'turkish',
					},
					{
						name: 'Ukrainian',
						value: 'ukrainian',
					},
					{
						name: 'Vietnamese',
						value: 'vietnamese',
					},
				],
				default: 'arabic',
				routing: {
					send: {
						type: 'body',
						property: 'locale',
					},
				},
			},
			{
				displayName: 'Location',
				name: 'location',
				description: 'Places. DOESNT_HAVE cannot be combined with locationWithinArea.',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'location',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Location Within Area',
				name: 'locationWithinArea',
				description: 'Miles around the location',
				type: 'number',
				default: 0,
				routing: {
					send: {
						type: 'body',
						property: 'locationWithinArea',
					},
				},
			},
			{
				displayName: 'Network Distance',
				name: 'networkDistance',
				description: 'Connection degrees from you (1, 2, 3) or "GROUP" for people in your groups',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'networkDistance',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Notes',
				name: 'notes',
				description: "Words in your team's notes on the person",
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'notes',
					},
				},
			},
			{
				displayName: 'Past Applicants',
				name: 'pastApplicants',
				description: 'Whether to switch this on. Only past applicants.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'pastApplicants',
					},
				},
			},
			{
				displayName: 'Past Company',
				name: 'pastCompany',
				description: 'Past companies',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'pastCompany',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Profile Language',
				name: 'profileLanguage',
				description: 'Profile languages, as two-letter codes such as "en"',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'profileLanguage',
					},
				},
			},
			{
				displayName: 'Recently Joined',
				name: 'recentlyJoined',
				description: "Joined LinkedIn this many days ago, as LinkedIn's own bands",
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'recentlyJoined',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Recruiting Activity',
				name: 'recruitingActivity',
				description: 'People with, or without, this kind of activity from your team',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'recruitingActivity',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Role',
				name: 'role',
				description: 'Job titles: each one by ID or by keywords',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'role',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Saved Filter',
				name: 'savedFilter',
				description:
					'One of your saved filters: an ID from lookup_search_ids type SAVED_FILTERS, service RECRUITER',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'savedFilter',
					},
				},
			},
			{
				displayName: 'Saved Search',
				name: 'savedSearch',
				description: 'Run one of your saved searches; it replaces every other filter',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'savedSearch',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'School',
				name: 'school',
				description: 'Schools',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'school',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Seniority',
				name: 'seniority',
				description: 'Seniority levels to include and to leave out',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'seniority',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Skills',
				name: 'skills',
				description: 'Skills: each one by ID or by keywords',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'skills',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Spoken Languages',
				name: 'spokenLanguages',
				description: 'Spoken languages and how well. Recruiter PRO contracts only.',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'spokenLanguages',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Spotlights',
				name: 'spotlights',
				description: 'Spotlights. Advanced Recruiter subscriptions only.',
				type: 'multiOptions',
				options: [
					{
						name: 'Active Talent',
						value: 'ACTIVE_TALENT',
					},
					{
						name: 'Have Company Connections',
						value: 'HAVE_COMPANY_CONNECTIONS',
					},
					{
						name: 'Interested in Your Company',
						value: 'INTERESTED_IN_YOUR_COMPANY',
					},
					{
						name: 'Internal Candidates',
						value: 'INTERNAL_CANDIDATES',
					},
					{
						name: 'Open to Work',
						value: 'OPEN_TO_WORK',
					},
					{
						name: 'Rediscovered Candidates',
						value: 'REDISCOVERED_CANDIDATES',
					},
				],
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'spotlights',
					},
				},
			},
			{
				displayName: 'Tenure',
				name: 'tenure',
				description: 'Years of experience, from and to',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'tenure',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Tenure in Company',
				name: 'tenureInCompany',
				description: 'Years in the current company, from and to',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'tenureInCompany',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Tenure in Position',
				name: 'tenureInPosition',
				description: 'Years in the current position, from and to',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'tenureInPosition',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['search_linkedin_sales_navigator_companies'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['search_linkedin_sales_navigator_companies'],
				returnAll: [false],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['search_linkedin_sales_navigator_companies'],
			},
		},
		options: [
			{
				displayName: 'Account Lists',
				name: 'accountLists',
				description: 'Your account lists (an ID, or "ALL") to include and to leave out',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'accountLists',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Annual Revenue',
				name: 'annualRevenue',
				description:
					'Yearly revenue in millions, as LinkedIn\'s own steps. For "1000+" set max to 1001.',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'annualRevenue',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Department Headcount',
				name: 'departmentHeadcount',
				description: 'How many people work in given departments',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'departmentHeadcount',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Department Headcount Growth',
				name: 'departmentHeadcountGrowth',
				description: 'How fast given departments are growing, in percent',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'departmentHeadcountGrowth',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Followers Count',
				name: 'followersCount',
				description: "Number of followers, as LinkedIn's own bands",
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'followersCount',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Fortune',
				name: 'fortune',
				description: "Fortune ranking, as LinkedIn's own bands",
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'fortune',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Has Job Offers',
				name: 'hasJobOffers',
				description: 'Whether to switch this on. Only companies hiring on LinkedIn.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'hasJobOffers',
					},
				},
			},
			{
				displayName: 'Headcount',
				name: 'headcount',
				description: "Company sizes, as LinkedIn's own bands, e.g. { min: 51, max: 200 }",
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'headcount',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Headcount Growth',
				name: 'headcountGrowth',
				description: 'Headcount growth, in percent',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'headcountGrowth',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Industry',
				name: 'industry',
				description: 'Industries to include and to leave out',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'industry',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Keywords',
				name: 'keywords',
				description: 'Words to search for',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'keywords',
					},
				},
			},
			{
				displayName: 'Last Viewed At',
				name: 'lastViewedAt',
				description: 'With savedSearchId: only results newer than this moment (Unix time)',
				type: 'number',
				default: 0,
				routing: {
					send: {
						type: 'body',
						property: 'lastViewedAt',
					},
				},
			},
			{
				displayName: 'Location',
				name: 'location',
				description: 'Headquarters places to include and to leave out',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'location',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Location by Postal Code',
				name: 'locationByPostalCode',
				description: 'Postal codes to include and to leave out',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'locationByPostalCode',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Network Distance',
				name: 'networkDistance',
				description: 'Connection degrees from you: 1, 2, 3',
				type: 'multiOptions',
				options: [
					{
						name: '1',
						value: 1,
					},
					{
						name: '2',
						value: 2,
					},
					{
						name: '3',
						value: 3,
					},
				],
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'networkDistance',
					},
				},
			},
			{
				displayName: 'Recent Activities',
				name: 'recentActivities',
				description: 'Only companies with these recent events',
				type: 'multiOptions',
				options: [
					{
						name: 'Funding Events',
						value: 'funding_events',
					},
					{
						name: 'Senior Leadership Changes',
						value: 'senior_leadership_changes',
					},
				],
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'recentActivities',
					},
				},
			},
			{
				displayName: 'Recent Search ID',
				name: 'recentSearchId',
				description:
					'Run one of your recent searches again; it replaces every other filter: an ID from lookup_search_ids type RECENT_SEARCHES, service SALES_NAVIGATOR',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'recentSearchId',
					},
				},
			},
			{
				displayName: 'Saved Accounts',
				name: 'savedAccounts',
				description:
					'Your saved accounts: IDs from lookup_search_ids type SAVED_ACCOUNTS, service SALES_NAVIGATOR',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'savedAccounts',
					},
				},
			},
			{
				displayName: 'Saved Search ID',
				name: 'savedSearchId',
				description:
					'Run one of your saved searches; it replaces every other filter: an ID from lookup_search_ids type SAVED_SEARCHES, service SALES_NAVIGATOR',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'savedSearchId',
					},
				},
			},
			{
				displayName: 'Technologies',
				name: 'technologies',
				description:
					'Technologies the company uses: IDs from lookup_search_ids type TECHNOLOGIES, service SALES_NAVIGATOR',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'technologies',
					},
				},
			},
		],
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['search_linkedin_sales_navigator_people'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['search_linkedin_sales_navigator_people'],
				returnAll: [false],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['search_linkedin_sales_navigator_people'],
			},
		},
		options: [
			{
				displayName: 'Account Lists',
				name: 'accountLists',
				description: 'Your account lists (an ID, or "ALL") to include and to leave out',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'accountLists',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Changed Jobs',
				name: 'changedJobs',
				description: 'Whether to switch this on. Only people who changed jobs recently.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'changedJobs',
					},
				},
			},
			{
				displayName: 'Company',
				name: 'company',
				description: 'Current companies to include and to leave out',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'company',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Company Headcount',
				name: 'companyHeadcount',
				description: "Company sizes, as LinkedIn's own bands, e.g. { min: 51, max: 200 }",
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'companyHeadcount',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Company Location',
				name: 'companyLocation',
				description: 'Company headquarters places to include and to leave out',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'companyLocation',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Company Type',
				name: 'companyType',
				description: 'Company types',
				type: 'multiOptions',
				options: [
					{
						name: 'Educational Institution',
						value: 'educational_institution',
					},
					{
						name: 'Government Agency',
						value: 'government_agency',
					},
					{
						name: 'Non Profit',
						value: 'non_profit',
					},
					{
						name: 'Partnership',
						value: 'partnership',
					},
					{
						name: 'Privately Held',
						value: 'privately_held',
					},
					{
						name: 'Public Company',
						value: 'public_company',
					},
					{
						name: 'Self Employed',
						value: 'self_employed',
					},
					{
						name: 'Self Owned',
						value: 'self_owned',
					},
				],
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'companyType',
					},
				},
			},
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Connections Of',
				name: 'connectionsOf',
				description:
					'People whose connections to search: IDs from lookup_search_ids type PEOPLE, service SALES_NAVIGATOR',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'connectionsOf',
					},
				},
			},
			{
				displayName: 'First Name',
				name: 'firstName',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'firstName',
					},
				},
			},
			{
				displayName: 'Following Your Company',
				name: 'followingYourCompany',
				description: 'Whether to switch this on. Only people who follow your company.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'followingYourCompany',
					},
				},
			},
			{
				displayName: 'Function',
				name: 'function',
				description: 'Job functions to include and to leave out',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'function',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Groups',
				name: 'groups',
				description:
					'LinkedIn groups: IDs from lookup_search_ids type GROUPS, service SALES_NAVIGATOR',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'groups',
					},
				},
			},
			{
				displayName: 'Include Saved Accounts',
				name: 'includeSavedAccounts',
				description: 'Whether to switch this on. Include people at your saved accounts.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'includeSavedAccounts',
					},
				},
			},
			{
				displayName: 'Include Saved Leads',
				name: 'includeSavedLeads',
				description: 'Whether to switch this on. Include your saved leads.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'includeSavedLeads',
					},
				},
			},
			{
				displayName: 'Industry',
				name: 'industry',
				description: 'Industries to include and to leave out',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'industry',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Keywords',
				name: 'keywords',
				description: 'Words to search for',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'keywords',
					},
				},
			},
			{
				displayName: 'Last Name',
				name: 'lastName',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'lastName',
					},
				},
			},
			{
				displayName: 'Last Viewed At',
				name: 'lastViewedAt',
				description: 'With savedSearchId: only results newer than this moment (Unix time)',
				type: 'number',
				default: 0,
				routing: {
					send: {
						type: 'body',
						property: 'lastViewedAt',
					},
				},
			},
			{
				displayName: 'Lead Lists',
				name: 'leadLists',
				description: 'Your lead lists (an ID, or "ALL") to include and to leave out',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'leadLists',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Location',
				name: 'location',
				description: 'Places to include and to leave out',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'location',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Location by Postal Code',
				name: 'locationByPostalCode',
				description: 'Postal codes to include and to leave out',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'locationByPostalCode',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Mentionned in News',
				name: 'mentionnedInNews',
				description: 'Whether to switch this on. Only people mentioned in the news recently.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'mentionnedInNews',
					},
				},
			},
			{
				displayName: 'Messaged Recently',
				name: 'messagedRecently',
				description: 'Whether to switch this on. Only people you messaged recently.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'messagedRecently',
					},
				},
			},
			{
				displayName: 'Network Distance',
				name: 'networkDistance',
				description: 'Connection degrees from you (1, 2, 3) or "GROUP" for people in your groups',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'networkDistance',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Past Colleague',
				name: 'pastColleague',
				description: 'Whether to switch this on. Only past colleagues.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'pastColleague',
					},
				},
			},
			{
				displayName: 'Past Company',
				name: 'pastCompany',
				description: 'Past companies to include and to leave out',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'pastCompany',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Past Role',
				name: 'pastRole',
				description: 'Past job titles to include and to leave out',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'pastRole',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Persona',
				name: 'persona',
				description:
					'Your Sales Navigator personas: IDs from lookup_search_ids type PERSONA, service SALES_NAVIGATOR',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'persona',
					},
				},
			},
			{
				displayName: 'Posted on LinkedIn',
				name: 'postedOnLinkedin',
				description: 'Whether to switch this on. Only people who posted on LinkedIn recently.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'postedOnLinkedin',
					},
				},
			},
			{
				displayName: 'Profile Language',
				name: 'profileLanguage',
				description: 'Profile languages, as two-letter codes such as "en"',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'profileLanguage',
					},
				},
			},
			{
				displayName: 'Recent Search ID',
				name: 'recentSearchId',
				description:
					'Run one of your recent searches again; it replaces every other filter: an ID from lookup_search_ids type RECENT_SEARCHES, service SALES_NAVIGATOR',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'recentSearchId',
					},
				},
			},
			{
				displayName: 'Role',
				name: 'role',
				description: 'Current job titles to include and to leave out',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'role',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Saved Search ID',
				name: 'savedSearchId',
				description:
					'Run one of your saved searches; it replaces every other filter: an ID from lookup_search_ids type SAVED_SEARCHES, service SALES_NAVIGATOR',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'savedSearchId',
					},
				},
			},
			{
				displayName: 'School',
				name: 'school',
				description: 'Schools to include and to leave out',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'school',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Seniority',
				name: 'seniority',
				description: 'Seniority levels to include and to leave out',
				type: 'json',
				default: '{}',
				routing: {
					send: {
						type: 'body',
						property: 'seniority',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Shared Experiences',
				name: 'sharedExperiences',
				description: 'Whether to switch this on. Only people you share experiences with.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'sharedExperiences',
					},
				},
			},
			{
				displayName: 'Tenure',
				name: 'tenure',
				description: "Years of experience, as LinkedIn's own bands, e.g. { min: 3, max: 5 }",
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'tenure',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Tenure at Company',
				name: 'tenureAtCompany',
				description: "Years in the current company, as LinkedIn's own bands",
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'tenureAtCompany',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Tenure at Role',
				name: 'tenureAtRole',
				description: "Years in the current position, as LinkedIn's own bands",
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'tenureAtRole',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Viewed Profile Recently',
				name: 'viewedProfileRecently',
				description: 'Whether to switch this on. Only people whose profile you viewed recently.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'viewedProfileRecently',
					},
				},
			},
			{
				displayName: 'Viewed Your Profile Recently',
				name: 'viewedYourProfileRecently',
				description: 'Whether to switch this on. Only people who viewed your profile recently.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'viewedYourProfileRecently',
					},
				},
			},
		],
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['search_people'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['search_people'],
				returnAll: [false],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['search_people'],
			},
		},
		options: [
			{
				displayName: 'Changed Jobs',
				name: 'changedJobs',
				description:
					'Whether to switch this on. Only people who recently changed jobs (buying signal).',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'changedJobs',
					},
				},
			},
			{
				displayName: 'Companies',
				name: 'companies',
				description:
					'Current companies by name, e.g. ["Google","Stripe"]. Each name is looked up and the top match used — when you already have LinkedIn company IDs (find_companies / list_funding_signals return companyId), pass companyIds instead.',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'companies',
					},
				},
			},
			{
				displayName: 'Company Headcounts',
				name: 'companyHeadcounts',
				description:
					'Company size bands. Valid: self-employed, 1-10, 11-50, 51-200, 201-500, 501-1000, 1001-5000, 5001-10000, 10001+.',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'companyHeadcounts',
					},
				},
			},
			{
				displayName: 'Company IDs',
				name: 'companyIds',
				description:
					'Current companies by LinkedIn company ID — the companyId values find_companies / list_funding_signals return (up to 100). Exact: no name lookup, so no same-name mix-ups. Combine with seniorities and changedJobs / postedOnLinkedIn to get the decision-makers at signal companies who just moved / are posting.',
				type: 'json',
				default: '[]',
				routing: {
					send: {
						type: 'body',
						property: 'companyIds',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Company Max Revenue Millions',
				name: 'companyMaxRevenueMillions',
				description:
					'Only people at companies with at most this annual revenue, in millions (e.g. 100 = up to $100M). Same brackets as companyMinRevenueMillions.',
				type: 'number',
				default: 0,
				typeOptions: {
					minValue: 0,
				},
				routing: {
					send: {
						type: 'body',
						property: 'companyMaxRevenueMillions',
					},
				},
			},
			{
				displayName: 'Company Min Revenue Millions',
				name: 'companyMinRevenueMillions',
				description:
					"Only people at companies with at least this annual revenue, in millions (e.g. 10 = $10M+) — use it to target companies that can afford the user's price. LinkedIn uses fixed brackets (0, 0.2, 1, 2.5, 5, 10, 20, 50, 100, 500, 1000); other values widen to the nearest one. The companies are matched on the same industries / companyHeadcounts / locations (as HQ location). Revenue is LinkedIn's estimate — companies without one are left out.",
				type: 'number',
				default: 0,
				typeOptions: {
					minValue: 0,
				},
				routing: {
					send: {
						type: 'body',
						property: 'companyMinRevenueMillions',
					},
				},
			},
			{
				displayName: 'Confirm',
				name: 'confirm',
				description:
					'Whether to switch this on. false (default) = return the credit-cost estimate only (nothing charged). true = pull the people and charge credits after the user agreed. Continuation pages (with cursor) should pass confirm:true.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'confirm',
					},
				},
			},
			{
				displayName: 'Format',
				name: 'format',
				description:
					'Table (default) = structured rows to render as a table. csv = also return an export-ready CSV string (columns: Name, Title, Company, Location, Industry, Shared Connections, Tenure in Role, LinkedIn URL) — use for large lists the user wants to save/hand off.',
				type: 'options',
				options: [
					{
						name: 'CSV',
						value: 'csv',
					},
					{
						name: 'Table',
						value: 'table',
					},
				],
				default: 'table',
				routing: {
					send: {
						type: 'body',
						property: 'format',
					},
				},
			},
			{
				displayName: 'Functions',
				name: 'functions',
				description: 'Job functions/departments, e.g. ["Engineering","Sales","Marketing"]',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'functions',
					},
				},
			},
			{
				displayName: 'Industries',
				name: 'industries',
				description: 'Company industries in plain English, e.g. ["Software","Financial Services"]',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'industries',
					},
				},
			},
			{
				displayName: 'Keywords',
				name: 'keywords',
				description:
					'Free-text keywords searched across all profile fields (title, headline, about, company)',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'keywords',
					},
				},
			},
			{
				displayName: 'Locations',
				name: 'locations',
				description:
					'Person locations in plain English, e.g. ["United States","London"]. Resolved to LinkedIn regions automatically.',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'locations',
					},
				},
			},
			{
				displayName: 'Posted on LinkedIn',
				name: 'postedOnLinkedIn',
				description:
					'Whether to switch this on. Only people who recently posted on LinkedIn (active/reachable signal).',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'postedOnLinkedIn',
					},
				},
			},
			{
				displayName: 'Revenue Currency',
				name: 'revenueCurrency',
				description: 'ISO currency of the revenue band, e.g. "USD" (default), "EUR", "GBP"',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'revenueCurrency',
					},
				},
			},
			{
				displayName: 'Seniorities',
				name: 'seniorities',
				description:
					'Seniority levels, e.g. ["CXO","VP","Director","Manager"] (owner/partner, cxo, vice_president, director, experienced_manager, entry_level_manager, strategic, senior, entry_level, in_training)',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'seniorities',
					},
				},
			},
			{
				displayName: 'Titles',
				name: 'titles',
				description:
					'Job titles, e.g. ["Chief Technology Officer","VP of Engineering"]. Matched as OR\'d keywords — pass variants to go broad.',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'titles',
					},
				},
			},
		],
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['search_people_classic'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['search_people_classic'],
				returnAll: [false],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['search_people_classic'],
			},
		},
		options: [
			{
				displayName: 'Connection ID',
				name: 'connectionId',
				description:
					'Which of your LinkedIn accounts to act from (its ID from get_linkedin_accounts). Omit to use your first live one that does not need reconnecting.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'connectionId',
					},
				},
			},
			{
				displayName: 'Keywords',
				name: 'keywords',
				description: 'Words to search for, e.g. "head of sales fintech"',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'keywords',
					},
				},
			},
			{
				displayName: 'Location',
				name: 'location',
				description: 'A place name, e.g. "Berlin" or "United Kingdom"',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'location',
					},
				},
			},
			{
				displayName: 'Network',
				name: 'network',
				description: 'Limit to these connection degrees from you: first, second, third',
				type: 'multiOptions',
				options: [
					{
						name: 'First',
						value: 'first',
					},
					{
						name: 'Second',
						value: 'second',
					},
					{
						name: 'Third',
						value: 'third',
					},
				],
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'network',
					},
				},
			},
		],
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['signalAgent'],
			},
		},
		options: [
			{
				name: 'Add Monitor Targets',
				value: 'add_monitor_targets',
				action: 'Add monitor targets',
				description:
					'Add LinkedIn PROFILE or COMPANY URLs to a MONITOR-mode comment campaign — the profiles/companies it watches daily for fresh posts to auto-comment on (the monitor-mode analog of add_post_targets)',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/add_monitor_targets',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Clear Signal Agent Results',
				value: 'clear_signal_agent_results',
				action: 'Clear signal agent results',
				description:
					'Clear one Intent Signal Agent result bucket (searchType) on /app/signals — wipes EVERY collected lead in that intent bucket for the active setup',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/clear_signal_agent_results',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Delete Signal Leads',
				value: 'delete_signal_leads',
				action: 'Delete signal leads',
				description:
					'Delete collected signal-agent result leads from one agent (influencer, competitor, or intent)',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/delete_signal_leads',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Find Competitors',
				value: 'find_competitors',
				action: 'Find competitors',
				description:
					'AI-discover competitor companies on LinkedIn from a description of your business (the "Find competitors" flow on /app/signals)',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/find_competitors',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Find Influencers',
				value: 'find_influencers',
				action: 'Find influencers',
				description:
					'AI-discover LinkedIn influencers whose audience matches your ideal customer profile (the "Find influencers" flow on /app/signals)',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/find_influencers',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Agent Run Status',
				value: 'get_agent_run_status',
				action: 'Get agent run status',
				description:
					'Check whether Influencer, Competitor, or Intent Agent runs have completed, and return their leads if ready',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_agent_run_status',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Discovery Status',
				value: 'get_discovery_status',
				action: 'Get discovery status',
				description:
					'Check the latest find_competitors or find_influencers run for the active setup',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_discovery_status',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Signal Agent Results',
				value: 'get_signal_agent_results',
				action: 'Get signal agent results',
				description: 'Get /app/signals results from the Influencer, Competitor, and Intent agents',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_signal_agent_results',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Signal Agent Settings',
				value: 'get_signal_agent_settings',
				action: 'Get signal agent settings',
				description:
					'Get saved settings for /app/signals agents: influencer, competitor, and intent',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_signal_agent_settings',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Signal Leads',
				value: 'get_signal_leads',
				action: 'Get signal leads',
				description:
					'Get leads from your Active Signals agents (/app/signals): influencer (Influencer Tracking Agent), competitor (Competitor Intelligence Agent), and intent (Intent Signal Agent)',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_signal_leads',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Remove Monitor Targets',
				value: 'remove_monitor_targets',
				action: 'Remove monitor targets',
				description:
					'Remove monitored profile/company URLs from a MONITOR-mode comment campaign by their monitor-target IDs',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/remove_monitor_targets',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Run Competitor Agent',
				value: 'run_competitor_agent',
				action: 'Run competitor agent',
				description:
					'Queue an immediate Competitor Agent run over the currently tracked URLs (without adding a new one)',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/run_competitor_agent',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Run Influencer Agent',
				value: 'run_influencer_agent',
				action: 'Run influencer agent',
				description:
					'Queue an immediate Influencer Agent run over the currently tracked URLs (without adding a new one)',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/run_influencer_agent',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Run Intent Agent',
				value: 'run_intent_agent',
				action: 'Run intent agent',
				description: 'Trigger the Intent Signal Agent with ICP criteria',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/run_intent_agent',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Set Intent Agent Search Settings',
				value: 'set_intent_agent_search_settings',
				action: 'Set intent agent search settings',
				description:
					"Configure the Intent Signal agent's daily-run search filters (persisted on the agent; used by the daily auto-run and reflected in get_signal_agent_settings)",
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/set_intent_agent_search_settings',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Set Signal Agent Auto Add',
				value: 'set_signal_agent_auto_add',
				action: 'Set signal agent auto add',
				description: 'Configure Pro-only auto-add for a /app/signals agent',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/set_signal_agent_auto_add',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Set Signal Agent Auto Run',
				value: 'set_signal_agent_auto_run',
				action: 'Set signal agent auto run',
				description: 'Enable or disable daily auto-run for a /app/signals agent',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/set_signal_agent_auto_run',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Set Signal Agent Scrape Settings',
				value: 'set_signal_agent_scrape_settings',
				action: 'Set signal agent scrape settings',
				description:
					'Set the per-post scrape caps for the influencer or competitor signal agent (the intent agent has none): how many post COMMENTERS and post REACTORS — i.e',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/set_signal_agent_scrape_settings',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Track Competitor',
				value: 'track_competitor',
				action: 'Track competitor',
				description:
					'Add a LinkedIn company page to the Competitor Agent and immediately queue a run to collect everyone who engaged with their posts',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/track_competitor',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Track Influencer',
				value: 'track_influencer',
				action: 'Track influencer',
				description:
					'Add a LinkedIn profile to the Influencer Agent and immediately queue a run to collect everyone who engaged with their posts',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/track_influencer',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Untrack Competitor',
				value: 'untrack_competitor',
				action: 'Untrack competitor',
				description:
					'Remove a LinkedIn company page from the Competitor Agent so it is no longer tracked on future runs',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/untrack_competitor',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Untrack Influencer',
				value: 'untrack_influencer',
				action: 'Untrack influencer',
				description:
					'Remove a LinkedIn profile from the Influencer Agent so it is no longer tracked on future runs',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/untrack_influencer',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
		],
		default: 'get_agent_run_status',
	},
	{
		displayName: 'Campaign ID',
		name: 'campaignId',
		description: 'Monitor-mode comment campaign ID to add monitored profiles to',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'campaignId',
			},
		},
		displayOptions: {
			show: {
				resource: ['signalAgent'],
				operation: ['add_monitor_targets'],
			},
		},
	},
	{
		displayName: 'URLs',
		name: 'urls',
		description:
			'LinkedIn profile (/in/…) or company (/company/…) URLs to watch (1–200). Must NOT be post URLs.',
		type: 'string',
		typeOptions: {
			multipleValues: true,
		},
		default: [],
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'urls',
			},
		},
		displayOptions: {
			show: {
				resource: ['signalAgent'],
				operation: ['add_monitor_targets'],
			},
		},
	},
	{
		displayName: 'Search Type',
		name: 'searchType',
		description:
			'The intent bucket to wipe for the active setup. company = company-based signals; people = ICP people search; combined = combined search; people-just-posted / people-just-moved-jobs = activity signals; company-growing-team / company-new-boss / company-budget-in-hand = buyer-intent companies; growing-team / new-boss / budget-in-hand (and legacy combined-*) = ICP people at those intent companies. Clearing removes every collected lead in that one bucket.',
		type: 'options',
		options: [
			{
				name: 'Budget in Hand',
				value: 'budget-in-hand',
			},
			{
				name: 'Combined',
				value: 'combined',
			},
			{
				name: 'Combined Budget in Hand',
				value: 'combined-budget-in-hand',
			},
			{
				name: 'Combined Growing Team',
				value: 'combined-growing-team',
			},
			{
				name: 'Combined New Boss',
				value: 'combined-new-boss',
			},
			{
				name: 'Company',
				value: 'company',
			},
			{
				name: 'Company Budget in Hand',
				value: 'company-budget-in-hand',
			},
			{
				name: 'Company Growing Team',
				value: 'company-growing-team',
			},
			{
				name: 'Company New Boss',
				value: 'company-new-boss',
			},
			{
				name: 'Growing Team',
				value: 'growing-team',
			},
			{
				name: 'New Boss',
				value: 'new-boss',
			},
			{
				name: 'People',
				value: 'people',
			},
			{
				name: 'People Just Moved Jobs',
				value: 'people-just-moved-jobs',
			},
			{
				name: 'People Just Posted',
				value: 'people-just-posted',
			},
		],
		default: 'budget-in-hand',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'searchType',
			},
		},
		displayOptions: {
			show: {
				resource: ['signalAgent'],
				operation: ['clear_signal_agent_results'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['signalAgent'],
				operation: ['clear_signal_agent_results'],
			},
		},
		options: [
			{
				displayName: 'Confirm',
				name: 'confirm',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'confirm',
					},
				},
			},
		],
	},
	{
		displayName: 'Agent',
		name: 'agent',
		description: 'Which Active Signals agent to delete results from',
		type: 'options',
		options: [
			{
				name: 'Competitor',
				value: 'competitor',
			},
			{
				name: 'Influencer',
				value: 'influencer',
			},
			{
				name: 'Intent',
				value: 'intent',
			},
		],
		default: 'competitor',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'agent',
			},
		},
		displayOptions: {
			show: {
				resource: ['signalAgent'],
				operation: ['delete_signal_leads'],
			},
		},
	},
	{
		displayName: 'LinkedIn URLs',
		name: 'linkedinUrls',
		description:
			'Lead identifiers to delete — linkedinUrl values from get_signal_leads (for intent, vmids or company IDs also work). Max 200 per call.',
		type: 'string',
		typeOptions: {
			multipleValues: true,
		},
		default: [],
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'linkedinUrls',
			},
		},
		displayOptions: {
			show: {
				resource: ['signalAgent'],
				operation: ['delete_signal_leads'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['signalAgent'],
				operation: ['delete_signal_leads'],
			},
		},
		options: [
			{
				displayName: 'Confirm',
				name: 'confirm',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'confirm',
					},
				},
			},
		],
	},
	{
		displayName: 'Business Description',
		name: 'businessDescription',
		description:
			'A few sentences describing your business: what you sell, who you sell to, and your market. Used to find real LinkedIn competitor companies.',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'businessDescription',
			},
		},
		displayOptions: {
			show: {
				resource: ['signalAgent'],
				operation: ['find_competitors'],
			},
		},
	},
	{
		displayName: 'Customer Profile',
		name: 'customerProfile',
		description:
			'A few sentences describing your ideal customers (roles, company types, industries). Used to find real LinkedIn influencers your buyers follow.',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'customerProfile',
			},
		},
		displayOptions: {
			show: {
				resource: ['signalAgent'],
				operation: ['find_influencers'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['signalAgent'],
				operation: ['get_agent_run_status'],
			},
		},
		options: [
			{
				displayName: 'Agents',
				name: 'agents',
				description: 'Which agents to check (default: all three)',
				type: 'multiOptions',
				options: [
					{
						name: 'Competitor',
						value: 'competitor',
					},
					{
						name: 'Influencer',
						value: 'influencer',
					},
					{
						name: 'Intent',
						value: 'intent',
					},
				],
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'agents',
					},
				},
			},
			{
				displayName: 'Include Leads',
				name: 'includeLeads',
				description:
					'Whether to switch this on. Include leads in the response when runs are completed (default true).',
				type: 'boolean',
				default: true,
				routing: {
					send: {
						type: 'body',
						property: 'includeLeads',
					},
				},
			},
			{
				displayName: 'Leads Limit',
				name: 'leadsLimit',
				description: 'Max leads to return per agent when completed (default 100)',
				type: 'number',
				default: 100,
				typeOptions: {
					minValue: 1,
					maxValue: 500,
				},
				routing: {
					send: {
						type: 'body',
						property: 'leadsLimit',
					},
				},
			},
		],
	},
	{
		displayName: 'Type',
		name: 'type',
		description:
			'Which discovery run to check: "competitors" (find_competitors) or "influencers" (find_influencers)',
		type: 'options',
		options: [
			{
				name: 'Competitors',
				value: 'competitors',
			},
			{
				name: 'Influencers',
				value: 'influencers',
			},
		],
		default: 'competitors',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'type',
			},
		},
		displayOptions: {
			show: {
				resource: ['signalAgent'],
				operation: ['get_discovery_status'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 200,
		},
		default: 50,
		description: 'Max number of results to return',
		routing: {
			send: {
				type: 'body',
				property: 'limit',
			},
		},
		displayOptions: {
			show: {
				resource: ['signalAgent'],
				operation: ['get_signal_agent_results'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['signalAgent'],
				operation: ['get_signal_agent_results'],
			},
		},
		options: [
			{
				displayName: 'Agent',
				name: 'agent',
				description:
					'Filter by one Active Signals agent: influencer (Influencer Tracking Agent), competitor (Competitor Intelligence Agent), or intent (Intent Signal Agent)',
				type: 'options',
				options: [
					{
						name: 'Competitor',
						value: 'competitor',
					},
					{
						name: 'Influencer',
						value: 'influencer',
					},
					{
						name: 'Intent',
						value: 'intent',
					},
				],
				default: 'competitor',
				routing: {
					send: {
						type: 'body',
						property: 'agent',
					},
				},
			},
			{
				displayName: 'Agents',
				name: 'agents',
				description:
					'Return only these agents (influencer / competitor / intent). Useful for "not competitor" workflows with excludeAgents.',
				type: 'multiOptions',
				options: [
					{
						name: 'Competitor',
						value: 'competitor',
					},
					{
						name: 'Influencer',
						value: 'influencer',
					},
					{
						name: 'Intent',
						value: 'intent',
					},
				],
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'agents',
					},
				},
			},
			{
				displayName: 'Exclude Agents',
				name: 'excludeAgents',
				description: 'Exclude one or more agents, e.g. ["competitor"]',
				type: 'multiOptions',
				options: [
					{
						name: 'Competitor',
						value: 'competitor',
					},
					{
						name: 'Influencer',
						value: 'influencer',
					},
					{
						name: 'Intent',
						value: 'intent',
					},
				],
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'excludeAgents',
					},
				},
			},
			{
				displayName: 'Interaction Type',
				name: 'interactionType',
				description: 'Only return commenters or reactors for engagement agents',
				type: 'options',
				options: [
					{
						name: 'Comment',
						value: 'comment',
					},
					{
						name: 'Reaction',
						value: 'reaction',
					},
				],
				default: 'comment',
				routing: {
					send: {
						type: 'body',
						property: 'interactionType',
					},
				},
			},
			{
				displayName: 'Min ICP Score',
				name: 'minIcpScore',
				description:
					'Only return engagement leads with Intent Score >= this value (1-10). Intent buckets without scores are omitted.',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 10,
				},
				routing: {
					send: {
						type: 'body',
						property: 'minIcpScore',
					},
				},
			},
			{
				displayName: 'Post URL',
				name: 'postUrl',
				description: 'Only return engagement leads from this LinkedIn post URL',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'postUrl',
					},
				},
			},
			{
				displayName: 'Search',
				name: 'search',
				description: 'Search by lead name, title/position, comment text, or intent summary',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'search',
					},
				},
			},
			{
				displayName: 'Signal Type',
				name: 'signalType',
				description:
					'Filter intent results to one signal bucket. Buckets include: people-just-posted (Just posted), people-just-moved-jobs (Just moved jobs), people-search, combined-search, company-based-signals (Companies), plus any active-signal search type configured on /app/signals (e.g. growing-team, new-boss, budget-in-hand).',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'signalType',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['signalAgent'],
				operation: ['get_signal_agent_settings'],
			},
		},
		options: [
			{
				displayName: 'Agent',
				name: 'agent',
				description: 'Which agent settings to return. Defaults to all.',
				type: 'options',
				options: [
					{
						name: 'All',
						value: 'all',
					},
					{
						name: 'Competitor',
						value: 'competitor',
					},
					{
						name: 'Influencer',
						value: 'influencer',
					},
					{
						name: 'Intent',
						value: 'intent',
					},
				],
				default: 'all',
				routing: {
					send: {
						type: 'body',
						property: 'agent',
					},
				},
			},
		],
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 200,
		},
		default: 50,
		description: 'Max number of results to return',
		routing: {
			send: {
				type: 'body',
				property: 'limit',
			},
		},
		displayOptions: {
			show: {
				resource: ['signalAgent'],
				operation: ['get_signal_leads'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['signalAgent'],
				operation: ['get_signal_leads'],
			},
		},
		options: [
			{
				displayName: 'Agent',
				name: 'agent',
				description:
					'Filter by one Active Signals agent: influencer (Influencer Tracking Agent), competitor (Competitor Intelligence Agent), or intent (Intent Signal Agent)',
				type: 'options',
				options: [
					{
						name: 'Competitor',
						value: 'competitor',
					},
					{
						name: 'Influencer',
						value: 'influencer',
					},
					{
						name: 'Intent',
						value: 'intent',
					},
				],
				default: 'competitor',
				routing: {
					send: {
						type: 'body',
						property: 'agent',
					},
				},
			},
			{
				displayName: 'Agents',
				name: 'agents',
				description:
					'Return only these agents (influencer / competitor / intent). Useful for "not competitor" workflows with excludeAgents.',
				type: 'multiOptions',
				options: [
					{
						name: 'Competitor',
						value: 'competitor',
					},
					{
						name: 'Influencer',
						value: 'influencer',
					},
					{
						name: 'Intent',
						value: 'intent',
					},
				],
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'agents',
					},
				},
			},
			{
				displayName: 'Exclude Agents',
				name: 'excludeAgents',
				description: 'Exclude one or more agents, e.g. ["competitor"]',
				type: 'multiOptions',
				options: [
					{
						name: 'Competitor',
						value: 'competitor',
					},
					{
						name: 'Influencer',
						value: 'influencer',
					},
					{
						name: 'Intent',
						value: 'intent',
					},
				],
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'excludeAgents',
					},
				},
			},
			{
				displayName: 'Interaction Type',
				name: 'interactionType',
				description: 'Only return commenters or reactors for engagement agents',
				type: 'options',
				options: [
					{
						name: 'Comment',
						value: 'comment',
					},
					{
						name: 'Reaction',
						value: 'reaction',
					},
				],
				default: 'comment',
				routing: {
					send: {
						type: 'body',
						property: 'interactionType',
					},
				},
			},
			{
				displayName: 'Min ICP Score',
				name: 'minIcpScore',
				description:
					'Only return engagement leads with Intent Score >= this value (1-10). Intent buckets without scores are omitted.',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 10,
				},
				routing: {
					send: {
						type: 'body',
						property: 'minIcpScore',
					},
				},
			},
			{
				displayName: 'Post URL',
				name: 'postUrl',
				description: 'Only return engagement leads from this LinkedIn post URL',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'postUrl',
					},
				},
			},
			{
				displayName: 'Search',
				name: 'search',
				description: 'Search by lead name, title/position, comment text, or intent summary',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'search',
					},
				},
			},
			{
				displayName: 'Signal Type',
				name: 'signalType',
				description:
					'Filter intent results to one signal bucket. Buckets include: people-just-posted (Just posted), people-just-moved-jobs (Just moved jobs), people-search, combined-search, company-based-signals (Companies), plus any active-signal search type configured on /app/signals (e.g. growing-team, new-boss, budget-in-hand).',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'signalType',
					},
				},
			},
		],
	},
	{
		displayName: 'Campaign ID',
		name: 'campaignId',
		description: 'Monitor-mode comment campaign ID',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'campaignId',
			},
		},
		displayOptions: {
			show: {
				resource: ['signalAgent'],
				operation: ['remove_monitor_targets'],
			},
		},
	},
	{
		displayName: 'Target IDs',
		name: 'targetIds',
		description: 'MonitorTarget subdocument IDs to remove (from get_campaign.monitorTargets[]._id)',
		type: 'string',
		typeOptions: {
			multipleValues: true,
		},
		default: [],
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'targetIds',
			},
		},
		displayOptions: {
			show: {
				resource: ['signalAgent'],
				operation: ['remove_monitor_targets'],
			},
		},
	},
	{
		displayName: 'Search Types',
		name: 'searchTypes',
		description: 'Which signal types to run',
		type: 'multiOptions',
		options: [
			{
				name: 'Company',
				value: 'company',
			},
			{
				name: 'People',
				value: 'people',
			},
			{
				name: 'People Just Moved Jobs',
				value: 'people-just-moved-jobs',
			},
			{
				name: 'People Just Posted',
				value: 'people-just-posted',
			},
		],
		default: [],
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'searchTypes',
			},
		},
		displayOptions: {
			show: {
				resource: ['signalAgent'],
				operation: ['run_intent_agent'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['signalAgent'],
				operation: ['run_intent_agent'],
			},
		},
		options: [
			{
				displayName: 'Account Activities',
				name: 'accountActivities',
				description: 'Account activity signals',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'accountActivities',
					},
				},
			},
			{
				displayName: 'Functions',
				name: 'functions',
				description: 'Job function names e.g. ["Sales", "Marketing"]',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'functions',
					},
				},
			},
			{
				displayName: 'Headcounts',
				name: 'headcounts',
				description: 'Company size filters e.g. ["11-50", "51-200"]',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'headcounts',
					},
				},
			},
			{
				displayName: 'Industries',
				name: 'industries',
				description: 'Industry names e.g. ["Software Development", "Financial Services"]',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'industries',
					},
				},
			},
			{
				displayName: 'Job Opportunities',
				name: 'jobOpportunities',
				description:
					'Whether to switch this on. Include companies hiring on LinkedIn (default true).',
				type: 'boolean',
				default: true,
				routing: {
					send: {
						type: 'body',
						property: 'jobOpportunities',
					},
				},
			},
			{
				displayName: 'Job Titles',
				name: 'jobTitles',
				description:
					'Current job titles for people searches (e.g. ["VP of Sales", "Marketing Director"]) — used with seniority',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'jobTitles',
					},
				},
			},
			{
				displayName: 'Posted on LinkedIn',
				name: 'postedOnLinkedIn',
				description:
					'Whether to switch this on. People who posted on LinkedIn recently (default true).',
				type: 'boolean',
				default: true,
				routing: {
					send: {
						type: 'body',
						property: 'postedOnLinkedIn',
					},
				},
			},
			{
				displayName: 'Recently Changed Jobs',
				name: 'recentlyChangedJobs',
				description: 'Whether to switch this on. People who recently changed jobs (default true).',
				type: 'boolean',
				default: true,
				routing: {
					send: {
						type: 'body',
						property: 'recentlyChangedJobs',
					},
				},
			},
			{
				displayName: 'Regions',
				name: 'regions',
				description:
					'Region keys e.g. ["UNITED_STATES", "UNITED_KINGDOM"]. Free-text country names like "United States", "USA", or "UK" are accepted and normalized to canonical keys; unmappable labels are dropped.',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'regions',
					},
				},
			},
			{
				displayName: 'Seniorities',
				name: 'seniorities',
				description: 'Seniority levels e.g. ["CXO", "Vice President", "Director"]',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'seniorities',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['signalAgent'],
				operation: ['set_intent_agent_search_settings'],
			},
		},
		options: [
			{
				displayName: 'Account Activities',
				name: 'accountActivities',
				description: 'Company signals: leadership changes / funding events. Pro-only.',
				type: 'multiOptions',
				options: [
					{
						name: 'Funding Events',
						value: 'FUNDING_EVENTS',
					},
					{
						name: 'Senior Leadership Changes',
						value: 'SENIOR_LEADERSHIP_CHANGES',
					},
				],
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'accountActivities',
					},
				},
			},
			{
				displayName: 'Intent Combination Mode',
				name: 'intentCombinationMode',
				description:
					'Whether to switch this on. Merge company + people Sales Nav URLs (split People | Company layout).',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'intentCombinationMode',
					},
				},
			},
			{
				displayName: 'Job Opportunities',
				name: 'jobOpportunities',
				description:
					'Whether to switch this on. Company signal: include companies hiring on LinkedIn. Pro-only.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'jobOpportunities',
					},
				},
			},
			{
				displayName: 'Posted on LinkedIn',
				name: 'postedOnLinkedIn',
				description:
					'Whether to switch this on. People signal: include people who posted on LinkedIn recently.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'postedOnLinkedIn',
					},
				},
			},
			{
				displayName: 'Recently Changed Jobs',
				name: 'recentlyChangedJobs',
				description:
					'Whether to switch this on. People signal: include people who recently changed jobs.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'recentlyChangedJobs',
					},
				},
			},
			{
				displayName: 'Search Types',
				name: 'searchTypes',
				description: 'Which intent signal types run daily. "company"/"combined" are Pro-only.',
				type: 'multiOptions',
				options: [
					{
						name: 'Combined',
						value: 'combined',
					},
					{
						name: 'Company',
						value: 'company',
					},
					{
						name: 'People',
						value: 'people',
					},
				],
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'searchTypes',
					},
				},
			},
		],
	},
	{
		displayName: 'Agent',
		name: 'agent',
		description: 'Signal agent to configure',
		type: 'options',
		options: [
			{
				name: 'Competitor',
				value: 'competitor',
			},
			{
				name: 'Influencer',
				value: 'influencer',
			},
			{
				name: 'Intent',
				value: 'intent',
			},
		],
		default: 'competitor',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'agent',
			},
		},
		displayOptions: {
			show: {
				resource: ['signalAgent'],
				operation: ['set_signal_agent_auto_add'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['signalAgent'],
				operation: ['set_signal_agent_auto_add'],
			},
		},
		options: [
			{
				displayName: 'Auto Add Campaign ID',
				name: 'autoAddCampaignId',
				description:
					'Destination LinkedNav campaign ID. Must belong to active setup. An outreach or InMail campaign — not a comment campaign (it never contacts people) or a regular-message campaign (it only messages 1st-degree connections).',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'autoAddCampaignId',
					},
				},
			},
			{
				displayName: 'Auto Add Instantly Campaign ID',
				name: 'autoAddInstantlyCampaignId',
				description: 'Destination Instantly campaign ID',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'autoAddInstantlyCampaignId',
					},
				},
			},
			{
				displayName: 'Auto Add List ID',
				name: 'autoAddListId',
				description: 'Destination LinkedNav list ID. Must belong to active setup.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'autoAddListId',
					},
				},
			},
			{
				displayName: 'Auto Add Min ICP Score',
				name: 'autoAddMinIcpScore',
				description:
					'Minimum ICP score for auto-add (1–10); applies to every run, daily or manual. Not set = the default 5 (when the setup has target roles to score against); leads without a score are never auto-added once a minimum applies. 0 = any score: no minimum, every lead is added (scored or not) — only when the user asks for everyone.',
				type: 'number',
				default: 0,
				typeOptions: {
					minValue: 0,
					maxValue: 10,
				},
				routing: {
					send: {
						type: 'body',
						property: 'autoAddMinIcpScore',
					},
				},
			},
			{
				displayName: 'Clear Auto Add',
				name: 'clearAutoAdd',
				description:
					'Whether to switch this on. Clear all auto-add destinations and ICP threshold.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'clearAutoAdd',
					},
				},
			},
			{
				displayName: 'Clear Min ICP Score',
				name: 'clearMinIcpScore',
				description:
					'Whether to switch this on. Clear only the saved minimum ICP score — the default (5) then applies.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'clearMinIcpScore',
					},
				},
			},
		],
	},
	{
		displayName: 'Agent',
		name: 'agent',
		description: 'Signal agent to update',
		type: 'options',
		options: [
			{
				name: 'Competitor',
				value: 'competitor',
			},
			{
				name: 'Influencer',
				value: 'influencer',
			},
			{
				name: 'Intent',
				value: 'intent',
			},
		],
		default: 'competitor',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'agent',
			},
		},
		displayOptions: {
			show: {
				resource: ['signalAgent'],
				operation: ['set_signal_agent_auto_run'],
			},
		},
	},
	{
		displayName: 'Enabled',
		name: 'enabled',
		description: 'Whether daily auto-run should be enabled',
		type: 'boolean',
		default: false,
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'enabled',
			},
		},
		displayOptions: {
			show: {
				resource: ['signalAgent'],
				operation: ['set_signal_agent_auto_run'],
			},
		},
	},
	{
		displayName: 'Agent',
		name: 'agent',
		description:
			'Signal agent to configure. Intent has no scrape settings — use set_signal_agent_auto_run for intent.',
		type: 'options',
		options: [
			{
				name: 'Competitor',
				value: 'competitor',
			},
			{
				name: 'Influencer',
				value: 'influencer',
			},
		],
		default: 'competitor',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'agent',
			},
		},
		displayOptions: {
			show: {
				resource: ['signalAgent'],
				operation: ['set_signal_agent_scrape_settings'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['signalAgent'],
				operation: ['set_signal_agent_scrape_settings'],
			},
		},
		options: [
			{
				displayName: 'Comments Posted Limit',
				name: 'commentsPostedLimit',
				description:
					'The COMMENT tracking window / lookback — only scrape comments newer than this. Same value ladder as postedLimit; use "week" for a 7-DAY window. Default 24h.',
				type: 'options',
				options: [
					{
						name: '1h',
						value: '1h',
					},
					{
						name: '24h',
						value: '24h',
					},
					{
						name: '3months',
						value: '3months',
					},
					{
						name: '6months',
						value: '6months',
					},
					{
						name: 'Any',
						value: 'any',
					},
					{
						name: 'Month',
						value: 'month',
					},
					{
						name: 'Week',
						value: 'week',
					},
					{
						name: 'Year',
						value: 'year',
					},
				],
				default: '1h',
				routing: {
					send: {
						type: 'body',
						property: 'commentsPostedLimit',
					},
				},
			},
			{
				displayName: 'Include Quote Posts',
				name: 'includeQuotePosts',
				description: 'Whether to switch this on. Include quote posts.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'includeQuotePosts',
					},
				},
			},
			{
				displayName: 'Include Reposts',
				name: 'includeReposts',
				description: 'Whether to switch this on. Include reposts.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'includeReposts',
					},
				},
			},
			{
				displayName: 'Max Comments',
				name: 'maxComments',
				description:
					'Max commenters to scrape per post. Capped to plan (Free 10, Standard 50, Pro 100).',
				type: 'number',
				default: 0,
				typeOptions: {
					minValue: 0,
				},
				routing: {
					send: {
						type: 'body',
						property: 'maxComments',
					},
				},
			},
			{
				displayName: 'Max Posts',
				name: 'maxPosts',
				description:
					'Max recent posts to scrape per tracked URL. Capped to plan (Free 1, Standard 2, Pro 3).',
				type: 'number',
				default: 0,
				typeOptions: {
					minValue: 0,
				},
				routing: {
					send: {
						type: 'body',
						property: 'maxPosts',
					},
				},
			},
			{
				displayName: 'Max Reactions',
				name: 'maxReactions',
				description:
					'Max reactors (a.k.a. likers/likes) to scrape per post. Requires scrapeReactions:true to have any effect. Capped to plan (Free 10, Standard 50, Pro 100).',
				type: 'number',
				default: 0,
				typeOptions: {
					minValue: 0,
				},
				routing: {
					send: {
						type: 'body',
						property: 'maxReactions',
					},
				},
			},
			{
				displayName: 'Posted Limit',
				name: 'postedLimit',
				description:
					'The POST tracking window / lookback — only scrape posts newer than this. Use "week" for a 7-DAY window (there is no "7d" value; the ladder is coarse — any, 1h, 24h, week, month, 3months, 6months, year — so pick the closest). Default 24h.',
				type: 'options',
				options: [
					{
						name: '1h',
						value: '1h',
					},
					{
						name: '24h',
						value: '24h',
					},
					{
						name: '3months',
						value: '3months',
					},
					{
						name: '6months',
						value: '6months',
					},
					{
						name: 'Any',
						value: 'any',
					},
					{
						name: 'Month',
						value: 'month',
					},
					{
						name: 'Week',
						value: 'week',
					},
					{
						name: 'Year',
						value: 'year',
					},
				],
				default: '1h',
				routing: {
					send: {
						type: 'body',
						property: 'postedLimit',
					},
				},
			},
			{
				displayName: 'Scrape Comments',
				name: 'scrapeComments',
				description:
					'Whether to switch this on. Scrape commenters — the people who COMMENTED on the post — as leads.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'scrapeComments',
					},
				},
			},
			{
				displayName: 'Scrape Reactions',
				name: 'scrapeReactions',
				description:
					'Whether to switch this on. Scrape reactors — the people who LIKED / reacted to the post (a.k.a. likers/likes) — as leads. OFF by default: set true to collect likers.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'scrapeReactions',
					},
				},
			},
		],
	},
	{
		displayName: 'LinkedIn URL',
		name: 'linkedinUrl',
		description:
			'LinkedIn company URL to track (e.g. linkedin.com/company/salesforce or https://www.linkedin.com/company/hubspot)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'linkedinUrl',
			},
		},
		displayOptions: {
			show: {
				resource: ['signalAgent'],
				operation: ['track_competitor'],
			},
		},
	},
	{
		displayName: 'LinkedIn URL',
		name: 'linkedinUrl',
		description:
			'LinkedIn profile URL of the influencer to track (e.g. linkedin.com/in/johndoe or https://www.linkedin.com/in/johndoe)',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'linkedinUrl',
			},
		},
		displayOptions: {
			show: {
				resource: ['signalAgent'],
				operation: ['track_influencer'],
			},
		},
	},
	{
		displayName: 'LinkedIn URL',
		name: 'linkedinUrl',
		description:
			'LinkedIn company URL or handle of the competitor to stop tracking (e.g. linkedin.com/company/salesforce or "salesforce")',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'linkedinUrl',
			},
		},
		displayOptions: {
			show: {
				resource: ['signalAgent'],
				operation: ['untrack_competitor'],
			},
		},
	},
	{
		displayName: 'LinkedIn URL',
		name: 'linkedinUrl',
		description:
			'LinkedIn profile URL or handle of the influencer to stop tracking (e.g. linkedin.com/in/johndoe or "johndoe")',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'linkedinUrl',
			},
		},
		displayOptions: {
			show: {
				resource: ['signalAgent'],
				operation: ['untrack_influencer'],
			},
		},
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['socialListening'],
			},
		},
		options: [
			{
				name: 'Get Social Listening Auto Import',
				value: 'get_social_listening_auto_import',
				action: 'Get social listening auto import',
				description:
					'Get /app/listening auto-import configuration, destination, thresholds, daily usage limits, and last run status',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_social_listening_auto_import',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Social Listening Auto Import Task',
				value: 'get_social_listening_auto_import_task',
				action: 'Get social listening auto import task',
				description:
					'Get status for a social listening auto-import task, or the latest active task if taskId is omitted',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_social_listening_auto_import_task',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Social Listening Engagers',
				value: 'get_social_listening_engagers',
				action: 'Get social listening engagers',
				description: 'Get engagers/leads surfaced by social listening auto-import runs',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_social_listening_engagers',
						body: {},
					},
					send: {
						paginate: true,
					},
					operations: {
						pagination: paginate({
							by: 'page',
							list: 'engagers',
							pageSize: 100,
							pages: 'totalPages',
							total: 'total',
						}),
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Social Listening Posts',
				value: 'get_social_listening_posts',
				action: 'Get social listening posts',
				description: 'Get LinkedIn posts captured by social listening',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_social_listening_posts',
						body: {},
					},
					send: {
						paginate: true,
					},
					operations: {
						pagination: paginate({ by: 'page', list: 'posts', pageSize: 50, total: 'total' }),
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Social Listening Qualifying Posts',
				value: 'get_social_listening_qualifying_posts',
				action: 'Get social listening qualifying posts',
				description:
					'Get posts that qualify for social listening auto-import based on the saved thresholds',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_social_listening_qualifying_posts',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Social Listening Stats',
				value: 'get_social_listening_stats',
				action: 'Get social listening stats',
				description:
					'Get aggregated social listening statistics: post counts, average intent scores, and top search queries',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_social_listening_stats',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Set Social Listening Auto Import',
				value: 'set_social_listening_auto_import',
				action: 'Set social listening auto import',
				description: 'Configure /app/listening auto-import',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/set_social_listening_auto_import',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Trigger Social Listening Auto Import',
				value: 'trigger_social_listening_auto_import',
				action: 'Trigger social listening auto import',
				description: 'Manually queue a social listening auto-import run',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/trigger_social_listening_auto_import',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
		],
		default: 'get_social_listening_auto_import',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['socialListening'],
				operation: ['get_social_listening_auto_import_task'],
			},
		},
		options: [
			{
				displayName: 'Task ID',
				name: 'taskId',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'taskId',
					},
				},
			},
		],
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['socialListening'],
				operation: ['get_social_listening_engagers'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['socialListening'],
				operation: ['get_social_listening_engagers'],
				returnAll: [false],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['socialListening'],
				operation: ['get_social_listening_engagers'],
			},
		},
		options: [
			{
				displayName: 'Engager Type',
				name: 'engagerType',
				description: 'Filter to commenters or reactors',
				type: 'options',
				options: [
					{
						name: 'Commenter',
						value: 'commenter',
					},
					{
						name: 'Reactor',
						value: 'reactor',
					},
				],
				default: 'commenter',
				routing: {
					send: {
						type: 'body',
						property: 'engagerType',
					},
				},
			},
			{
				displayName: 'Imported To',
				name: 'importedTo',
				description: 'Filter by import destination. Use none for not imported.',
				type: 'options',
				options: [
					{
						name: 'Campaign',
						value: 'campaign',
					},
					{
						name: 'List',
						value: 'list',
					},
					{
						name: 'None',
						value: 'none',
					},
				],
				default: 'campaign',
				routing: {
					send: {
						type: 'body',
						property: 'importedTo',
					},
				},
			},
			{
				displayName: 'Min ICP Score',
				name: 'minIcpScore',
				description: 'Only return engagers with ICP score >= this value',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 10,
				},
				routing: {
					send: {
						type: 'body',
						property: 'minIcpScore',
					},
				},
			},
			{
				displayName: 'Search',
				name: 'search',
				description: 'Search by name, headline, comment/reaction, post author, or ICP reason',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'search',
					},
				},
			},
			{
				displayName: 'Source Post URL',
				name: 'sourcePostUrl',
				description: 'Only return engagers from this LinkedIn post URL',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'sourcePostUrl',
					},
				},
			},
		],
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['socialListening'],
				operation: ['get_social_listening_posts'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['socialListening'],
				operation: ['get_social_listening_posts'],
				returnAll: [false],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['socialListening'],
				operation: ['get_social_listening_posts'],
			},
		},
		options: [
			{
				displayName: 'Include Full Content',
				name: 'includeFullContent',
				description:
					'Whether to switch this on. Return full post content instead of a 500 character preview.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'includeFullContent',
					},
				},
			},
			{
				displayName: 'Include Raw',
				name: 'includeRaw',
				description: 'Whether to switch this on. Include raw post metadata when available.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'includeRaw',
					},
				},
			},
			{
				displayName: 'Min Business Relevancy',
				name: 'minBusinessRelevancy',
				description: 'Only return posts with business relevancy score >= this value (0–100)',
				type: 'number',
				default: 0,
				typeOptions: {
					minValue: 0,
					maxValue: 100,
				},
				routing: {
					send: {
						type: 'body',
						property: 'minBusinessRelevancy',
					},
				},
			},
			{
				displayName: 'Min Buyer Intent',
				name: 'minBuyerIntent',
				description: 'Only return posts with buyer intent score >= this value (0–100)',
				type: 'number',
				default: 0,
				typeOptions: {
					minValue: 0,
					maxValue: 100,
				},
				routing: {
					send: {
						type: 'body',
						property: 'minBuyerIntent',
					},
				},
			},
			{
				displayName: 'Search',
				name: 'search',
				description: 'Search across post content and author name',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'search',
					},
				},
			},
		],
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
		default: 50,
		description: 'Max number of results to return',
		routing: {
			send: {
				type: 'body',
				property: 'limit',
			},
		},
		displayOptions: {
			show: {
				resource: ['socialListening'],
				operation: ['get_social_listening_qualifying_posts'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['socialListening'],
				operation: ['get_social_listening_qualifying_posts'],
			},
		},
		options: [
			{
				displayName: 'Since',
				name: 'since',
				description: 'Optional ISO date, e.g. 2026-05-01',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'since',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['socialListening'],
				operation: ['get_social_listening_stats'],
			},
		},
		options: [
			{
				displayName: 'Days',
				name: 'days',
				description: 'Lookback window in days (default 7)',
				type: 'number',
				default: 7,
				typeOptions: {
					minValue: 1,
					maxValue: 90,
				},
				routing: {
					send: {
						type: 'body',
						property: 'days',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['socialListening'],
				operation: ['set_social_listening_auto_import'],
			},
		},
		options: [
			{
				displayName: 'Daily Limit',
				name: 'dailyLimit',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 500,
				},
				routing: {
					send: {
						type: 'body',
						property: 'dailyLimit',
					},
				},
			},
			{
				displayName: 'Daily Post Limit',
				name: 'dailyPostLimit',
				description: 'Max qualifying posts to add per run when dest is comment-campaign',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 500,
				},
				routing: {
					send: {
						type: 'body',
						property: 'dailyPostLimit',
					},
				},
			},
			{
				displayName: 'Dest ID',
				name: 'destId',
				description: 'Destination list/campaign ID. Must belong to active setup.',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'destId',
					},
				},
			},
			{
				displayName: 'Dest Type',
				name: 'destType',
				description: 'Destination type: outreach campaign, list, or comment campaign',
				type: 'options',
				options: [
					{
						name: 'Campaign',
						value: 'campaign',
					},
					{
						name: 'Comment Campaign',
						value: 'comment-campaign',
					},
					{
						name: 'List',
						value: 'list',
					},
				],
				default: 'campaign',
				routing: {
					send: {
						type: 'body',
						property: 'destType',
					},
				},
			},
			{
				displayName: 'Enabled',
				name: 'enabled',
				description: 'Whether to switch this on. Enable daily auto-import. Pro only when true.',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'enabled',
					},
				},
			},
			{
				displayName: 'Extract Type',
				name: 'extractType',
				description: 'Which engagers to extract from posts',
				type: 'options',
				options: [
					{
						name: 'Both',
						value: 'both',
					},
					{
						name: 'Commenter',
						value: 'commenter',
					},
					{
						name: 'Reactor',
						value: 'reactor',
					},
				],
				default: 'both',
				routing: {
					send: {
						type: 'body',
						property: 'extractType',
					},
				},
			},
			{
				displayName: 'Min Buyer Intent',
				name: 'minBuyerIntent',
				type: 'number',
				default: 0,
				typeOptions: {
					minValue: 0,
					maxValue: 100,
				},
				routing: {
					send: {
						type: 'body',
						property: 'minBuyerIntent',
					},
				},
			},
			{
				displayName: 'Min ICP Score',
				name: 'minIcpScore',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 10,
				},
				routing: {
					send: {
						type: 'body',
						property: 'minIcpScore',
					},
				},
			},
			{
				displayName: 'Min Relevancy',
				name: 'minRelevancy',
				type: 'number',
				default: 0,
				typeOptions: {
					minValue: 0,
					maxValue: 100,
				},
				routing: {
					send: {
						type: 'body',
						property: 'minRelevancy',
					},
				},
			},
			{
				displayName: 'Qualifying Posts Last Days',
				name: 'qualifyingPostsLastDays',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
					maxValue: 365,
				},
				routing: {
					send: {
						type: 'body',
						property: 'qualifyingPostsLastDays',
					},
				},
			},
			{
				displayName: 'Qualifying Posts Sort Order',
				name: 'qualifyingPostsSortOrder',
				type: 'options',
				options: [
					{
						name: 'Highest Intent',
						value: 'highest-intent',
					},
					{
						name: 'Highest Relevancy',
						value: 'highest-relevancy',
					},
					{
						name: 'Most Comments',
						value: 'most-comments',
					},
					{
						name: 'Most Least Relevant',
						value: 'most-least-relevant',
					},
					{
						name: 'Most Likes',
						value: 'most-likes',
					},
					{
						name: 'Most Shares',
						value: 'most-shares',
					},
					{
						name: 'Newest Oldest',
						value: 'newest-oldest',
					},
				],
				default: 'highest-intent',
				routing: {
					send: {
						type: 'body',
						property: 'qualifyingPostsSortOrder',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['socialListening'],
				operation: ['trigger_social_listening_auto_import'],
			},
		},
		options: [
			{
				displayName: 'Post URLs',
				name: 'postUrls',
				description: 'Optional selected LinkedIn post URLs. Empty array is invalid.',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				routing: {
					send: {
						type: 'body',
						property: 'postUrls',
					},
				},
			},
		],
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['task'],
			},
		},
		options: [
			{
				name: 'Cancel Task',
				value: 'cancel_task',
				action: 'Cancel task',
				description: 'Cancel a pending or retrying background task',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/cancel_task',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Scheduled Sends',
				value: 'get_scheduled_sends',
				action: 'Get scheduled sends',
				description: 'List scheduled-send batches and their item status counts',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_scheduled_sends',
						body: {},
					},
					send: {
						paginate: true,
					},
					operations: {
						pagination: paginate({
							by: 'page',
							list: 'batches',
							pageSize: 100,
							pages: 'totalPages',
							more: 'hasMore',
							total: 'total',
						}),
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Tasks',
				value: 'get_tasks',
				action: 'Get tasks',
				description: 'List recent background tasks for the active account',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/get_tasks',
						body: {},
					},
					send: {
						paginate: true,
					},
					operations: {
						pagination: paginate({
							by: 'page',
							list: 'tasks',
							pageSize: 200,
							pages: 'totalPages',
							more: 'hasMore',
							total: 'total',
						}),
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Retry Task',
				value: 'retry_task',
				action: 'Retry task',
				description: 'Retry a failed or cancelled background task',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/retry_task',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
			{
				name: 'Update Scheduled Send Status',
				value: 'update_scheduled_send_status',
				action: 'Update scheduled send status',
				description: 'Pause, resume, or cancel a scheduled-send batch',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/actions/update_scheduled_send_status',
						body: {},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'result',
								},
							},
						],
					},
				},
			},
		],
		default: 'get_scheduled_sends',
	},
	{
		displayName: 'Task ID',
		name: 'taskId',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'taskId',
			},
		},
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['cancel_task'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['cancel_task'],
			},
		},
		options: [
			{
				displayName: 'Confirm',
				name: 'confirm',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'confirm',
					},
				},
			},
		],
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['get_scheduled_sends'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['get_scheduled_sends'],
				returnAll: [false],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['get_scheduled_sends'],
			},
		},
		options: [
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				options: [
					{
						name: 'Active',
						value: 'active',
					},
					{
						name: 'Cancelled',
						value: 'cancelled',
					},
					{
						name: 'Completed',
						value: 'completed',
					},
					{
						name: 'Paused',
						value: 'paused',
					},
				],
				default: 'active',
				routing: {
					send: {
						type: 'body',
						property: 'status',
					},
				},
			},
		],
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['get_tasks'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['get_tasks'],
				returnAll: [false],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['get_tasks'],
			},
		},
		options: [
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				options: [
					{
						name: 'Cancelled',
						value: 'cancelled',
					},
					{
						name: 'Completed',
						value: 'completed',
					},
					{
						name: 'Failed',
						value: 'failed',
					},
					{
						name: 'Pending',
						value: 'pending',
					},
					{
						name: 'Processing',
						value: 'processing',
					},
					{
						name: 'Retrying',
						value: 'retrying',
					},
				],
				default: 'cancelled',
				routing: {
					send: {
						type: 'body',
						property: 'status',
					},
				},
			},
			{
				displayName: 'Task Type',
				name: 'taskType',
				type: 'options',
				options: [
					{
						name: 'Active Signal Daily',
						value: 'active-signal-daily',
					},
					{
						name: 'Active Signal Run',
						value: 'active-signal-run',
					},
					{
						name: 'Auto Import Run',
						value: 'auto-import-run',
					},
					{
						name: 'Campaign Comment',
						value: 'campaign-comment',
					},
					{
						name: 'Campaign Like',
						value: 'campaign-like',
					},
					{
						name: 'Enrich Email',
						value: 'enrich-email',
					},
					{
						name: 'Enrich Location',
						value: 'enrich-location',
					},
					{
						name: 'Extract Commenter',
						value: 'extract-commenter',
					},
					{
						name: 'Extract Reactor',
						value: 'extract-reactor',
					},
					{
						name: 'Fetch Connection',
						value: 'fetch-connection',
					},
					{
						name: 'Fetch Inbox',
						value: 'fetch-inbox',
					},
					{
						name: 'Fetch Thread',
						value: 'fetch-thread',
					},
					{
						name: 'Find Competitors',
						value: 'find-competitors',
					},
					{
						name: 'Find Influencers',
						value: 'find-influencers',
					},
					{
						name: 'Generate Message',
						value: 'generate-message',
					},
					{
						name: 'Instantly Export List',
						value: 'instantly-export-list',
					},
					{
						name: 'Monitor Job',
						value: 'monitor-job',
					},
					{
						name: 'Send Connect',
						value: 'send-connect',
					},
					{
						name: 'Send Follow Up',
						value: 'send-follow-up',
					},
					{
						name: 'Send Message',
						value: 'send-message',
					},
					{
						name: 'Send Message Campaign',
						value: 'send-message-campaign',
					},
					{
						name: 'Send Message Campaign InMail',
						value: 'send-message-campaign-inmail',
					},
					{
						name: 'Send Reply',
						value: 'send-reply',
					},
					{
						name: 'Send Welcome',
						value: 'send-welcome',
					},
					{
						name: 'Signal Leads Run',
						value: 'signal-leads-run',
					},
					{
						name: 'Social Listening Fetch',
						value: 'social-listening-fetch',
					},
					{
						name: 'Withdraw Pending',
						value: 'withdraw-pending',
					},
				],
				default: 'active-signal-daily',
				routing: {
					send: {
						type: 'body',
						property: 'taskType',
					},
				},
			},
		],
	},
	{
		displayName: 'Task ID',
		name: 'taskId',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'taskId',
			},
		},
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['retry_task'],
			},
		},
	},
	{
		displayName: 'Scheduled Send ID',
		name: 'scheduledSendId',
		type: 'string',
		default: '',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'scheduledSendId',
			},
		},
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['update_scheduled_send_status'],
			},
		},
	},
	{
		displayName: 'Action',
		name: 'actionChoice',
		type: 'options',
		options: [
			{
				name: 'Cancel',
				value: 'cancel',
			},
			{
				name: 'Pause',
				value: 'pause',
			},
			{
				name: 'Resume',
				value: 'resume',
			},
		],
		default: 'cancel',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'action',
			},
		},
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['update_scheduled_send_status'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['update_scheduled_send_status'],
			},
		},
		options: [
			{
				displayName: 'Confirm',
				name: 'confirm',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'confirm',
					},
				},
			},
		],
	},
];

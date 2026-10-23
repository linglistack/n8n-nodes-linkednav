# n8n-nodes-linkednav

This is an n8n community node. It lets you use [LinkedNav](https://linkednav.com/?utm_source=n8n&utm_medium=node) in your n8n workflows.

LinkedNav runs LinkedIn outreach: campaigns that send connection invitations and message sequences, lead lists, an inbox with AI reply drafts, approval queues, lead-finding agents, and enrichment. This node also works with your own LinkedIn account directly: chats, invitations, posts, searches and profiles. LinkedNav is an independent service, not made by, affiliated with or endorsed by LinkedIn.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/sustainable-use-license/) workflow automation platform.

[Installation](#installation)
[Operations](#operations)
[Credentials](#credentials)
[Compatibility](#compatibility)
[Usage](#usage)
[Resources](#resources)
[Version history](#version-history)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation. The package name is `n8n-nodes-linkednav`.

## Operations

The node has every action of the LinkedNav API: 241 operations in 20 resources.

| Resource | Operations | For example |
|---|---|---|
| Account | 15 | Account status, connected LinkedIn accounts, InMail credits, today's action usage |
| AI Setup | 8 | Get or update the business context and ideal customer profile that campaigns use |
| Analytics | 6 | Dashboard summary, campaign performance, pipeline of the hottest leads |
| Approval | 18 | List, edit, approve or deny AI reply drafts, comments and outbound messages |
| Campaign | 29 | Create, start or pause a campaign, add leads, diagnose why it stopped |
| Contact | 10 | List, create, update or delete contacts |
| CRM | 3 | List, add or update, and delete CRM cards |
| Enrichment | 13 | Find work emails and phones for contacts or profile links |
| Inbox | 12 | Get the inbox, reply to a conversation, find replies waiting on you |
| List | 5 | List, create and update lead lists, get a list's contacts |
| Message | 22 | List chats and messages, send a message, start a conversation |
| Network | 11 | Send or withdraw an invitation, list connections and received invitations |
| Post | 12 | Create a post, comment or react, list a post's comments and reactions |
| Profile | 5 | Get a profile, update your own profile |
| Prompt | 6 | List, create and update the prompts that write campaign messages |
| Recruiter | 14 | Recruiter hiring projects, job postings and applicants |
| Search | 17 | Search people, companies, posts and jobs; find decision makers |
| Signal Agent | 22 | Track influencers and competitors, run the agents, get the leads they find |
| Social Listening | 8 | Posts and engagers from social listening, auto import settings |
| Task | 5 | List, cancel or retry tasks; scheduled sends |

## Credentials

You need a LinkedNav account with your LinkedIn account connected. It starts with a free 7-day trial.

1. Sign in at [linkednav.com](https://linkednav.com/?utm_source=n8n&utm_medium=node) and connect your LinkedIn account.
2. Open **API Keys** ([linkednav.com/app/api-keys](https://linkednav.com/app/api-keys)) and create a key. It is shown once.
3. In n8n, create a **LinkedNav API** credential and paste the key into **API Key**.

n8n checks the key when you save the credential. A workspace key that a team owner shared with you works too; it reaches only the setups shared with you, and the actions on the owner's own LinkedIn account are not available to it.

## Compatibility

Tested with n8n 2.41.7.

## Usage

- Pick a **Resource**, then an **Operation**. The inputs an action needs are on the node; the optional ones are under **Additional Fields**.
- The node returns what the action answers (the API's `result`). When an action is refused, the node fails with the API's own message, which says why in plain English, for example that a campaign was not found or that a daily limit is reached.
- A list that pages (contacts, campaigns, chats, messages, searches, comments, applicants and the like) comes out as one item per row. Turn on **Return All** for every row, or set **Limit**; the node fetches the pages itself.
- On an action that cannot page, **Limit** is the API's own `limit`: the most it gives in one call.
- An input that is a list of objects, or an object, is entered as JSON.
- **Search > Search People** shows a free preview (how many people match) unless **Confirm** is on. With Confirm on, it spends LinkedNav credits for each person it returns, on every page, so keep **Limit** small rather than turning on **Return All**. The enrichment actions also spend credits, only for what they find.
- The actions that change something on LinkedIn (send a message or an invitation, comment, post) do it at once from your own account and cannot be undone. For many people on a schedule, use a campaign rather than one send after another.
- Sales Navigator, Recruiter and job-posting operations need that product on your own LinkedIn account.
- For your account's safety, the API does not take or show a LinkedIn password, session cookie or 2FA code: n8n keeps every run's inputs and output. Use **Account > Get a link to connect an account** to connect or reconnect LinkedIn in your browser.

Each LinkedIn account has daily limits for each kind of action, and LinkedNav keeps to them. LinkedIn's User Agreement does not allow automated activity, and LinkedIn can limit or restrict an account that it decides is automated. Keep the numbers small, and spread what you do over the day.

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
- [LinkedNav](https://linkednav.com/?utm_source=n8n&utm_medium=node)
- [LinkedNav API as an OpenAPI 3.1 file](https://api.linkednav.com/v1/openapi.json)

## Version history

- **0.1.0**: first release. Every action of the LinkedNav API, generated from its OpenAPI file by `scripts/generate.mjs`, with n8n's Return All and Limit on every list that pages.

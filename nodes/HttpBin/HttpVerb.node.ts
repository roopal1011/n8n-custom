import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

import { httpVerbOperations, httpVerbFields } from './HttpVerbDescription';

export class HttpVerb implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'HTTP Verb',
		name: 'httpVerb',
		icon: 'fa:exchange-alt',
		group: ['transform'],
		version: 1,
		description: 'Make HTTP requests with different verbs (GET, DELETE)',
		defaults: {
			name: 'HTTP Verb',
		},
		inputs: ['main'] as NodeConnectionType[],
		outputs: ['main'] as NodeConnectionType[],
		properties: [...httpVerbOperations, ...httpVerbFields],
	};
}

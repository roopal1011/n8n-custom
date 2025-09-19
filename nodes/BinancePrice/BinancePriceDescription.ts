import { INodeProperties } from 'n8n-workflow';

export const binancePriceFields: INodeProperties[] = [
	{
		displayName: 'Symbol',
		name: 'symbol',
		type: 'string',
		default: 'BTCUSDT',
		placeholder: 'BTCUSDT',
		description: 'Trading pair symbol (use uppercase) e.g. BTCUSDT, ETHUSDT',
		required: true,
	},
];

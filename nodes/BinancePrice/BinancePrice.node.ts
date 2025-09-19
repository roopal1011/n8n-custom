import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	NodeConnectionType,
} from 'n8n-workflow';
import axios from 'axios';

export class BinancePrice implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Binance Price',
		name: 'binancePrice',
		icon: 'file:binance.svg',
		group: ['transform'],
		version: 1,
		description: 'Fetch real-time cryptocurrency prices from Binance',
		defaults: {
			name: 'Binance Price',
		},
		inputs: ['main'] as NodeConnectionType[],
		outputs: ['main'] as NodeConnectionType[],
		properties: [
			{
				displayName: 'Symbol',
				name: 'symbol',
				type: 'string',
				default: 'BTCUSDT',
				placeholder: 'e.g. BTCUSDT, ETHUSDT',
				description: 'Trading pair symbol',
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		// Step 1: Get input parameter
		const symbol = this.getNodeParameter('symbol', 0) as string;
		console.log('🔍 Fetching price for symbol:', symbol);

		// Step 2: Call Binance API
		const url = `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`;
		console.log('🌍 Calling API:', url);

		const response = await axios.get(url);
		console.log('✅ API Response:', response.data);

		// Step 3: Return result to n8n
		const returnData: INodeExecutionData[] = [
			{
				json: response.data,
			},
		];

		console.log('📤 Returning data to workflow:', returnData);

		return [returnData];
	}
}

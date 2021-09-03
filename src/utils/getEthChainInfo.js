export const getEthChainInfo = () => {
	// let chainId = 4;
	// let rpcUrl = 'https://rinkeby.infura.io/v3/cb76dcac4ae3402fb421b2b0d4c28db3/';

	let chainId = 1;
	let rpcUrl =  "https://mainnet.eth.aragon.network/" ;

	return {
		chainId,
		rpcUrl,
	};
};

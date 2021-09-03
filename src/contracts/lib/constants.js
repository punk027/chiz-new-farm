import kawaCoin from '../../assets/kawaCoin.svg';
import shibaCoin from '../../assets/shibaCoin.svg';
import kishuCoin from '../../assets/kishuCoin.svg';
import akitaCoin from '../../assets/akitaCoin.svg';
import dogeCoin from '../../assets/dogeCoin.svg';
export const contractAddresses = {
	erc20: {
		42: '0x175D9b7BEf31cC753D1d94Ee70d90F23aBF94070',
		1: '0xf2454D3C376f4244C8229b3d8498cee95eF40160',
		4: '0x2f997B58a2a21f179dd76De40aA2277C81948084',
	},
	farm: {
		42: '0x91B35B2f90f283A093e14B2d8578Afcd67C18876',
		1: '0x914522e40049D88db8225f285357Fb5fe97891EF',
		4: '0xcD985084E40C62033779BfC664f543c483363Fa7',
	},
	weth: {
		42: '0xa050886815cfc52a24b9c4ad044ca199990b6690',
		1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
		4: '0xc778417e063141139fce010982780140aa0cd5ab',
	},
};

export const supportedPools = [
	{
		pid: 0,
		lpAddresses: {
			42: '0xf9f89F9dF418664cFAF5f8669d846269e49Ca6f1',
			1: '0x17a4ae8b1ea75d51ab0f2875b80452f7e34c272a',
			4: '0x073f6BF68De1f157508aa00baB5F6B2f544382bE',
		},
		farmAddresses: {
			1: '0x914522e40049D88db8225f285357Fb5fe97891EF',
			4: '0x41cA4c2aE4B2a80E7f1955ff544be02c9da8ae37',
		},
		tokenAddresses: {
			42: '0x175D9b7BEf31cC753D1d94Ee70d90F23aBF94070',
			1: '0xf2454D3C376f4244C8229b3d8498cee95eF40160',
			4: '0xa3a5F9dC5FD2b7170Aaac1d749d609a3783bf383',
		},
		name: 'KAWA',
		symbol: 'KAWA',
		tokenSymbol: 'xKawa',
		icon: kawaCoin,
		poolTitle: 'Kawakami Inu Pool',
		pool: '15%',
		decimal: 18,
	},
	{
		pid: 1,
		lpAddresses: {
			42: '0xf9f89F9dF418664cFAF5f8669d846269e49Ca6f1',
			1: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce',
			4: '0x37d3C98483745bc273B813c16922D76020C40BBA',
		},
		farmAddresses: {
			1: '0xF9add0f05Dd89183f14f0c6339641246DCC6f2cd',
			4: '0xf868eAC45EDf821CF7ccd05bcbE383B97855498F',
		},
		tokenAddresses: {
			42: '0x175D9b7BEf31cC753D1d94Ee70d90F23aBF94070',
			1: '0xf2454D3C376f4244C8229b3d8498cee95eF40160',
			4: '0xa3a5F9dC5FD2b7170Aaac1d749d609a3783bf383',
		},
		name: 'SHIB',
		symbol: 'SHIB',
		tokenSymbol: 'xKawa',
		icon: shibaCoin,
		poolTitle: 'Shiba Inu Pool',
		pool: '10%',
		decimal: 18,
	},
	{
		pid: 2,
		lpAddresses: {
			42: '0xf9f89F9dF418664cFAF5f8669d846269e49Ca6f1',
			1: '0x761d38e5ddf6ccf6cf7c55759d5210750b5d60f3',
			4: '0x020b2db78e5603271f623C9A6bF73A3758293319',
		},
		farmAddresses: {
			1: '0x5DC2aA7BAFb6e984AC7c0c05e06630FC96A0a6f8',
			4: '0x398aDBe8e62eeA6e2ce70294457545D186C2ac14',
		},
		tokenAddresses: {
			42: '0x175D9b7BEf31cC753D1d94Ee70d90F23aBF94070',
			1: '0xf2454D3C376f4244C8229b3d8498cee95eF40160',
			4: '0xa3a5F9dC5FD2b7170Aaac1d749d609a3783bf383',
		},
		name: 'ELON',
		symbol: 'ELON',
		tokenSymbol: 'xKawa',
		icon: dogeCoin,
		poolTitle: 'Dogelon Pool',
		pool: '10%',
		decimal: 18,
	},
	{
		pid: 3,
		lpAddresses: {
			42: '0xf9f89F9dF418664cFAF5f8669d846269e49Ca6f1',
			1: '0x3301ee63fb29f863f2333bd4466acb46cd8323e6',
			4: '0xf4aF961bDf68c2c3fD6f9C87BF78852Ac7d7068f',
		},
		tokenAddresses: {
			42: '0x175D9b7BEf31cC753D1d94Ee70d90F23aBF94070',
			1: '0xf2454D3C376f4244C8229b3d8498cee95eF40160',
			4: '0xa3a5F9dC5FD2b7170Aaac1d749d609a3783bf383',
		},
		farmAddresses: {
			1: '0xCB2dADc4F03909a4705029f5bbcf16E48677aC53',
			4: '0x19F494d25e945e139940861A7859717346470D7D',
		},
		name: 'AKITA',
		symbol: 'AKITA',
		tokenSymbol: 'xKawa',
		icon: akitaCoin,
		poolTitle: 'Akita Inu Pool',
		pool: '10%',
		decimal: 18,
	},
	{
		pid: 4,
		lpAddresses: {
			42: '0xf9f89F9dF418664cFAF5f8669d846269e49Ca6f1',
			1: '0xa2b4c0af19cc16a6cfacce81f192b024d625817d',
			4: '0x37d3C98483745bc273B813c16922D76020C40BBA',
		},
		farmAddresses: {
			1: '0xB114B0c54Bf14900F30d5679474F716B52035aE5',
			4: '0xcD985084E40C62033779BfC664f543c483363Fa7',
		},
		tokenAddresses: {
			42: '0x175D9b7BEf31cC753D1d94Ee70d90F23aBF94070',
			1: '0xf2454D3C376f4244C8229b3d8498cee95eF40160',
			4: '0xa3a5F9dC5FD2b7170Aaac1d749d609a3783bf383',
		},
		name: 'KISHU',
		symbol: 'KISHU',
		tokenSymbol: 'xKawa',
		icon: kishuCoin,
		poolTitle: 'Kishu Inu Pool',
		pool: '10%',
		decimal: 9,
	},
];

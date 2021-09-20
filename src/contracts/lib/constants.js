
export const contractAddresses = {
  erc20: {
    42: "0x175D9b7BEf31cC753D1d94Ee70d90F23aBF94070",
    1: "0x5c761c1a21637362374204000e383204d347064c",
    4: "0x2f997B58a2a21f179dd76De40aA2277C81948084",
  },
  farm: {
    42: "0x91B35B2f90f283A093e14B2d8578Afcd67C18876",
    1: "0x5A2d9d775053aEde7832CD2Ac9De3abc13e53dF2",
    4: "0x439607d5506E009b98fC9E37dD29E17b096c472f",
  },
  weth: {
    42: "0xa050886815cfc52a24b9c4ad044ca199990b6690",
    1: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    4: "0xc778417e063141139fce010982780140aa0cd5ab",
  },
};

export const supportedPools = [
 
  {
    pid: 0,
    lpAddresses: {
      42: "0xf9f89F9dF418664cFAF5f8669d846269e49Ca6f1",
      1: "0x6b8BC6cEbaA266429F387125D433E46F59CDb499",
      4: "0x2fb106f9751d643452f4c8a657ad408341824108",
    },
    farmAddresses: {
      4: "0x439607d5506E009b98fC9E37dD29E17b096c472f",
      1: "0x5A2d9d775053aEde7832CD2Ac9De3abc13e53dF2"
    },
    tokenAddresses: {
      42: "0xded7ceb95a1f3c20f07545dc50a8d2c093bbdf22",
      1: "0x5c761c1a21637362374204000e383204d347064C",
      4: "0xded7ceb95a1f3c20f07545dc50a8d2c093bbdf22",
    },
    name: "CHIZ/ETH",
    symbol: "CHIZ/ETH",
    tokenSymbol: "CHIZ",
  
    poolTitle: "EXTRA CHIZ/ETH Pool",
    pool: "Must have at least one Rat and one Cheddaz companion in your wallet.",
   
   // pool: "50%",
  },
/*  {
    pid: 1,
    lpAddresses: {
      42: "0xf9f89F9dF418664cFAF5f8669d846269e49Ca6f1",
      1: "0x6b8BC6cEbaA266429F387125D433E46F59CDb499",
      4: "0x2fb106f9751d643452f4c8a657ad408341824108",
    },
    farmAddresses: {
      4: "0x439607d5506E009b98fC9E37dD29E17b096c472f",
      1: "0x5A2d9d775053aEde7832CD2Ac9De3abc13e53dF2"
    },
    tokenAddresses: {
      42: "0xded7ceb95a1f3c20f07545dc50a8d2c093bbdf22",
      1: "0x5c761c1a21637362374204000e383204d347064C",
      4: "0xded7ceb95a1f3c20f07545dc50a8d2c093bbdf22",
    },
    name: "CHIZ/ETH",
    symbol: "CHIZ/ETH",
    tokenSymbol: "CHIZ",
  
    poolTitle: "CHIZ/ETH Pool",
  },*/
  {
    pid: 2,
    lpAddresses: {
      42: "0xf9f89F9dF418664cFAF5f8669d846269e49Ca6f1",
      1: "0x02346c6d7DCDCbfa511Eb72BF61f7545f7bD2527",
      4: "0x2fb106f9751d643452f4c8a657ad408341824108",
    },
    farmAddresses: {
      4: "0x439607d5506E009b98fC9E37dD29E17b096c472f",
      1: "0x5A2d9d775053aEde7832CD2Ac9De3abc13e53dF2"
    },
    tokenAddresses: {
      42: "0xded7ceb95a1f3c20f07545dc50a8d2c093bbdf22",
      1: "0x5c761c1a21637362374204000e383204d347064C",
      4: "0xded7ceb95a1f3c20f07545dc50a8d2c093bbdf22",
    },
    name: "SRSC20/ETH",
    symbol: "SRSC20/ETH",
    tokenSymbol: "CHIZ",
  
    poolTitle: "SRSC20/ETH Pool",
    pool: "Must have at least one Rat and one Cheddaz companion in your wallet."
   
  },
  
];

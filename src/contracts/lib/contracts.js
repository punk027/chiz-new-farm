// import Web3 from 'web3'
import * as Types from './types.js';
import {
  // SUBTRACT_GAS_LIMIT,
  contractAddresses,
} from './constants.js';



export class Contracts {
  constructor(provider, networkId, web3, options) {
    this.web3 = web3;
    this.defaultConfirmations = options.defaultConfirmations;
    this.autoGasMultiplier = options.autoGasMultiplier || 1.5;
    this.confirmationType =
        options.confirmationType || Types.ConfirmationType.Confirmed;
    this.defaultGas = options.defaultGas;
    this.defaultGasPrice = options.defaultGasPrice;

  

    this.setProvider(provider, networkId);
    this.setDefaultAccount(this.web3.eth.defaultAccount);
  }

  setProvider(provider, networkId) {
    const setProvider = (contract, address) => {
      contract.setProvider(provider);
      if (address) contract.options.address = address;
      else console.error('Contract address not found in network', networkId);
    }

    setProvider(this.erc20, contractAddresses.erc20[networkId]);
    setProvider(this.farm, contractAddresses.farm[networkId]);
    setProvider(this.weth, contractAddresses.weth[networkId]);

    this.pools.forEach(
        ({ lpContract, lpAddress, tokenContract, tokenAddress }) => {
          setProvider(lpContract, lpAddress);
          setProvider(tokenContract, tokenAddress);
        },
    )
  }

  setDefaultAccount(account) {
    this.erc20.options.from = account;
    this.farm.options.from = account;
  }
}

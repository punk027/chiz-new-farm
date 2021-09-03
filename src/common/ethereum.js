import { ethers } from 'ethers'
import LGEAbi from '../artifacts/abi/LGEAbi'
import defaults from './defaults'

const lgeAddLiquidity = async (amount, provider) => {
	const contract = new ethers.Contract(
		defaults.network.contract.LGE,
		LGEAbi,
		provider.getSigner(0),
	)
	return await contract.addLiquidity({
		value: amount,
	})
}

const lgeGetLiquidityProviders = async (provider) => {
	const contract = new ethers.Contract(
		defaults.network.contract.LGE,
		LGEAbi,
		provider.getSigner(0),
	)
	return await contract.getLiquidityProviders()
}

const lgeIsAddressProvider = async (address, provider) => {
	const is = await lgeGetLiquidityProviders(provider)
		.then(a => {
			return a.includes(address) ? true : false
		})
		.catch(err => console.log(err))
	return is
}

const lgeGetProviderShareAmount = async (providerAddress, provider) => {
	const contract = new ethers.Contract(
		defaults.network.contract.LGE,
		LGEAbi,
		provider.getSigner(0),
	)
	return await contract.liquidityProviders(providerAddress)
}

const estimateGasCost = async (contractAddress, abi, callName, data, provider) => {
	const contract = new ethers.Contract(
		contractAddress,
		abi,
		provider.getSigner(0),
	)
	const execute = (name, context, args) => {
		return context[name](args)
	}
	return await execute(callName, contract.estimateGas, data)
}

export {
	lgeAddLiquidity, lgeGetLiquidityProviders, estimateGasCost, lgeIsAddressProvider,
	lgeGetProviderShareAmount,
}
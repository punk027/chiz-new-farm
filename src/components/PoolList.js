import React, { useEffect, useState } from 'react'
import { Flex, Box, Heading, Accordion, AccordionItem, AccordionButton,
	AccordionPanel, AccordionIcon, HStack, Input, Button, useBreakpointValue,
	Text, Fade, useToast } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { EthIcon } from '../assets/icons/EthIcon'
import { estimateGasCost, lgeAddLiquidity, lgeGetProviderShareAmount, lgeIsAddressProvider } from '../common/ethereum'
import { ethers } from 'ethers'
import { useWallet } from 'use-wallet'
import defaults from '../common/defaults'
import LGEAbi from '../artifacts/abi/LGEAbi'
import { prettifyCurrency } from '../common/utils'
import { walletNotConnected, amountOfEthNotEntered,
	insufficientBalance, failed, rejected, successfulDeposit } from '../messages'

export const PoolList = (props) => {

	const wallet = useWallet()
	const toast = useToast()
	const [value, setValue] = useState(0)
	const [lgeBalance, setLgeBalance] = useState(-1)
	const [lgeProviderShareAmount, setLgeProviderShareAmount] = useState(false)
	const [working, setWorking] = useState(false)

	const [onPressTimeout, setOnPressTimeout] = useState(null)
	const inc = () => {
		setValue(prevState => prevState >= 0 ? Number((Number(prevState) + 0.1).toFixed(4)) : prevState)
		setOnPressTimeout(setTimeout(inc, 150))
	}
	const dec = () => {
		setValue(prevState => (prevState >= 0.1 ? Number((Number(prevState) - 0.1).toFixed(4)) : 0))
		setOnPressTimeout(setTimeout(dec, 150))
	}
	const stop = () => {
		clearTimeout(onPressTimeout)
		setOnPressTimeout(null)
	}
	const arrowIcon = useBreakpointValue({
		sm: <ArrowForwardIcon verticalAlign='super'/>,
	})

	const style = {
		width: '100%',
	}

	const itemStyle = {
		border: 'none',
		borderRadius: '25px',
		bg: 'blue.300',
		color: 'white',
		p: '0',
		mb: '1.7rem',
	}

	const itemTriggerStyle = {
		flexDirection: 'row',
		flexWrap: 'wrap',
		p: '2.6rem 1.9rem 1rem',
		_hover: {
			bg: 'transparent',
			cursor: '',
		},
	}

	const itemDesc = {
		width: '100%',
		display: 'block',
		mb: '1rem',
	}

	const itemStats = {
		width: '100%',
		display: 'flex',
		flexFlow: { base: 'column', md: 'row' },
	}

	const statVale = {
		fontSize: '1.2rem',
		minH: '59.1px',
	}

	const itemContentStyle = {
		p: '0 1.9rem 2.6rem',
	}

	const properties = {
		defaultIndex: [0],
		allowMultiple: false,
	}

	useEffect(() => {
		defaults.network.provider.getBalance(
			defaults.network.contract.LGE)
			.then(b => setLgeBalance(b))
			.catch(err => {
				setLgeBalance(false)
				console.log(err)
			})
	}, [])

	useEffect(() => {
		if(wallet.account) {
			const provider = new ethers.providers.Web3Provider(wallet.ethereum)
			lgeIsAddressProvider(wallet.account, provider)
				.then(is => {
					if(is) {
						lgeGetProviderShareAmount(wallet.account, provider)
							.then(amnt => {
								setLgeProviderShareAmount(amnt)
							})
							.catch(err => {
								console.log(err)
								setLgeProviderShareAmount(-1)
							})
					}
				})
				.catch(err => {
					console.log(err)
				})
		}
	}, [wallet.account, lgeBalance])

	return (
		<Accordion {...properties} {...style} {...props}>
			<AccordionItem {...itemStyle}>
				<AccordionButton as='div' {...itemTriggerStyle}>
					<Heading as='div' fontSize='1.8rem' display='flex' flex='1'>DD Liquidity Generation Event</Heading>
					<AccordionIcon />
					<Box {...itemDesc}>
						<Box as='i' opacity='0.8'>Participate in the LGE by adding ETH to the contract.</Box>
					</Box>
					<Flex {...itemStats}>
						{lgeBalance < 0 &&
							<Flex flex='1' minH='59.1px'>
								<Fade in={lgeBalance} style={{ alignSelf: 'center' }}>
									<Box as='i' opacity='0.8'>Loading...</Box>
								</Fade>
							</Flex>
						}
						{lgeBalance >= 0 &&
						<Flex flex='1' flexFlow='column'>
							<Box as='span' {...statVale}>
								<Fade in={lgeBalance}>
									<Box>Total Value Locked</Box>
									<Box as='span'>{prettifyCurrency(lgeBalance ? ethers.utils.formatEther(lgeBalance.toString()) : '', '0', '5', 'ETH', false)}</Box>
									<Box as='span' fontFamily='arial'>Ξ</Box>
								</Fade>
							</Box>
						</Flex>
						}
						{lgeProviderShareAmount &&
							<Flex flex='1' flexFlow='column'>
								<Box as='span' {...statVale}>
									<Fade in={lgeProviderShareAmount}>
										<Box>You Provided</Box>
										<Box as='span' {...statVale}>{
											prettifyCurrency(ethers.utils.formatEther(lgeProviderShareAmount.toString()), '0', '5', 'ETH', false)
										}
										<Box as='span' fontFamily='arial'>Ξ</Box>
										</Box>
									</Fade>
								</Box>
							</Flex>
						}
						{lgeProviderShareAmount &&
							<Flex flex='1' flexFlow='column'>
								<Box as='span' {...statVale}>
									<Fade in={lgeProviderShareAmount}>
										<Box>Pool Share</Box>
										<Box as='span' {...statVale}>
											{`${
												lgeProviderShareAmount.div(lgeBalance)
													.mul(ethers.BigNumber.from('100'))
													.toNumber()
											}%`}
										</Box>
									</Fade>
								</Box>
							</Flex>
						}
					</Flex>
				</AccordionButton>
				<AccordionPanel {...itemContentStyle}>
					<Heading as='div' size='md' display='flex' flex='1' mb='0.3rem'>Deposit Liquidity</Heading>
					<Heading as='div' size='xs' display='flex' flex='1' opacity='0.8'>Amount</Heading>
					<Flex flexWrap={{ base: 'wrap', md: 'nowrap' }}>
						<HStack width='100%'
							maxWidth={{ base: '100%', md: '313px' }}
							marginBottom='1rem'>
							<Text as='span'>ETH</Text>
							<EthIcon minWidth='32px' height='32px' />
							<Input variant='filled'
						   marginRight='0.5rem'
						   overflow='hidden'
						   fontWeight='bold'
						   value={value}
						   onChange={(event) => setValue(event.target.value)}
							/>
						</HStack>
						<HStack width='100%'
							paddingRight='0.5rem'
							marginBottom='1rem'>
							<Button onMouseDown={dec}
								onMouseUp={stop}
								onMouseLeave={stop}
							>-</Button>
							<Button onMouseDown={inc}
								onMouseUp={stop}
								onMouseLeave={stop}
							>+</Button>
							<Button
								onClick={() => {
									if (!wallet.account) {
										toast(walletNotConnected)
										return
									}
									const provider = new ethers.providers.Web3Provider(wallet.ethereum)
									estimateGasCost(
										defaults.network.contract.LGE, LGEAbi, 'addLiquidity',
										{ value: ethers.utils.parseEther('0.1') },
										 provider,
									).then(c => {
										provider.getGasPrice()
											.then(p => {
												provider.getBalance(wallet.account)
													.then(b => {
														setValue(
															Math.floor(
																Number(
																	ethers.utils.formatEther(b.sub(c.mul(p)))) * 100000) / 100000,
														)
													})
											})
									})
								}}
							>Max</Button>
							<Button flex='1'
								rightIcon={arrowIcon}
								loadingText='Depositing'
								isLoading={working}
								onClick={() => {
									if (!wallet.account) {
										toast(walletNotConnected)
										return
									}
									if (!value) {
										toast(amountOfEthNotEntered)
										return
									}
									const provider = new ethers.providers.Web3Provider(wallet.ethereum)
									setWorking(true)
									lgeAddLiquidity(ethers.utils.parseEther(String(value)), provider)
										.then(() => {
											setWorking(false)
											toast(successfulDeposit)
										})
										.catch((err) => {
											if(err.code === 'INSUFFICIENT_FUNDS') {
												setWorking(false)
												console.log('Insufficient balance: Your account balance is insufficient.')
												toast(insufficientBalance)
											}
											else if(err.code === 4001) {
												setWorking(false)
												console.log('Transaction rejected: You have decided to reject the transaction.')
												toast(rejected)
											}
											else {
												setWorking(false)
												console.log('Error code is:' + err.code)
												console.log('Error:' + err)
												toast(failed)
											}
										})
								}}
							>
							Deposit
							</Button>
						</HStack>
					</Flex>
				</AccordionPanel>
			</AccordionItem>
		</Accordion>
	)
}

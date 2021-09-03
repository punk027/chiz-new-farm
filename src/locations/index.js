import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import { PoolList } from '../components/PoolList'
import { LineStraight } from '../components/LineStraight'

const Index = () => {

	return (
		<>
			<Heading as='div' minH='112.7px'>
				<Box as='span' pl='9px'>Overview</Box>
				<LineStraight/>
			</Heading>
			<PoolList pos='realtive' zIndex='2'/>
		</>
	)
}

export default Index

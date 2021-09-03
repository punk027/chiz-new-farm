import React from 'react'
import { Image } from '@chakra-ui/react'

export const LineSlant = (props) => {

	// eslint-disable-next-line quotes
	const primary = "data:image/svg+xml,%3Csvg data-name='Layer 1' version='1.1' viewBox='0 0 600.94 47.009' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23ace4f9;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='m0.79502 43.461c47.78-1.91 95.65-3.28 143.4-6 50.69-2.89 100.32-12.41 150.61-18.52 51.16-6.21 102.3-11.61 153.88-11.25l78.29 0.55c24.91 0.18 49.24 4.51 73.16-4.5 0.67-0.25 1.14 0.85 0.49 1.14-36.07 16.42-83.34 8.93-122 9.2-55.52 0.4-109.66 4.4-164.82 10.68-50.4 5.73-100.2 15.13-150.78 19.28-54.19 4.44-108 3.14-162.24 1a0.79002 0.79002 0 0 1 0.01-1.58z'/%3E%3Cpath class='cls-1' d='m24.365 22.571c58.61-7 118.12-9 177-14 62.33-5.37 124.16-10 186.78-8.16a0.63 0.63 0 0 1 0 1.25c-59.11 2.39-118.15 8.83-177 15-61.29 6.45-125.18 16.05-186.79 9.34a1.72 1.72 0 0 1 0.01-3.43z'/%3E%3C/svg%3E"
	return (
		<Image
			src={primary}
			maxW='270px'
			p='0.5rem 0'
			mb='2rem'
			{...props}
		/>
	)
}

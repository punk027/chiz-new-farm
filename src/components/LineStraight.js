import React from 'react'
import { Image } from '@chakra-ui/react'

export const LineStraight = (props) => {

	// eslint-disable-next-line quotes
	const primary = "data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 571.16 45.491' xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle type='text/css'%3E.st0%7Bfill:%23FAAF5E;%7D .st1%7Bfill:%236B3835;%7D .st2%7Bfill:%23FFDE55;%7D .st3%7Bfill:%23EBFFFF;%7D .st4%7Bfill:%23FCE9C8;%7D .st5%7Bfill:%2398DEF9;%7D .st6%7Bfill:%23FFFFFF;%7D .st7%7Bfill:%23673732;%7D .st8%7Bfill:%23FAD996;%7D .st9%7Bfill:%23FFF75C;%7D .st10%7Bfill:%23EDD5B2;%7D .st11%7Bfill:%23ACE4F9;%7D .st12%7Bfill:%23B1E5F9;%7D .st13%7Bfill:%23F4FFFF;%7D .st14%7Bfill:%23D4FFFF;%7D .st15%7Bfill:%23D4FFFE;%7D .st16%7Bfill:%23D9F4FF;%7D%3C/style%3E%3Cg transform='translate(-53.307 -150.1)'%3E%3Cpath class='st11' d='m56.65 150.61c96.38-2.15 192.9 3.09 289.3 4.62 91.2 1.46 189.3-8.96 277.74 16.92 1.36 0.4 0.79 2.35-0.58 2.08-89.93-17.59-185.97-6.49-277.17-7.47-96.39-1.04-193.21-1.58-289.3-9.32-4.39-0.36-4.5-6.73 0.01-6.83z'/%3E%3Cpath class='st11' d='m187.76 189.23c66.86-9.22 141.65-20.1 207 1.73 1.47 0.49 1.32 3.03-0.39 2.82-68.97-8.31-136.78 2.19-205.74 1.8-3.58-0.01-4.62-5.83-0.87-6.35z'/%3E%3C/g%3E%3C/svg%3E"
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

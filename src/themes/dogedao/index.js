import { mode } from '@chakra-ui/theme-tools'
import fonts from './fonts'
import typography from './typography'
import colors from './colors'
import badge from './badge'
import button from './button'
import tooltip from './tooltip'
import input from './input'
import numberInput from './numberinput'
import select from './select'
import menuitem from './menuitem'
import link from './link'
import { extendTheme } from '@chakra-ui/react'
import spinner from './spinner'

const overrides = {
	config: {
		useSystemColorMode: false,
		initialColorMode: 'light',
	},
	styles: {
		global: props => ({
			body: {
				fontSize: '1em',
				fontWeight: 'normal',
				color: 'primary.opaque',
				bg: mode('#ffffff', '#ffffff')(props),
			},
			'input::placeholder': {
				color: '#000',
			},
			'.chakra-alert button:focus': {
				boxShadow: 'none',
			},
			'.chakra-toast__inner .chakra-alert': {
				alignItems: 'center',
				borderRadius: '21px',
				paddingRight: '1rem',
				border: '1px solid #0000002b',
			},
			'.chakra-toast__inner .chakra-alert button': {
				position: 'initial',
				fontSize: '12px',
				marginLeft: '20px',
			},
			'.chakra-toast__inner .chakra-alert .chakra-alert__icon': {
				width: '36px',
				height: '36px',
			},
			h1: {
				textTransform: 'capitalize',
				fontWeight: 'bold',
				margin: '0 0 1rem',
			},
			h2: {
				margin: '0 0 1.5rem',
			},
			h3: {
				margin: '0 0 1rem',
			},
			h4: {
				margin: '0 0 0.5rem',
			},
			hr: {
				borderColor: '#98def9',
				borderWidth: '10px',
				borderRadius: '5px',
			},
			'img[src=\'\']': {
				opacity: '0',
			},
			'img:not([src])': {
				opacity: '0',
			},
		}),
	},
	fonts: fonts,
	textStyles: typography,
	colors: colors,
	components: {
		Button: button,
		Input: input,
		NumberInput: numberInput,
		Badge: badge,
		Tooltip: tooltip,
		Select: select,
		MenuItem: menuitem,
		Link: link,
		Spinner: spinner,
	},
}

export default extendTheme(overrides)

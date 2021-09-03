export default {
	baseStyle: {
		fontFamily: 'Body',
		lineHeight: '0px',
		borderRadius: '12px',
		_focus: {
			boxShadow: 'none',
		},
	},
	variants: {
		solid: () => ({
			color: 'primary.opaque',
		}),
		outline: () => ({
			color: 'primary.opaque',
			bg: '#fff',
			borderColor: 'primary.supertransparent',
			_hover: {
				borderColor: 'primary.opaque',
				bg: 'white',
			},
		}),
		ghost: () => ({
			color: 'primary.opaque',
			_hover: {
				bg: 'transparent',
				color: 'primary.semitransparent',
			},
			_active: {
				bg: 'transparent',
			},
		}),
	},
}

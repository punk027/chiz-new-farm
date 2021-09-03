export default {
	variants: {
		filled: (props) => ({
			field: {
				color: 'primary.opaque',
				bg: props.colorMode === 'red',
				_focus: {
					bg: props.colorMode === 'dark' ? 'white' : 'white',
				},
			},
		}),
	},
}

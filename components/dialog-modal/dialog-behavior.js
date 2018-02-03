export default Behavior({
	properties: {
		show: {
			type: Boolean,
			value: false
		},
		zIndex: {
			type: Number,
			value: 3
		},
		animate: {
			type: Boolean,
			value: true
		},
		message: {
			type: String,
			value: ''
		},
	},
	methods: {
		show() {
			this.setData({
				show: true
			})
			this.triggerEvent('show')
			return this
		},
		close() {
			this.setData({
				show: false
			})
			this.triggerEvent('close')
			return this
		},
		message(message) {
			this.setData({
				message
			})
			return this
		},
		animate() {
			this.setData({
				animate: true
			})
			return this
		}
	}
})



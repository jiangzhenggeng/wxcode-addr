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
		}
	},
	methods: {
		show() {
			this.setData({
				show: true
			})
			this.triggerEvent('show')
		},
		close() {
			this.setData({
				show: false
			})
			this.triggerEvent('close')
		}
	}
})



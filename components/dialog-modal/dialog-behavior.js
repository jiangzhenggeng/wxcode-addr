import zIndexMarge from "./z-index-marge";

export default Behavior({
	properties: {
		show: {
			type: Boolean,
			value: false,
			observer(newVal) {
				if (newVal) {
					this.setData({
						zIndex: zIndexMarge()
					})
				}
			}
		},
		zIndex: {
			type: Number,
			value: zIndexMarge()
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



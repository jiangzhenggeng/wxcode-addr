Component({
	properties: {
		show: {
			type: Boolean,
			value: false,
			observer: function (newVal) {
				if (newVal) {
					setTimeout(() => {
						this.setData({
							show: false
						})
					}, this.data.time)
				}
			}
		},
		message: {
			type: String,
			value: ''
		},
		time: {
			type: Number,
			value: 5000
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
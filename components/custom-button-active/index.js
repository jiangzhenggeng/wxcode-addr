Component({
	properties: {
		time: {
			type: Number,
			value: 300
		},
		disable: {
			type: Boolean,
			value: false
		}
	},
	methods: {
		click(e) {
			if (this.data.disable) return
			setTimeout(() => {
				this.triggerEvent('click', e)
			}, this.data.time)
		}
	}
})

Component({
	behaviors: ['wx://form-field'],
	properties: {
		value: {
			type: Boolean,
			value: false
		}
	},
	methods: {
		switchEvent() {
			let value = !this.data.value
			this.setData({
				value
			})
			this.triggerEvent('switch-change', value)
		}
	}
})
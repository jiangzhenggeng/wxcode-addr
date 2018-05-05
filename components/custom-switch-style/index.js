Component({
	behaviors: ['wx://form-field'],
	properties: {
		value: {
			type: Object,
			value: {}
		},
		label: {
			type: String,
			value: 'label'
		},
		key: {
			type: String,
			value: ''
		},
		disable: {
			type: Boolean,
			value: false
		}
	},
	methods: {
		switchEvent() {
			if (this.data.disable) return
			let value = this.data.value
			let select = !(value || {}).select
			let label = this.data.label
			let key = this.data.key
			this.setData({
				value: {
					...value,
					select
				}
			}, () => {
				this.triggerEvent('switch-change', {
					value: this.data.value,
					key,
					label
				})
			})

		}
	}
})
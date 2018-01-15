Component({
	properties: {
		className: {
			type: String,
			value: 'button',
			observer: function (newVal, oldVal) {
				var newValArray = new Set((newVal + ' ' + oldVal).split(/\s+/))
				var className = []
				for (let i of newValArray) {
					className.push(i)
				}
				this.setData({
					className: className.join(' ')
				})
			}
		}
	},
	methods: {
		click(e) {
			this.triggerEvent('click', e)
		}
	}
})

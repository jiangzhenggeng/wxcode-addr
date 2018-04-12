Component({
	properties: {
		url: {
			type: String,
			value: '',
		},
		type: {
			type: String,
			value: '',
		},
		openType: {
			type: String,
			value: '',
		},
		isOpen: {
			type: Boolean,
			value: true,
		}
	},
	methods: {
		click() {
			let type = this.data.type || this.data.openType || 'navigate'
			this.triggerEvent('click', {
				url: this.data.url || '',
				type: type
			})
			if (!this.data.isOpen || !this.data.url) return

			let toFn = wx.navigateTo
			switch (type) {
				case 'navigate':
					toFn = wx.navigateTo
					break
				case 'navigateTo':
					toFn = wx.navigateTo
					break
				case 'redirect':
					toFn = wx.redirectTo
					break
				case 'redirectTo':
					toFn = wx.redirectTo
					break
				case 'switchTab':
					toFn = wx.switchTab
					break
				case 'reLaunch':
					toFn = wx.reLaunch
					break
				case 'navigateBack':
					toFn = wx.navigateBack
					break
				default:
					toFn = wx.navigateTo
			}
			setTimeout(() => {
				toFn({
					url: this.data.url
				})
			}, 150)
		}
	}
})
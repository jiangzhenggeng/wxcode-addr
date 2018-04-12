import zIndexMarge from '../dialog-modal/z-index-marge'

Component({
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
			value: zIndexMarge(),
		}
	},
	data: {
		isIponeX: /iPhone\s+X/i.test(wx.getSystemInfoSync().model)
	},
	methods: {
		show() {
			this.setData({
				show: true
			})
			return this
		},
		close() {
			this.setData({
				show: false
			})
			return this
		}
	}
})





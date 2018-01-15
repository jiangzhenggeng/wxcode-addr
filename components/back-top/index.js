Component({
	properties: {
		show: {
			type: Boolean,
			value: true
		},
		customStyle: {
			type: String,
			value: ''
		}
	},
	methods: {
		clickScrollTop() {
			wx.pageScrollTo({
				scrollTop: 0,
				animate: false
			})
			this.triggerEvent('click')
		}
	}
})
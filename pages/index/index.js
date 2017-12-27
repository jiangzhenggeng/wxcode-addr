Page({
	data: {
		address: {},
		showArea: false,
	},
	openArea() {
		this.setData({
			showArea: true
		})
	},
	closeArea() {
		this.setData({
			showArea: false
		})
	},
	selectArea(e) {
		this.setData({
			address: e.detail
		})
	}
})

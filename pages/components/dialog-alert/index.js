Page({
	//基础使用
	showDialogAlertClickBase() {
		this.selectComponent('#dialog-alert').show()
	},
	//自定义按钮
	showDialogAlertClickCustomBtn() {
		this.selectComponent('#dialog-alert-custom-btn').show()
	},
	showDialogAlertClickFreeBtn() {
		this.selectComponent('#dialog-alert-free-btn')
			.message('哈哈哈哈')
			.okText('ok')
			.cancelText('cancel').show()
	},

	cancel() {
		console.log('cancel')
	},
	ok() {
		console.log('ok')
	},
	cancelCustom() {
		console.log('cancel')
		this.selectComponent('#dialog-alert-custom-btn').close()
	},
	okCustom() {
		console.log('ok')
		this.selectComponent('#dialog-alert-custom-btn').close()
	}
})

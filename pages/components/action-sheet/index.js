Page({
	onReady() {
		this.showActionSheetComponent = this.selectComponent('#show-action-sheet')
		this.dialogAlertComponent = this.selectComponent('#dialog-alert')
			.okText('ok')
			.cancelText('cancel')
			.cancelStyle('color:red')
			.setCallBackOk((alert) => {
				this.dialogToast.message('你点击ok按钮').show()
			})
			.setCallBackCancel((alert) => {
				this.dialogToast.message('你点击cancel按钮').show()
			})
		this.dialogToast = this.selectComponent('#dialog-toast')

	},
	showActionSheet() {
		this.showActionSheetComponent.show()
	},
	bind1() {
		this.dialogAlertComponent.message('点击在线客服').show()
		this.showActionSheetComponent.close()
	},
	bind2() {
		this.dialogAlertComponent.message('拨打400客服热线').show()
		this.showActionSheetComponent.close()
	}
})

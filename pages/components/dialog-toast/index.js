Page({

	onReady() {
		this.dialogAlert = this.selectComponent('#dialog-alert')
			.okText('确认')

		this.dialogToastApi = this.selectComponent('#dialog-toast-api')
			.time(2000)
			.size('larg')
			.position('center')
			.icon('loading')
	},
	//基础使用
	dialogToastBaseClick() {
		this.setData({
			dialogToastBaseStatus: true
		})
	},
	dialogToastApiClick() {
		this.dialogToastApi
			.message('API方式调用')
			.callback((toast) => {
				this.dialogAlert.message('toast回调').show()
			}, true)
			.show()
	},
	dialogToastApiClickBottom() {
		this.dialogToastApi.message('显示在底部').position('bottom').show()
	},
	dialogToastApiClickCenter() {
		this.dialogToastApi.message('显示在中间').position('center').show()
	},
	dialogToastApiClickTop() {
		this.dialogToastApi.message('显示在底顶部').position('top').show()
	},
	dialogToastApiClickLoading() {
		this.dialogToastApi.message('Loading图标').icon('loading').position('center').show()
	},
	dialogToastApiClickWarn() {
		this.dialogToastApi.message('Warn图标').icon('warn').position('center').show()
	},
	dialogToastApiClickNetwork() {
		this.dialogToastApi.message('自定义网路图标')
			.icon('https://wx.qlogo.cn/mmopen/vi_32/laCMFX1ZRVErUre2qicIvQvSrf9HRfLItic7vOC2FSk7esjCyBZYd9YaglVT7rZf97ibytPlrZsgrgRuzNMa89RwA/0')
			.position('center').show()
	},
	dialogToastApiClickSouck() {
		this.dialogToastApi.message('不可以点击穿透')
			.icon('loading')
			.position('center')
			.mask(true)
			.callback((toast) => {
				toast.mask(false)
			}, true)
			.show()
	}

})

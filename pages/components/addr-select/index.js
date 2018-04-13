Page({
	data: {
		//使用名称匹配
		address2: [
			{
				name: '贵州'
			},
			{
				name: '遵义市'
			},
			{
				name: '遵义县'
			}
		],
		//使用id精确匹配
		addressId: [
			{
				name: '贵州',
				id: 2800
			},
			{
				name: '遵义市',
				id: 2820
			},
			{
				name: '遵义县',
				id: 2823
			}
		]
	},
	selectArea(e) {
		console.log(e.detail)
		this.setData({
			address: e.detail
		})
	},
	selectArea2(e) {
		console.log(e.detail)
		this.setData({
			address2: e.detail
		})
	},
	selectAreaId(e) {
		console.log(e.detail)
		this.setData({
			addressId: e.detail
		})
	},
	selectAreaApi() {
		this.selectComponent('#addr-select-api')
		//设置选择回调函数
			.callback((areaSelect, component) => {
				console.log(areaSelect)
				this.setData({
					addressApi: areaSelect
				})
				this.selectComponent('#dialog-toast')
					.message('3秒后自动关闭地址选择组件').show()

				setTimeout(() => {
					component.close()
				}, 3000)
			}, true/*回调结束是否清除回调函数*/)
			//设置默认选择
			.setAddrSelect(this.data.addressApi || [{name: '贵州'}])
			//设置了autoClose不自动关闭组件 回调里调用 component.close()可关闭组件
			.autoClose(false)
			.show()
	}
})

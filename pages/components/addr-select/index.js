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
	}
})

Page({
	data: {},
	onShow() {
		const buffer = new ArrayBuffer(1)
		const dataView = new DataView(buffer)
		dataView.setUint8(0, 0)

		wx.startHCE({
			success: function(res) {
				console.log(res)
				wx.onHCEMessage({
					success: function(res) {
						console.log(res)
						if (res.messageType === 1) {
							//wx.sendHCEMessage({data: buffer})
						}
					}
				})
			},
			fail:function(res) {
				console.log(res)
			}
		})

	}
})

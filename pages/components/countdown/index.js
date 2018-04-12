const randomTime = function () {
	return Math.ceil(Math.random() * 60)
}

Page({
	onShow() {
		let countdownList = new Array(20).fill(0).map(() => {
			return randomTime()
		})
		this.setData({
			countdownList
		})
	},
	end(e) {
		console.log('end', e)
	},
	run(e) {
		// console.log('run',e)
	},
	runGroup(e) {
		console.log('倒计时运行中', e)
	},
	endGroup(e) {
		console.log('所有倒计时结束啦', e)
	}
})

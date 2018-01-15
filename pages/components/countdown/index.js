const randomTime = function () {
	return Math.ceil(Math.random() * 300)
}

Page({
	onShow(){
		let countdownList = new Array(20).fill(0).map(()=>{
			return randomTime()
		})
		this.setData({
			countdownList
		})
	},
	end(e){
		console.log('end',e)
	},
	run(e){
		// console.log('run',e)
	}
})

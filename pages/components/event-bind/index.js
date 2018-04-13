import {Provider} from '../../../common/eventProvider'

Page(Provider({
	onReady() {
		let self = this
		this.$on('readyEventCustom', function () {
			self.setData({
				message3: '我是页面上的readyEventCustom',
				arguments3: '参数是' + JSON.stringify(arguments),
			})
		}).$once('readyEventCustomOnce', function () {
			self.setData({
				message4: '我是页面上的readyEventCustomOnce',
				arguments4: '参数是' + JSON.stringify(arguments),
			})
		})
	},
	onPageScroll() {
		this.setData({
			message: '我是页面上的onPageScroll',
			arguments: '参数是' + JSON.stringify(arguments),
		})
	},
	onShareAppMessage() {
		this.setData({
			message2: '我是页面上的onShareAppMessage',
			arguments2: '参数是' + JSON.stringify(arguments),
		})
	}

})({
	//在这里设置要监听的方法名
	//在子组件里绑定事件监听  ===> 去组件 ../event-bind-components/component-a
	//查看事件绑定

	onPageScroll: true,
	onShareAppMessage: true
}))

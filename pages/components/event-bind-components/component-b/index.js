import {getCurrPage} from '../../../../common/eventProvider'

Component({
	ready() {
		let component = this
		getCurrPage().$on('onPageScroll', function () {
			component.setData({
				message: '我是component-b，我监听到我所在页面的onPageScroll事件了',
				arguments: '参数是' + JSON.stringify(arguments),
			})
		}).$on('onShareAppMessage', function () {
			component.setData({
				message2: '我是component-b，我监听到我所在页面的onShareAppMessage事件了',
				arguments2: '参数是' + JSON.stringify(arguments),
			})
		})
	}
})





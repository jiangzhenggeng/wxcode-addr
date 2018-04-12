/**
 * 图片预加载组件
 *
 * @author HuiminLiu
 */

Component({
	properties: {
		src: {
			type: String,
			value: ''
		},
		key: {
			type: String,
			value: ''
		},
		type: {
			type: String,
			value: '1'
		}
	},
	methods: {
		imgOnLoad(ev) {
			let src = this.data.src
			let key = this.data.key
			let width = ev.detail.width
			let height = ev.detail.height
			this.setData({
				imageLoading: true
			})
			this.triggerEvent('success', {key, src, width, height})
		},
		imgOnLoadError() {
			let src = this.data.src
			let key = this.data.key
			this.triggerEvent('error', {key, src})
		}
	}
})
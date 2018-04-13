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
		},
		debug: {
			type: Number,
			value: 0
		}
	},
	methods: {
		imgOnLoad(ev) {
			let src = this.data.src
			let key = this.data.key
			let width = ev.detail.width
			let height = ev.detail.height
			if (this.data.debug > 0) {
				setTimeout(() => {
					this.setData({
						imageLoading: true
					})
					this.triggerEvent('success', {key, src, width, height})
				}, this.data.debug)
			} else {
				this.setData({
					imageLoading: true
				})
				this.triggerEvent('success', {key, src, width, height})
			}
		},
		imgOnLoadError() {
			let src = this.data.src
			let key = this.data.key
			this.setData({
				imageLoading: false
			})
			this.triggerEvent('error', {key, src})
		}
	}
})
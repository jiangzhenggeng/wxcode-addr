import zIndexMarge from "../dialog-modal/z-index-marge";

Component({
	properties: {
		show: {
			type: Boolean,
			value: false,
			observer(newVal) {
				if (newVal) {
					this._setCallBackHandel()
				}
			}
		},
		zIndex: {
			type: Number,
			value: zIndexMarge()
		},
		message: {
			type: String,
			value: ''
		},
		time: {
			type: Number,
			value: 3000
		},
		size: {
			type: String,
			value: 'larg'
		},
		position: {
			type: String,
			value: 'center'
		},
		// loading/warn或者网络路径
		icon: {
			type: String,
			value: 'http://cdn.jiguo.com/static/WeiXin/images/components/dialog-toast/icon-warn.svg',
			observer() {
				this._observerIcon(...arguments)
			}
		}
	},
	methods: {
		_observerIcon(icon) {
			if (!/^https?:\/\//i.test(icon) && icon) {
				icon = 'http://cdn.jiguo.com/static/WeiXin/images/components/dialog-toast/icon-' + icon + '.svg'
			}
			this.setData({
				icon
			})
		},
		_setCallBackHandel() {
			this.setData({
				zIndex: zIndexMarge()
			})
			clearTimeout(this.setTimeoutHandler)
			this.setTimeoutHandler = setTimeout(() => {
				this.setData({
					show: false
				}, () => {
					this._callback && this._callback(this)
					if (this._callbackClear) {
						this._callback = null
					}
				})
			}, this.data.time)
		},
		show() {
			this.setData({
				show: true
			})
			this._setCallBackHandel()
			this.triggerEvent('show')
			return this
		},
		close() {
			this.setData({
				show: false
			})
			this.triggerEvent('close')
			return this
		},
		message(message) {
			this.setData({
				message
			})
			this.data.message = message
			return this
		},
		time(time) {
			this.setData({
				time
			})
			this.data.time = time
			return this
		},
		size(size) {
			this.setData({
				size
			})
			this.data.size = size
			return this
		},
		icon(icon) {
			this._observerIcon(icon, this.data.icon)
			this.data.icon = icon
			return this
		},
		mask(mask) {
			this.setData({
				mask
			})
			this.data.mask = mask
			return this
		},
		position(position) {
			this.setData({
				position
			})
			this.data.position = position
			return this
		},
		callback(callback, clear = false) {
			this._callback = callback || function () {

			}
			this._callbackClear = !!clear
			return this
		}
	}
})
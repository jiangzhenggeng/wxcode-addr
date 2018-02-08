Component({
	properties: {
		show: {
			type: Boolean,
			value: false,
			observer(newVal) {
				if (newVal) {
					this.setTimeoutHandler && clearTimeout(this.setTimeoutHandler)
					this.setTimeoutHandler = setTimeout(() => {
						this.setData({
							show: false
						}, () => {
							this._callback && this._callback.call(this)
							this._callback && delete this._callback
						})
					}, this.data.time)
				}
			}
		},
		message: {
			type: String,
			value: ''
		},
		time: {
			type: Number,
			value: 5000
		},
		size: {
			type: String,
			value: 'small'
		},
		position: {
			type: String,
			value: 'bottom'
		}
	},
	methods: {
		show() {
			this.setData({
				show: true
			})
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
			this.setData({
				icon
			})
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
		callback(callback) {
			this._callback = callback || function () {

			}
			return this
		}
	}
})
Component({
	properties: {
		show: {
			type: Boolean,
			value: false,
			observer: function (newVal) {
				if (newVal) {
					setTimeout(() => {
						this.setData({
							show: false
						},()=>{
							this._callBack && this._callBack.call(this)
							this._callBack && delete this._callBack
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
			return this
		},
		time(time) {
			this.setData({
				time
			})
			return this
		},
		position(position) {
			this.setData({
				position
			})
			return this
		},
		callBack(callBack){
			this._callBack = callBack || function () {
				
			}
			return this
		}
	}
})
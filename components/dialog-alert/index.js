import DialogBehavios from '../dialog-modal/dialog-behavior'

let noop = function () {
}
let isFunction = function (fn) {
	return typeof fn === 'function'
}


Component({
	behaviors: [DialogBehavios],
	options: {
		multipleSlots: true
	},
	properties: {
		buttonOkText: {
			type: String,
			value: ''
		},
		buttonCancelText: {
			type: String,
			value: ''
		},
		buttonCancelStyle: {
			type: String,
			value: ''
		},
		buttonOkStyle: {
			type: String,
			value: ''
		}
	},
	methods: {
		_tapCancel() {
			this.triggerEvent('cancel')
			isFunction(this.setCallBackCancelFunction) &&
			this.setCallBackCancelFunction(this)
			this.close()
		},
		_tapOk() {
			this.triggerEvent('ok')
			isFunction(this.setCallBackOkFunction) &&
			this.setCallBackOkFunction(this)
			this.close()
		},
		setCallBackOk(callback) {
			this.setCallBackOkFunction = callback || noop
			return this
		},
		setCallBackCancel(callback) {
			this.setCallBackCancelFunction = callback || noop
			return this
		},
		okText(buttonOkText) {
			this.setData({
				buttonOkText
			})
			return this
		},
		okStyle(buttonOkStyle) {
			this.setData({
				buttonOkStyle
			})
			return this
		},
		cancelText(buttonCancelText) {
			this.setData({
				buttonCancelText
			})
			return this
		},
		cancelStyle(buttonCancelStyle) {
			this.setData({
				buttonCancelStyle
			})
			return this
		}
	}
})

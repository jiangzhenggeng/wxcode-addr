import DialogBehavios from '../dialog-modal/dialog-behavior'

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
			this.close()
		},
		_tapOk() {
			this.triggerEvent('ok')
			this.close()
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

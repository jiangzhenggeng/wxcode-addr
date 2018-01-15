import DialogBehavios from '../dialog-modal/dialog-behavior'

Component({
	behaviors: [DialogBehavios],
	options: {
		multipleSlots: true
	},
	properties: {
		message: {
			type: String,
			value: ''
		},
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
		}
	}
})

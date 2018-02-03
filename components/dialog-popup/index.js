import DialogBehavios from '../dialog-modal/dialog-behavior'

Component({
	behaviors: [DialogBehavios],
	properties: {
		//是否有关闭按钮
		close: {
			type: Boolean,
			value: true,
		},
		customStyle: {
			type: String,
			value: '',
		}
	},
	methods: {
		_closeDialogPopup() {
			this.close()
			this.triggerEvent('close')
		}
	}
})
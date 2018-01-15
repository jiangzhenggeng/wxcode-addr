import DialogBehavios from 'dialog-behavior'

Component({
	behaviors: [DialogBehavios],
	methods: {
		_touchmove(e) {
			this.triggerEvent('touchmove', e)
		}
	}
})
Component({
	properties: {
		show: {
			type: Boolean,
			value: true,
			observer: function (newVal) {

			}
		},
		background: {
			type: Boolean,
			value: false,
		},
		custom: {
			type: Boolean,
			value: false,
		},
		fromidUpload: {
			type: Boolean,
			value: true,
		}
	}
})
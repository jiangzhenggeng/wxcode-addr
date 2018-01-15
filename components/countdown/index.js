Component({
	properties: {
		endtime: {
			type: String
		},
		format: {
			type: String,
			value: '%dd天%hh小时%ii分钟%ss秒'
		},
		key: {
			type: String,
			value: ''
		},
		interval: {
			type: Number,
			value: 1000
		}
	},
	relations: {
		'../countdown-group/index': {
			type: 'ancestor'
		}
	},
	methods: {
		_parseTime() {
			if (this._endtime) {
				return this._endtime
			}
			let endtime = this.data.endtime
			let _end = new Date().getTime()

			if (endtime.indexOf(' ') > -1) {
				_end = new Date(endtime).getTime()
			} else if (endtime.length <= 9) {
				let newTime = new Date().getTime()
				_end = newTime + endtime * 1000
			} else {
				_end = endtime
			}
			this._endtime = _end
			return this._endtime
		},
		run() {
			var newTime = new Date().getTime()
			var endTime = this._parseTime()

			var timeNumber = Math.ceil((endTime - newTime) / 1000)
			var result = timeNumber >= 0 ? true : false

			let newFormatTime = this._formatTime(timeNumber)

			this.setData({
				time: this._formatTime(timeNumber)
			})

			let rData = {
				key: this.data.key,
				endTime,
				newFormatTime,
				format: this.changeFormat,
				time: timeNumber,
				run: true,
				end: false
			}

			this.triggerEvent('run', rData)
			if (!result) {
				rData.end = true
				this.triggerEvent('end', rData)
			}
			return result
		},
		_formatTime(intDiff) {
			var day = 0
			var hour = 0
			var minute = 0
			var second = 0

			if (intDiff > 0) {
				day = Math.floor(intDiff / (60 * 60 * 24))
				hour = Math.floor(intDiff / (60 * 60)) - (day * 24)
				minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60)
				second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60)
			}
			if (minute <= 9) minute = '' + minute
			if (second <= 9) second = '' + second

			let changeFormat = this.data.format

			// if (day > 0) {
			// 	changeFormat = '%dd天后'
			// }
			// else if (hour > 0) {
			// 	changeFormat = '%hh小时后'
			// } else if (intDiff > 180) {
			// 	changeFormat = '%ii分钟后'
			// } else {
			// 	changeFormat = '%ss秒后'
			// }

			this.changeFormat = changeFormat

			return this.changeFormat
				.replace('%dd', day)
				.replace('%hh', hour)
				.replace('%ii', minute)
				.replace('%ss', second)
		}
	}
})
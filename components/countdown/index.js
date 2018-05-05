import ParseTime from './parse-time'
import FormatTime from './format-time'

Component({
	properties: {
		endtime: {
			type: String
		},
		format: {
			type: String,
			value: '%dd天%hh小时%ii分%ss秒'
		},
		key: {
			type: String,
			value: ''
		},
		interval: {
			type: Number,
			value: 1000
		},
		formatType: {
			type: Number,
			value: 1
		},
		return: {
			type: Boolean,
			value: true
		}
	},
	relations: {
		'../countdown-group/index': {
			type: 'ancestor',
			linked(target) {
				target.add(this)
			},
			unlinked(target) {
				target.delete(this)
			}
		}
	},
	methods: {
		run() {
			var newTime = new Date().getTime()
			var endTime = this._parseTime()

			var timeNumber = Math.round((endTime - newTime) / 1000)
			var _timeNumber = timeNumber >= 0 ? timeNumber : 0

			let countdownTime = this._formatTime(_timeNumber)
			this.setData({
				countdownTime
			})

			let rData = {
				key: this.data.key,
				endTime,
				countdownTime,
				format: this.changeFormat,
				time: timeNumber,
				_time: _timeNumber,
				run: true,
				end: false
			}
			if (timeNumber >= 0) {
				rData.run = true
				rData.end = false
				this.triggerEvent('run', rData)
				this.countdown_run = true
				return true
			} else {
				rData.run = false
				rData.end = true
				this.triggerEvent('end', rData)
				this.countdown_run = false
				return false
			}
		},

		_parseTime() {
			if (this._endtime && this.countdown_run) {
				return this._endtime
			}
			this._endtime = ParseTime(this.data.endtime)
			this.countdown_run = true
			return this._endtime
		},
		_formatTime(intDiff) {
			let format_time = FormatTime(intDiff, 1)
			let day = format_time.day
			let hour = format_time.hour
			let minute = format_time.minute
			let second = format_time.second

			let changeFormat = this.data.format

			if (this.data.formatType == 1) {
				if (day > 0) {
					changeFormat = '%dd天后'
				} else if (hour > 0) {
					changeFormat = '%hh小时后'
				} else if (intDiff > 180) {
					changeFormat = '%ii分钟后'
				} else {
					changeFormat = '%ss秒后'
					second = intDiff
				}
			} else if (this.data.formatType == 2) {
				if (day > 0) {
					changeFormat = '%dd' + this.data.format.split('%dd').pop()
				} else if (hour > 0) {
					changeFormat = '%hh' + this.data.format.split('%hh').pop()
				} else if (minute > 0) {
					changeFormat = '%ii' + this.data.format.split('%ii').pop()
				} else {
					changeFormat = '%ss' + this.data.format.split('%ss').pop()
				}
			}

			this.changeFormat = changeFormat

			return this.changeFormat
				.replace('%dd', day)
				.replace('%hh', hour)
				.replace('%ii', minute)
				.replace('%ss', second)
		}
	}
})
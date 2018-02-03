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
			type: 'ancestor'
		}
	},
	methods: {
		run() {
			var newTime = new Date().getTime()
			var endTime = this._parseTime()

			var timeNumber = Math.floor((endTime - newTime) / 1000)
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
				return true
			} else {
				rData.run = false
				rData.end = true
				this.triggerEvent('end', rData)
				return false
			}
		},

		_parseTime() {
			if (this._endtime) {
				return this._endtime
			}
			this._endtime = ParseTime(this.data.endtime)
			return this._endtime
		},
		_formatTime(intDiff) {
			let format_time = FormatTime(intDiff)
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
					changeFormat = '%dd天%hh小时%ii分%ss秒'
				} else if (hour > 0) {
					changeFormat = '%hh小时%ii分%ss秒'
				} else if (minute > 0) {
					changeFormat = '%ii分%ss秒'
				} else {
					changeFormat = '%ss秒'
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
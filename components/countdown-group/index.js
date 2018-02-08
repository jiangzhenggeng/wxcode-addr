Component({
	properties: {
		interval: {
			type: Number,
			value: 1000
		}
	},
	relations: {
		'../countdown/index': {
			type: 'descendant',
			linked(target) {
				if (!this.countdownArray) {
					this.countdownArray = []
				}
				if (target.run.call(target)) {
					this.countdownArray.push(target)
					this.startAllBack()
				}
			},
			linkChanged() {
				this.countdownArray = this.getRelationNodes('../countdown/index')
			},
			unlinked() {
				this.countdownArray = this.getRelationNodes('../countdown/index')
				if (!this.countdownArray.length) {
					this.stopAllBack()
				}
			}
		}
	},
	detached() {
		this.countdownGroupRunStatus &&
		clearTimeout(this.countdownGroupRunStatus)
		this.countdownGroupRunStatus = false
	},
	methods: {
		startAllBack() {
			if (this.countdownGroupRunStatus) return
			this._runingAllCountdown()
		},
		stopAllBack() {
			this.countdownGroupRunStatus &&
			clearTimeout(this.countdownGroupRunStatus)
			this.countdownGroupRunStatus = false
		},
		_runingAllCountdown() {
			this.countdownGroupRunStatus = setTimeout(() => {
				this._runingLoop()
			}, this.data.interval)
		},
		_runingLoop() {
			this.countdownArray = this.countdownArray.filter((countdown) => {
				let result = countdown.run.call(countdown)
				return result
			})

			this.triggerEvent('run')
			if (this.countdownArray.length <= 0) {
				setTimeout(() => {
					this.stopAllBack()
					this.triggerEvent('end')
				}, this.data.interval)
			} else {
				this._runingAllCountdown()
			}
		}
	}
})
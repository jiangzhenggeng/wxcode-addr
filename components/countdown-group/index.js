Component({
	properties: {
		interval: {
			type: Number,
			value: 1000
		},
		start: {
			type: Boolean,
			value: true
		}
	},
	relations: {
		'../countdown/index': {
			type: 'descendant'
		}
	},
	detached() {
		this.stop()
	},
	methods: {
		add(target) {
			this.countdownArray = this.countdownArray || []
			this.countdownArray.push(target)
			if (this.data.start) {
				target.run.call(target)
				this.run()
			}
		},
		delete(target) {
			this.countdownArray = this.countdownArray || []
			let index = this.countdownArray.indexOf(target)
			if (index > -1) {
				this.countdownArray.splice(index, 1)
			}
		},
		run() {
			if (this.countdownGroupRunStatusFlage) return
			this.countdownGroupRunStatusFlage = true

			let runFunction = () => {
				let isEndLength = this.countdownArray.length
				this.countdownArray.forEach(countdown => {
					if (!countdown.run.call(countdown)) {
						isEndLength--
					}
				})

				if (isEndLength <= 0) {
					this.triggerEvent('end')
					this.stop()
				} else {
					this.triggerEvent('run')
					this.countdownGroupRunStatus = setTimeout(() => {
						runFunction()
					}, this.data.interval)
				}
			}
			runFunction()

		},
		stop() {
			clearTimeout(this.countdownGroupRunStatus)
			this.countdownGroupRunStatusFlage = false
		}
	}
})
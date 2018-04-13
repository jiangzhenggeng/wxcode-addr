import {on, off, once, emit} from './eventBase'

export function getCurrPage() {
	let pages = getCurrentPages()
	let currentPage = pages[pages.length - 1]
	return currentPage
}

export function getFunctionNoop(functionName) {
	return typeof functionName === 'function' ? functionName : function () {
	}
}

export function Provider(options) {

	return function (coustomOptions) {
		let onLoad = getFunctionNoop(options.onLoad)
		options.onLoad = function () {
			this.$on = on
			this.$off = off
			this.$once = once
			this.$emit = emit
			return onLoad.apply(this, arguments)
		}

		Object.keys(coustomOptions || {}).forEach((eventType) => {
			if (coustomOptions[eventType]) {
				let callBackFunction = getFunctionNoop(options[eventType])
				options[eventType] = function () {
					this.$emit(eventType, arguments)
					return callBackFunction.apply(this, arguments)
				}
			}
		})
		return options
	}
}









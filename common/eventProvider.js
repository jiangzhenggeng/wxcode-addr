import {on, off, once, emit} from './eventBase'
import {off as eventGloablOff} from './eventGloabl'

export function getCurrPage() {
	let pages = getCurrentPages()
	let currentPage = pages[pages.length - 1]
	return currentPage
}

export function getFunctionNoop(functionName) {
	return typeof functionName === 'function' ? functionName : function () {
	}
}

export const Provider = (options) => (coustomOptions) => {

	coustomOptions = Object.assign({
		onPageScroll: true
	}, coustomOptions || {})

	let onLoad = getFunctionNoop(options.onLoad)
	let onUnload = getFunctionNoop(options.onUnload)
	options.onLoad = function () {
		this.$on = on
		this.$off = off
		this.$once = once
		this.$emit = emit
		return onLoad.apply(this, arguments)
	}
	options.onUnload = function () {
		this.$off()
		return onUnload.apply(this, arguments)
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

export const AppProvider = (options) => () => {
	let onLaunch = getFunctionNoop(options.onLaunch)
	options.onLaunch = function () {
		eventGloablOff()
		return onLaunch.apply(this, arguments)
	}
	return options
}









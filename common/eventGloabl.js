let events = {}

export function on(eventType, callbackFunction, options = {}) {
	if (!eventType) return
	eventType.split(/\s+/g).forEach(item => {
		if (!events[item]) {
			events[item] = []
		}
		events[item].push({
			callback: callbackFunction,
			options
		})
	})
}

export function off(eventTypeStr) {
	if (eventTypeStr) {
		eventTypeStr.split(/\s+/g).forEach((eventType) => {
			events[eventType] = null
		})
	} else {
		events = {}
	}
}

export function emit(eventTypeStr, args) {
	if (!eventTypeStr) return null
	eventTypeStr.split(/\s+/g).forEach((eventType) => {
		(events[eventType] || []).forEach((callbackFunction) => {
			callbackFunction.callback.apply(this, [...args, callbackFunction.options, eventType])
		})
	})
}

export function once(eventType, callbackFunction, options = {}) {
	return on(eventType, function () {
		callbackFunction.apply(this, [...arguments, options, eventType])
		off(eventType)
	}, options)
}



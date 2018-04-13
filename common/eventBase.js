let evkey = '__custom_events__'

export function on(eventType, callbackFunction) {
	let events = this[evkey] ? this[evkey] : {}
	if (!events[eventType]) {
		events[eventType] = []
	}
	events[eventType].push(callbackFunction)
	this[evkey] = events
	return this
}

export function off(eventTypeStr) {
	let events = this[evkey] ? this[evkey] : {}
	if (eventTypeStr) {
		eventTypeStr.split(/\s+/g).forEach((eventType) => {
			events[eventType] = null
		})
	} else {
		events[eventType] = null
	}
	return this
}

export function emit(eventTypeStr, args) {
	if (!eventTypeStr) return this
	let events = this[evkey] ? this[evkey] : {}
	eventTypeStr.split(/\s+/g).forEach((eventType) => {
		(events[eventType] || []).forEach((callbackFunction) => {
			callbackFunction.apply(this, args)
		})
	})
	return this
}

export function once(eventType, callbackFunction) {
	return on.call(this, eventType, function () {
		callbackFunction.apply(this, arguments)
		off.call(this, eventType)
	})
}



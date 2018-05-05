let evkey = '__custom_events__'

export function on(eventType, callbackFunction) {
	let events = this[evkey] ? this[evkey] : {}
	if (!eventType) return
	eventType.split(/\s+/g).forEach(item => {
		if (!events[item]) {
			events[item] = []
		}
		events[item].push(callbackFunction)
	})

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
		events = null
	}
	return this
}

export function emit(eventTypeStr, args) {
	if (!eventTypeStr || !this[evkey]) return this
	let events = this[evkey] ? this[evkey] : {}
	eventTypeStr.split(/\s+/g).forEach((eventType) => {
		(events[eventType] || []).forEach((callbackFunction) => {
			if (args && args.length) {
				callbackFunction.apply(this, [...args, eventType])
			} else {
				callbackFunction.apply(this, [eventType])
			}
		})
	})
	return this
}

export function once(eventType, callbackFunction) {
	return on.call(this, eventType, function () {
		if (arguments.length) {
			callbackFunction.apply(this, [...arguments, eventType])
		} else {
			callbackFunction.apply(this, [eventType])
		}
		off.call(this, eventType)
	})
}



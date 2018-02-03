export default function parseTime(endtime) {
	let _end = new Date().getTime()
	let newTime = _end

	if (String(endtime).indexOf(' ') > -1) {
		_end = new Date(endtime).getTime()
	} else if (String(endtime).length <= 9) {
		_end = newTime + (endtime * 1000)
	} else {
		_end = endtime
	}
	return _end
}
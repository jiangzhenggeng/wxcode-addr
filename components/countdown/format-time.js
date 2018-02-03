export default function formatTime(intDiff) {
	var day = 0
	var hour = 0
	var minute = 0
	var second = 0

	if (intDiff >= 0) {
		day = Math.floor(intDiff / (60 * 60 * 24))
		hour = Math.floor(intDiff / (60 * 60)) - (day * 24)
		minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60)
		second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60)
	}

	return {
		day,
		hour,
		minute,
		second
	}
}
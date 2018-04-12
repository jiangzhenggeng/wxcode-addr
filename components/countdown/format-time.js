export default function formatTime(intDiff, mode = 1) {
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
	if (mode >= 2) {
		hour = hour < 10 ? '0' + hour : hour
		minute = minute < 10 ? '0' + minute : minute
		second = second < 10 ? '0' + second : second
	}
	if (mode >= 4) {
		day = day < 10 ? '0' + day : day
	}

	return {
		day,
		hour,
		minute,
		second
	}
}
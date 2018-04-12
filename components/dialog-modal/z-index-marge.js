let zIndex = 1
export default function (baseIndex = 100) {
	zIndex = baseIndex + zIndex++
	return zIndex
}
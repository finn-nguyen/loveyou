export const formatTwoDigit = (number) => {
	const numString = `${number}`
	if(numString.length < 2) {
		return `0${numString}`
	}
	return number
}
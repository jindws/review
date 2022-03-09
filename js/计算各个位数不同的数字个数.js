/**
 * @param {number} n
 * @return {number}
 */
const countNumbersWithUniqueDigits = function (n) {
	if (n === 0) return 1;
	if (n === 1) return 10;
	if (n > 10) n = 10;

	let sum = 10,
		temp = 9,
		i = 9;
	while (n - 1) {
		temp *= i--;
		sum += temp;
		n--;
	}
	return sum;
};
console.log(countNumbersWithUniqueDigits(4));

function main(str) {
	// Your code begins here;
	let countChar = 0;
	let textOutput = '';
	for (let i = 0; i < str.length; i++) {
		let currentChar = str.charAt(i);
		let nextChar = str.charAt(i + 1);
		countChar++;
		if (currentChar !== nextChar) {
			textOutput += `${countChar}${currentChar}`;
			countChar = 0;
			if (nextChar === '') {
				break;
			}
		}
	}
	return textOutput;
}
<<<<<<< HEAD
=======
//input: 'AAAABBBCCDAA'
//output: '4A3B2C1D2A'
module.exports = {
	main
};
>>>>>>> finish codekata day3

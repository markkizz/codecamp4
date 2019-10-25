function main(str) {
	// Your code begins here;
	let countChar = 0;
	let textOutput = '';
	for (let i = 0; i < str.length; i++) {
		let currentChar = str[i];
		let nextChar = str[i+1];
		countChar++;
		if (currentChar !== nextChar) {
			textOutput += `${countChar}${currentChar}`;
			countChar = 0;
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

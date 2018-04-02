// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
	let strArr = str.split(' ');
	let word = [];
	strArr.forEach((s)=>{
        let upperArr = s.split('');
		upperArr[0] = upperArr[0].toUpperCase();
		word.push(upperArr.join(''));
	});

	const returnStr = word.join(' ');
	return returnStr;
}

module.exports = capitalize;

// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


//basic version
// function reverse(str) {
// 	const newStr = str.split('').reverse().join('');
// 	return newStr;
// }

// function reverse(str){
// 	let newStr = '';
// 	for(let char of str){
// 		newStr = char+newStr;
// 	}
// 	return newStr;
// }

// function reverse(str){
// 	return str.split('').reduce((reversed, char)=>{
// 		return char+reversed;
// 	}, '');
// }

function reverse(str) {
	let newStr = '';
	for(var i=str.length-1; i>=0; i--){
		newStr+=str[i];
	}
	return newStr;
}

module.exports = reverse;

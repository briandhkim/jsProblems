// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	let negativeNum = false;
	if(n<0){
		negativeNum = true;
	}

	let rev = n+'';
	rev = rev.replace('-','');
	rev = rev.split('').reverse().join('');

	let returnVal = parseInt(rev);

	if(negativeNum){
		return returnVal*-1;
	}

	return returnVal;
}

module.exports = reverseInt;

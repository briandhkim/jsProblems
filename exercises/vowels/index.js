// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
	const inputStr = str.toLowerCase();
    let counter = 0;
    let reg = /[aeiou]/;
    for(let i=0; i<inputStr.length; i++){
      	if(reg.exec(inputStr[i])){
        	counter++;
      	}
    }
  	return counter;
}

module.exports = vowels;

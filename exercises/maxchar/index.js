// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	let count = {};
  	for (let i in str){
    	if( count[str[i]] ){
      		count[str[i]] += 1;
    	}else{
      		count[str[i]] = 1;
    	}
  	}

  	let counter = 0;
  	let returnChar = '';
  	for (let s in count){
  		if(count[s]>counter){
  			counter = count[s];
  			returnChar = s;
  		}
  	}

  	return returnChar;
}

module.exports = maxChar;

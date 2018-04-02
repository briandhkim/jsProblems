// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'


function pyramid(n, row=0, step=''){
	  	if(n===row){
	    	return;
	  	}
	  	if(n===1){
	    	return console.log('#');
	  	}

	  	if((n+(n-1))===step.length){
	    	console.log(step);
	    	return pyramid(n, row+1);
	  	}
	  
	  	let pLen = n+(n-1);
	  	let med = Math.floor(pLen/2);
	  
	  	if((step.length)<=(med+row)&&(step.length)>=(med-row)){
	    	step+='#';
	  	}else{
	    	step+=' ';
	  	}
	  	pyramid(n, row, step);
	}

module.exports = pyramid;

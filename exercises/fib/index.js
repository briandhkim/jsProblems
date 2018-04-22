// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


function fib(n) {
  	let fibArr =[];
  	for(var i=0; i<=n; i++){
    	if(i===0){
      		fibArr[i] = 0;
    	}else if(i===1 || i===2){
      		fibArr[i] = 1;
    	}else{
      		fibArr[i] = fibArr[i-1]+fibArr[i-2];
    	}
  	}
  	return fibArr[n];
}

// recursive solution
// function fib(n) {
// 	if(n===0){
// 		return 0;
// 	}else if(n===1||n===2){
// 		return 1;
// 	}

// 	return (fib(n-1)+fib(n-2));
// }

module.exports = fib;

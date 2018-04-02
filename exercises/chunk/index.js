// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
	let returnArr = [];
    let arrSize = array.length/size;
	for(let i = 0; i<=arrSize; i++){
		let m = 0;
        if(array.length){
          	returnArr[i] = [];
          	while(m <size){
            	if(array.length){
          			returnArr[i][m] = array[0];
              		array.splice(0,1);
              		m++;
            	}else{
              		break;
            	}
      		}
        }
	}
  
    return returnArr;
    return returnArr;
}

module.exports = chunk;

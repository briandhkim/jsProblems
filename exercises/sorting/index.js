// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {

	for(let i = 0; i < arr.length; i++){
		for(let m = 0; m < (arr.length -i-1); m++){
			if(arr[m] > arr[m+1]){
				const temp = arr[m+1];
				arr[m+1] = arr[m];
				arr[m] = temp;
			}
		}
	}

	return arr;
}

function selectionSort(arr) {

}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort };

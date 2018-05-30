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
	for(let i = 0; i < arr.length; i++){
		let minIndex = i;
		for(let m = i+1; m < arr.length; m++){
			if(arr[minIndex] > arr[m]){
				minIndex = m;
			}
		}
		
		if(minIndex !== i){
			const temp = arr[i];
			arr[i] = arr[minIndex];
			arr[minIndex] = temp;
		}
		
	}

	return arr;
}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort };

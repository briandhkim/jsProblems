// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

/*
[
  [00, 01],
  [10, 11]
]
[
  [00, 01, 02],
  [10, 11, 12],
  [20, 21, 22]
]
*/

function matrix(n){
	const totalNum = n*n;
	const matrix = [];
	for(let i=0; i<n; i++){
		matrix[i] = [];
	}

	let input =1;
	let startCol = 0;
	let endCol = n-1;
	let startRow = 0;
	let endRow = n-1;

	while(startCol <= endCol && startRow <= endRow){
		// top
		for(let i = startCol; i<=endCol; i++){
		 	matrix[startRow][i] = input;
		  	input++;
		}
		startRow++;

		//right side
		for(let m = startRow; m<=endRow; m++){
		  	matrix[m][endCol] = input;
		  	input++;
		}
		endCol--;

		//bottom
		for(let k = endCol; k>=startCol; k--){
		  	matrix[endRow][k] = input;
		  	input++;
		}
		endRow--;

		//left
		for(let n = endRow; n>=startRow; n--){
		  	matrix[n][startCol]=input;
		  	input++;
		}
		startCol++;
	}

	return matrix; 
}


matrix(3);

module.exports = matrix;

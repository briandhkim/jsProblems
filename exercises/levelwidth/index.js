// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
	const counter = [0];
	const arr = [ root, 'mark' ];

	while(arr.length > 1){
		const elmt = arr.shift();
		if(elmt==='mark'){
			counter.push(0);
			arr.push(elmt);
		}else{
			arr.push(...elmt.children);
			counter[counter.length-1] += 1;
		}
	}

	return counter;
}

module.exports = levelWidth;

// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next=null){
		this.data = data;
		this.next = next;
	}
}

class LinkedList {

	constructor(){
		this.head = null;
	}

	insertFirst(data){
		this.head = new Node(data, this.head);
	}

	size(){
		let size =  0;
		let node = this.head;
		while(node){
			size++;
			node = node.next;
		}
		return size;
	}

	getFirst(){
		return this.head;
	}

	getLast(){
		if(!this.head){
			return null;
		}
		let node = this.head;
		while(node){
			if(!node.next){
				return node;
			}else{
				node = node.next;
			}
		}
	}

	clear(){
		this.head = null;
	}

	removeFirst(){
		this.head = this.head.next;
	}

	removeLast(){
		if(!this.head){
			return;
		}
		if(!this.head.next){
			this.head = null;
			return;
		}
		// let node = this.head;
		// while(node){
		// 	if(!node.next.next){
		// 		node.next = null;
		// 		return;
		// 	}
		// 	node = node.next;
		// }
		let prev = this.head;
		let node = this.head.next;
		while(node.next){
			prev = node;
			node = node.next;
		}
		prev.next = null;
	}

	insertLast(data){
		if(!this.head){
			this.head = new Node(data, this.head);
			return;
		}
		let lastNode = this.getLast();
		lastNode.next = new Node(data);
	}

	getAt(idx){
		if(!this.head){
			return null;
		}
		let idxCounter = 0;
		let node = this.head;
		while(node){
			if(idxCounter === idx){
				return node;
			}
			idxCounter++;
			node = node.next;
		}
		return null;
	}

	removeAt(idx){
		if(!this.head){
			return;
		}
		let prevNode = this.getAt(idx-1);
		let nextNode = this.getAt(idx+1);
		if(!prevNode){
			this.head = nextNode;
		}else{
			prevNode.next = nextNode;
		}
	}

}

module.exports = { Node, LinkedList };

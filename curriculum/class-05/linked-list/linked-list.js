'use strict';

const Node = require('./node');

class LinkedList {
  constructor(){
    this.head = null;
  }

  insertAtHead(value){
    const newHead = new Node(value);

    if (this.head === null) {
      this.head = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
  }

  traverse() {
		let current = this.head;
		while(current) { // Vinicio - this covers undefined and null
			console.log(current.value);
			current = current.next;
		}
  }

  traverseRecursively(current = this.head) {
    // Base Case
    if(current === null) {
      return;
    }
    // Recursive
    this.traverseRecursively(current.next);
    // Vinicio - the entire recursive process needs to finish befoce
    // I execute this
    console.log(current.value);
  }

  appendRecursively(value) {
    // Vinicio - sets everything and validates major edge cases
    if(this.head === null) {
      this.head = new Node(value);
    } else {
      this.appendRecursivelyHelper(value, this.head);
    }
  }

  // Recursively solve the problem
  appendRecursivelyHelper(value, current) {
    // Base Case
    if(current.next === null) {
      const newTail = new Node(value);
      current.next = newTail;
    } else {
      // Recursive Case
      this.appendRecursivelyHelper(value, current.next);
    }
  }
}

module.exports = LinkedList;

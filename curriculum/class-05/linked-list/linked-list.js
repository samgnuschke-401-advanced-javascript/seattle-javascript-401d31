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
   while(current !== null) {
     console.log(current.value);
     // SOMETHING ELSE n_n
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
}

module.exports = LinkedList;
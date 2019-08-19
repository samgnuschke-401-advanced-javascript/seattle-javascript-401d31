'use strict';

class Node{
  constructor(value){
    this.value = value;
    // Vinicio - in other languages this would be a pointer to next
    /// Vinicio - in javascript we have references, which are classes around pointers
    this.next = null;
  }
}

module.exports = Node;
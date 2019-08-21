'use strict';

const LinkedList = require('./linked-list');

// list !== linked list

const linkedList = new LinkedList();

// linkedList.insertAtHead(10);
// linkedList.insertAtHead(20);
// linkedList.insertAtHead(30);

linkedList.appendRecursively(10);
linkedList.appendRecursively(20);
linkedList.appendRecursively(30);


//linkedList.traverse();

linkedList.traverse();




function Node(value) {
  this.value = value;
  this.next = null;
  // this.previous = null;
}

function Stack() {
  this.top = null;
}

Stack.prototype.push = function (data) {
  const newTop = new Node(data);
  if (this.top) {
    newTop.next = this.top;
  }
  this.top = newTop;

  return this.top;
}

Stack.prototype.pop = function () {
  if (this.top) {
    let itemToPop = this.top;
    this.top = this.top.next;
    return itemToPop;
  }

  return this.top;
}

const stack = new Stack()

// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.pop();
// stack.pop();
// console.log(stack);

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    const newRear = new Node(value);
    if (this.rear) {
      newRear.next = this.rear;
      this.rear = newRear;
    } else {
      this.front = newRear;
    }
    this.rear = newRear;

    return newRear;
  }

  dequeue() {
    let current = this.rear;
    let valueDequed = this.front;
    while (current !== null) {
      if (current.next === this.front) {
        current.next = null;
        this.front = current;
      }
      current = current.next;
    }

    return valueDequed;
  }
}

const queue = new Queue();
queue.enqueue(20);
queue.enqueue(40);
queue.enqueue(60);
queue.dequeue();
console.log(queue, queue.front);
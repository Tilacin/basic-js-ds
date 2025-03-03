const { NotImplementedError } = require('../extensions/index.js');

/*
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 */
 
class Stack {
  constructor() {
      this.items = [];
  }

  push(element) {
      this.items.push(element);
  }

  pop() {
      return this.items.pop();
  }

  peek() {
      return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
}

size() {
    return this.items.length;
}

clear() {
    this.items = [];
}

toArray() {
    return this.items;
}

toString() {
    return this.items.toString();
}
}

module.exports = {
  Stack
};

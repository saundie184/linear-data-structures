'use strict';

//LinkedList is a collection of nodes

var LinkedList = function() {
  this.head = null;
  this.length = 0;
};
// add an element to the end of the list
// this means you need to update tails reference
LinkedList.prototype.append = function(value) {

  if (this.head === null) {
    this.head = new Node(value);
  } else {
    let cur = this.head;
    //search while with cur.next
    while (cur.next !== null) {
      cur = cur.next;
    }
    cur.next = new Node(value);
  }
  this.length++;
};
//optimized version
// LinkedList.prototype.append = function(value){
//   if(this.head === null){
//     this.head = this.tail = new Node(value);
//   } else {
//     this.tail = this.tail.next = new Node(value);
//   }
// };

// remove element n from list
// remember to update n's previous node's reference to point to n's next node.
//n is count from the head
LinkedList.prototype.remove = function(n) {
  if (!this.isInside(n)) {
    return undefined;
  }
  if (this.length === 1) {
    this.head = null;
  }

  let cur = this.get(n - 1);
  if (cur.next !== null && cur.next.next !== null) {
    cur.next = cur.next.next;
  }
  this.length--;
};

// return the nth element from the list
LinkedList.prototype.get = function(n) {
  if (!this.isInside(n)) {
    return undefined;
  }
  let cur = this.head;
  //loop through cur.next to n times
  for (let i = 0; i < n; i++) {
    cur = cur.next;
  }
  return cur;
};

LinkedList.prototype.isInside = function(n) {
  return n < this.length && n >= 0;
};



// if a node doesn't have a next it should be null.
var Node = function(value, next) {
  this.value = value;
  //if next is undefined, it equals null
  this.next = next || null;
};


var myList = new LinkedList();
myList.append(5);
myList.append(6);
myList.append(7);
console.log(myList);
console.log(myList.get(1).value);
myList.remove(1);
console.log(myList.get(0));


// var head = new Node(10, new Node(9, new Node(8, null)));
// console.log(head.value);
// console.log(head.next.value);
// console.log(head.next.next.value);

//use this instead of writing everthing out
// var cur = head;
// while (cur.next !== null) {
//   console.log(cur.value);
//   cur = cur.next;
// }

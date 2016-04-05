'use strict';

// DoubleDoubleLinkedList Constructor
// properties:
//  head: the first node in the list.
//  tail (optional): the last node in the list.
//  length (optional): the length of the list.
var DoubleLinkedList = function() {
  this.head = null;
  this.tail = null;
  this.length = 0;
};

// append
// description:
//  Creates a node with the passed in value and appends the node to the end of the DoubleDoubleLinkedList.
// parameters:
//  value: some data to be held by the appended node.
DoubleLinkedList.prototype.append = function(value) {
  this.value = value;
  if (this.head === null) {
    this.head = new Node(value);
  } else {
    var newNode = new Node(value, this.tail);
    this.tail.next = newNode;
    this.tail = newNode;
    //
    // let cur = this.head;
    // let prev = cur;
    //
    // while (cur.next !== null) {
    //   cur = cur.next;
    //   prev = cur;
    // }
    // cur.next = new Node(value, prev);
    // this.tail = cur.next;
  }
  this.length++;
};

// remove
// description:
//  Using 0 based indexing, remove the nth element from the DoubleLinkedList.
// parameters:
//  n: an integer
// notes:
//  update n's previous node.next to point to n's next node.

//TODO fix this function
DoubleLinkedList.prototype.remove = function(n) {
  if (!this.isInside) {
    return undefined;
  } else {
    let cur = this.get(n);
    // console.log(cur);
    if (cur.prev !== null && cur.next !== null) {
      cur.prev.next = cur.next;
      cur.next.prev = cur.prev;
    }
  }
  this.length--;
};

// get
// description
//  Using 0 based indexing, return the nth element from the DoubleLinkedList.
// parameters:
//  n: an integer
DoubleLinkedList.prototype.get = function(n) {
  if (!this.isInside) {
    return undefined;
  }
  let cur = this.head;
  //loop through cur.next n times
  for (var i = 0; i < n; i++) {
    cur = cur.next;
  }
  return cur;
};

//check if n is in the list; is the list long enough?
DoubleLinkedList.prototype.isInside = function(n) {
  return n < this.length && n >= 0;
};

// Node constructor:
// parameters:
//  _next: a Node, undefined or null.
//  _value: data
// properties:
//  next: a reference to the next node in a list, null if no nodes remaining.
//  value: data held by the node.
var Node = function(_value, _prev, _next) {
  this.value = _value;
  this.next = _next || null;
  this.prev = _prev || null;
};

// var myNode = new Node(7);
var myList = new DoubleLinkedList();

myList.append(8);
myList.append(9);
myList.append(10);
myList.append(11);
// console.log(myList);
myList.remove(3);
console.log(myList);

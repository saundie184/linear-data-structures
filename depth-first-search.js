'use strict';

// 1.Create an array called data to store our results
// 2.Create a variable called current and set it equal to the root
// 3. Define a function called search that takes in a node as a parameter. Inside of the function
//  -push into your data array the parameter passed into the function
//  -if there is a node to the left, call the search function again passing in the node to the left
// -if there is a node to the right, call the search function again passing in the node to the right
// 4.Call the search function passing in the value of current
// 5. Return the array




function BinTree(val, left, right) {
  this.root = new Node(val, left, right);
}

//Pre-order
BinTree.prototype.depthFirstSearchPreOrder = function() {
  var data = [];
  var current = this.root;

  function search(node) {
    data.push(node.value);
    if (node.leftChild) {
      search(node.leftChild);
    }
    if (node.rightChild) {
      search(node.rightChild);
    }
  }
  search(current);
  return data;
};

//In-order
BinTree.prototype.depthFirstSearchInOrder = function() {
  var data = [];
  var current = this.root;

  function search(node) {
    if (node.leftChild) {
      data.push(node.leftChild.value);
      if (node.rightChild) {
        data.push(node.value);
        search(node.rightChild);
      }
    } else {
      data.push(node.value);
    }
  }
  search(current);
  return data;
};

//Post-order
BinTree.prototype.depthFirstSearchPostOrder = function() {
  var data = [];
  var current = this.root;
  function search(node) {
    if (node.leftChild) {
      //check if children
      search(node.leftChild);
    }
    if (node.rightChild) {
      //check if children
      search(node.rightChild);
    }
    if(!node.leftChild){
      data.push(node.value);
    } else {
      data.push(node.value);
    }
  }
  search(current);
  return data;
};



function Node(val, left, right) {
  this.value = val;
  this.leftChild = left || null;
  this.rightChild = right || null;
}

var myBinTree = new BinTree(7, new Node(6), new Node(10, new Node(9), new Node(14)));

console.log(myBinTree.depthFirstSearchPreOrder());
console.log(myBinTree.depthFirstSearchInOrder());
console.log(myBinTree.depthFirstSearchPostOrder());

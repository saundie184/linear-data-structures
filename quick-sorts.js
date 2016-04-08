'use strict';

function swap(arr, a, b) {
  var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}


function partition(items, left, right) {
  // find and assign pivot by halving sum of right and left index
  var pivot = items[Math.floor((right + left) / 2)],
    i = left,
    j = right;
  // loop until the pointers pass one another
  while (i <= j) {
    // increment i while item[i] is less than pivot
    while (items[i] < pivot) {
      i++;
    }
    // decrement j while item[j] is more than pivot
    while (items[j] > pivot) {
      j--;
    }
    // swap i and j when i is less than or equal to j
    // increment and decrement i and j, respectively
    if (i <= j) {
      swap(items, i, j);
      i++;
      j--;
    }
  }
  // return i to be used as index for left or right pointers in recursive calls of quicksort
  return i;
}


function quickSort(items, left, right) {
  // declare index to be used later when each partition returns 'i'
  var index;
  // if statement to handle the base case (any array smaller
  // than length of 1 is returned
  if (items.length > 1) {
    // if no left or right is entered, set them to first and last indeces in array
    left = typeof left !== "number" ? 0 : left;
    right = typeof right !== "number" ? items.length - 1 : right;
    // set index to return value of partition function
    index = partition(items, left, right);
    // compare current left value to index - 1
    // if left is smaller, then there are still items to be sorted on
    // the left side of the array, so quicksort is called recursively
    if (left < index - 1) {
      quickSort(items, left, index - 1);
    }
    // compare current right value to index
    // if index is smaller than right, then there are still items
    // to be sorted on the right side of the array, so quicksort
    // is called recursively
    if (index < right) {
      quickSort(items, index, right);
    }

  }
  // all recursive calls have finished so the sorted array is returned
  return items;
}


function testPerformance(callback, args) {
  var t0 = process.hrtime();
  callback(args);
  var diff = process.hrtime(t0);
  return (diff[0] * 1e9 + diff[1]);
}



// function getRandomList(length) {
//   var list = [];
//   for (var i = 0; i < length; i++) {
//     list.push(Math.floor(Math.random() * length * 2) + 1);
//   }
//   return list;
// }

function getRandomList(length) {
  var list = [];
  for (var i = 0; i < length; i++) {
    list.push(Math.floor(Math.random() * 50) + 1);
  }
  return list;
}

function getMyList(len) {
  var list = [];
  for (var i = 0; i < len; i++) {
    list.push(len + i);
  }
  return list;
}

console.log(getMyList(20));

console.log('100  ' + testPerformance(quickSort, getMyList(100)));
console.log('1000  ' + testPerformance(quickSort, getMyList(1000)));
console.log('10000  ' + testPerformance(quickSort, getMyList(10000)));
console.log('100000  ' + testPerformance(quickSort, getMyList(100000)));

// https://docs.google.com/spreadsheets/d/168dxb8CJBD2LrATyCWNMMTmerdNLWCmz9yfQidAJhdo/edit?usp=sharing

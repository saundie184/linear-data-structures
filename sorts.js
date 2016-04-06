'use strict';
var list = [6, 5, 2, 4, 9, 3, 1, 7];

//Insertion sort
function insertion(list) {
  console.log(list);
  for (var i = 1; i < list.length; i++) {
    var j = i;
    console.log(j);
    while (j > 0 && list[j] < list[j - 1]) {
      var temp = list[j];
      list[j] = list[j - 1];
      list[j-1] = temp;
      j--;
    }
  }
  return list;
}


console.log(insertion(list));
// console.log('100  '+ testPerformance( insertion, getRandomList(100)));
// console.log('1000  '+ testPerformance( insertion, getRandomList(1000)));
// console.log('10000  '+ testPerformance( insertion, getRandomList(10000)));
// console.log('100000  '+ testPerformance( insertion, getRandomList(100000)));

//Selection sort - assumes first item in the list minimum, then it goes to find something lowercase
function selection(list) {
  // console.log(list);
  for (var i = 0; i < list.length; i++) {
    var min = i;
    for (var j = i; j < list.length; j++) {
      if (list[j] < list[min]) {
        min = j;
      }
    }
    if (min !== i) {
      var temp = list[min];
      list[min] = list[i];
      list[i] = temp;
    }
  }
  return list;
}

// console.log(selection(list));
// console.log('100  '+ testPerformance( selection, getRandomList(100)));
// console.log('1000  '+ testPerformance( selection, getRandomList(1000)));
// console.log('10000  '+ testPerformance( selection, getRandomList(10000)));
// console.log('100000  '+ testPerformance( selection, getRandomList(100000)));

//Bubble Sort
function bubble(list) {
  // console.log(list);
  var sorted;
  var length = list.length;
  //does once and then checks if it should keep going at the end
  do {
    sorted = true;
    // console.log(list);
    for (var i = 1; i < length; i++) {
      if (list[i - 1] > list[i]) {
        var temp = list[i - 1];
        list[i - 1] = list[i];
        list[i] = temp;
        sorted = false;
      }
    }
    length--;
  } while (!sorted);

  return list;
}


// console.log(bubble(list));
// console.log('100  '+ testPerformance( bubble, getRandomList(100)));
// console.log('1000  '+ testPerformance( bubble, getRandomList(1000)));
// console.log('10000  '+ testPerformance( bubble, getRandomList(10000)));
// console.log('100000  '+ testPerformance( bubble, getRandomList(100000)));


function testPerformance(callback, args) {
  var t0 = process.hrtime();
  callback(args);
  var diff = process.hrtime(t0);
  return (diff[0] * 1e9 + diff[1]);
}



function getRandomList(length) {
  var list = [];
  for (var i = 0; i < length; i++) {
    list.push(Math.floor(Math.random() * length * 2) + 1);
  }
  return list;
}

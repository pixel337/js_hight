//61
// let arr = [1, 2, 3];
// let func = arr[Symbol.iterator];
// console.log(func);

//62
// let map = new Map([
//         ['key1', 'value1'],
//         ['key2', 'value2'],
//         ['key3', 'value3']
// ]);
// let iter = map[Symbol.iterator]();
// console.log( iter.next() ); 
// console.log( iter.next() ); 
// console.log( iter.next() );

//63
// function *func() {
// 	yield 1;
// 	yield 2;
// 	yield 3;
//     yield 4;
//     yield 5;
// }
// let iter = func();
// console.log(iter.next()); 
// console.log(iter.next()); 
// console.log(iter.next()); 
// console.log(iter.next());
// console.log(iter.next());

//64
//1
// function *func() {
// 	for (let i = 10; i >= 0; i--) {
// 		yield i;
// 	}
// }
// let iter = func();
// console.log(iter.next()); 
// console.log(iter.next()); 
// console.log(iter.next()); 
// console.log(iter.next());
// console.log(iter.next()); 
// console.log(iter.next()); 
// console.log(iter.next()); 
// console.log(iter.next());
// console.log(iter.next()); 
// console.log(iter.next()); 
// console.log(iter.next()); 

//2
// function *func(num) {
//     while (num >= 0) {
//       yield num;
//       num--;
//     }
// }
// let iter = func(5);
// console.log(iter.next()); 
// console.log(iter.next()); 
// console.log(iter.next()); 
// console.log(iter.next());
// console.log(iter.next()); 
// console.log(iter.next());
// console.log(iter.next()); 

//3
// function *func(num) {
//     while (num >= 1) {
//       yield num;
//       num= num/2;
//     }
// }
// let iter = func(5);
// console.log(iter.next()); 
// console.log(iter.next()); 
// console.log(iter.next()); 
// console.log(iter.next());

//4
// function *func() {
//     let power = 1;
//     while (true) {
//       yield power;
//       power *= 2;
//     }
//   }
// let iter = func();
// console.log(iter.next()); 
// console.log(iter.next()); 
// console.log(iter.next()); 
// console.log(iter.next());

//5
// function *func() {
//     let a = 0, b = 1;
//     while (true) {
//       yield a;
//       [a, b] = [b, a + b];
//     }
//   }
// let iter = func();
// console.log(iter.next()); 
// console.log(iter.next()); 
// console.log(iter.next()); 
// console.log(iter.next());

//65
// function* func() {
//     for (let i = 1; i <= 3; i++) {
//       yield i;
//     }
//   }
  
//   let elems1 = func();
//   for (let elem of elems1) {
//     console.log(elem); // 1, 2, 3
//   }
//   let elems2 = func();
//   for (let elem of elems2) {
//     console.log(elem); // 1, 2, 3
//   }

//66
// function* func(obj) {
//     for (let key in obj) {
//       yield [key, obj[key]];
//     }
//   }
//   let iter = func({ a: 1, b: 2, c: 3 });
//   for (let elem of iter) {
//     console.log(elem); 
//   }

//67
// let obj = { a: 1, b: 2, c: 3 };
// obj[Symbol.iterator] = function* () {
//   for (let key in this) {
//     if (this.hasOwnProperty(key)) {
//       yield { key, val: this[key] };
//     }
//   }
// };
// for (let elem of obj) {
//   console.log(elem);
// }

//69
//1
// let arr = [1, 2, 3];
// let arrIter = arr.values();
// for (let elem of arrIter) {
//   console.log(elem); 
// }

//2
// let set = new Set([1, 2, 3]);
// let setIter = set.values();
// for (let elem of setIter) {
//   console.log(elem); 
// }

//70
//1
// let map = new Map();
// map.set('a', 1);
// map.set('b', 2);
// map.set('c', 3);
// let mapIter = map.keys();
// for (let key of mapIter) {
//   console.log(key); 
// }

//2
// let set = new Set([1, 2, 3]);
// let setIter = set.keys();
// for (let key of setIter) {
//   console.log(key); 
// }

//71
//1
// let map = new Map();
// map.set('a', 1);
// map.set('b', 2);
// map.set('c', 3);
// let mapIter = map.entries();
// for (let entry of mapIter) {
//   console.log(entry); 
// }

// //2
// let set = new Set([1, 2, 3]);
// let setIter = set.entries();
// for (let entry of setIter) {
//   console.log(entry); 
// }

//3
// let nodeList = document.querySelectorAll('p');
// let nodeListIter = nodeList.entries();
// for (let entry of nodeListIter) {
//   console.log(entry); 
// }

//73
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     [Symbol.iterator]: function* () {
//       for (let key in this) {
//         yield this[key];
//       }
//     }
//   };
//   let arr = [...obj];
//   console.log(arr); 
  
//74
// let str = '12345';
// let sum = 0;
// for (let digit of str) {
//   sum += parseInt(digit);
// }
// console.log(sum); 

//75
// let num = 12345;
// let sum = [...String(num)].reduce((acc, digit) => acc + Number(digit), 0);
// console.log(sum); 

//76
// let table = document.getElementById('myTable');
// let cells = table.querySelectorAll('td');
// for (let [num, cell] of cells.entries()) {
//   cell.textContent += ` (${num + 1})`; 
// }

//77
// let inputs = document.querySelectorAll('input');
// for (let [key, { id, value }] of inputs.entries()) {
//   console.log(key, id, value);
// }


//45
// let elems = document.querySelectorAll('p');
// console.log(elems[0]);
// console.log(elems[1]);
// console.log(elems[2]);

// console.log(elems.length);

// for (let elem of elems) {
// 	console.log(elem);
// }

//47
// let test = [
//     [1, 2, 3],
//     {a: 1, b: 2, c: 3},
//     [3, 4, 5],
//     {x: 1, y: 2, z: 3},
//   ];
  
//   for (let element of test) {
//     let isArray = Array.isArray(element);
//     console.log(isArray);
//   }

//48
//1
// let elems = document.querySelectorAll('p');
// let arr = [];

// for (let elem of elems) {
// 	arr.push(elem);
// }

// let arr = [...elems];

// let arr = Array.from(elems);

//2
let elems = document.querySelectorAll('p');
let slicedElems = Array.from(elems).slice(1, -1);
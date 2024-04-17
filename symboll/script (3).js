// let sym1 = Symbol('текстовое описание');;
// let sym2 = Symbol('текстовое описание');;
// console.log(sym1, sym2);

//53
// let obj = {a: 1, b: 2, c: 3};
// let sym = Symbol();
// obj[sym] = 'text';
// console.log(obj[sym]);

//54
// let obj = {a: 1, b: 2, c: 3};
// let sym = Symbol();
// obj[sym] = 'text';
// for (let key in obj) {
// 	console.log(obj[key]); 
// }

//55
// let obj = {a: 1, b: 2, c: 3};
// let sym = Symbol();
// obj[sym] = function() {
//     let date =  new Date();
// 	console.log(date);
// };
// let func = obj[sym];
// func();

//56
// let arr = [1, 2, 3];
// let sym = Symbol();
// arr[sym] = function() {
// 	let sum = 0;
	
// 	for (let key in this) {
// 		sum += this[key];
// 	}
	
// 	return sum;
// };
// let sum = arr[sym]();
// console.log(sum);

//58
// let sym1 = Symbol.for('test1');
// let sym2 = Symbol.for('test2');
// let key1 = Symbol.keyFor(sym1);
// let key2 = Symbol.keyFor(sym2);
// console.log(key1, key2);

//59
//1
// let set = new Set([1, 2, 3]);
// let func = set[Symbol.iterator];
// console.log(func);
//2
// let map = new Map();
// let func = map[Symbol.iterator];
// console.log(func);
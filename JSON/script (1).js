//78
//1
// let json = '[1, 2, 3, "a", "b", "c"]';

//2
// let json = `{
// 	"a": "1",
// 	"b": "2",
// 	"c": "eee",
// 	"d": "true",
// }`;

//3
// let json = `{
// 	"a": '["a", "b", "c"]',
// 	"b": "111",
// 	"c": "eee",
// }`;

//79
//1
// let json = '[1,2,3,4,5]';
// let arr = JSON.parse(json);
// let sum = 0;
// arr.forEach(function(arr) {
//     sum += arr;
// });
// console.log(sum);

//2
// let json = `{
// 	"data1": [1,2,3],
// 	"data2": [4,5,6],
// 	"data3": [7,8,9]
// }`;
// let data = JSON.parse(json);
// let sum = 0;
// for (let key in data) {
//   sum += data[key].reduce((acc, num) => acc + num, 0);
// }
// console.log(sum);

//3
// let json = '["user1","user2","user3","user4","user5"]';
// let users = JSON.parse(json);
// let ul = document.createElement('ul');
// for (let userName of users) {
//   let li = document.createElement('li');
//   li.textContent = userName;
//   ul.appendChild(li);
// }
// document.body.appendChild(ul);

//4
// let json = `[
// 	{
// 		"name": "user1",
// 		"age": 25,
// 		"salary": 1000
// 	},
// 	{
// 		"name": "user2",
// 		"age": 26,
// 		"salary": 2000
// 	},
// 	{
// 		"name": "user3",
// 		"age": 27,
// 		"salary": 3000
// 	}
// ]`;
// let employees = JSON.parse(json);
// let table = document.createElement('table');
// let thead = document.createElement('thead');
// let tbody = document.createElement('tbody');
// let headerRow = document.createElement('tr');
// for (let key in employees[0]) {
//   let th = document.createElement('th');
//   th.textContent = key;
//   headerRow.appendChild(th);
// }
// thead.appendChild(headerRow);
// table.appendChild(thead);
// for (let employee of employees) {
//   let row = document.createElement('tr');
//   for (let key in employee) {
//     let td = document.createElement('td');
//     td.textContent = employee[key];
//     row.appendChild(td);
//   }
//   tbody.appendChild(row);
// }
// table.appendChild(tbody);
// document.body.appendChild(table);

//80
//1
// let arr = ['user1', 'user2', 'user3', 'user4', 'user5'];
// let json = JSON.stringify(arr);

//2
// let citiesList = document.querySelectorAll('ul li');
// let citiesArray = [];
// citiesList.forEach((city) => {
//   citiesArray.push(city.textContent);
// });
// let citiesJSON = JSON.stringify(citiesArray);
// console.log(citiesJSON);

//3
// let tableRows = document.querySelectorAll('table tr');
// let data = [];
// tableRows.forEach((row, index) => {
//   if (index !== 0) {
//     let rowData = {};
//     let [surname, name, patronymic] = row.children;
//     rowData.surname = surname.textContent;
//     rowData.name = name.textContent;
//     rowData.patronymic = patronymic.textContent;
//     data.push(rowData);
//   }
// });
// let dataJSON = JSON.stringify(data);
// console.log(dataJSON);

//81
//1
// let json = '["user1","user2","user3","user4","user5"]';
// let arr = JSON.parse(json);
// arr.push("user6");
// let res = JSON.stringify(arr);
// console.log(res);

//2
// let json = '["user1","user2","user3","user4","user5"]';
// let users = JSON.parse(json);
// users[1] = "newUser2";
// let res = JSON.stringify(users);
// console.log(res);

//3
// let json = `[
// 	{
// 		"name": "user1",
// 		"age": 25,
// 		"salary": 1000
// 	},
// 	{
// 		"name": "user2",
// 		"age": 26,
// 		"salary": 2000
// 	},
// 	{
// 		"name": "user3",
// 		"age": 27,
// 		"salary": 3000
// 	}
// ]`;
// let employees = JSON.parse(json);
// let newEmployee = {
//   "name": "user4",
//   "age": 28,
//   "salary": 4000
// };
// employees.push(newEmployee);
// let updatedJson = JSON.stringify(employees);
// console.log(updatedJson);

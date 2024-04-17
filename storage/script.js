//84
// localStorage.setItem('num1', 5);
// localStorage.setItem('num2', 10);
// localStorage.setItem('num3', 15);

// let num1 = localStorage.getItem('num1');
// let num2 = localStorage.getItem('num2');
// let num3 = localStorage.getItem('num3');

// let sum = Number(num1) + Number(num2) + Number(num3);

// console.log(sum); 

//85
//1
// let lastVisitTime = localStorage.getItem('lastVisitTime');

// if (!lastVisitTime) {
//   let now = Date.now();
//   localStorage.setItem('lastVisitTime', now);
// } else {
//   let currentTime = Date.now();
//   let elapsedTime = currentTime - parseInt(lastVisitTime);
//   console.log(`Прошло времени с предыдущего захода: ${elapsedTime} миллисекунд`);
// }

//2
// let birthday = localStorage.getItem('birthday');

// if (!birthday) {
//   let userBirthday = prompt('Введите вашу дату рождения в формате (гггг-мм-дд):');
//   localStorage.setItem('birthday', userBirthday);
// } else {
//   let today = new Date();
//   let currentDay = today.toISOString().slice(0, 10);

//   if (currentDay === birthday) {
//     alert('Поздравляем с Днем Рождения!');
//   }
// }

//3
// let inputElement = document.getElementById('myInput');

// inputElement.addEventListener('blur', function() {
//   let inputValue = inputElement.value;
//   localStorage.setItem('savedText', inputValue);
// });

// let savedText = localStorage.getItem('savedText');

// if (savedText) {
//   inputElement.value = savedText;
// }

//86
// let pageRefreshCount = localStorage.getItem('pageRefreshCount');

// pageRefreshCount = parseInt(pageRefreshCount) || 0;
// pageRefreshCount++;
// localStorage.setItem('pageRefreshCount', pageRefreshCount);

// console.log(`Количество обновлений страницы: ${pageRefreshCount}`);

//87
// let pageRefreshCount = localStorage.getItem('pageRefreshCount');
// pageRefreshCount = parseInt(pageRefreshCount) || 0;
// pageRefreshCount++;

// if (pageRefreshCount >= 10) {
//   localStorage.removeItem('pageRefreshCount');
//   console.log('Данные счетчика удалены. Счетчик обнулен.');
// } else {
//   localStorage.setItem('pageRefreshCount', pageRefreshCount);
//   console.log(`Количество обновлений страницы: ${pageRefreshCount}`);
// }

//88
// localStorage.clear();

//89
// document.getElementById('countButton').addEventListener('click', function() {
//     let num = localStorage.length;
//     alert(`Количество записей в локальном хранилище: ${num}`);
//   });

//90
// let key0 = localStorage.key(0);
// let val0 = localStorage.getItem(key0);
// console.log(`Значение записи с номером 0: ${val0}`);

// let key1 = localStorage.key(1);
// let val1 = localStorage.getItem(key1);
// console.log(`Значение записи с номером 1: ${val1}`);

// let key2 = localStorage.key(2);
// let val2 = localStorage.getItem(key2);
// console.log(`Значение записи с номером 2: ${val2}`);

//91
// document.getElementById('showAllButton').addEventListener('click', function() {
//     for (let i = 0; i < localStorage.length; i++) {
//       let key = localStorage.key(i);
//       let val = localStorage.getItem(key);
//       alert(`Ключ: ${key}, Значение: ${val}`);
//     }
//   });

//93
// document.getElementById('saveButton').addEventListener('click', function() {
//     let inputs = document.querySelectorAll('input[type="text"]');
//     let values = Array.from(inputs).map(input => input.value);

//     localStorage.setItem('inputValues', JSON.stringify(values));
//   });

//   document.getElementById('loadButton').addEventListener('click', function() {
//     let storedValues = localStorage.getItem('inputValues');
//     if (storedValues) {
//       let values = JSON.parse(storedValues);
//       let inputs = document.querySelectorAll('input[type="text"]');
      
//       values.forEach((value, index) => {
//         inputs[index].value = value;
//       });
//     }
//   });

//94
// let users = JSON.parse(localStorage.getItem('users')) || [];

// document.getElementById('addUserButton').addEventListener('click', function() {
//   let surname = document.getElementById('surnameInput').value;
//   let name = document.getElementById('nameInput').value;
//   let age = document.getElementById('ageInput').value;

//   let newUser = {
//     surn: surname,
//     name: name,
//     age: age,
//   };

//   users.push(newUser);
//   localStorage.setItem('users', JSON.stringify(users));
//   document.getElementById('surnameInput').value = '';
//   document.getElementById('nameInput').value = '';
//   document.getElementById('ageInput').value = '';
// });

//95
//1
// function addTask() {
//     let taskText = document.getElementById('newTask').value;
//     if (taskText.trim() === '') return;

//     let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     tasks.push({ text: taskText, done: false });
//     localStorage.setItem('tasks', JSON.stringify(tasks));

//     displayTasks();
//     document.getElementById('newTask').value = '';
//   }

//   function toggleTask(index) {
//     let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     tasks[index].done = !tasks[index].done;
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//     displayTasks();
//   }

//   function deleteTask(index) {
//     let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     tasks.splice(index, 1);
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//     displayTasks();
//   }

//   function displayTasks() {
//     let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     let todoList = document.getElementById('todoList');
//     todoList.innerHTML = '';

//     tasks.forEach((task, index) => {
//       let listItem = document.createElement('li');
//       listItem.innerHTML = `<input type="checkbox" ${task.done ? 'checked' : ''} onchange="toggleTask(${index})">
//                             <span>${task.text}</span>
//                             <button onclick="deleteTask(${index})">Удалить</button>`;
//       todoList.appendChild(listItem);
//     });
//   }

//   displayTasks();

//2
// function saveNote() {
//     let noteText = document.getElementById('noteText').value;
//     if (noteText.trim() === '') return;

//     let notes = JSON.parse(localStorage.getItem('notes')) || [];
//     notes.push({ text: noteText });
//     localStorage.setItem('notes', JSON.stringify(notes));

//     displayNotes();
//     document.getElementById('noteText').value = '';
//   }

//   function displayNotes() {
//     let notes = JSON.parse(localStorage.getItem('notes')) || [];
//     let noteList = document.getElementById('noteList');
//     noteList.innerHTML = '';

//     notes.forEach((note, index) => {
//       let noteItem = document.createElement('div');
//       noteItem.innerHTML = `<p>${note.text}</p>
//                             <button onclick="editNote(${index})">Редактировать</button>
//                             <button onclick="deleteNote(${index})">Удалить</button>`;
//       noteList.appendChild(noteItem);
//     });
//   }

//   function editNote(index) {
//     let notes = JSON.parse(localStorage.getItem('notes')) || [];
//     let newText = prompt('Редактировать запись:', notes[index].text);
//     if (newText !== null) {
//       notes[index].text = newText;
//       localStorage.setItem('notes', JSON.stringify(notes));
//       displayNotes();
//     }
//   }

//   function deleteNote(index) {
//     let notes = JSON.parse(localStorage.getItem('notes')) || [];
//     notes.splice(index, 1);
//     localStorage.setItem('notes', JSON.stringify(notes));
//     displayNotes();
//   }

//   displayNotes();

//3
function addSticker() {
    let stickerText = document.getElementById('stickerText').value;
    if (stickerText.trim() === '') return;

    let stickers = JSON.parse(localStorage.getItem('stickers')) || [];
    stickers.push({ text: stickerText });
    localStorage.setItem('stickers', JSON.stringify(stickers));

    displayStickers();
    document.getElementById('stickerText').value = '';
  }

  function displayStickers() {
    let stickers = JSON.parse(localStorage.getItem('stickers')) || [];
    let stickerBoard = document.getElementById('stickerBoard');
    stickerBoard.innerHTML = '';

    stickers.forEach((sticker, index) => {
      let stickerItem = document.createElement('div');
      stickerItem.innerHTML = `<p>${sticker.text}</p>
                              <button onclick="editSticker(${index})">Редактировать</button>
                              <button onclick="deleteSticker(${index})">Удалить</button>`;
      stickerBoard.appendChild(stickerItem);
    });
  }

  function editSticker(index) {
    let stickers = JSON.parse(localStorage.getItem('stickers')) || [];
    let newText = prompt('Редактировать стикер:', stickers[index].text);
    if (newText !== null) {
      stickers[index].text = newText;
      localStorage.setItem('stickers', JSON.stringify(stickers));
      displayStickers();
    }
  }

  function deleteSticker(index) {
    let stickers = JSON.parse(localStorage.getItem('stickers')) || [];
    stickers.splice(index, 1);
    localStorage.setItem('stickers', JSON.stringify(stickers));
    displayStickers();
  }

  displayStickers();

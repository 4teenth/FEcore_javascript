/* eslint-disable strict */

'use strict';

// ========функции конструкторы=========
// const Counter = function ({ initialValue = 0, step = 1 }) {
//   // this = {}

//   this.value = initialValue;
//   this.step = step;

//   this.increment = function () {
//     this.value += this.step;
//   };

//   // return this;
// };

// // [[Call]]
// // Counter();

// // [[Construct]]
// const counterA = new Counter({ initialValue: 10, step: 5 });
// console.log('counterA.value: ', counterA.value);
// counterA.increment();
// console.log('counterA.value: ', counterA.value);

// const counterB = new Counter({ initialValue: 100, step: 15 });
// console.log('counterB.value: ', counterB.value);
// counterB.increment();
// console.log('counterB.value: ', counterB.value);

// console.log(counterA, counterB);

// ----------
// const numbers = [1, 2, 3]; // = const numbers = new Array(1, 2, 3)
// -----------------
// HTMLELE

// -----------------prototype-----юзаем чтобы одна и та же функция наследовалась, а не была ещё одной копией в другом объекте
// const Counter = function ({ initialValue = 0, step = 1 }) {
//   // this = {}
//   // this.__proto__ = Counter.prototype;

//   this.value = initialValue;
//   this.step = step;

// //   this.increment = function () {
// //     this.value += this.step;
// //   };

//   // return this;
// };

// Counter.prototype.increment = function () {
//   this.value += this.step;
// };

// console.dir(Counter);

// const counterA = new Counter({ initialValue: 10, step: 5 });
// console.log('counterA.value: ', counterA.value);
// counterA.increment();
// console.log('counterA.value: ', counterA.value);

// const counterB = new Counter({ initialValue: 100, step: 15 });
// console.log('counterB.value: ', counterB.value);
// counterB.increment();
// console.log('counterB.value: ', counterB.value);

// console.log(counterA, counterB);

// ----------example for hm----
// const TodoEditor = function (todos = []) {
//   this.todos = todos;
// };

// TodoEditor.prototype.saveTodo = function (todo) {
//   this.todos.push(todo);
// };

// const todoEditor = new TodoEditor();

// todoEditor.saveTodo({ text: 'new todo' });

// console.log(todoEditor);

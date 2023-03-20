// function repeat(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// }

// repeat(3, console.log);

// const labels = [];

// repeat(5, (i) => { // repeat(5, function(i) {
//   labels.push(`Label ${i + 1}`);
// });

// console.log(labels);
// -----------
// const filter = function (array, test) {
//   const filtered = [];

//   for (const element of array) {
//     const passed = test(element);

//     if (passed) {
//       filtered.push(element);
//     }
//   }

//   return filtered;
// };

// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const freshFruits = filter(fruits, fruit => fruit.isFresh);
// console.log(freshFruits); // массив с объектами apples и bananas

// const fruitsWithQuantity = filter(fruits, fruit => fruit.quantity >= 120);
// console.log(fruitsWithQuantity); // массив с объектами apples и grapes
// -------
// const petya = {
//   name: 'Petya',
//   showName() {
//     console.log(petya.name);
//   },
// };

// petya.showName();
// ----------------
// // "use strict";

// function fn() {
//   console.log(this);
// }

// fn(); // window без "use strict" и udefined с "use strict"
// --------
// const petya = {
//   name: 'Petya',
//   showThis() {
//     console.log(this);
//   },
//   showName() {
//     console.log(this.name);
//   },
// };

// petya.showThis(); // {name: "Petya", showThis: ƒ, showName: ƒ}
// petya.showName(); // 'Petya'
// -------------

// 'use strict';

// function showThis() {
//   console.log('this in showThis: ', this);
// }

// // Вызываем в глобальном контексте
// showThis();
// // this in showThis: Window

// const user = { name: 'Mango' };

// /*
//    * Записываем ссылку на функцию в свойство объекта
//    * Обратите внимание, что это не вызов - нет ()
//    */
// user.showContext = showThis;

// /*
//    * Вызываем функцию в контексте объекта
//    * this будет указывать на текущий объект, в контексте
//    * которого осуществляется вызов, а не на глобальный объект.
//    */

// user.showContext();
// // this in showThis: {name: "Mango", showContext: ƒ}
// --------------

/* eslint-disable strict */

'use strict';

// const onGeolocationSuccess = function (position) {
//   console.log('in onGeolocationSuccess: ', position);
// };

// const onGeolocationError = function (error) {
//   console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(
//   onGeolocationSuccess,
//   onGeolocationError,
// );
// // 1 - выполнится успешно;
// // 2 - выполнится с ошибкой;
// ========================================
// const filter = function (array, testCallback) {
//   const result = [];

//   for (const elem of array) {
//     const passed = testCallback(elem);

//     if (passed) {
//       result.push(elem);
//     }
//   }

//   return result;
// };

// const fnGt3 = function (elem) {
//   return elem >= 3;
// };

// console.log(filter([1, 2, 3, 4, 5], fnGt3));
// ==================================
// const filter = function (array, testCallback) {
//   const result = [];

//   for (const elem of array) {
//     const passed = testCallback(elem);

//     if (passed) {
//       result.push(elem);
//     }
//   }

//   return result;
// };

// console.log(
//   filter(['Etiam', 'iaculic', 'nunc', 'ac'], word => word.length >= 5),
// );
// // OR use it(the same)
// console.log(
//     filter(['Etiam', 'iaculic', 'nunc', 'ac'], function(word) {
//         return word.length >= 5;
//     }),
// );
// =====================================
// Стрелочные функции
// const add = function (a, b) {
//   return a + b;
// };
// // the same
// const arrowFn = (a, b) => a + b;
// ---
// const arrowFn = a => {
//   return a;
// }
// ---rest
// const arrowFn = (...args) => {
//     return args;
// };
// console.log(arrowFn(5, 10, 15));
// ---an example
// const filter = (array, testCallback) => {
//   const result = [];

//   for (const elem of array) {
//     const passed = testCallback(elem);

//     if (passed) {
//       result.push(elem);
//     }
//   }

//   return result;
// };
// ---2nd example
// console.log(
//   filter([1, 2, 3, 4, 5], function(number) {
//     return number >= 3;
//   }),
// );
// ---or the same(inline callback/встроенный колбэк)
// console.log(filter([1, 2, 3, 4, 5], number => number >= 3));
// ---3rd example
// console.log(
//     filter(['Etiam', 'iaculic', 'nunc', 'ac'], function(word) {
//         return word.length >= 5;
//     }),
// );
// ---or the same
// console.log(
//     filter(['Etiam', 'iaculic', 'nunc', 'ac'], word => word.length >= 5),
// );

// ----Области видимости(Scopes)
// const add = function (a, b) {
//   return a + b + globalValue;
// };

// const globalValue = 10;

// console.dir(add); // смотрим консоль браузера
// // console.log(add(5, 15));

// ----Hoisting
// console.log(a);

// if (true) {
//     var a = 5;
// }
// будет undefined, а не ошибка
// --
// var a;

// console.log(a);

// if (true) {
//     a = 5;
// }

// console.log(a);
// будет 5

// +1 пример
// const a = 5;

// if (true) {
//     const a = 10;
// }

// console.log(a);
// // 5
// // 10
// --
// const a = 5;

// if (true) {
//   console.log(a);

//   const a = 10;
// }

// console.log(a);
// будет ошибка, а не undefined как с var

// ----Продолжаем разбирать области видимости
// // Global
// // Parent: null

// // [Environment]: Global
// const fnA = function () {
//   // fnA env
//   // Parent: Global

//   console.log(a);
// };
// // Global
// // Parent: null
// // fnA: f

// // [Environment]: Global
// const outerFn = function () {
//   // outerFn env
//   // Parent: Global

//   fnA();
// };

// const a = 5;

// // Global
// // Parent: null
// // fnA: f, outerFn: f, a: 5

// outerFn();

// ---+ ещё один пример
// // Global
// // parent: null

// // [environment]: Global
// const fn = function () {
//   // fn env
//   // parent: Global
//   console.log(a);
// };

// const a = 5;
// // Global
// // parent: null
// // a: 5

// fn();

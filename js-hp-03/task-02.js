'use strict';

// Напиши функцию countProps(obj), считающую кол-во свойств в объекте.
// Функция возвращает число - количество свойств.

// Вызовы функции для проверки работоспособности твоей реализации.

const countProps = function (obj) {
  return Object.values(obj).length;
};

// ---OR---

// const countProps = function (obj) {
//   let numbProps = 0; // - index of the first prop in the obj
//   for (const key in obj) {
//     numbProps += 1;
//   }
//   return numbProps;
// };

console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

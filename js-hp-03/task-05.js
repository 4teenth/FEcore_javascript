'use strict';

// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя ключа.
// Возвращает массив значений определенного поля prop из каждого объекта в массиве.

// Вызовы функции для проверки работоспособности твоей реализации.

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  const toGetArr = [];
  for (const elemByIdx of arr) {
    if (elemByIdx[prop]) {
      toGetArr.push(elemByIdx[prop]);
    }
  }

  return toGetArr;
};

console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []

// ---OR--- так тоже вроде как можно, где toGetArr[i] = то же что и elemByIdx на каждой итерации только цикла for of(по аналогии на примере выше),
//          и где toGetArr[i] - то самое кол-во [i]-тых объектов(которые мы хотим получить и преобразовать в массивы) для сопоставления с массивом arr(он же products) на каждой итерации,
//          в итоге которому присвоили значение массива arr объекта[i](содержащего необходимое значение ключей) и ссылку на значения ключей[prop](из функции),
//          указанных в console.log(а именно "name", "quantity" и не существующий "category" который в итоге вернёт практически "пустой" массив[undefined]).
// Свойство объекта - это пара ключ:значение(key:value), разделяются запятой.

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function (arr, prop) {
//   const toGetArr = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     toGetArr[i] = arr[i][prop];  //----но вернёт последний массив не пустым, а со значением undefined.
//   }
//   return toGetArr;
// };

// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []

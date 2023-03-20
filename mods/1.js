// const jsObjects = [
//   { a: 1, b: 2 },
//   { a: 3, b: 4 },
//   { a: 5, b: 6 },
//   { a: 7, b: 8 },
// ];

// for (const i in jsObjects) {
//   if (jsObjects[i].b == 6) {
//     console.log(jsObjects[i]); // {a: 5, b: 6}
//   }
// }
// -----------
// function getAllPropValues(arr, prop) {
//   const output = [];

//   for (const index of arr) {
//     if (index.name) {
//       output.push(index.name);
//       // if (index.quantity) {
//       //   output.push(index.quantity);
//       // }
//       // output.push(index[prop]);
//     }
//   }
//   for (const index of arr) {
//     if (index.quantity) {
//       output.push(index.quantity);
//     }
//   }
//   // for (const index of arr) {
//   //   if (index.category) {
//   //     output.push(index.category);
//   //   }
//   // }
//   return output;
// }

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// // console.log(getAllPropValues(products, 'category')); // []
// --------

// OROROR----
// let userChoice;

// while (true) {
//   userChoice = prompt(
//     'Выберите вариант доставки: 1 - самовывоз, 2 - курьер, 3 - почта',
//   );

//   if (userChoice === null) {
//     break;
//   }

//   userChoice = Number(userChoice);

//   const isValid = userChoice >= 1 && userChoice <= 3;

//   if (isValid) {
//     break;
//   }
//   const isNotValid = userChoice > 3;
//   if (isNotValid) {
//     break;
//   }
//   console.log('Невалидный ввод, попробуйте еще раз!');
// }

// switch (userChoice) {
//   case 1:
//     alert('Самовывоз!');
//     break;

//   case 2:
//     alert('Курьер!');
//     break;

//   case 3:
//     alert('Почта!');
//     break;
//   case userChoice:
//     alert('Невалидный ввод, попробуйте еще раз!');
//     break;

//   default:
//     alert('Вам перезвонит менеджер!');
// }
// -------
// const value = 50;

// const add = function (num) {
//   const value = 10;
//   const innerValue = 5;

//   return num + value + innerValue;
// };
// console.log(add(20));

// -----Конструктор Object----------

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// const keys = Object.keys(hotel); // ["name", "stars", "capacity"]
// const values = Object.values(hotel); // ["Resort Hotel", 5, 100]
// const entries = Object.entries(hotel); // [Array(2), Array(2), Array(2)]

// console.log(entries);

// ---------------REST -- it is a good example

// const add = function (value, ...args) {
//   console.log(value); // первый аргумент
//   console.log(args); // массив всех остальных аргументов
// };

// add(10, 1, 2, 3);
// add(15, 1, 2, 3, 4, 5);
// ---------

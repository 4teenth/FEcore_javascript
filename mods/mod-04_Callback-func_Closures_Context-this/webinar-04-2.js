// ----Повторение carrying

// // foo(a,b,c) === foo(a)(b)(c)
// function add(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// const add91 = add(9)(1);
// console.log(add91(1));

// // упрощенный синтаксис частичного применения

// const sum = (a, b, c) => a + b + c;

// const sum91 = sum.bind(null, 9, 1);
// console.log(sum91(1));

// ----остальные два метода функции
// const sum = (a, b, c) => a + b + c;

// // call
// const sum911 = sum.call(null, 9, 1, 1);
// console.log(sum911);
// console.log(sum(9, 1, 1));

// // apply
// const add911 = sum.apply(null, [9, 1, 1]);
// console.log(sum911);
// console.log(sum[9, 1, 1]);

// ----Примеры для браузера(window)
// function add(a, b, c) {
//   return a + b + c;
// }

// console.log(add.call(window, 1, 2, 3));
// console.log(add.apply(window, [1, 2, 3]));
// console.log(add.bind(window, 1, 2, 3)());

// ----Пример для среды(global)(работает и в браузере). null - общий предок всех объектов(null - это объект)
// function add(a, b, c) {
//   return a + b + c;
// }

// console.log(add.call(null, 1, 2, 3));
// console.log(add.apply(null, [1, 2, 3]));
// console.log(add.bind(null, 1, 2, 3)());

// ----
// const calc = { // - объект
//   add() { // - метод объекта
//     return this.a + this.b + this.c;
//   },
// };

// // Смотреть в консоли & браузера хром
// calc.a = 1;
// calc.b = 2;
// calc.c = 3;
// // объект впереди вызова
// console.log(calc.add());

// const object = {
//   a: 10,
//   b: 20,
//   c: 30,
// };
// // метод приходится копировать
// object.sum = calc.add;
// // объект впереди вызова
// console.log(object.sum());

// ----ИЛИ с использованием методов

// const calc = { // - объект
//   add() { // - метод объекта
//     return this.a + this.b + this.c;
//   },
// };

//   // Смотреть в консоли & браузера хром
// calc.a = 1;
// calc.b = 2;
// calc.c = 3;
// // объект впереди вызова
// console.log(calc.add());

// const object = {
//   a: 10,
//   b: 20,
//   c: 30,
// };

// // объект впереди вызова

// // 1) cacl.add - обращение к методу
// // 2) call() - вызов метода
// // 3) object - передача методу ссылки на новый объект(новый this)
// console.log(calc.add.call(object));
// console.log(calc.add.bind(object)());

// ----ВАЖНО bind, call, apply - 0.31.30

// ----Example

// const obj = {
//   arr: [1, 2, 3, 4, 5],
//   sum() {
//     let total = 0;
//     for (let i = 0; i < this.arr.length; i++) {
//       total += this.arr[i];
//     }
//     return total;
//   },
//   mult() {
//     let total = 1;
//     for (let i = 0; i < this.arr.length; i++) {
//       total *= this.arr[i];
//     }
//     return total;
//   },
// };

// console.log(obj.sum());
// console.log(obj.sum.call(obj));
// console.log(obj.sum.bind(obj)());

// ---и ещё один похожий

// const obj = {
//   arr: [1, 2, 3, 4, 5],
//   arrSum: null,
//   arrMult: null,
//   sum() {
//     let total = 0;
//     for (let i = 0; i < this.arr.length; i++) {
//       total += this.arr[i];
//     }
//     this.arrSum = total;
//   },
//   mult() {
//     let total = 1;
//     for (let i = 0; i < this.arr.length; i++) {
//       total *= this.arr[i];
//     }
//     this.arrMult = total;
//   },
// };

// const calc = function (action) {
//   console.log(`Invoking ${action.name} operation`);
//   action.call(this);
// };

// console.log(calc.call(obj, obj.sum));
// console.log(obj.arrSum);

// ----ВАЖНО таск 1-2 дз4 0.40.00 - 0.48.00

// Если в качестве объекта передать null, то для функции в качестве this будет window
// ЗАПОМИНАНИЕ ФУНКЦИЕЙ ЧАСТИ АРГУМЕНТОВ (КАРРИРОВАНИЕ)
// function setLocalTime(time, local) {
//   return time + local;
// }

// const getLocalTime = setLocalTime.bind(null, 2);

// typeof getLocalTime; // function
// getLocalTime(10); // 12

// Bind используется в ассинхронных callback функциях //

// ---- gennadiy1970.github.io/js_this/html/call_apply.html ---- //-----

// const numbers = [1, 10, 100];

// function foo(a, b, c) { // [1, 2, 3] {
//   return a + b + c;
// }

// console.log(foo(numbers));
// console.log(foo(...numbers)); // or the same console.log(foo.apply(null, numbers)); or console.log(foo.apply(null, [1, 10, 100]));
// console.log(foo.call(null, 1, 10, 100));
// ----example
// const numbers = [1, 10, 100];

// function foo(a, b, c) { // [1, 2, 3] {
//   return a + b + c;
// }

// // console.log(foo(numbers));
// console.log(Math.max.apply(null, [1, 10, 100]));
// console.log(Math.max(1, 10, 100)); // or console.log(Math.max(...[1, 10, 100]));


// ----Метод для добавления динамических свойств

// function addProp(prop, value) {
//   this[prop] = value;
// }

// const ann = {
//   name: 'Ann',
// };

// addProp.call(ann, 'group', 'FE1');
// ann.group; // FE1


// ----Пример для браузера 1.11.50
// Разница между обычной функцией и стрелочной

// var a = 100;
// const add = () => this.a;

// add()
// 100
// // ---
// const obj = {
//   a: 200,
//   add
// }

// obj.add()
// 100
// ---сравнение
// var a = 100;
// const add = function () { return this.a; }

// add()
//
// const obj = {
//   a: 200,
//   add
// }

// obj.add()
// 200

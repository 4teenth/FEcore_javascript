/* eslint-disable strict */

'use strict';

// ----this
// const showLabel = function () {
//   console.log(this);
//   console.log(this.label);
// };

// const product = {
//   label: 'Adiddas',
// };

// product.showLabel = showLabel;

// product.showLabel();

// ---Another example
// const printLabel = function (callback) {
//   const label = callback();

//   console.log(`Product label: ${label}`);
// };

// const product = {
//   label: 'Adidas',
//   showLabel() {
//     console.log(this);
//     console.log(this.label);
//   },
// };

// printLabel(product.showLabel);
// // будет undefined и понятно почему, ссылается на глобал, а в use strict это undefined

// ----this в стрелочных функциях
// const fn = () => {
//   console.log(this);
// };

// fn();
// ---
// const showLabel = () => {
//   console.log(this);
//   console.log(this.label);
// };

// const product = {
//   label: 'Adidas',
// };

// product.showLabel = showLabel;

// product.showLabel();
// ---всё-равно будет window потому что стрел.функция объявлена в глоб.области видимости

// ---опять пример и всё ещё window в консоли браузера
// const product = {
//   label: 'Adidas',
//   showLabel: () => {
//     console.log(this);
//     console.log(this.label);
//   },
// };

// product.showLabel();

// ---и опять пример
// const product = {
//   label: 'Adidas',
//   showLabel() {
//     console.log(this);
//     console.log(this.label);

//     const fn = function () {
//       console.log(this);
//     };

//     fn(); // undefined
//   },
// };

// product.showLabel();
// ---а если так, то работает
// const product = {
//   label: 'Adidas',
//   showLabel() {
//     console.log(this);
//     console.log(this.label);

//     const fn = () => {
//       console.log(this);
//     };

//     fn(); // is working
//   },
// };

// product.showLabel();
// p.s. this в стрелочной функции определяется контекстом(той областью видимости в которой была создана\оюъявлена) 0.25.00

// ---ex
// const mango = {
//   name: 'Mango',
//   sales: 10,
//   sell(product) {
//     console.log(`Manager ${this.name} sold ${product}`);
//     this.sales += 1;
//   },
// };

// const poly = {
//   name: 'Poly',
//   sales: 20,
//   sell(product) {
//     console.log(`Manager ${this.name} sold ${product}`);
//     this.sales += 1;
//   },
// };

// mango.sell('TV');

// poly.sell('GPU');
// --- а можно так(лучше)///исп. методы функций..call, bind, apply
// const sell = function (product) {
//   console.log(`Manager ${this.name} sold ${product}`);
//   this.sales += 1;
// };

// const mango = {
//   name: 'Mango',
//   sales: 10,
// };

// const poly = {
//   name: 'Poly',
//   sales: 20,
// };

// // mango.sell('TV');

// // poly.sell('GPU');

// sell.call(mango, 'TV');

// sell.call(poly, 'GPU');

// sell.call({ name: 'Ajax', sales: 30 }, 'CPU'); // +1

// ---call тот же apply
// const sell = function (product) {
//   console.log(`Manager ${this.name} sold ${product}`);
//   this.sales += 1;
// };

// const mango = {
//   name: 'Mango',
//   sales: 10,
// };

// const poly = {
//   name: 'Poly',
//   sales: 20,
// };

// // mango.sell('TV');

// // poly.sell('GPU');

// sell.apply(mango, ['TV']);

// sell.apply(poly, ['GPU']);

// ---+1 ex
// const sell = function (product, price) {
//   console.log(`Manager ${this.name} sold ${product} for ${price}`);
//   this.sales += 1;
// };

// const mango = {
//   name: 'Mango',
//   sales: 10,
// };

// const poly = {
//   name: 'Poly',
//   sales: 20,
// };

// mango.sell('TV', 50);

// poly.sell('GPU', 100);

// sell.apply(mango, ['TV', 50]);

// sell.apply(poly, ['GPU', 100]);
// // p.s call & apply вызывают функцию на месте

// ---bind(сохраняет копию функции с привязанным контекстом навсегда)
// const product = {
//   label: 'Adiddas',
//   showLabel() {
//     console.log(this);
//     console.log(this.label);
//   },
// };

// const printLabel = function (callback) {
//   const label = callback();

//   console.log(`Product label: ${label}`);
// };

// const boundShowLabel = product.showLabel.bind(product);

// boundShowLabel();

// // printLabel(product.showLabel);

// +1 применение(bind в 99% исп. для callbаckов)
// const product = {
//   label: 'Adiddas',
//   showLabel() {
//     console.log(this);
//     console.log(this.label);

//     return this.label;
//   },
// };

// const printLabel = function (callback) {
//   const label = callback();

//   console.log(`Product label: ${label}`);
// };

// const boundShowLabel = product.showLabel.bind(product);

// // boundShowLabel();

// printLabel(boundShowLabel);
// ---или даже вот так----------
// const product = {
//   label: 'Adiddas',
//   showLabel() {
//     console.log(this);
//     console.log(this.label);

//     return this.label;
//   },
// };

// const printLabel = function (callback) {
//   const label = callback();

//   console.log(`Product label: ${label}`);
// };

// // const boundShowLabel = product.showLabel.bind(product);

// printLabel(product.showLabel.bind(product));

// +----ещё пример, чисто для примера, не более. вообще так не делаем, потому как bind для callback
// const sell = function (product, price) {
//   console.log(`Manager ${this.name} sold ${product} for ${price}`);
//   this.sales += 1;
// };

// const mango = {
//   name: 'Mango',
//   sales: 10,
// };

// const poly = {
//   name: 'Poly',
//   sales: 20,
// };

// const mangoSell = sell.bind(mango, 'GPU', 100);

// const polySell = sell.bind(poly, 'TV', 50);

// polySell();
// mangoSell();
//  =======================функция конструктор(new(позволяет создать пустой объект и в контексте этого объекта вызвать эту функцию) - это оператор вызывающий функцию конструктор)

// const Manager = function (name, sales = 0) {
//   // this = {}
//   this.name = name;
//   this.sales = sales;

//   // return this;
// };

// const mango = new Manager('Mango', 5);
// console.log(mango);

// const poly = new Manager('Poly', 5);
// console.log(poly);

// --+ эксперимент(функция конструктор - это фабрика по созданию объектов)
// const Manager = function (name, sales = 0) {
//   // this = {}
//   this.name = name;
//   this.sales = sales;

//   this.sell = function (product, price) {
//     console.log(`Manager ${this.name} sold ${product} for ${price}`);
//     this.sales += 1;
//   };

//   // return this;
// };

// const mango = new Manager('Mango', 5);
// console.log(mango);
// mango.sell('TV', 50);

// const poly = new Manager('Poly', 5);
// console.log(poly);
// poly.sell('GPU', 100);

// ======функция вызывается или с контекстом(напр. main.client()) или без (напр. client())=======
// там где стрелка объявлена тот this исп. навсегда(лексическое this)

// ====---Практика----=====
// const makeSound = function () {
//   console.log(this.sound);
// };

// const dog = {
//   sound: 'woof',
// };

// dog.bark = makeSound;

// dog.bark();
// // console.log(dog); - my turn

// ------2------
// const makeSound = function () {
//   console.log(this.sound); // this = undefined
// };

// const dog = {
//   sound: 'woof',
// };

// dog.bark = makeSound;

// const fn = function(callback) {
//   callback();
// };

// fn(dog.bark);
// // будет ошибка

// ----3-----
// const makeSound = function () {
//   console.log(this.sound);
// };

// const dog = {
//   sound: 'woof',
// };

// dog.bark = makeSound;

// const fn = function (callback) {
//   callback();
// };

// fn(dog.bark.bind(dog));

// ----4----
// const makeSound = () => { // ignored strict mode
//   console.log(this);
// };

// makeSound();
// // window

// ----5------
// const makeSound = () => { // ignored strict mode
//   console.log(this);
// };

// const dog = {
//   sound: 'woof',
// };

// dog.bark = makeSound;

// dog.bark();
// // window

// -----6-----
// const dog = {
//   sound: 'woof',
//   fn() { // this is a method
//     const makeSound = () => { // this is a function
//       console.log(this);
//       console.log(this.sound);
//     };

//     return makeSound;
//   },
// };

// const makeSound = dog.fn();

// makeSound();
// // { sound: 'woof', fn: [Function: fn] }
// // woof

// ----7--Example----
// const dog = {
//   sound: 'woof',
//   bark() {
//     console.log(this.sound);
//   },
// };

// document.querySelector('button').addEventListener('click', () => { // но это бред
//   dog.bark();
// });
// ---vs---
const dog = {
  sound: 'woof',
  bark() {
    console.log(this.sound);
  },
};

document.querySelector('button').addEventListener('click', dog.bark.bind(dog));

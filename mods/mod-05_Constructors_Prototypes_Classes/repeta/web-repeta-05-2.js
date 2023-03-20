/* eslint-disable strict */

'use strict';

// const products = [];
// const addProduct = () => {};
// // --VS--
// const storage = {
//   products: [],
//   addProduct() {},
// };

// -------------------класс\экземпляр
// const Fn = function() {}; // класс
// // --VS--
// const ex = new Fn(); // экземпляр

// ----------------------интерфейс
// const Car = function(maxSpeed) {
//     this.maxSpeed = maxSpeed; // интерфейс который лежит в объекте ниже ("ех")
// }; // класс
// // --VS--
// const ex = new Car(100); // экземпляр

// ----------------------Прототипы(св-ва которые содержат ссылку куда-то)
// [[Prototype]] // в спецификации
// __proto__ // в консоли браузера

// ---
// const animal = {
//   barks: true,
// };

// const dog = {
//   sound: 'woooof',
// };

// console.log('dog: ', dog);

// console.log(dog.sound); // woooof
// console.log(dog.barks); // true
// console.log(dog.hasOwnProperty('qweqwe')); // false
// console.log(dog.qwe); // undefined
// // цепочка прототипов бесконечная

// ------VS-----
// const animal = {
//   barks: true,
// };

// const dog = {
//   sound: 'woooof',
// };

// const dog = Object.create(animal);
// dog.sound = 'woof';

// console.log('dog: ', dog);

// console.log(dog.sound); // woooof
// console.log(dog.barks); // true
// console.log(dog.hasOwnProperty('qweqwe')); // false
// console.log('dog.hasOwnProperty("sound"): ', dog.hasOwnProperty('sound')); // собственное св-во
// console.log('dog.hasOwnProperty("barks"): ', dog.hasOwnProperty('barks')); // не собственное св-во(унаследованное)
// console.log(dog.qwe); // undefined
// цепочка прототипов бесконечная---

// =====по умолчанию цикл for in(перебирает всю цепочку прототипов) перебирает собственные и унаследованные св-ва========
// for (const key in dog) {
//   console.log(key); // имеем и sound и barks
// }
// -------vs
// for (const key in dog) {
//   if (!dog.hasOwnProperty(key)) continue;

//   console.log(key);
// }

// -------------------------------0.28.10
// const Hero = function (name, xp) {
//   // this = {}

//   // this.__proto__ = Hero.prototype
//   // the same that
//   // this = Object.create(Hero.prototype)
//   this.name = name;
//   this.xp = xp;

//   // return this;
// };

// console.log(Hero.prototype);

// Hero.prototype.coolProp = 'cool prop';

// const mango = new Hero('Mango', 1000);

// console.log(mango);

// --------continue------a very good example
// const Hero = function (name, xp) {
//   // this = {}

//   // this.__proto__ = Hero.prototype
//   // the same that
//   // this = Object.create(Hero.prototype)
//   this.name = name;
//   this.xp = xp;

//   // return this;
// };

// Hero.prototype.changeName = function (name) {
//   console.log('this: ', this);
//   this.name = name;
// };

// console.log('Hero.prototype: ', Hero.prototype);

// const mango = new Hero('Mango', 1000);
// mango.changeName('Mango the great');
// console.log(mango);

// console.log('mango.__proto__ === Hero.prototype: ', mango.__proto__ === Hero.prototype); // true

// const poly = new Hero('Poly', 2000);
// poly.changeName('Poly the malificent');
// console.log(poly);

// console.log('poly.__proto__ === Hero.prototype: ', poly.__proto__ === Hero.prototype); // true


// =======Example Vanilla_JS==========0.55.00======use HTML file
// 'use strict';

// const Hero = function (name, xp) {
//   this.name = name;
//   this.xp = xp;
// };

// Hero.prototype.gainXp = function (amount) {
//   console.log(`${this.name} gained ${amount} experience points`);
//   this.xp += amount;
// };

// // const mango = new Hero('Mango', 1000);

// // mango.gainXp(500);

// // console.log(mango);

// const Warrior = function (name, xp, weapon) {
//   // при создании new Warrior тут прописывается // this = Object.create(Warrior.prototype);
//   Hero.call(this, mane, xp); // это даст
//   // this: {name: 'Mango', xp: 1000}
//   this.weapon = weapon;
// };

// Warrior.prototype = Object.create(Hero.prototype);
// // {__proto__: Hero.prototype}

// Warrior.prototyte.constructor = Warrior;
// // {__proto__: Hero.prototype, constructor: Warrior}

// Warrior.prototype.attack = function () {
//   console.log(`${this.name} attacks with ${this.weapon}`);
// };

// const mango = new Warrior('Mango', 1000, 'halberd');
// console.log(mango);

// mango.gainXp(2000);

// ---===VS===---in ES6
class Hero {
  constructor(name) {
    this.name = name;
  }

  gainXp() {}
}

class Warrior extends Hero {
  constructor(name, weapon) {
    super(name);

    this.weapon = weapon;
  }
}

const mango = new Warrior('Mango', 'axe');

console.log(mango);

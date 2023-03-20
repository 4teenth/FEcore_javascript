/* eslint-disable strict */

'use strict';

// ======ES6 Классы=========связано с прошлым вебинаром
// Класс - это та же обычная функция-конструктор
//  ES6
// class Hero {
//     static randomProp = 'random prop value';

//     static doStuff() {} // статич.методы не идут на свойство prototype(всё что через static)(ни св-ва, ни методы(см. консоль браузера))

//   constructor(name, xp) {
//     // this is method(записываются на prototype нашего new Hero)
//     this.name = name;
//     this.xp = xp;
//   }

//   changeName(name) {
//     // this is method(записываются на prototype нашего new Hero)
//     this.name = name;
//   }
// }

// console.dir(Hero);
// // то же что и это(ниже) из ES5
// // const Hero = function (name, xp) {
// //   this.name = name;
// //   this.xp = xp;
// // };
// const mango = new Hero('Mango', 1000);
// console.log(mango);
// console.log(
//   'mango.__proto__ === Hero.prototype: ',
//   mango.__proto__ === Hero.prototype,
// );

// ==========getterы & setterы==========
// class Hero {
//   static randomProp = 'random prop value';

//   static doStuff() {} // статич.методы не идут на свойство prototype(всё что через static)(ни св-ва, ни методы(см. консоль браузера))

//   constructor(name, xp) {
//     this.yourName = name;
//     this.xp = xp;
//   }

//   set name(newName) {
//       this.yourName = newName;
//   }
// //   алетернатива куску кода ниже
// //   changeName(name) {
// //     this.name = name;
// //   }
//   get name() {
//       return this.yourName;
//   }
// //   заменяет кусок кода ниже
// //   getName() {
// //     return this.name;
// //   }

// // get & set заменяет разные две функции для одинакового св-ва - одним
// }

// const mango = new Hero('Mango', 1000);

// console.log(mango.name);
// mango.name = 'Poly';

// console.log(mango); // смотрим сеттер

// console.log(mango.name); // смотрим геттер

// ------------------------
// class Hero {
//   static randomProp = 'random prop value';

//   static doStuff() {} // статич.методы не идут на свойство prototype(всё что через static)(ни св-ва, ни методы(см. консоль браузера))

//   constructor(name, xp) {
//     this.yourName = name;
//     this.xp = xp;
//   }

//   //   gainXp(amount) { // а теперь объявляем не как метод класса, а как ПУБЛИЧНОЕ СВОЙСТВО
//   //     this.xp += amount;
//   //     console.log(this.xp);
//   //   }
//   gainXp = (amount) => {
//     this.xp += amount;
//     console.log(this.xp);
//   }

//   set name(newName) {
//     this.yourName = newName;
//   }
//   //   алетернатива куску кода ниже
//   //   changeName(name) {
//   //     this.name = name;
//   //   }
//   get name() {
//     return this.yourName;
//   }
//   //   заменяет кусок кода ниже
//   //   getName() {
//   //     return this.name;
//   //   }

//   // get & set заменяет разные две функции для одинакового св-ва - одним
// }

// const mango = new Hero('Mango', 1000);

// console.log(mango.name);
// mango.name = 'Poly';

// console.log(mango.name);

// const fn = function(callback) {
//   callback(1000);
// };

// fn(mango.gainXp.bind(mango)); // НЕ забываем привязывать контекст

// ========ПУБЛИЧНОЕ СВОЙСТВО класса=======
// class Hero {
//   static randomProp = 'random prop value';

//   static doStuff() {} // статич.методы не идут на свойство prototype(всё что через static)(ни св-ва, ни методы(см. консоль браузера))

//   constructor(name, xp) {
//     this.yourName = name;
//     this.xp = xp;
//   }
//   // this.a
//   a = 5;
//   //   gainXp(amount) { // а теперь объявляем не как метод класса, а как ПУБЛИЧНОЕ СВОЙСТВО
//   //     this.xp += amount;
//   //     console.log(this.xp);
//   //   }
//   gainXp = amount => {
//     this.xp += amount;
//     console.log(this.xp);
//   };

//   set name(newName) {
//     this.yourName = newName;
//   }
//   //   алетернатива куску кода ниже
//   //   changeName(name) {
//   //     this.name = name;
//   //   }
//   get name() {
//     return this.yourName;
//   }
//   //   заменяет кусок кода ниже
//   //   getName() {
//   //     return this.name;
//   //   }

//   // get & set заменяет разные две функции для одинакового св-ва - одним
// }

// const mango = new Hero('Mango', 1000);

// console.log(mango.name);
// mango.name = 'Poly';

// console.log(mango.name);

// const fn = function(callback) {
//   callback(1000);
// };

// fn(mango.gainXp); // при публичном св-ве нет необходимости привязывать контекст, потому что уже есть стрелочная ф-ция с привызанным контекстом

// ========Наследование=========0.25.00----нужен хтмл
class Hero {
  constructor(name, xp) {
    this.name = name;
    this.xp = xp;
  }

  gainXp(amount) {
    console.log(`${this.name} gained ${amount} experience points`);
    this.xp += amount;
  }
}

class Warrior extends Hero {
  constructor(name, xp, weapon) {
    super();
    this.weapon = weapon;
  }

  attack() {
    console.log(`${this.name} attacks with ${this.weapon}`);

    super.gainXp(10); // - super.gainXp это вызов какого-то родительского метода
    // Hero.prototype.gainXp.call(this)
  }
}

const mango = new Warrior('Mango', 1000, 'axe');
console.log(mango);

mango.gainXp(1000);

mango.attack();

class Berserk extends Warrior {
  constructor(name, xp, weapon, roar) {
    super(name, xp, weapon);

    this.roar = roar;
  }

  battlecry() {
    console.log(this.roar);
  }
}

const poly = new Berserk('Poly', 1000, 'halberd', 'Waaaaah!');
console.log(poly);

poly.battlecry();

// =======HW-6(5)=========0.41.30-----

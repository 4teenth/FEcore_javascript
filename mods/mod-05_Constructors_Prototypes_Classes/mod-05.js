// const employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage() {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };

// employee.getWage();

// ------------------конструкторы-------------
// const Hotel = function (name, stars, capacity) {
//   this.name = name;
//   this.stars = stars;
//   this.capacity = capacity;
//   this.guestCount = 0;

//   this.greet = function (guestName) {
//     console.log(`Hello ${guestName}, wellcome to ${this.name}`);
//   };

//   this.addGuests = function (amount) {
//     this.guestCount += amount;
//   };

//   this.removeGuests = function (amount) {
//     this.guestCount -= amount;
//   };
// };

// const hotel = new Hotel('Sunrise Hotel', 5, 100);

// console.log(hotel);
// // Hotel {name: "Sunrise Hotel", greet: ƒ, addGuests: f, removeGuests: f}
// hotel.greet('Mango'); // Hello Mango, wellcome to Sunrise Hotel
// hotel.addGuests(50);
// hotel.removeGuests(50);

// ==============
// const mango = {
//   name: 'Mango',
//   sales: 5,
//   sell(product) {
//     this.sales += 1;
//     return `Manager ${this.name} sold ${product}.`;
//   },
// };

// console.log(mango.sales); // 5
// console.log(mango.sell('TV')); // Manager Mango sold TV
// console.log(mango.sell('Microwave')); // Manager Mango sold Microwave
// console.log(mango.sales); // 7

// const poly = {
//   name: 'Poly',
//   sales: 10,
//   sell(product) {
//     this.sales += 1;
//     return `Manager ${this.name} sold ${product}.`;
//   },
// };

// console.log(poly.sales); // 10
// console.log(poly.sell('TV')); // Manager Poly sold TV
// console.log(poly.sell('Microwave')); // Manager Poly sold Microwave
// console.log(poly.sales); // 12

// =======vs---------а темперь с пом.конструктора
// const Manager = function (name = 'manager', sales = 0) {
//   this.name = name;
//   this.sales = sales;

//   this.sell = function (product) {
//     this.sales += 1;
//     return `Manager ${this.name} sold ${product}.`;
//   };
// };

// const mango = new Manager('Mango', 5);
// console.log(mango.sales); // 5
// console.log(mango.sell('TV')); // Manager Mango sold TV
// console.log(mango.sell('Microwave')); // Manager Mango sold Microwave
// console.log(mango.sales); // 7

// const poly = new Manager('Poly', 10);
// console.log(poly.sales); // 10
// console.log(poly.sell('TV')); // Manager Poly sold TV
// console.log(poly.sell('Microwave')); // Manager Poly sold Microwave
// console.log(poly.sales); // 12

// ----------Прототипы--------------
// const animal = { eats: true };
// const dog = { barks: true };

// dog.__proto__ = animal;

// // В dog можно найти оба свойства
// console.log(dog.barks); // true
// console.log(dog.eats); // true

// ===========Object.create()
// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;

// console.log(dog.barks); // true
// console.log(dog.eats); // true

// ===========Object.prototype.hasOwnProperty()
// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;

// for (const key in dog) {
//   console.log(key); // barks, eats
// }
// ---vs---
// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;

// for (const key in dog) {
//   if (!dog.hasOwnProperty(key)) continue;

//   console.log(key); // barks
// }

// ===============Object.keys(obj)
// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;

// const dogKeys = Object.keys(dog);

// console.log(dogKeys); // ['barks']

// =========Свойство Function.prototype
// const Guest = function (name, room) {
//   this.name = name;
//   this.room = room;
// };

// const mango = new Guest('Mango', 28);

// console.log(mango);
//  -----------
// const Guest = function (name, room) {
//   this.name = name;
//   this.room = room;
// };

// Guest.prototype.showGuestInfo = function () {
//   console.log(`name: ${this.name}, room: ${this.room}`);
// };

// const mango = new Guest('Mango', 28);
// const poly = new Guest('Poly', 36);

// mango.showGuestInfo(); // name: Mango, room: 28
// poly.showGuestInfo(); // name: Poly, room: 36

// =========Свойство constructor
// const Guest = function (name, room) {
//   this.name = name;
//   this.room = room;
// };

// Guest.prototype = {
//   constructor: Guest,
// };

// ==================Наследование и конструкторы
// const Hero = function (name, xp) {
//   this.name = name;
//   this.xp = xp;
// };

//   /*
//    * Теперь у нас есть конструктор базового класса героя,
//    * добавим в prototype какой-то метод.
//    */
// Hero.prototype.gainXp = function (amount) {
//   console.log(`${this.name} gained ${amount} experience points`);
//   this.xp += amount;
// };

// const mango = new Hero('Mango', 1000);
// console.log(mango); // Hero { name: 'Mango', xp: 1000 }

// // Так как mango это экземпляр Hero, то ему доступны методы из Hero.prototype
// mango.gainXp(500); // Mango gained 500 experience points
// console.log(mango); // Hero { name: 'Mango', xp: 1500 }

// ----------...to be continued...смотреть теорию
// const Hero = function (name, xp) {
//   this.name = name;
//   this.xp = xp;
// };

// Hero.prototype.gainXp = function (amount) {
//   console.log(`${this.name} gained ${amount} experience points`);
//   this.xp += amount;
// };

// const Warrior = function (name, xp, weapon) {
//   Hero.call(this, name, xp);

//   this.weapon = weapon;
// };

// Warrior.prototype = Object.create(Hero.prototype);
// Warrior.prototype.constructor = Warrior;

// Warrior.prototype.attack = function () {
//   console.log(`${this.name} attacks with ${this.weapon}`);
// };

// const poly = new Warrior('Poly', 200, 'sword');

// console.log(poly);
// poly.attack();

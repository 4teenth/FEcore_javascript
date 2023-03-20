// http://codepen.io/Gorbulin/pen/XZMBvX?editors=0010
// https://gennadiy1970.github.io/intro_to_prototype/

// =========функция фабрика объектов======
// function getObject(name, surname = 'Simpson') {
//   return {
//     name,
//     surname,
//   };
// }

// console.log(getObject('Bart'));
// console.log(getObject('Homer'));

// // { name: 'Bart', surname: 'Simpson' }
// // { name: 'Homer', surname: 'Simpson' }

// ---------------next ex функция фабрика объектов
// function getObject(name) {
//   let surname = 'Simpson';
//   return {
//     get() {
//       return surname;
//     },
//     set(value) {
//       surname = value;
//     },
//     name,
//   };
// }

// const bart = getObject('Bart');
// console.log(bart.name);
// console.log(bart.get());
// // Bart
// // Simpson

// --------------функция конструктор объектов [[Call]] [[Constructor]]

// // имя с большой буквы, чтобы визуально отличить от обычной функции
// function Human(name) {
//   // this - чтобы при создании объекта свойство было записано в объект
//   // т.к. имя объекта не известно заранее (или объект анонимный)
//   this.name = name;
// }
// // общее свойство, доступное всем объектам, но недоступное  самой функции
// Human.prototype.lastname = 'Simpson';

// // статическое свойство - доступное только для функции, но не для объектов
// Human.cartoonMovie = true;

// if (Human.cartoonMovie) {
//   // оператор new
//   const bart = new Human('Bart');
//   console.log(bart.name);

//   // простой синтаксис вызова наследуемого свойства
//   console.log(bart.lastname);
//   console.log('static', bart.cartoonMovie);
// }
// // Bart
// // Simpson
// // static undefined

// ------------ex
// function User() {}

// User.hello = 'Hello'; - относится к конструктору
// User.prototype.world = 'World'; - относится  к объекту

// const user = new User();
// // как вызвать текст 'Hello World' ?
// console.log(`${User.hello} ${user.world}`);
// // Hello World

// -----------------объявить способ 3мя методами
// const obj = {};

// obj.name = 'Name'; // 1
// odj.lastname = 'Name'; // 2

// // 3
// Object.defineProperty(obj, 'surname', {
//   // enumerable: true,
//   // configurable: true,
//   // writable: true,
//   value: 'Simpson',
// });

// ---------
// function User() {}

// const user = new User();

// // instanceof - объект является наследником конструктора ?
// console.log(user instanceof User); // - yes(true)
// console.log(user instanceof Object); // - yes(true)
// console.log(user instanceof Array); // - no(false)

// --------------------
function Human(name) {
  this.name = name;
}

Human.prototype.lastname = 'Simpson';
Human.prototype.getInfo = function () {
  return `${this.name} ${this.lastname}, ${this.age} years old`;
};

function User(name, age) {
  // 1st step
  Human.call(this, name);
  this.age = age;
}
// 2
User.prototype = Object.create(Human.prototype); // {} this => Human
// 3
User.prototype.consructor = User; // {} this => User
const user = new User('Bart', 10);

// instanceof - объект является наследником конструктора ?
console.log(user instanceof User);
console.log(user instanceof Object);
console.log(user instanceof Human);

console.log(user.getInfo());
// true
// true
// true
// Bart Simpson, 10 years old

// web-repeta-05-1

// const Counter = function ({ initialValue = 0, step = 1 }) { // конструктор
//   // this = {}
//   // this.__proto__ = Counter.prototype;

//   this.value = initialValue; // свойства
//   this.step = step;          // свойства

// //   this.increment = function () {
// //     this.value += this.step;
// //   };

//   // return this;
// };

// Counter.prototype.increment = function () { // методы для обновления этих свойств
//   this.value += this.step;
// };

// Counter.prototype.decrement = function () { // методы для обновления этих свойств
//   this.value -= this.step;
// };

// const counter = new Counter({ initialValue: 10, step: 5 });

// const counterValueField = document.querySelector('.js-counter-value');
// const incrementBtn = document.querySelector('button[data-action="increment"]');
// const decrementBtn = document.querySelector('button[data-action="decrement"]');

// // counterValueField.textContent = 100000; // - меняет значение textContent объекта "р"
// counterValueField.textContent = counter.value;

// incrementBtn.addEventListener('click', () => { // ---0.31.13---
//   counter.increment();
//   // console.log('clicked increment!');
//   // console.log('counter.value: ', counter.value);
//   counterValueField.textContent = counter.value;
// });

// decrementBtn.addEventListener('click', () => {
//   counter.decrement();
//   counterValueField.textContent = counter.value;
// });
// // ---смотрим консоль в браузере---
// console.log(counterValueField);
// console.dir(incrementBtn);
// console.dir(decrementBtn);

// ----можно ещё так----
// const Counter = function ({ initialValue = 0, step = 1 }) { // конструктор
//   // this = {}
//   // this.__proto__ = Counter.prototype;

//   this.value = initialValue; // свойства
//   this.step = step; // свойства

//   //   this.increment = function () {
//   //     this.value += this.step;
//   //   };

//   // return this;
// };

// Counter.prototype.increment = function () { // методы для обновления этих свойств
//   this.value += this.step;
// };

// Counter.prototype.decrement = function () { // методы для обновления этих свойств
//   this.value -= this.step;
// };

// const counter = new Counter({ initialValue: 10, step: 5 });

// const counterValueField = document.querySelector('.js-counter-value');
// const incrementBtn = document.querySelector('button[data-action="increment"]');
// const decrementBtn = document.querySelector('button[data-action="decrement"]');

// const udateCounterValueField = () => {
//   counterValueField.textContent = counter.value;
// };
// incrementBtn.addEventListener('click', () => { // ---0.31.13---
//   counter.increment();
//   // console.log('clicked increment!');
//   // console.log('counter.value: ', counter.value);
//   udateCounterValueField();
// });

// decrementBtn.addEventListener('click', () => {
//   counter.decrement();
//   udateCounterValueField();
// });
// // ---смотрим консоль в браузере---
// console.log(counterValueField);
// console.dir(incrementBtn);
// console.dir(decrementBtn);

// ----Статические свойства--------
const Counter = function ({ initialValue = 0, step = 1 }) { // конструктор
  // this = {}
  // this.__proto__ = Counter.prototype;

  this.value = initialValue; // свойства
  this.step = step; // свойства

  //   this.increment = function () {
  //     this.value += this.step;
  //   };

  // return this;
};

// Counter.doStuff = function () { // статическое св-во или стат. метод
//   console.log('doing stuff');
// };

// Notepad.Priority = { // статическое св-во или стат. метод
//   LOW: 0,
//   NORMAL: 1,
//   HIGH: 2,
// };
// Notepad.Priority.LOW

Counter.prototype.increment = function () { // методы для обновления этих свойств
  this.value += this.step;
};

Counter.prototype.decrement = function () { // методы для обновления этих свойств
  this.value -= this.step;
};

const counter = new Counter({ initialValue: 10, step: 5 });

const counterValueField = document.querySelector('.js-counter-value');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

const udateCounterValueField = () => {
  counterValueField.textContent = counter.value;
};
incrementBtn.addEventListener('click', () => { // ---0.31.13---
  counter.increment();
  // console.log('clicked increment!');
  // console.log('counter.value: ', counter.value);
  udateCounterValueField();
});

decrementBtn.addEventListener('click', () => {
  counter.decrement();
  udateCounterValueField();
});
// ---смотрим консоль в браузере---
console.log(counterValueField);
console.dir(incrementBtn);
console.dir(decrementBtn);

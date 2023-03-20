/* eslint-disable prefer-const */
/* eslint-disable no-var */
// let foo = { n: 1 };
// const bar = foo;

// foo.x = foo = { n: 2 };

// console.log(foo.x);
// console.log(foo);
// console.log(bar);
// -------------
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i));
// }
// -----------------
// (() => {
//   console.log('START');
//   const interval = setInterval(() => {
//     console.log('setInterval');
//     clearInterval(interval);
//   }, 0);
//   Promise.resolve().then(() => console.log('promise'));
//   console.log('END');
// })();
// --------------
// const foo = ((X, func = () => X) => {
//   var X;
//   var Y = X;
//   X = 2;
//   return [X, Y, func()];
// })(1);
// console.log(foo);
// --------------
// function func1(x, y) {
//   arguments[0] = y;
//   return x;
// }

// function func2(x, y) {
//   return [arguments[1], func1(x, y)];
// }

// const aaa = func2(1, 2);
// console.log(aaa);
// --------------
// let f1 = () => {};
// f1();

// let f2 = () => {
//   this.a = 1;
// };

// new f2();

// let f3 = () => arguments;
// f3('a');

// undefined
// TypeError
// ReferenceError
// ---------------
function* multiplier(value) {
  const first = 2 * (yield (value / 2));
  const second = yield (first);
  return (value * first * second);
}

const multi = multiplier(10);
multi.next(1);
multi.next(10);
multi.next(1);
// {value: 5, done: false}
// {value: 20, done: false}
// {value: 200, done: true}

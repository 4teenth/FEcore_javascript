// ----callback(он без вызова внутри, без () .)

// function calc(a, b, cllbck) {
//   return cllbck(a, b);
// }

// const add = (a, b) => a + b;
// const mult = (a, b) => a * b;
// const div = (a, b) => a / b;
// const sub = (a, b) => a - b; // -const sub = (a, b) => { return a - b };

// const res = calc(2, 3, add);

// console.log('add 2 + 3 =', calc(2, 3, add));
// console.log('mult 2 * 3 =', calc(2, 3, mult));
// console.log('div 2 + 3 =', calc(2, 3, div));
// console.log('sub 2 + 3 =', calc(2, 3, sub));
// ---
// function calc(a, b, foo) {
//   if (typeof foo === 'function') {
//     return foo(a, b);
//   }
//   if (typeof foo === 'number') {
//     return a + b + foo;
//   }
//   return null;
// }

// const add = (a, b) => a + b;

// const res = calc(2, 3, add);

// const res2 = calc(2, 3, 30);

// // на место вызова функции вернётся число
// const res3 = calc(2, 3, add(10, 20));

// console.log(res);
// console.log(res2);
// console.log(res3);


// ----carrying - разбиваем аргументы

// function usuall(a, b) {
//   return a + b;
// }

// function currying(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// console.log(usuall(10, 100));
// console.log(currying(10)(100));
// ----
// const Ukraine = 20;
// const Romania = 19;
// const Poland = 22;

// function calc(country) {
//   function getVAT(value) {
//     return (value / 100) * country;
//   }
//   return getVAT;
// }

// const getVATUkraine = calc(Ukraine);
// const getVATRomania = calc(Romania);
// const getVATPoland = calc(Poland);

// console.log();
// console.log(`Для 1000 грн НДС составит ${getVATUkraine(1000)} грн`);
// console.log(`Для 1000 лей НДС составит ${getVATRomania(1000)} грн`);
// console.log(`Для 1000 злотых НДС составит ${getVATPoland(1000)} грн`);
// -----

// ----Пример таска-5 из дз-2 с частичным использованием функций

// function checkSpam(...spamWords) {
//   return function checkInclude(str) {
//     const arg = [...spamWords];
//     const s = str.toLowerCase();
//     for (let i = 0; i < arg.length; i += 1) {
//       if (s.includes(arg[i].toLowerCase())) return true;
//     }
//     return false;
//   };
// }

// const checkForSpamSale = checkSpam('spam', 'sale');
// const checkForNewsNow = checkSpam('news', 'now');

// console.log(checkForSpamSale('spammer sa lE')); // true
// console.log(checkForSpamSale('spammer sa lE sPam')); // true
// console.log(checkForSpamSale('spammer sa sAle lE')); // true
// console.log(checkForSpamSale('Latest technology news')); // false
// console.log(checkForSpamSale('JavaScript weekly newsletter')); // false
// console.log(checkForSpamSale('Get best sale offers now!')); // true
// console.log(checkForSpamSale('[SPAM] How to earn fast money?')); // true
// ------

// ----Closure - Замыкания 1.03.00

// function tic() {
//   let counter = 0;
//   return function () {
//     return counter++;
//   };
// }

// // let a = 0;
// // ++a; // 1 - префиксная форма
// // a++; // 0 - постфиксная
// // а на след. шаге уже // 1

// const count = tic();
// const otherCount = tic();

// console.log(count);
// console.log('count', count());
// console.log('count', count());
// console.log('count', count());
// console.log('otherCount', otherCount());
// console.log('otherCount', otherCount());
// console.log('otherCount', otherCount());
// console.log('count', count());
// console.log('count', count());
// console.log('otherCount', otherCount());
// ----
// -Проверка на пароль(1.06.50 + говорим о var), в случае успеха(для пробы нужен хтмл с прописью данного js)

// function secretPassword() {
//     var password = '*****';
//     function isGuessPassword (guess) {
//         return guess === password;
//     }
//     return isGuessPassword;
// }

// const logging = secretPassword();
// console.log(logging('123')); // false
// console.log(logging('*****')); // true
// // --ORRR---the same(тут и let будет работать)
// function secretPassword() {
//     var password = '*****';
//     return function isGuessPassword (guess) {
//         return guess === password;
//     }
//     // return isGuessPassword;
// }

// const logging = secretPassword();
// console.log(logging('123')); // false
// console.log(logging('*****')); // true

// VAR не может выпрыгнуть только изнутри функции, for это не функция из него он выпрыгивает.
// ВАЖНО 1.07.00 - при let будет ожидаемый результат, при var (i) запомнит последнее значения выпрыгивающего var - 5.
// const result = [];

// for (var i = 0; i < 5; i++) {
//   result[i] = function () { // - замыкание(вытаскивает i при вызове(если let) если var возьмёт по последнему значению i)
//     // Global i(при var) - // Global
//     // Closure - // Closure i(при let)
//     console.log(i);
//   };
// }
// console.log(i); // - var и здесь увидел i(и забрал последнее значение - 5)(странно, даже без этого i заберет 5ку)
// // Global i(при var) - // Global
// // Closure - // Closure i(при let)
// console.log(result[0]()); // 5, awaited 0
// console.log(result[1]()); // 5, awaited 1
// console.log(result[2]()); // 5, awaited 2
// console.log(result[3]()); // 5, awaited 3
// console.log(result[4]()); // 5, awaited 4

// ---Хороший пример как избегать пересечения с чужим кодом(никто не имеет доступа к твоим параметрам(функции, переменной))
// Посути выполнить функцию, но чтобы к ней небыло доступа 1.20.00
// const hell = 'Hi'
// (Immediately Invoked Function Expression - IIFE)
// Лучше пробовать через консоль браузера

// (function (name) {
//   const hello = function () {
//     console.log('Hello,', name);
//   };
//   hello();
// }('User'));

// (function add(a, b) {
// //   const Hero { - недоступно никому
// //       power: 0;
// //   };
//   return a + b;
// }(2, 3));
// // console.dir(add) - для консоли браузера

// ---тоже классный пример по примеру выше 1.26.00

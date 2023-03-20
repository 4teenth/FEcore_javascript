// Создать функцию для генерации массива длиной n
// c элементами из случайных целых чисел от 0 до n

// =====ex 1======
// function getRandomNumbersArray(n) {
//   return Array(n).fill(0).map(e => Math.floor(Math.random() * n));
//   // - без fill не заведётся
// }

// console.log(getRandomNumbersArray(100));

// ========ex 2==========
// // Создать функцию для генерации строки из n строк <li>
// // с элементами массива в качестве текста

// const arr = ['CSS', 'HTML', 'JS', 'React', 'NodeJS'];

// const getList = arr => arr.map(e => `<li>${e}</li>`).join('\n');
// // .join('\n') - делает из массива - строку

// /** `<li>CSS</li>
//  * <li>HTML</li>
//  * <li>JS</li>
//  * <li>React</li>
//  * <li>NodeJS</li>` */

// console.log(getList(arr));

// =======ex 3=============
// // Создать функцию для генерации строки из n строк <li><a href="">
// // c элементами массива в качестве текста

// const arr = [
//   { name: 'CSS', link: 'http://developer.mozilla.org/ru/docs/Web/CSS' },
//   { name: 'HTML', link: 'http://developer.mozilla.org/ru/docs/Web/HTML' },
//   { name: 'JS', link: 'http://developer.mozilla.org/ru/docs/Web/JavaScript' },
//   { name: 'React', link: 'http://ru.reactjs.org/' },
//   { name: 'NodeJS', link: 'http://nodejs.org/ru/docs/' },
// ];

// // const getList = arr => arr.map(e => `<li><a href="${e.name}">${e.link}</a></li>`); добавляем .join('\n') - делает из массива - строку, если надо
// // Деструктурируем
// const getList = arr => arr.map(({ name, link }) => `<li><a href="${name}">${link}</a></li>`).join('\n');

// // /** `<li><a href="http://developer.mozilla.org/ru/docs/Web/CSS">CSS</a></li>
// //  * <li><a href="http://developer.mozilla.org/ru/docs/Web/HTML">HTML</a></li>
// //  * <li><a href="http://developer.mozilla.org/ru/docs/Web/JavaScript">JS</a></li>
// //  * <li><a href="http://ru.reactjs.org/">React</a></li>
// //  * <li><a href="http://nodejs.org/ru/docs/">NodeJS</a></li>` */

// console.log(getList(arr));

// ===========ex 4==============
// // Создать функцию для генерации из n строк <li><a href="">
// // c элементами массива в качестве текста только для тех свойств,
// // которые isReady: false

// const arr = [
//   {
//     skill: {
//       name: 'CSS',
//       link: 'http://developer.mozilla.org/ru/docs/Web/CSS',
//       isReady: true,
//     },
//   },
//   { skill: { name: 'HTML', link: 'http://developer.mozilla.org/ru/docs/Web/HTML', isReady: true } },
//   { skill: { name: 'JS', link: 'http://developer.mozilla.org/ru/docs/Web/JavaScript', isReady: false } },
//   { skill: { name: 'React', link: 'http://ru.reactjs.org/', isReady: false } },
//   { skill: { name: 'NodeJS', link: 'http://nodejs.org/ru/docs/', isReady: false } },
// ];

// // const mustLearn = arr => arr
// // .filter(e => !e.skill.isReady)
// // .map(({ name, link }) => `<li><a href="${name}">${link}</a></li>`)
// // .join('\n');
// // ---теперь с деструктурирующим присваиванием
// const mustLearn = arr => arr
//   .filter(({ skill: { isReady } }) => !isReady)
//   .map(({ name, link }) => `<li><a href="${name}">${link}</a></li>`)
//   .join('\n');

// console.log(mustLearn(arr));

// ===========ex 5 ==========
// // Создать функцию для генерации из n строк <li><a href="">
// // c элементами массива в качестве текста только для тех свойств,
// // которые isReady: false

// const skills = [
//   {
//     skill: {
//       name: 'CSS',
//       link: 'http://developer.mozilla.org/ru/docs/Web/CSS',
//       hours: 300,
//       isReady: true,
//     },
//   },
//   {
//     skill: {
//       name: 'HTML', link: 'http://developer.mozilla.org/ru/docs/Web/HTML', hours: 300, isReady: true,
//     },
//   },
//   {
//     skill: {
//       name: 'JS', link: 'http://developer.mozilla.org/ru/docs/Web/JavaScript', hours: 350, isReady: false,
//     },
//   },
//   {
//     skill: {
//       name: 'React', link: 'http://ru.reactjs.org/', hours: 350, isReady: false,
//     },
//   },
//   {
//     skill: {
//       name: 'NodeJS', link: 'http://nodejs.org/ru/docs/', hours: 350, isReady: false,
//     },
//   },
// ];

// const readySkillsHours = arr => arr
//   .filter(({ skill: { isReady } }) => isReady)
//   // а теперь суммируем
//   // .reduce((acc, elem) => acc + elem.skill.hours, 0); // - okey dokey
//   // .reduce((acc, { skill }) => acc + skill.hours, 0); // - is not bat, but
//   .reduce((acc, { skill: { hours } }) => acc + hours, 0);

// // !isReady - выдаст всё что false
// /** 600 */

// console.log(readySkillsHours(skills));

// ========ex 6=========
// const { skills } = require('./magic-file');

// console.log(skills.length);

// /** {
//  *      css: {
//  *          link: '',
//  *          hours: '',
//  *          isReady: '',
//  *      }
//  *  } */

// // const setObj = arr => {
// //   return arr.map(({ skill }) => {
// //     const obj = {};
// //     const { name, link, hours, isReady } = skill;
// //     const prop = name.toLowerCase();
// //     obj[prop] = { link, hours, isReady };
// //     return obj;
// //   });
// // };
// // Было изменено автосохранением на-------------
// // const setObj = arr => arr.map(({ skill }) => {
// //   const obj = {};
// //   const {
// //     name, link, hours, isReady,
// //   } = skill;
// //   const prop = name.toLowerCase();
// //   obj[prop] = { link, hours, isReady };
// //   return obj;
// // });
// // Нормальный синтаксис теперь
// // const setObj = arr =>
// //   arr.map(({ skill: { name, link, hours, isReady } }) => ({
// //     [name.toLowerCase()]: { link, hours, isReady }
// //   }));
// // Было изменено автосохранением на===========
// const setObj = arr => arr.map(({
//   skill: {
//     name, link, hours, isReady,
//   },
// }) => ({
//   [name.toLowerCase()]: { link, hours, isReady },
// }));

// console.log(setObj(skills));

// ===========getObjFromArr===========
// // Задача по созданию объекта словаря из массива
// const source = [
//   ['один', 'one'],
//   ['два', 'two'],
//   ['три', 'three'],
//   ['четыре', 'four'],
// ];

// const res = {
//   one: 'один',
//   two: 'два',
//   three: 'три',
//   four: 'четыре',
// };

// // ! Возвращаемый объект помещать в круглые скобки !
// // const getObjFromArr = arr => arr.reduce(e => );
// // А можно деструктурировать
// // const [key, value] = ['один', 'one'];
// const getObjFromArr = arr => arr.reduce((acc, [key, value]) => ({ ...acc, [value]: key }), {});
// // const getObjFromArr = arr => arr.reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {}); // - наоборот

// const dictionary = getObjFromArr(source);
// console.log('dictionary = ', dictionary);

// // module.exports = { getObjFromArr }

// ===========unique==============
// // Создать функцию для фильтрации уникальных значений массива.(Все повторяющиеся будут отсечены)
// // Получив на входе исходный массив, функция вернёт новый массив уникальных значений.

// const source = [64, 6, 43, 47, 44, 48, 0, 64, 6, 43, 47, 44, 48];
// const resULT = [64, 6, 43, 47, 44, 48, 0];
// // ----------------------------------//64
// // -----------------------------------//  0          0
// // -----------------------------------//  7          0
// const getUniqElem = arr => arr.filter((e, i, a) => a.indexOf(e) === i);

// console.log(getUniqElem(source));
// // module.exports = { getUniqElem };

// ==============updateProp===========
// // Задача по замене объекта в массиве

// // const updateProp = (arr, oldValue, newValue) => arr.map(e => (e.name === 'two' ? { name: 'два' } : e)); // worked
// // const updateProp = (arr, oldValue, newValue) => arr.map(e => (e.name === oldValue ? { name: newValue } : e)); // again worked but
// const updateProp = (arr, oldValue, newValue) => arr.map(e => (e.name === oldValue ? { ...e, ...{ name: newValue } } : e));

// const source = [
//   { name: 'one' },
//   { name: 'two' },
//   { name: 'three' },
//   { name: 'four' },
// ];

// const res = [
//   { name: 'one' },
//   { name: 'два' },
//   { name: 'three' },
//   { name: 'four' },
// ];

// console.log(updateProp(source, 'two', 'два'));
// // module.exports = { updateProp };

// ==========just an ex=========
// const ann = {
//   name: 'Ann',
//   frontend: 'html',
// };

// const skill = {
//   frontend: 'css',
//   // frontend: ['css', 'html']
// };
// // Кто правее тот и прав
// const res = { ...ann, ...skill };

// console.log(res);

// ===========flatten---как имитировать встроенный flat(как сделать массив встроенным)==========1.12.20 **
// const cb = (acc, elem) => (Array.isArray(elem) ? [...acc, ...elem] : [...acc, elem]);

// const flatten = arr => arr.reduce((acc, elem) => (Array.isArray(elem) ? [...acc, ...elem] : [...acc, elem]), []);

// const source = [
//   ['один', 'one'],
//   ['два', 'two'],
//   ['три', 'three'],
//   ['четыре', 'four'],
// ];
// console.log(flatten(source));

// // module.exports = { flatten };

// ====+1======
// const cb = (acc, elem) => (Array.isArray(elem) ? [...acc, ...elem] : [...acc, elem]);

// const flatten = arr => arr.reduce((acc, elem) => (Array.isArray(elem) ? [...acc, ...flatten(elem)] : [...acc, elem]), []);
// //                                                                            // ...elem
// const source = [
//   ['один', 'one'],
//   [['два', 'two'],
//     ['три', 'three'],
//     ['четыре', 'four']],
// ];
// console.log(flatten(source));

// ===========flattenDeep===========
// // Напиши функцию flatten(arr), принимающую параметры arr - массив с элементами
// // часть из которых является массивами.

// // Функция должна проверять каждый элемент и если этот элемент является массивом,
// // то подставлять значения этого массива в результирующий массив.
// // Проверяются все уровни вложенности.

// // PS: обязательно используй перебирающие методы массивов, никаких for!

// function flattenDeep(array) {
//   return array.reduce(
//     (acc, el) => (Array.isArray(el) ? [...acc, ...flattenDeep(el)] : [...acc, el]), [],
//   );
// }

// // module.exports = { flattenDeep };

// ==========stack-size============try this in your browser/ рекурсия - это когда ф-ция вызывает сама себя
// const getStackDepth = (i) => {
//   try { // try as if - продолжат вып.кода когда стек переполнен
//     return getStackDepth(++i);
//   } catch (err) { // catch as else - продолжат вып.кода когда стек переполнен
//     return i;
//   }
// };

// console.log(getStackDepth(0)); // Node 12521 // FF22062 // Edge 3649

// // const foo = i => {
// // return foo(++i);
// // };

// // console.log(foo(0));

// ==========implicit==============
// // косвенная или неявная рекурсия - неявная
// const foo = (i) => {
//   try {
//     return bar(++i);
//   } catch (err) {
//     return i;
//   }
// };
// const bar = (i) => {
//   try {
//     return foo(++i);
//   } catch (err) {
//     return i;
//   }
// };

// console.log('foo =', foo(0)); // Node 12521 // FF22062 // Edge 3649

// =============рекурсия - ф-я которая обращ. сама к себе===(как правило избегаем)===========(всегда нужно стараться минимизировать обращение к DOM)
// // Создать массив из чисел Фибоначчи и получить сумму массива
// function fibonacci(n) {
//   if (n === 0 || n === 1) {
//     return n;
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
// }

// // const mem = {
// //   "0": 0,
// //   "1": 1,
// //   ?
// // }

// // const res = "2" in mem ? mem['2'] : mem['2'] = fibonacci(n - 1);

// function getFibonacciArray(n) {
//   return Array(n).fill(0).map((e, i) => fibonacci(i));
// }

// // console.time('fib30');
// // console.log(getFibonacciArray(30)); // fib30: 0.209ms
// // console.timeEnd('fib30');

// // console.time('fib40');
// // console.log(getFibonacciArray(40)); // fib: 1793.419ms
// // console.timeEnd('fib40');

// console.time('fib43');
// console.log(getFibonacciArray(43)); // fib43: 9820.571ms
// console.timeEnd('fib43');

// ---------==========memoization - это... на  1.40.20===========-----------
// function fibonacci (num) {
//   const memo = {};

//   function f(n) {
//     let value;

//     if (n in memo) {
//       value = memo[n];
//     } else {
//       if (n === 0 || n === 1)
//         value = n;
//       else
//         value = f(n - 1) + f(n - 2);

//       memo[n] = value;
//     }

//     return value;
//   }

//   return f(num);
// };

// function getFibonacciArray(n) {
//   return Array(n).fill(0).map((e, i) => fibonacci(i));
// }

// // console.time('fib30');
// // console.log(getFibonacciArray(30)); // fib30: 0.209ms
// // console.timeEnd('fib30');

// // console.time('fib40');
// // console.log(getFibonacciArray(40)); // fib: 1793.419ms
// // console.timeEnd('fib40');

// // console.time('fib43');
// // console.log(getFibonacciArray(43)); // fib43: 9820.571ms
// // console.timeEnd('fib43');

// console.time('fib50');
// console.log(getFibonacciArray(50)); // fib50: 3.551ms
// console.timeEnd('fib50');

// --------=========calcUniq=======-----------used memoizaition
// // Задача по подсчёту одинаковых значений в массиве
// // const calcUniq = arr =>
// //   arr.reduce((accum, elem) => {
// //     accum[elem] ? (accum[elem] += 1) : (accum[elem] = 1);
// //     return accum;
// //   }, {});

// const source = [
//   'one',
//   'five',
//   'one',
//   'two',
//   'three',
//   'five',
//   'two',
//   'one',
//   'four',
//   'four',
//   'five',
//   'five',
//   'five',
// ];

// const res = {
//   one: 3,
//   two: 2,
//   three: 1,
//   four: 2,
//   five: 5,
// };

// const calcUniq = arr => arr.reduce((acc, elem) => ({...acc,
//   // elem // ты уже есть в объекте?
//   //   [elem]: 1    // если нет
//   //   [elem]: +=1    // если есть
//   acc.includes(elem) ? [elem]: + 1 : elem[]: 1
// }), {});

// // module.exports = { calcUniq };

// ===========sort=====task-1==============
// // Не совсем верное всегда выражение, разве что для en(и то, если говорим о сортировке текста)(влияет по кодировке..e.g. utf-8)
// const arrDefault = [8, 12, 16, 5, 9, 13, 6, 2, 10];
// arrDefault.sort();
// console.log('sort default - lecsigraphical', arrDefault);

// // // От большего к меньшему(use callback(look at 2nd row))
// // const arrDefault = [8, 12, 16, 5, 9, 13, 6, 2, 10];
// // arrToMin.sort((a, b) => b - a);
// // console.log('to min', arrToMin);

// // // От меньшего к большему(use callback(look at 2nd row))
// // const arrDefault = [8, 12, 16, 5, 9, 13, 6, 2, 10];
// // arrToMax.sort((a, b) => a - b);
// // console.log('to max', arrToMax);

// ------task-2-------
// // sort: если cb true, то перестановка
// // [100, 1].sort((a, b) => true) // [1, 100]

// // sort: если cb false, то перестановки нет
// // [100, 1].sort((a, b) => false) // [100, 1]

// const getSorted = arr => arr.sort((a, b) => a - b);

// // Вопрос: написать пару чисел в массиве в правильном порядке после
// // sort((a, b) => a - b)
// // [1168, 1043] // return []

// // Вопрос: порядок будет уменьшающийся или увеличивающийся
// sort((a, b) => b - a)
//   [12, 10, 22]; // return []

// -------task-3---------
// const getAttCharCode = str => str.split('').map(e => e.charCodeAt(0));

// const arrFirst = getAttCharCode(strFirst);
// const arrSecond = getAttCharCode(strSecond);

// console.log(arrFirst); // [ 1168, 1072, 1085, 1086, 1082 ]
// console.log(arrSecond); // [ 1043, 1072, 1088, 1085, 1086 ]

// // const arr = ["Ґанок", "Гарно"];
// const arr = [
//   // Ґ     а     н     о     к
//   [1168, 1072, 1085, 1086, 1082],
//   // Г     а     р     н     о
//   [1043, 1072, 1088, 1085, 1086],
// ];

// --------task-4-letters-sort----------1.56.30*
// // http://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare

// const arrDefault = ['AA', 'A', 'aa', 'a', 'aaa', 'AAA', 'ґанок', 'гоуайти', 'Ґанок'];
// arrDefault.sort();
// console.log('sort default - lecsigraphical', arrDefault);

// // От меньшего к большему
// const arrLocaleCompare = ['AA', 'A', 'aa', 'a', 'aaa', 'AAA', 'ґанок', 'гоуайти', 'Ґанок'];
// arrLocaleCompare.sort((a, b) => a.localeCompare(b, 'uk'));
// console.log('LocaleCompare - ', arrLocaleCompare);

// // От большего к меньшему
// const arrLocaleCompareReverse = ['AA', 'A', 'aa', 'a', 'aaa', 'AAA', 'ґанок', 'гоуайти', 'Ґанок'];
// arrLocaleCompareReverse.sort((a, b) => b.localeCompareReverse(a, 'uk'));
// console.log('LocaleCompareReverse - ', arrLocaleCompareReverse);

// ====-------------------------
// Какой-то callback
// cb(a,b) => -1, 1, 0
// sort (cd)

// -1: b, a
// 1: a, b
// 0: a, b

// -200 & -1
// 200 & 1

// ex/сравнивается регистр, см. на первое число
// 1000102120001 // все отрицательные числа начинаются с еденицы в программировании
// 0001200120010 // положительное

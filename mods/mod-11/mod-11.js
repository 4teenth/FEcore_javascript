// const date = new Date();

// // проверим количество мс с с начала эпохи Unix
// console.log(`Время в мс с начала эпохи Unix: ${date.getTime()}`);
// // "Время в мс с начала эпохи Unix: ....  значения будут меняться :-)
// // "Время в мс с начала эпохи Unix: 1504721892483"

// let result = 'Date: ';
// result += `${date.getFullYear()}/`; // год
// result += `${date.getMonth()}/`; // месяц, начиная с 0
// result += `${date.getDate()}. Day of week: `; // день-дата , начиная с 1 // or день недели, начиная с 1 ???
// result += `${date.getDay()}.`; // день недели, начиная с 0 // or день , начиная с 0 ???

// // result += ` Time: ${date.getHours()}:`; // часы
// // result += `${date.getMinutes()}:`; // минуты
// // result += `${date.getSeconds()}:`; // секунды
// // result += `${date.getMilliseconds()}`; // милисекунды

// // строка должна показать текущее время и дату
// console.log(result); // "Date: 2017/8/6. Day of week: 3. Time: 21:18:12:483"
// // ...  значения будут меняться :-)

// =========================

// // Для установки даты существует 2 способа. Установим 1500000000000мс
// // с начала эры Unix с помощью конструктора
// const date = new Date(2017, 6, 14, 5, 40, 0, 0);

// // Проверим
// console.log(`2017, 6, 14, 5, 40 соответствует ${date.getTime()}`);
// // "2017, 6, 14, 5, 40 соответствует 1500000000000"

// ==============================settery

// // Для установки даты существует 2 способа. Установим 1500000000000мс
// // с начала эры Unix с помощью конструктора
// const date = new Date(2017, 6, 14, 5, 40, 0, 0);

// // Проверим
// console.log(`2017, 6, 14, 5, 40 соответствует ${date.getTime()}`);
// // "2017, 6, 14, 5, 40 соответствует 1500000000000"

// /* С помощью методов set */
// // Создадим новый объект с текущей датой
// const secondDate = new Date();
// // --vs--
// // Изменим год и в нем же месяц и день месяца
// secondDate.setFullYear(2017, 6, 14);
// // Изменим час и в нем же минуты, секунды и милисекунды
// secondDate.setHours(5, 40, 0, 0);

// // Проверим
// console.log(`2017, 6, 14, 5, 40 соответствует ${secondDate.getTime()}`);
// // "2017, 6, 14, 5, 40 соотвествует 1500000000000"

// ==================chekout
// const date = new Date('March 5, 2017');
// console.log(date); // Sat Mar 05 2017 00:00:00 GMT+0200 (FLE Standard Time)
// ======================

// =======Форматирование и вывод дат=====
// const date = new Date();

// // формат вывода
// const options = {
//   weekday: 'long',
//   year: 'numeric',
//   month: 'short',
//   day: 'numeric',
//   hour: '2-digit',
//   minute: '2-digit',
// };

// // Украина
// const localeUk = date.toLocaleString('Uk-uk', options);
// console.log(localeUk); // понеділок, 19 бер. 2018 р., 17:42

// // USA
// const localeUs = date.toLocaleString('en-US', options);
// console.log(localeUs); // Monday, Mar 19, 2018, 5:43 PM

// // e.g.
// const localeUA = date.toString('Uk-uk', options);
// console.log(localeUA); // понеділок, 19 бер. 2018 р., 17:42

// =================Promise API- then====================

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     /*
//        * Если какое-то условие выполняется, то есть все хорошо,
//        * вызываем resolve и получает данные. Условие зависит от задачи.
//        */
//     resolve('Data passed into resolve function :)');

//     // Если что-то не так, вызваем reject и передаем ошибку
//     // reject("Error passed into reject function :(")
//   }, 2000);
// });

//   // Выполнится мгновенно
// console.log('BEFORE promise.then');

// const onResolve = (data) => {
//   console.log('INSIDE promise.then - onResolve');
//   console.log(data); // "Data passed into resolve function :)"
// };

// const onReject = (error) => {
//   console.log('INSIDE promise.then - onReject');
//   console.log(error); // "Error passed into reject function :("
// };

// promise.then(
//   // будет вызвана через 2 секунды, если обещание выполнится успешно
//   onResolve,
//   // будет вызвана через 2 секунды, если обещание выполнится с ошибкой
//   onReject,
// );

// // Выполнится мгновенно
// console.log('AFTER promise.then');

// // BEFORE promise.then
// // AFTER promise.then
// // INSIDE promise.then - onResolve
// // Data passed into resolve function :)

// ------Если onResolve и onReject не содержат сложной логики, их объявляют как инлайн функции в методе then.--
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // Если все ок, то вызывается resolve и передаем данные
//     resolve('Data passed into resolve function :)');

//     // Если что-то не так, вызваем reject и передаем ошибку
//     // reject("Error passed into reject function :(")
//   }, 2000);
// });

//   // Выполнится мгновенно
// console.log('BEFORE promise.then');

// promise.then(
//   // Будет вызвана через 2 секунды, если обещание выполнится успешно
//   (data) => {
//     console.log('INSIDE promise.then - onResolve');
//     console.log(data); // "Data passed into resolve function :)"
//   },
//   // Будет вызвана через 2 секунды, если обещание выполнится с ошибкой
//   (error) => {
//     console.log('INSIDE promise.then - onReject');
//     console.log(error); // "Error passed into reject function :("
//   },
// );

// // Выполнится мгновенно
// console.log('AFTER promise.then');

// =========catch===========
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('There was an error :(');
//   }, 2000);
// });

//   /*
//    * then не выполнится так как в функции fn, внутри new Promise(fn),
//    * был вызван reject(). А catch как раз выполнится через 2 секунды
//    */
// promise
//   .then((data) => {
//     console.log(data); // resolve('There was an error :('); ?
//   })
//   .catch((error) => {
//     console.log(error); // reject('There was an error :(');
//   });
// // There was an error :(

// ========finally============
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('success!');
//   }, 2000);
// });

// promise
//   .then(data => console.log(data)) // "success"
//   .catch(error => console.log(error))
//   .finally(() => console.log('finished!')); // "finished"

// ==========Цепочки промисов=============A very nice example
// // asyncFn(...)
// //   .then(...)
// //   .then(...)
// //   .then(...)
// //   .catch(...);

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 2000);
// });

// promise
//   .then((value) => {
//     console.log(value); // 5
//     return value * 2;
//   })
//   .then((value) => {
//     console.log(value); // 10
//     return value * 3;
//   })
//   .then((value) => {
//     console.log(value); // 30
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// ========Promise======Promise.all()=======
// const makePromise = (text, delay) => new Promise((resolve) => {
//   setTimeout(() => resolve(text), delay);
// });
// // -vs-the same
// // const makePromise = (text, delay) => {
// //     return new Promise(resolve => {
// //       setTimeout(() => resolve(text), delay);
// //     });
// //   };

// const promiseA = makePromise('promiseA', 1000);
// const promiseB = makePromise('promiseB', 3000);

// /*
//  * Выполнится спустя 3 секунды, когда выполнится второй промис с задержкой в 3c.
//  * Первый выполнится через секунду и просто будет готов
//  */
// Promise.all([promiseA, promiseB])
//   .then(result => console.log(result)) // ["promiseA", "promiseB"]
//   .catch(err => console.log(err));

// =====Promise.race()========
// const makePromise = (text, delay) => new Promise((resolve) => {
//   setTimeout(() => resolve(text), delay);
// });

// const promiseA = makePromise('promiseA', 1000);
// const promiseB = makePromise('promiseB', 3000);

// /*
//    * Выполнится спустя 1 секунду, когда выполнится самый быстрый promiseA
//    * с задержкой в 1c. Второй промис promiseB будет проигнорирован
//    */
// Promise.race([promiseA, promiseB])
//   .then(result => console.log(result)) // "promiseA"
//   .catch(err => console.log(err));

// ==============Promise.resolve(), Promise.reject() и Promise.finally()==========
// const getMessage = function (callback) {
//   const input = prompt('Введите сообщение');

//   callback(input);
// };

// const logger = message => console.log(message);

// getMessage(logger);
// --VS--now ->
// const getMessage = function () {
//   const input = prompt('Введите сообщение');

//   return Promise.resolve(input);
// };

// const logger = message => console.log(message);

// getMessage().then(message => logger(message));

// // Или еще короче
// getMessage().then(logger);

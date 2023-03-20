'use strict';

// Напиши функцию checkForSpam(str), принимающую 1 параметр string - строку.
// Функция проверяет ее на содержание слов spam и sale.
// Если нашли зарещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false. Слова в строке могут быть в произвольном регистре.

// Вызовы функции для проверки работоспособности твоей реализации.

const checkForSpam = function (str) {
  const badWordSpam = 'SPAM';
  const badWordSale = 'SALE';

  return (
    str.toUpperCase().includes(badWordSpam)
    || str.toUpperCase().includes(badWordSale)
  );
};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// ---OR---

// const checkForSpam = function (str) {
//   const badWordSpam = 'spam';
//   const badWordSale = 'sale';

//   const randomReg = str.toLowerCase();

//   return randomReg.includes(badWordSpam) || randomReg.includes(badWordSale);
// };

// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// ---OR---
// We can try to use String.prototype.replace() and cut some signs like [ and ],
// because a word what we need was written between [].

// const checkForSpam = function (str) {
//   const badWordSpam = 'spam';
//   const badWordSale = 'sale';

//   const randomReg = str.toLowerCase();
//   const uniqueWord = randomReg.split(' ');

//   for (const word of uniqueWord) {
//     if (word === badWordSpam || word === badWordSale) {
//       return true;
//     }
//   }
//   return false;
// };

// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

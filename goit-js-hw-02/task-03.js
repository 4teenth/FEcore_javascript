'use strict';

// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

// Вызовы функции для проверки работоспособности твоей реализации.

const findLongestWord = function (string) {
  const words = string.split(' ');
  let longestWord = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'

// 'i++' can use just in 'for', but better to use 'i += 1'
// anyString[0] - '[0]' - it is an index of the first word in our [Array](string) => ('The', 'Google', 'May')
// If we don't want to check the length of our 1st word in the array twice when we use a condition, we write in `for (let i = 1;...)`, but if put 'i = 0', it is not a mistake, just check the 1st word twice in the array.

// OR----

// const findLongestWord = function (string) {
//   const words = string.split(' ');
//   let longestWord = words[0];

//   for (const word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// };

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'

// const clients = ['Mango', 'Ajax', 'Poly'];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log('Logging clients: ', clients[i]);
// }
// console.log(clients.length);
// -/-/-/-/-/-
// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);
//  --------Императивный подход VS Декларативный подход-------------
// Императивный подход
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = [];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > 3) {
//     filteredNumbers.push(numbers[i]);
//   }
// }

// console.log(filteredNumbers); // [4, 5]
// -VS-
// Декларативный подход
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(value => {
//   return value > 3;
// }); // -> // const filteredNumbers = numbers.filter((value) => value > 3);

// console.log(filteredNumbers); // [4, 5]
// /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
// const words = [1, 2, 10, 8, 6, 100];

// const result = words.filter(value => value > 5);

// console.log(result);
// /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);
// // expected output: Array ["exuberant", "destruction", "present"]
// -------------------Функция с побочными эффектами---------
// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];

// dirtyMultiply(numbers, 2);

// // Произошла мутация исходных данных
// console.log(numbers); // [2, 4, 6, 8, 10]

//  ----------------Чистые функции (pure functions) ---------------
// const pureMultiply = (array, value) => {
//   const result = [];

//   for (let i = 0; i < array.length; i += 1) {
//     result.push(array[i] * 2);
//   }

//   return result;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);

// // Не произошло мутации исходных данных
// console.log(numbers); // [1, 2, 3, 4, 5]

// // Функция вернула новый массив с измененными данными
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// 0-
/*
 * Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
 * и управление передаётся на следующую итерацию.
 */

//  ---------------Перебирающие методы массива-------------------
// ===Array.prototype.forEach()===========

// const numbers = [1, 2, 3];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);
// }

// // Функциональный forEach
// numbers.forEach(num => console.log(num));

// // Указываем параметр idx если нужен доступ к счетчику
// numbers.forEach((num, idx) => console.log(`index ${idx}, value ${num}`));

// =======Array.prototype.map()============
// ...


// ...
// =======Array.prototype.reduce()============

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

// const getTags = tweets => tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);

//   return allTags;
// }, []);
// ----the same----
const getTags = tweets => tweets.reduce((acc, { tags }) => [...acc, ...tags], []);
// -vs-
// const getTags = tweets => tweets.reduce((acc, ourTags) => [...acc, ...ourTags.tags], []);

console.log(getTags(tweets));

// ----------------------------------
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const even = numbers.filter(x => x % 2 === 0);

// const doubled = even.map(x => x * 2);

// const reversed = doubled.reverse();

// console.log(numbers);
// console.log(doubled);
// console.log(reversed);
const result = numbers
  .filter(x => x % 2 === 0)
  .map(x => x * 2)
  .reverse();

console.log(result);

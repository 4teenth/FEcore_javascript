// CYCLES--------------mod2 veb2--------------------------
let value = 0;
while (value < 10) {
  console.log(value);

  value += 1;
}
// ---------------------
let counter = 0;
const products = ['apple', 'grape', 'banana'];

while (counter < products.length) {
  console.log(products[counter]);

  counter += 1;
}

console.log('after while');
// -----------------------
let = userInput;

do {
  userInput = prompt('ddtlb xbckj 10!');
  console.log(userInput);
  // Выполняем до тех пор пока не равно null и не равно 10
} while (userInput !== null && Number(userInput) !== 10);
// ----------------------
const products = ['apple', 'grape', 'banana'];

for (let i = 0; i < products.length; i += 1) {
  console.log('i: ', i);
  console.log(`products[${i}]:`, products[i]);
}

// -------------------
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i += 1) {
  console.log('i: ', i);
  console.log(`numbers[${i}]:`, numbers[i]);

  numbers[i] = numbers[i] * 2;
}
console.log(numbers);
// ----------------------
const matrix = [[1, 2, 3], [4, 5, 6],[7, 8, 9]];

for (let i = 0; i < matrix.length; i += 1) {
  console.log('i: ', i);
  console.log(`matrix[${i}]: `, martix[i]);

  for (let j = 0; j < matrix[i].length; j += 1) {
    console.log('j: ', j);
    console.log(`martix[${i}][${j}]: `, matrix[i][j]);
  }
}
// ------------------
const msg = 'bla zzz gogo xiexie yes';
const words = msg.split(' ');
const max = words.length - 1;
const leftCount = 3;
const rightCount = 6;
let bingo;

for (let i = 1; i < max; i += 1) {
  console.log(words[i]);
  console.log(i);
  const prevElementLength = words[i - 1].length;
  const nextElementLength = words[i + 1].length;

  if (prevElementLength === leftCount && nextElementLength === rightCount) {
    bingo = words[i];
  }
}

console.log(words);
console.log(bingo);
// -------------------find an item(word)
const clients = ['Mango', 'Poly', 'Ajax'];
const clientNameToFind = 'Poly';
let message;

for (let i = 0; i < clients.length; i += 1) {
  console.log('i: ', i);
  console.log('clients[i]: ', clients[i]);
  console.log('clientsNameToFind: ', clientNameToFind);

  if (clients[i] === clientNameToFind) {
    message = 'Found :)';
  } else { //- bad idea to use it(time on the video 1.14.00) - the cycle will write the last value - not found, but we have the necessary value in our cycle.
    message = 'Not found :(';
  }
  // console.log(message);
}

console.log(message);
// OR better
const clients = ['Mango', 'Poly', 'Ajax'];
const clientNameToFind = 'Poly';
let message = 'Not found :)'; //- предположение от обратного.

for (let i = 0; i < clients.length; i += 1) {
  console.log('i: ', i);
  console.log('clients[i]: ', clients[i]);
  console.log('clientsNameToFind: ', clientNameToFind);

  if (clients[i] === clientNameToFind) {
    message = 'Found :)';
  }
  // console.log(message);
}

console.log(message);
// OR the best
const clients = ['Mango', 'Poly', 'Ajax'];
const clientNameToFind = 'Poly';
let message;

for (let i = 0; i < clients.length; i += 1) {
  console.log('i: ', i);
  console.log('clients[i]: ', clients[i]);
  console.log('clientsNameToFind: ', clientNameToFind);

  if (clients[i] === clientNameToFind) {
    message = 'Found :)';
    break;
  }
  message = 'Not found :)';
}

console.log(message);
// ---------------
const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.includes(3));
const numberToFind = 3;

let result = false;

for(const number of numbers) {
  if(number === numberToFind) {
    result = true;
    break;
  }
}

// В конце видео интересные фишки по выводу информации через консоль в браузере (БОМ)
// FUNCTION-------------mod2 veb3------------------------------

// Функция сложения чисел

const add = function(x, y) {
  const summ = x + y;
  console.log('вызов функции add!');

  return summ;
};

 console.log('Result 2 + 3: ', add(2, 3));
 console.log('Result 5 + 5: ', add(5, 5));
 console.log('Result 15 + 5: ', add(15, 5));

// --------------------find the longest word в строке

const string = 'Asjfcsk sfncksac fjoi sa osdll';
const words = string.split(' ');

console.log(words);

let longestWord = words[0];

for (const word of words) {
  if (word.length > longestWord.length) {
    longestWord = word;
  }
}

console.log(longestWord);

// -------find the longest word в нескольких строках

const findLongestWord = function(string) {
  const words = string.split(' ');
  let longestWord = words[0];

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
};

console.log(findLongestWord('Aasjhbcb saj sakjdnj knvn dk'));
console.log(findLongestWord('DFBdlk dlkf sd'));
console.log(findLongestWord('Bsdij sdk sd sdvmcns'));

// ---------Array.includes

const includes = function(array, value) {
  for (const item of array) {
    if (item === value) {
      return true;
    } //else {return false;} - bad idea
  }

  return false;
};

console.log(includes([1, 2, 3], 4));
console.log(includes([1, 2, 3, 4, 5], 2));
console.log(includes(['mango', 'ajax', 'poly'], 'mango'));

// --------Цена за гравировку каждого слова в нескольких строках

const calculatePrice = function(string, costPerWord) {
  let total = 0;
  const words = string.split(' ');

  for (const word of words) {
    total += costPerWord;
  }

  return total;
};

console.log(calculatePrice('Pervnk sjkdv dfb dfbb jhmm', 10));
console.log(calculatePrice('Fsnkjnv svd s skdnm sdlokm', 18));
// ---OR another way for this action
const calculatePrice = function(string, costPerWord) {
  const words = string.split(' ');
  const length = words.length;
  const total = length * costPerWord;

  // for (const word of words) {
  //   total += costPerWord;
  // }

  return total;
};

console.log(calculatePrice('Pervnk sjkdv dfb dfbb jhmm', 10));
console.log(calculatePrice('Fsnkjnv svd s skdnm sdlokm', 18));

// -----Функция с использованием параметров по умолчанию

const calculatePrice = function(string, costPerWord = 10) {
  const words = string.split(' ');
  const total = words.length * costPerWord;

  return total;
};

console.log(calculatePrice('Pervnk sjkdv dfb dfbb jhmm', ));
console.log(calculatePrice('Fsnkjnv svd s skdnm sdlokm', 18));
// + пример на счётчике
const counter = function(initialValue = 0, step = 1) {

}

counter();

// ----------Передача значений по ссылке в ячейку памяти, массив мутирует, поэтому мы ничего не возвращаем, просто перезаписывается оригинальная переменная

const double = function(array) {
  console.log('array prms; ', array);

  for (let i = 0; i < array.length; i += 1) {
    array[i] = array[i] * 2;
  }
};

const nums = [1, 2, 3, 4, 5];

double(nums);
console.log('numbers: ', nums);

// ------Предикатная функция - та которая возвращает true или false. Examples: Array.isArray, Number.isNaN, Number.isInteger.

const isEqual = function(a, b) {
  return a === b;
};

console.log(isEqual(5, 2));
console.log(isEqual(5, 2));

// ----Функция сложения произвольного кол-ва чисел(с использованием псевдомассива arguments) - юзаем если нужно просто получить значение, перебрать в цикле... - если мы не знаем какое кол-во аргументов будет приходить, тут параметр объявить заранее - невозможно.
// В arguments можно передавать всё что угодно, будет хранить всё в виде одного массива

const add = function() {
  // console.log(arguments);
  let total = 0;

  for (let i = 0; i < arguments.length; i += 1) {
    total += arguments[i];
  }

  return total;
};

console.log(add(1, 2, 3));
console.log(add(1, 2, 3, 4, 5));
console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// console.log(arguments); - вне функции arguments не существует(при вызове вне будет ошибка)

// -----Задачка с преобразованием arguments-псевдомассива - время в видео 1.04.00

const add = function() {
  console.log(arguments);
  const mult = arguments[0];
  let total = 0;

  for (let i = 1; i < arguments.length; i += 1) {
    total += arguments[i];
  }

  return total * mult;
};

console.log(add(5, 1, 2, 3));
console.log(add(10, 1, 2, 3, 4, 5));
console.log(add(15, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// --- changing - one way
const add = function() {
  // console.log(arguments);
  const args = Array.from(arguments);

  console.log(args);
  const mult = args[0];
  args.shift();

  console.log(args);
//   let total = 0;

//   for (let i = 1; i < arguments.length; i += 1) {
//     total += arguments[i];
//   }

//   return total * mult;
};

console.log(add(5, 1, 2, 3));
console.log(add(10, 1, 2, 3, 4, 5));
console.log(add(15, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// --- changing again - another way
const add = function() {
  // console.log(arguments);
  let args = Array.from(arguments);

  // console.log(args);
  const mult = args[0];
  args = args.slice(1);

  // console.log(args);
  let total = 0;

  for (let i = 0; i < args.length; i += 1) {
    total += args[i];
  }

  return total * mult;
};

console.log(add(5, 1, 2, 3));
console.log(add(10, 1, 2, 3, 4, 5));
console.log(add(15, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// ---+ one the newest method 1.11.20 - операция rest - берёт все аргументы и собирает в массив с именем args
const add = function(...args) {
  console.log('args: ', args);
  let total = 0;

  for (let i = 0; i < args.length; i += 1) {
    total += args[i];
  }

  return total;
};

console.log(add(5, 1, 2, 3));
console.log(add(10, 1, 2, 3, 4, 5));
console.log(add(15, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// ---rest - когда есть множитель вначале
const add = function(mult, ...args) {
  // console.log(arguments);
  // let args = Array.from(arguments);

  // const mult = args[0];
  // args = args.slice(1);

  let total = 0;

  for (let i = 0; i < args.length; i += 1) {
    total += args[i];
  }

  return total * mult;
};

console.log(add(5, 1, 2, 3));
console.log(add(10, 1, 2, 3, 4, 5));
console.log(add(15, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// ---Примеры плохо и хорошо
// --Хорошо
const pricePerDroid = 5;

const a = function(price, count) {
  return price * count;
};

a(pricePerDroid, 5);
// --Плохо
const pricePerDroid = 5;

const a = function(count) {
  return pricePerDroid * count;
};

a(5);
// --Хорошо
const greeter = function(name) {
  console.log('hello ' + name);
};

const name = prompt('give me a name');

greeter(name);
// --Пример логики
// while (input !== null) { - то же самое что
//   input = prompt('Введите число:');
//   const sign = Number(input);

//   if (Number.isNaN(sign)) {
//     alert('Было введено не число, попробуйте еще раз');
//   } else if (input === null) { - это(то же самое). Поэтому использовать в else if (input === null - не целесообразно)
//     break;
//   }
// }
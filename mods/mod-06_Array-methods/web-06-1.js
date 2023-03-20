
// ========Функции высшего порядка hof===========

// =====reduce==========
const arr = [1, 4]; // [1,2,3,4] sum = 10
const arr5 = [1, 5]; // [1,2,3,4,5] sum = 15
const arr35 = [3, 5]; // [3,4,5] sum = 15
// [5, 1]
// const [a, b] = [b, a];

function getRange(arr) {
  const length = arr[1] - arr[0] + 1;
  return Array(length)
    .fill('')
    .map((e, i) => i + arr[0])
    .reduce((acc, elem) => acc + elem, 0);
}

getRange([1, 4]); // [,,,] // ['', '', '', '']

console.log(getRange([1, 4]));

// 10


// =====================

const cb = (acc, elem) => (Array.isArray(elem)
  ? [...acc, ...elem]
  : [...acc, elem]);

function flatten(arr) {
  return arr.reduce(cb, []);
}

module.exports = { flatten };

// ============ map VS forEach ==============
function getFib(n) {
  if (Number.isInteger(n) && n >= 0) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    const res = Array(n).fill(0);

    // МОЖНО ОБРАТИТЬСЯ К РАНЕЕЕ ПОЛУЧЕННОМУ ЗНАЧЕНИЮ
    // res.forEach((e, i, a) => (a[i] = i < 2 ? i : a[i - 2] + a[i - 1]));
    // return res;

    // НЕЛЬЗЯ ОБРАТИТЬСЯ К РАНЕЕ ПОЛУЧЕННОМУ ЗНАЧЕНИЮ
    // return res.map((e, i, a) => i < 2 ? i : (a[i - 2] + a[i - 1]));
  }
}
console.log(getFib(10)); // [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

'use string';

// Напиши функцию calculateTotalPrice(arr, productName), которая получает массив объектов и имя продукта (значение свойства name).
// Возвращает общую стоимость продукта (цена * количество).

// Вызовы функции для проверки работоспособности твоей реализации.
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (arr, productName) {
  let toGetPrice = 0;

  for (const obj of arr) {
    const values = Object.values(obj);

    for (const value of values) {
      if (productName === value) {
        toGetPrice = values[1] * values[2];
      }
    }
  }

  return toGetPrice;
};

console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

//     Создай переменную counterValue в которой будет хранится текущее значение счетчика.
//     Создай функции increment и decrement для увеличения и уменьшения значения счетчика
//     Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const incrBtn = document.querySelector('button[data-action="increment"]');
const decrBtn = document.querySelector('button[data-action="decrement"]');
const spanCounter = document.querySelector('#value');
// or make obj references
// const objRefs = {
//     incrBtn: document.querySelector('button[data-action="increment"]');
//     decrBtn: document.querySelector('button[data-action="decrement"]');
//     spanCounter: document.querySelector('#value');
// }


let counterValue = 0;

function doIncr() {
  counterValue += 1;
  spanCounter.textContent = counterValue;
  // or
  // objRefs.spanCounter.textContent = counterValue;
}

function doDecr() {
  counterValue -= 1;
  spanCounter.textContent = counterValue;
  // or
  // objRefs.spanCounter.textContent = counterValue;
}

incrBtn.addEventListener('click', doIncr);
decrBtn.addEventListener('click', doDecr);

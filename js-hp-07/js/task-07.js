// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const input = document.querySelector('#font-size-control');
const txt = document.querySelector('#text');

input.addEventListener('input', increaserHandler);

function increaserHandler(elem) {
  txt.style.fontSize = `${elem.currentTarget.value}px`;
//   console.log(elem.currentTarget.value); -chk this out to see a step
}

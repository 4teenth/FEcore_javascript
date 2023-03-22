// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name-output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputValue = document.querySelector('#name-input');
const spanOutputValue = document.querySelector('#name-output');

inputValue.addEventListener('input', handlerInput);

function handlerInput(elem) {
  if (elem.currentTarget.value === '') {
    spanOutputValue.textContent = 'незнакомец';
    return;
  }
  spanOutputValue.textContent = elem.currentTarget.value;
}

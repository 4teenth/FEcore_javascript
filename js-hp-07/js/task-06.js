// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.


// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.

// Для добавления стилей, используй CSS-классы valid и invalid.

const input = document.querySelector('#validation-input');

input.addEventListener('input', inputHandler);

let value = 0;

function inputHandler(elem) {
  value = elem.currentTarget.value.length;

  if (value === Number(input.getAttribute('data-length'))) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
}

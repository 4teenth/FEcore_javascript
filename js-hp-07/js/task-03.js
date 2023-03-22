// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().

//     Все элементы галереи должны добавляться в DOM за одну операцию вставки.
//     Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

const images = [
  {
    url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('#gallery');

const imgList = images.map(({ url, alt }) => `<li class="gallery"><img src="${url}", width = 300px, height = 200px, alt="${alt}" </li>`).join('');
// isn't necessary to write some styles for gallery via css file(here I just added sizes - width = 300px, height = 200px,), we can do this right here
// ...in this case commit/remove some rows from css file
gallery.insertAdjacentHTML('beforeend', imgList);
// e.g.:
// gallery.style.display = 'flex';
// gallery.style.justifyContent = 'space-evenly';
// // gallery.style.flexWrap = 'wrap';
// const listItem = gallery.querySelectorAll('li');
// listItem.forEach((elem) => {
//   elem.style.flexBasis = 'auto'; // but it works(our sizes of img) if write in imgList 'width = 100%' and change/remove 'width = 300px, height = 200px'
//   elem.style.listStyle = 'none';
//   elem.style.margin = '10px';
// });

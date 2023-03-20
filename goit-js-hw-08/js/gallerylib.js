import gallery from './gallery-items.js';

const refs = {
  gallery: document.querySelector('.js-gallery'),
  modalWindow: document.querySelector('.js-lightbox'),
  lightboxImg: document.querySelector('.lightbox__image'),
  contentBox: document.querySelector('div[class="lightbox__content"]'),
  closeBtn: document.querySelector('button[data-action="close-lightbox"]'),
};

// Создание и рендер разметки по массиву данных и предоставленному шаблону.
function createGallery(arr) {
  return arr.map(elem => galleryItem(elem));
}

function galleryItem({ original, preview, description }) {
  const list = document.createElement('li');
  const link = document.createElement('a');
  const img = document.createElement('img');

  list.classList.add('gallery__item');
  link.classList.add('gallery__link');
  img.classList.add('gallery__image');

  link.setAttribute('href', original);
  img.setAttribute('src', preview);
  img.setAttribute('data-source', original);
  img.setAttribute('alt', description);

  list.append(link, img);
  link.appendChild(img);
  console.log(list);
  return list;
}

let isActivePosition = 0;

function openModalWindow(el) {
  el.preventDefault();
  console.log(el.target);
  console.log(el.currentTarget);
  if (el.target === el.currentTarget) return;
  refs.modalWindow.classList.add('is-open');
  window.addEventListener('keydown', pressKeyHandler);

  refs.lightboxImg.src = el.target.dataset.source;
  gallery.map((elem) => {
    if (elem.original === el.target.dataset.source) {
      isActivePosition = gallery.indexOf(elem);

      return isActivePosition;
    }
  });
}

function closeModalWindow(el) {
  refs.modalWindow.classList.remove('is-open');
  refs.lightboxImg.src = '';
  window.removeEventListener('click', pressKeyHandler);
}

const galleryLibrary = createGallery(gallery);

refs.gallery.append(...galleryLibrary);
refs.gallery.addEventListener('click', openModalWindow);
refs.closeBtn.addEventListener('click', closeModalWindow);
refs.contentBox.addEventListener('click', overlayHandler);

// extra---

function overlayHandler(el) {
  if (el.target !== el.currentTarget) { // and try these if (el.target === el.currentTarget) & if (el.target === '')
    return;
  }
  console.log('clicked on overlay');
  closeModalWindow();
}

function pressKeyHandler(el) {
  if (el.key === 'Escape') {
    closeModalWindow();
  }

  if (el.key === 'ArrowRight') {
    refs.lightboxImg.src = gallery[isActivePosition + 1].original;
    isActivePosition += 1;

    if (isActivePosition === gallery.length - 1) {
      isActivePosition = -1;
    }
  }

  if (el.key === 'ArrowLeft') {
    refs.lightboxImg.src = gallery[isActivePosition - 1].original;
    isActivePosition -= 1;

    if (isActivePosition === 0) {
      isActivePosition = gallery.length - 1;
    }
  }
}

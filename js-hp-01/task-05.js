'use strict';

// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt.
// Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.
// Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

//     Китай - 100 кредитов
//     Чили - 250 кредитов
//     Австралия - 170 кредитов
//     Индия - 80 кредитов
//     Ямайка - 120 кредитов

const priceChina = 100;
const priceChili = 250;
const priceAustralia = 170;
const priceIndia = 80;
const priceJamaica = 120;

const China = 'КИТАЙ';
const Chili = 'ЧИЛИ';
const Australia = 'АВСТРАЛИЯ';
const India = 'ИНДИЯ';
const Jamaica = 'ЯМАЙКА';

const DELIVERY_IMPOSSIBLE = 'Доставка в вашу страну не доступна';
let userChoice = prompt('Страна назначения:');
userChoice = userChoice.toUpperCase();

let country;
let deliveryPrice;
let message;

switch (userChoice) {
  case China:
    country = China;
    deliveryPrice = priceChina;
    message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
    break;

  case Chili:
    country = Chili;
    deliveryPrice = priceChili;
    message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
    break;

  case Australia:
    country = Australia;
    deliveryPrice = priceAustralia;
    message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
    break;

  case India:
    country = India;
    deliveryPrice = priceIndia;
    message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
    break;

  case Jamaica:
    country = Jamaica;
    deliveryPrice = priceJamaica;
    message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
    break;

  default:
    message = DELIVERY_IMPOSSIBLE;
}

alert(message);

// OR

// const priceChina = 100;
// const priceChili = 250;
// const priceAustralia = 170;
// const priceIndia = 80;
// const priceJamaica = 120;

// const China = 'КИТАЙ';
// const Chili = 'ЧИЛИ';
// const Australia = 'АВСТРАЛИЯ';
// const India = 'ИНДИЯ';
// const Jamaica = 'ЯМАЙКА';

// const CANCELED_BY_USER = 'Пожалуйста, выберите страну назначения';
// const DELIVERY_IMPOSSIBLE = 'Доставка в вашу страну не доступна';
// const userChoice = prompt('Страна назначения:');

// let country;
// let deliveryPrice;
// let message;

// if (userChoice === null) {
//   message = CANCELED_BY_USER;
// } else {
//   const userChoiceLowUppStyle = userChoice.toUpperCase();
//   switch (userChoiceLowUppStyle) {
//     case China:
//       country = China;
//       deliveryPrice = priceChina;
//       message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
//       break;

//     case Chili:
//       country = Chili;
//       deliveryPrice = priceChili;
//       message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
//       break;

//     case Australia:
//       country = Australia;
//       deliveryPrice = priceAustralia;
//       message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
//       break;

//     case India:
//       country = India;
//       deliveryPrice = priceIndia;
//       message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
//       break;

//     case Jamaica:
//       country = Jamaica;
//       deliveryPrice = priceJamaica;
//       message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
//       break;

//     default:
//       message = DELIVERY_IMPOSSIBLE;
//   }
// }

// alert(message);

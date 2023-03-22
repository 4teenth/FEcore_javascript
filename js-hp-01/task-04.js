'use strict';

// На счету пользователя есть 23580 кредитов, значение хранится в переменной credits (создай и присвой).
// Пользователь решает купить ремонтных дроидов, которые стоят по 3000 кредитов за штуку. Цена одного дроида хранится в переменной pricePerDroid (создай и присвой).

// При посещении страницы, используя prompt, необходимо спросить количество дроидов которые пользователь хочет купить и сохранить в переменную.

// Напиши скрипт который:

//     Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
//     В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
//     Проверяет сможет ли пользователь оплатить заказ:
//         если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение 'Недостаточно средств на счету!'.
//         в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.

const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = 'Отменено пользователем';
const NOT_ENOUGHT_CREDITS = 'Недостаточно средств на счету!';

const userOrder = prompt('Сколько дроидов вы хотите купить?');

let message;
let totalPrice;

const userOrderQuantity = Number(userOrder);
const userBalance = credits - userOrderQuantity * pricePerDroid;

const BOUGHT = `Вы купили ${userOrderQuantity} дроидов, на счету осталось ${userBalance} кредитов.`;
const INCORRECT_VALUE = `Некорректный ввод, на счету осталось ${credits} кредитов.`;

if (userOrder === null) {
  message = CANCELED_BY_USER;
} else {
  totalPrice = userOrderQuantity * pricePerDroid;
  if (totalPrice > credits) {
    message = NOT_ENOUGHT_CREDITS;
  } else if (totalPrice < credits && totalPrice > 0) {
    message = BOUGHT;
  } else {
    message = INCORRECT_VALUE;
  }
}

console.log(message);
alert(message);

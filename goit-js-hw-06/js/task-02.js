import users from './users.js';

// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

// const getUsersWithEyeColor = (guysWithBlueEyes, color) => users.filter(aGuy => aGuy.eyeColor === color);
const getUsersWithEyeColor = (users, color) => users.filter(({ eyeColor }) => eyeColor === color);

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

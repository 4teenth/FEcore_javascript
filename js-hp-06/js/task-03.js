import users from './users.js';

// Получить массив имен пользователей по полу (поле gender).

// const getUsersWithGender = (users, gender) => users.filter(user => user.gender === gender); // - ок, НО, возвращает массив ОБЪЕКТОВ с именами пользователей по полу (поле gender).
const getUsersWithGender = (users, requiredGender) => users
  .filter(({ gender }) => gender === requiredGender)
  .map(({ name }) => name);


console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

import users from './users.js';

// Получить массив только неактивных пользователей (поле isActive).

// const getInactiveUsers = users => users.filter(networkUser => networkUser.isActive === false);
const getInactiveUsers = users => users.filter(({ isActive }) => !isActive);

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

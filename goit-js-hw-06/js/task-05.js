import users from './users.js';

// Получить пользоваля (не массив) по email (поле email, он уникальный).

// const getUserWithEmail = (users, userEmail) => users
//   .filter(({ email }) => email === userEmail)
//   .find(({ name }) => name);
// -or-
// const getUserWithEmail = (users, userEmail) => users.find(({ email }) => email === userEmail);
// -vs-
const getUserWithEmail = (users, email) => users.find(user => user.email === email);

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

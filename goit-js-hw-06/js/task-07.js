import users from './users.js';

// Получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = users => users.reduce((totalBalance, value) => totalBalance + value.balance, 0);
// ---
// const calculateTotalBalance = users => users.reduce((accTotBal, { balance }) => accTotBal + balance, 0);


console.log(calculateTotalBalance(users)); // 20916

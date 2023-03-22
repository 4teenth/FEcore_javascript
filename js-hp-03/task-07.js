'use strict';

// Напиши скрипт управления личным кабинетом интернет банка.
// Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект(их всего 2: deposit(amount) {} и withdraw(amount) {})
   со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод отвечающий за добавление суммы к балансу
   * Создает объект транзакции(depTrans) и вызывает addTransaction
   */
  deposit(amount) {
    this.balance += amount;
    const userId = this.transactions.length + 1;
    const userTransaction = {
      id: userId,
      type: Transaction.DEPOSIT,
      amount,
    };
    return this.addTransaction(userTransaction);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Создает объект транзакции(wdwTrans) и вызывает addTransaction
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      return console.log('Denied! Not enought money on your balance.');
    }
    this.balance -= amount;
    const userId = this.transactions.length + 1;
    const userTransaction = {
      id: userId,
      type: Transaction.WITHDRAW,
      amount,
    };
    return this.addTransaction(userTransaction);
  },

  /*
   * Метод добавляющий транзакцию в свойство transactions
   * Принимает объект транзакции
   */
  addTransaction(transaction) {
    this.transactions.push(transaction);
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return console.log(`Current balance is: ${this.balance}`);
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const transType of this.transactions) {
      if (transType.id === id) {
        return transType;
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let totalTrans = 0;

    for (const transType of this.transactions) {
      if (transType.type === type) {
        totalTrans += transType.amount;
      }
    }

    return totalTrans;
  },
};

// ------Check this out:

account.deposit(50);
account.deposit(100);
account.withdraw(66);
account.withdraw(500);
account.getBalance();
console.table(account.transactions);
// console.table(account); //---все объекты\методы внутри объекта account
console.log(account.getTransactionDetails(3)); // ---инф по 3й операции
console.log(account.getTransactionTotal('deposit'));
console.log(account.getTransactionTotal('withdraw'));

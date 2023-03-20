/* eslint-disable strict */

'use strict';

// Напиши класс StringBuilder. На вход он получает один параметр - строку, которую записывает в свойство _value.

// Добавь классу следующий функционал:

//     - Геттер value - возвращает текущее значение поля _value
//     - Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
//     - Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало _value
//     - Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value

class StringBuilder {
  constructor(str) { // we can write constructor(str или value etc.)/this._value = str или value etc. - it won't change anything, потому что str класса(уже заданного в экземпляре) не влияет на значения методов(тот же str) ниже builder при объявлении\вызове
    this._value = str;
  }

  get value() {
    return this._value;
  }

  append(str) {
    this._value += str;
  }

  prepend(str) {
    this._value = str + this._value;
  }

  pad(str) {
    this._value = str + this._value + str;
    // OR
    // this.append(str);
    // this.prepend(str);
  }
}

const builder = new StringBuilder('.');
console.log(builder); // it is our объект со string из класса StringBuilder = _value: ('.') экземпляра new StringBuilder = builder

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
// ----------------------------
const builderNew = new StringBuilder('-');
console.log(builderNew); // it is our объект со string из класса StringBuilder = _value: ('-') экземпляра new StringBuilder = builderNew

builderNew.append('*');
console.log(builderNew.value); // '-*'

builderNew.prepend('*');
console.log(builderNew.value); // '*-*'

builderNew.pad('|');
console.log(builderNew.value); // '|*-*|'

// http://gennadiy1970.github.io/intro_to_classes/#inheritaning
// http://gennadiy1970.github.io/introDate/
// http://momentjs.com

// class Human {
//   constructor(name) {
//     this.name = name;
//   }

//   print() {
//     console.log(this.name);
//   }
// }

// const bart = new Human('Bart');
// bart.print();
// console.log(typeof Human);
// // class всё та же function

// --------------
// class Human {
//   constructor(name) {
//     this.name = name;
//   }

//   static print(msg) {
//     console.log(msg);
//   }

//   preprint(txt) {
//     this.constructor.print(txt);
//   }
// }

// const bart = new Human('Bart');
// bart.print(bart.name);
// bart.preprint('Static');
// // Bart
// // Static

// -------get & set-----------
// class User {
//   constructor(name) {
//     this._name = name;
//   }

//   getName() {
//     return this._name;
//   }

//   setName(value) {
//     return this._name = value;
//   }
// }

// --------ex-----------
// function counter() {
//   let current = 100;
//   function get() {
//     return current;
//   }
//   function set(value) {
//     current = value;
//   }
//   return [get, set];
// }

// const one = counter(); // []

// console.log(one[0]());
// // 100

// class Date----------
// -------/-/-/-----
// echo "node_modules" > .gitignore - папка node_modules не будет записываться на github, появится файл .gitignore
// const str = moment().format('MMMM Do YYYY, h:mm:ss a');

// console.log(str);

/* (Задача)
Чи можливо створити функції A та B, щоб new A() == new B()?

function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert( a == b ); // true
Якщо так – наведіть приклад коду таких функцій.*/

/* - - - Моя відповідь - - - */
let object = {}

function A() { 
    return object;
}
function B() {
    return object;
}

let a = new A();
let b = new B();

alert (  a == b )

/* ну або так :))):):):) 
let object1 = {}

function A() {}
function B() {}

let n = new A();
let t = new B();

alert (  n !== t )*/
/*Створити Калькулятор за допомогою конструктора (Задача)
важливість: 5
Створіть функцію-конструктор Calculator, який створює об’єкти з трьома методами:

read() запитує два значення за допомогою prompt і записує їх у властивості об’єкта з іменами a та b.
sum() повертає суму цих властивостей.
mul() повертає результат множення даних властивостей.
Наприклад:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );*/

/* - - - Моя відповідь - - - */
function Calculator() {
    this.read = function() {
        this.a = +prompt ('a',0);
        this.b = +prompt ('b',0);
    };
    this.sum = function() {
        return this.a + this.b;
    };
    this.mul = function() {
        return this.a * this.b;
    };
}
let calculator = new Calculator();
calculator.read();
alert ('Sum: '+ calculator.sum() + '\nMul: ' + calculator.mul());
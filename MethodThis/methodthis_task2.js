/*Створіть калькулятор (Задача)
важливість: 5
Створіть об’єкт calculator з трьома методами:

read() запитує два значення та зберігає їх як властивості об’єкта з іменами a та b відповідно.
sum() повертає суму збережених значень.
mul() множить збережені значення і повертає результат.
let calculator = {
  // ... ваш код ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );*/

/* - - - Моя відповідь - - -*/
let calculator = {
    read () {
        this.a = +prompt ('a', 0);
        this.b = +prompt ('b',0);
    },
    sum () {
        return this.a + this.b
    },
    mul () {
        return this.a * this.b
    }
}

calculator.read ()
alert ('Sum: '+ calculator.sum() + '\nMul: ' + calculator.mul());

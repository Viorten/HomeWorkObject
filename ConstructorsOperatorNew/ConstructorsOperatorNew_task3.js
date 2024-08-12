/*Створити Accumulator (Задача)
важливість: 5
Створіть функцію-конструктор Accumulator(startingValue).

Об’єкт, який він створює повинен:

Зберігати “поточне значення” у властивості value. Початкове значення має значення аргументу конструктора startingValue.
Метод read() повинен використовувати prompt для зчитування нового числа та додавати його до value.
Іншими словами, властивість value – це сума всіх введених користувачем значень разом із початковим значенням startingValue.

Нижче ви можете подивитись демонстрацію роботи коду:
let accumulator = new Accumulator(1); // початкове значення 1

accumulator.read(); // додає введене користувачем значення
accumulator.read(); // додає введене користувачем значення

alert(accumulator.value); // показує суму цих значень */

/* - - - Моя відповідь - - -*/
function Accumulator (startingValue) {
    this.value = startingValue;
    this.read = function () {
        this.value += +prompt ('Введіть своє число/цифру', 0);
    };
}

let accumulator = new Accumulator (1);
accumulator.read ();
accumulator.read ();
alert (accumulator.value)
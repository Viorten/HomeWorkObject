/*Перевірка на порожнечу (Задача)
важливість: 5
Напишіть функцію isEmpty(obj), яка повертає true, якщо об’єкт не має властивості, інакше false.

Має так працювати:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "Вставай";

alert( isEmpty(schedule) ); // false*/

/* - - - Моя відповіь - - - */
function isEmpty(obj) {
    for (let prop in obj) {
        return false;
    }
    return true;
}
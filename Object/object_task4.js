/*Помножте числові значення властивостей на 2 (Задача)
важливість: 3
Створіть функцію multiplyNumeric(obj), яка примножує всі числові властивості об’єкта obj на 2.

Наприклад:

// до виклику функції
let menu = {
  width: 200,
  height: 300,
  title: "Моє меню"
};

multiplyNumeric(menu);

// після виклику функції
menu = {
  width: 400,
  height: 600,
  title: "Моє меню"
};
Зверніть увагу, що multiplyNumeric не потрібно нічого повертати. Слід безпосередньо змінювати об’єкт.

P.S. Використовуйте typeof для перевірки, що значення властивості числове.*/

/* - - - Моя відповідь - - -*/
let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
}
function multiplyNumeric(menu) {
    for (let prop in menu) {
        if (typeof menu[prop] === 'number'){
            menu[prop] *= 2;
        }
    }
}
multiplyNumeric(menu);
console.log (menu)
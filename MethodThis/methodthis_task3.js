/*Ланцюг викликів (Задача)
важливість: 2
Існує об’єкт ladder, що дозволяє підійматися вгору-вниз:

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // показує поточний крок
    alert( this.step );
  }
};
Тепер, якщо нам потрібно зробити кілька викликів послідовно, можна зробити це так:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0

Змініть код up, down і showStep так, щоб зробити доступним ланцюг викликів, наприклад:

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0

Такий підхід широко використовується в бібліотеках JavaScript.*/

/* - - - Моя відповідь - - -*/
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // показує поточний крок
      alert( this.step );
      return this;
    }
  };
  ladder.up().up().down().showStep().down().showStep();
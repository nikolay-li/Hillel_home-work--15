'use strict';
// TASK!!

// У нас є об'єкт, у якому зберігаються зарплати нашої команди:

// let salaries = {

//     John: 100,

//     Ann: 160,

//     Pete: 130

// }

// Напишіть код для підсумовування всіх зарплат та збережіть результат у змінній sum.Має вийти 390.

// Якщо об'єкт salaries порожній, то результат має бути 0.

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}

salaries.sum = 0;

for (let key in salaries) {
    if (key !== 'sum') {
        salaries.sum += salaries[key];
    };
};

console.log(salaries);
console.log(`== Now start's completing of task ==`);
/*=================TASK=================*/
// Напишіть скрипт, який переводить години в секунди і має робити насутпне:
// запитати у користувача кількість годин;
// порахувати, скільки секунд у цій кількості годин;
// записати обчислене значення у змінну;
// вивести цю змінну користувачеві через alert.

/*===============Solution===============*/
let userHours = +prompt(
  'Введіть кількість годин, які треба перевести у секунди:',
  10
);

let hourInSecs = userHours * 3600;
alert(`Якщо перевести ${userHours} год. у секунди, то буде ${hourInSecs} сек.`);

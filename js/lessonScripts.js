// Створити скрипт для додавання, віднімання, множення та поділу двох чисел та виведення результатів.
// Користувач вводить два числа через два промпти, і повідомлення виводиться алертом з таким результатом:
// Користувач ввів 2 і 2:

// firstNumber = parseInt(prompt("Set first number?"));
// secondNumber = parseInt(prompt("Set first number?"));

// sum = firstNumber + secondNumber;
// minus = firstNumber - secondNumber;

// alert(`Result:
//     ${firstNumber} + ${secondNumber} = ${sum};
//     ${firstNumber} - ${secondNumber} = ${minus};
// `);

// ===, ==, >, <, >=, <=, !=, !==
// == - не строгое сравнение

// console.log(5 == 6); // false
// console.log(5 == 5); // true
// console.log("string" == "apple"); // false
// console.log("apple" == "apple"); // true
// console.log("apple" == "Apple"); // false
// console.log(true == true) // true
// console.log(false == false) // true

// firstUser = "orange";
// secondUser = "Orange";

// console.log(firstUser.toLowerCase() == secondUser.toLowerCase()); // true

// console.log(4 == "4"); // true

// === - строгое сравнение (доп проверка на тип данных)

// console.log(5 === 6); // false
// console.log(5 === 5); // true
// console.log("string" === "apple"); // false
// console.log("apple" === "apple"); // true
// console.log("apple" === "Apple"); // false
// console.log(true === true) // true
// console.log(false === false) // true

// console.log(4 === "4"); // false
// !!!!!!!!!!!!!!!!!!!
// true == 1 // true
// false == 0 // true
// true === 1 // false
// false === 0 // false

// !=, !==
// 5 !== 6 //true
// 5 !== 5 // false
// false !== 0 // true
// false != 0 //false
// "Orange" !== "orange" // true
// "Orange" !== "Orange" // false

// >, <, >=, <=

// console.log(5 > 3); // true
// console.log(5 < 3); // false

// console.log(5 <= 3); // false
// console.log(5 >= 5); // true

// &&, ||
// && - AND
// || - OR
// debugger;

// x = +prompt("How old are you?");

// console.log(x > 18 && x < 60); // 60 // false // 13 // false // 90 // false
// console.log(x < 18 || x > 60); // 60 // true // 13 true // 90 // true

// debugger;
// && - если мы получили все true получим последнее true:
// x = 1 && true && "Hi!"; // "Hi!"
// && - если хотя бы один false вернет первый попавшийся false
// x = true && "" && 1; // ""
// x = false && true; // false
// console.log(x);

// ||

// x = 1 || true || "Hi!"; // "Hi!"
// // || - вернет первое true
// x = true || "" || 1; // true
// x = false || true; // true
// console.log(x);

// || - если приходят все false тогда вернет последний значение
// x = false || 0 || ""; // ""
// console.log(x);
// y = data.id || "";

// if else
// +=, -=, ++, --
// debugger;
// milk = 0;
// eggs = 3;
// bread = 0;

// basket = 0;

// if(milk > 0) {
//     // basket = basket + 1;
//     // basket += 1;
//     basket++; // инкримент
// } else {
//     console.log("Milk isn't exist");
// }

// if(eggs > 0) {
//     // basket = basket + 1;
//     basket += 1;
// }

// if(bread > 0) {
//     basket++;
// } else {
//     // basket = basket - 1;
//     // basket -= 1;
//     basket--; // дикримент
// }
// console.log(basket);

// debugger;

// example with check email

// anngmail.com
// @anngmail.com если тут 0 или пустая строка тогда выполнится это условие
// anngmail.com@
// ""
// > 5 symbols

// email = prompt("Please add your e-mail?").replaceAll(" ", "");
// email = ""

// // "" - false;
// // "jfdkjfkdfj@ds.dsd" - true

// if(!email) {
//     console.log("Email can't be empty!");
// } else if(email.length < 6) {
//     console.log("Email must be have more than 5 symbols!");
// } else if(email.indexOf("@") === -1) {
//     console.log("Email need @!");
// } else if(!email.indexOf("@")) {
//     console.log("@ can't be like first letter");
// } else if(email.indexOf("@") === email.length - 1) {
//     console.log("@ can't be like last letter");
// } else {
//     document.write(`Your email is ${email}`);
// }

// dictionary

// englishColor = prompt("Enter rgb English color?");

// if(englishColor.toLowerCase() === "red") {
//     console.log("Червоний");
// } else if(englishColor.toLowerCase() === "blue") {
//     console.log("Блакитний");
// } else if(englishColor.toLowerCase() === "green") {
//     console.log("Зелений");
// } else {
//     console.log("Такого кольору не існує!");
// }

// switch...case
// englishColor = prompt("Enter rgb English color?");

// switch(englishColor.toLowerCase()) {
//     case "red":
//         console.log("Червоний");
//         break;
//     case "blue":
//         console.log("Блакитний");
//         break;
//     case "green":
//         console.log("Зелений");
//         break;
//     default:
//         console.log("Такого кольору не існує!");
// }

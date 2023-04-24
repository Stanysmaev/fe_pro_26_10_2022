// `**************`
// За допомогою prompt запитати ім'я користувача.
// За допомогою alert вивести "Hello, John! How are you?"
// Де John це те, що ввів користувач

// userName = prompt("What is ypur name");
// alert("Hello, " + userName + "!" + " How are you?");

// new Date()
// date = new Date();
// year = date.getFullYear();

// yearOfBirth = +prompt("Your year of birth?");
// userAge = year - yearOfBirth; // * / - js default trying to make a number // if can't to we have NaN - Not A Number
// console.log(year, yearOfBirth);
// console.log(userAge);

// Переобразование типов
// Явное - +variable,
// Не явное - */-

// shablons
// userName = prompt("What is ypur name");
// age = prompt("How old are you?");
// alert("Hello, " + userName + "! Yuor age is " + age + " How are you?");
// alert(`Hello, ${userName}! Your age is ${age}. How are you?`);

// fllName = "Antony Smith";
// fllName2 = 'Antony Smith';
// fullName3 = `Antony Smith`;
// console.log(fullName3);

// document.write("")
// document.write("Hello world!");
// document.write("<h1>Hello, world!</h1>");
// document.write(`<ul>
// 	<li>Title 1</li>
// 	<li>Title 2</li>
// 	<li>Title 3</li>
// 	<li>Title 4</li>
// 	<li>Title 5</li>
// 	<li>Title 6</li>
// 	<li>Title 7</li>
// </ul>`);

// userName = prompt("What is ypur name");
// age = prompt("How old are you?");
// document.write(`
// 	<h1 class="red">CV</h1>
// 	<h3>Mu name is ${userName}</h3>
// 	<h5>I'm ${age} years old!</h5>
// `);

// STRING METHODS
// trim()
// fullName = prompt("What is ypur name").trim();
// console.log(`My name is ${fullName}!`);

// replace()/replaceAll()
// fullName = prompt("What is ypur name");
// sliceAllSpaces = fullName.replaceAll(".", "").replaceAll(" ", "").replaceAll("a", "b").trim();
// trimString = sliceAllSpaces.trim();
// console.log(sliceAllSpaces);

// toLowerCase()/toUpperCase()
// fullName = prompt("What is your name?");
// fullNameUpper = fullName.toUpperCase();
// fullNameLower = fullName.toLowerCase();
// console.log(fullNameUpper);
// console.log(fullNameLower);

// string[], string.length
// animal = "Lion";
// console.log(animal.length);
// console.log(animal[animal.length - 1]);

// indexOf()
// color = "Yellow";
// console.log(color.indexOf("p")); // -1
// console.log(color.indexOf("o")); // 4

// NUMBER METHODS
// Math.floor
// Math.ceil
// Math.round
// Math.trunc

// value = 12.483478347384;
// console.log(Math.floor(value));
// console.log(Math.ceil(value));
// console.log(Math.round(value));
// console.log(Math.trunc(value));

// %
// x = 5%10; // 5
// y = 6%3 // 0

// NaN - Not A Number
// isNaN(value)
// isNaN(10) // false

// isNaN("10") // false

// isNaN("ddddd") // true

// typeof
// typeof 10 // 'number'

// typeof "10" // 'string'

// typeof "Hello" // 'string'

// typeof null // 'object'

// typeof undefined // 'undefined'

// hello = null;
// hello = prompt("Anything?");
// hello;
// console.log(typeof hello);

// Переобразование типов

// to Number
// color = "red";
// console.log(+color); // NaN

// value = "10";
// console.log(+value);

// isTrue = false; // 0
// isFalse = true; // 1
// console.log(+isFalse);

// console.log(Number("10")); // don't use Number, use +variable

// parseInt
// parseInt("11") //11

// parseInt("378237sjbfsdhjsd") // 378237

// parseInt("ndjskjd") // NaN

// parseInt("dd44") // NaN

// parseFloat
// parseFloat("1.2334ddd") // 1.2334

// to String

// value = 10;
// str = value.toString();
// str = `${value}`; // так пистаь не надо!

// bool = true.toString();
// console.log(bool);

// to Boolean

// Все строки преобразуются в TRUE, крому пустый "" - FALSE
// Boolean(" ") // true
// Boolean("dddd") // true
// Boolean("") // false

// Все числа преобразуются в TRUE, кроме 0 - FALSE
// Boolean(0) // false
// Boolean(10) // true
// Boolean("0") // true

// OTHER
// Boolean(null) // false
// Boolean(undefined) // false

// !!10 // true
// !!"dddd" // true

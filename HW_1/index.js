// // Задание №1

// let celsius = 36.6;
// console.log(`${celsius} градусов цельсия - это ${(9 / 5) * celsius + 32} градусов фарингейта`);


// // Задание №2

// const name = "Pavel";
// let admin = name;
// console.log(`Имя администратора: ${admin}`); 



// -----------------Home work 2-----------------


// Задание 1
// Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.

let num1 = +prompt("Введите число <=1");
let num2 = +prompt("Введите число >=3");
alert((num1 <= 1 ? "Первое число введено верно!" : "Неверно введено первое число!") +"\n"+ (num2 >= 3 ? "Второе число введено верно!" : "Неверно введено второе число!"));


// Задание 2
// Перепишите код к тернарному оператору

let test = true;
console.log(test === true ? '+++' : '---');


// Задание 3
// В переменной day лежит какое-то число из интервала от 1 до 31. 
// Определите в какую декаду месяца попадает это число (в первую, вторую или третью)

let day = 32;
if (day >= 1 && day <= 10) {
    console.log("Первая декада");
} else if (day >= 11 && day <= 20) {
    console.log("Вторая декада");
} else if (day >= 21 && day <= 31) {
    console.log("Третья декада");
} else{ 
    console.log("Нет такого значения!");
}


// Задание 4
// Необязательное задание.

let num = +prompt("Введите число: ")
alert(`В числе ${num} \nсотен: ${Math.trunc(num / 100 % 10)}, десятков: ${Math.trunc(num / 10 % 10)}, едениц: ${Math.trunc(num % 10)}.`);



 











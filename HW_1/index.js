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

// let num1 = +prompt("Введите число <=1");
// let num2 = +prompt("Введите число >=3");
// alert((num1 <= 1 ? "Первое число введено верно!" : "Неверно введено первое число!") +"\n"+ (num2 >= 3 ? "Второе число введено верно!" : "Неверно введено второе число!"));


// Задание 2
// Перепишите код к тернарному оператору

// let test = true;
// console.log(test === true ? '+++' : '---');


// Задание 3
// В переменной day лежит какое-то число из интервала от 1 до 31. 
// Определите в какую декаду месяца попадает это число (в первую, вторую или третью)

// let day = 32;
// if (day >= 1 && day <= 10) {
//     console.log("Первая декада");
// } else if (day >= 11 && day <= 20) {
//     console.log("Вторая декада");
// } else if (day >= 21 && day <= 31) {
//     console.log("Третья декада");
// } else{ 
//     console.log("Нет такого значения!");
// }


// Задание 4
// Необязательное задание.

// let num = +prompt("Введите число: ")
// alert(`В числе ${num} \nсотен: ${Math.trunc(num / 100 % 10)}, десятков: ${Math.trunc(num / 10 % 10)}, едениц: ${Math.trunc(num % 10)}.`);




// -----------------Home work 3-----------------

// Задание 1
// Создайте функцию которая возводит переданное число в куб, 
// необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

// function cube(num){
//    return num * num * num;
// }
// console.log(cube(2) + cube(3));


// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, 
// необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит 
// в консоль текст "Размер заработной платы за вычетом налогов равен значение"

// let salary = prompt("Введите размер заработной платы:");
// isNaN(salary) ? alert("Значение задано неверно!") : alert(`Размер заработной платы за вычетом налогов равен: ${taxDeduction(salary)}`); 

// function taxDeduction(value){
//     return value * 87 / 100;
// }


// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, 
// которая определяет максимальное значение среди этих чисел.

// let arr = prompt("Введите 3 числа через пробел:").split(" ");

// const maximal = array => {
//     let max = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (isNaN(array[i])) {
//             alert(`Значение "${array[i]}" задано неверно!`);
//             break;
//         }
//         else if (max < array[i]) max = array[i];
//     }
//     return max;
// }

// if (arr.length < 3) {
//     alert("Количество чисел меньше 3!")
// } else {
//     alert(`Максимальное значение: ${maximal(arr)}`);
// }


// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// Сложение, Разность, Умножение, Деление

// console.log(`Сложение:${sum(3, 2)} \nРазность:${sub(2, 5)} \nУмножение:${multiply(3, 2)} \nДеление:${div(6, 2)}`);

// function sum(a, b) {
//     return a + b;
// }
// function sub(a, b) {
//     if (b > a) {
//         return b - a;
//     } else {
//         return a - b;
//     }
// }
// function multiply(a, b) {
//     return a * b;
// }
// function div(a, b) {
//     if (b === 0) {
//         return 0;
//     }
//     return a / b;
// }
// // Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// // Сложение, Разность, Умножение, Деление

// console.log(`Сложение:${sum(3, 2)} \nРазность:${sub(2, 5)} \nУмножение:${multiply(3, 2)} \nДеление:${div(6, 2)}`);

// function sum(a, b) {
//     return a + b;
// }
// function sub(a, b) {
//     if (b > a) {
//         return b - a;
//     } else {
//         return a - b;
//     }
// }
// function multiply(a, b) {
//     return a * b;
// }
// function div(a, b) {
//     if (b === 0) {
//         return 0;
//     }
//     return a / b;
// }




// -----------------Home work 4-----------------


// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль

// let num = 10;
// for (let i = 0; i <= num; i++) {
//     if (i === 0) {
//         console.log(`${i} - это ноль`);
//     } else if (i % 2 === 0) {
//         console.log(`${i} - четное число`);
//     } else if (i % 2 !== 0) {
//         console.log(`${i} - нечетное число`);
//     }
// }


// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

// const arr = [1, 2, 3, 4, 5, 6, 7];
// arr.splice(3,2)
// console.log(arr);


// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, 
// и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

// function randArr() {
//     let array = [];
//     for (let i = 0; i < 5; i++) {
//         array.push(Math.round(Math.random() * 10));
//     }
//     return array;
// };

// function sum(array) {
//     let sum = array[0];
//     for (let i = 1; i < arr.length; i++) {
//         sum += array[i];
//     }
//     return sum;
// };

// const minNum = function (array) {
//     let min = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (min > array[i]) {
//             min = array[i];
//         }
//     }
//     return min;
// };

// const searchNum = (array, num) => {
//     return array.indexOf(num) !== -1 ? "Есть" : "Нет";
// };

// const arr = randArr();
// console.log(`Массив: ${arr} \nСумма всех элементов массива: ${sum(arr)} \nМинимальноз значение массива: ${minNum(arr)} \nЕсть ли в массиве число 3: ${searchNum(arr, 3)}`);


// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, 
// только у вашей горки должно быть 20 рядов, а не 5:


// let rowCount = 20;

// for (let i = 1; i <= rowCount; i++) {
//     let row = '';
//     for (let j = 1; j <= rowCount - i; j++) {
//         row += ' ';
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//         row += '*';
//     }
//     console.log(row);
// }




// -----------------Home work 5-----------------

// Задание 1
// Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.

const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
}

console.log(Object.values(numbers).filter(a => a >= 3));


// Задание 2
// Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.

const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести это число
            },
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};


const { author, comments } = post; 
console.log(author);
console.log(comments[0].rating.dislikes);
console.log(comments[1].userId);
console.log(comments[1].text); 



// Задание 3
// Дан массив products, необходимо цену каждого продукта уменьшить на 15% 
// используя метод forEach.

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(function(product){
product.price = product.price - (product.price * 0.15) 
});
console.log(JSON.stringify(products, null, 2));



// Задание 4
// // 1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография 
// используя метод filter. Исходные данные - массив products.
// // 2. Необходимо отсортировать массив products используя метод sort по цене, 
// начиная с самой маленькой, заканчивая самой большой ценой,
// после чего вывести отсортированный массив в консоль.

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
];

const arrfilter = products.filter(product => product.photos && product.photos.length > 0);
const arrSort = products.sort((a,b) => a.price - b.price);
console.log(JSON.stringify(arrfilter, null, 2));
console.log(JSON.stringify(arrSort, null, 2));



// **Задание 5**
// Дано 2 массива
// Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, 
// а значения второго массива — значениями. 

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

const obj = {};
for (let i = 0; i < ru.length; i++) {
    obj[en[i]] = ru[i]
}
console.log(obj);



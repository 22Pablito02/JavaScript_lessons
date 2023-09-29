// ------------------------------ Home work 1 -------------------------------


// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
// найти минимальное число в массиве, решение задание должно состоять из одной
// строки кода.

let arr = [1, 5, 7, 9];
console.log(Math.min(...arr));


// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект
// с двумя методами: increment и decrement. Метод increment должен увеличивать
// значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
// на 1. Значение счетчика должно быть доступно только через методы объекта,
// а не напрямую.

function createCounter() {
    let count = 0;
    return {
        increment() {
            count++;
        },
        decrement() {
            count--;
        },
        getCount(){
            return count;
        },
    };
};

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getCount());
counter.decrement();
console.log(counter.getCount());


// 3) Дополнительное задание, выполняем только если проходили работу с DOM.
// Напишите рекурсивную функцию findElementByClass, которая принимает корневой
// элемент дерева DOM и название класса в качестве аргументов и возвращает первый
// найденный элемент с указанным классом в этом дереве.

function findElementByClass(rootElement, className) {
    if (rootElement.classList.contains(className)) {
        return rootElement;
    }

    for (const childElement of rootElement.children) {
        const foundElement = findElementByClass(childElement, className);
        if (foundElement) {
            return foundElement;
        }
    }
    return null;
};

// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'text');
// console.log(targetElement);





// ------------------------------ Home work 2 --------------------------------

// Задание 1. Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:
// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).


class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    displayInfo() {
        console.log(`${this.title} - ${this.author} / ${this.pages}`);
    }
}
const book1 = new Book("Atlas Shrugged", "Ayn Rand", 1168);
const book2 = new Book("Lord of the Rings", "John Ronald Reuel Tolkien", 1191 );
book1.displayInfo();
book2.displayInfo();


// Задание 2: "Управление списком студентов"
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:
// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте в консоль. 

class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    displayInfo(){
        console.log(`Name: ${this.name} \nAge: ${this.age} \nGrade: ${this.grade}`);
    }
}

const student = new Student("John Smith",16,"10th grade");
const student2 = new Student("Lion Pupkin",25,"10th grade");
student.displayInfo();
console.log("");
student2.displayInfo();
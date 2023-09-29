// Задание 1. Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:
// Свойство name (имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике (имя) в консоль.

// Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:
// Свойство department (отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).

class Employee{
    constructor(name){
        this.name = name;
    }
    displayInfo(){
        console.log(this.name);
    }
}

class Manager extends Employee{
    constructor(name, department){
        super(name);
        this.department = department;
    }
    displayInfo(){
     console.log(`Имя: ${this.name} \nОтдел: ${this.department}`);   
    }
} 

const employee1 = new Employee("Черт");
employee1.displayInfo();

const manager1 = new Manager("lol","kek");
manager1.displayInfo();


// Задание 2.  Реализуйте класс Product (товар), который имеет следующие свойства и методы:
// Свойство name - название товара.
// Свойство price - цена товара.
// Свойство quantity - количество товара.

// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:
// Свойство id (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект класса Product 
// и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.


class Product{
    constructor(name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity
    }
}

class Order{
    
    constructor(id){
        this.id = id;
        this.products = [];
    }
    addProduct(product){
        this.products.push(product)
    }
    
    getTotalPrice() {
        let totalPrice = 0;
        for (const product of this.products) {
            totalPrice += product.price * product.quantity;
        }
        return totalPrice;
    }
}

const product1 = new Product("яблоко", 1200, 100);
const product2 = new Product("Iphone", 120000, 2);
const order = new Order(1232134);

order.addProduct(product1);
order.addProduct(product2);

console.log(order.products);
console.log(order.getTotalPrice());
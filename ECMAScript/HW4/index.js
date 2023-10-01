// Задание 1.Получение данных о пользователе.
// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) 
// в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID 
// с удаленного сервера. 
// Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. 
// Если пользователь с указанным ID не найден, промис должен быть отклонен 
// с соответствующим сообщением об ошибке.
// Подсказка, с последовательностью действий:
// getUserData использует fetch для получения данных о пользователе с удаленного сервера. 
// Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() 
// и возвращает объект с данными о пользователе. Если запрос неуспешен, 
// функция отклоняет промис с сообщением об ошибке.

async function getUserData(userID) {
    const apiUrl = `https://reqres.in/api/users/${userID}`;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        throw new Error(`Fetch Error: ${error.message}`);
    }
}

const userID = prompt("Enter ID:", 8);
getUserData(userID)
    .then((userData) => {
        console.log(userData); 
    })
    .catch((error) => {
        console.error(error);
    });



// Задание 2. Отправка данных на сервер.
// Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе 
// в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер 
// для сохранения. Функция должна возвращать промис, который разрешается, если данные успешно 
// отправлены, или отклоняется в случае ошибки.

async function saveUserData(userData) {
    try {
        const response = await fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
    } catch (error) {
        throw new Error(`Fetch Error: ${error.message}`);
    }
}

const user = {
    id: 100,
    name: "Chert",
    job: "Undengraund",
};

saveUserData(user)
    .then(() => {
        console.log('User data saved successfully');
    })
    .catch(error => {
        console.log(error.message);
    });



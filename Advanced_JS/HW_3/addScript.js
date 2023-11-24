// "use strict";
// localStorage.setItem('BMW', ['Breaks down very often']);
// localStorage.setItem('Tesla', ['Beats with an electric current', 'Fast']);
// localStorage.setItem('Range Rover', ['Very expensive', 'Comfortable', 'Big']);



// const formEl = document.querySelector(".form");
// const inputEl = document.querySelector(".name");
// const textareaEl = document.querySelector(".review");
// const btnAdd = document.querySelector(".add");

// function getCorrectReview() {
//   if (textareaEl.value && inputEl.value) {
//     return true;
//   }
// }
// function addReview(name, review) {
//   const reviewArr = getReviews(name);

//   if (reviewArr.length === 0) {
//     localStorage.setItem(name, [review]);
//   } else {
//     reviewArr.push(review);
//     localStorage.setItem(name, reviewArr);
//   }
// }
// function getReviews(name) {
//   const data = localStorage.getItem(name);
//   if (data === null) {
//     return [];
//   }  
//   return [data];
// }

// btnAdd.addEventListener("click", () => {
//   if (!getCorrectReview()) {
//     throw new Error("Fill in all fields!");
//   }
//   addReview(inputEl.value, textareaEl.value);
//   inputEl.value = "";
//   textareaEl.value = "";
// });


// Реализуйте функцию unique_in_order, которая принимает в качестве аргумента последовательность 
// и возвращает список элементов без каких-либо 
// элементов с одинаковым значением рядом друг с другом и сохранением исходного порядка элементов.

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

uniqueInOrder('AAAABBBCCDAABBB')
uniqueInOrder('ABBCcAD')
uniqueInOrder([1,2,2,3,3]) 

function uniqueInOrder(iterable) {
 console.log([...iterable].filter((a, i) => a !== iterable[i-1]));
}
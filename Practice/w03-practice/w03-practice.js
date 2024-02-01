/*Author: Nicholas Oblitey Commey
Purpose: To practice using the map(), reduce(), and filter() functions.
As welll as get comfortable with JavaScript.
Date: 31/01/2024 */



// This is the original array 
const originalArr = ['one', 'two', 'three'];

// this constructs a new array using the map function. inside the map bracket holds an iteration
// name for the new function and a curly bracket with a return statement of the outcome. That is how 
// things must be done. This is true although it doesnot use a for loop. 
const arrHTML = originalArr.map(function (arr) {return `<li>${arr}</li>`});

//Last but not least is to place the new array in the HTML document where it's needed.
document.getElementById("myList").innerHTML = arrHTML.join();



function convertGradeToPoints() {
    //here i take the input from the user to work on the outcome.
    var grade = document.getElementById("gradeInput").value.toUpperCase();
    var gpa;
    switch (grade) {
        case 'A':
          gpa = 4.0;
          break;
        case 'B':
          gpa = 3.0;
          break;
        case 'C':
          gpa = 2.0;
          break;
        case 'D':
          gpa = 1.0;
          break;
        case 'F':
          gpa = 0.0;
          break;
        default:
          gpa = 'Invalid Grade';

      }
      document.getElementById("result").innerHTML = `Your GPA is: ${gpa}`;

}
const buttonElement = document.getElementById("calculateButton");
//add event listener and function to take effect. Therefore sparing the code in the Html of JavaScript.
buttonElement.addEventListener("click", convertGradeToPoints);
let specfruit = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const filteredFruits = specfruit.filter((fruit) => fruit.length > 6);
document.getElementById("array").innerHTML = filteredFruits;   
    
const numbers = [12, 34, 21, 54];
const lackNumber = 21;

let lackNumberIndex = numbers.indexOf(lackNumber);



const log = document.querySelector("#log");
document.addEventListener("keydown", logkey);

function logkey(e){
  console.log(e);
}
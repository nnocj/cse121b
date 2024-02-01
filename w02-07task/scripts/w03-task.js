/* LESSON 3 - Programming Tasks 
Author: Nicholas Oblitey Commey
Principles: Make use of event listeners, queries, functions and ternary function.
Note for me: play around .innerHtml, textContent and .value. See what works.
applied, reduce, filter and co. Come back here for reference.
The lessons here will help me build interactive and purposeful web applications.*/

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
   return number1 + number2;
}

function addNumbers(){
    const addNumber1 = Number(document.querySelector("#add1").value);
    const addNumber2= Number(document.querySelector("#add2").value);

    document.querySelector("#sum").value = add(addNumber1, addNumber2);
   
}

/* Function Expression - Subtract Numbers */
function difference(subtract1, subtract2){
    return subtract1 - subtract2;
}

function subtractNumbers(){
    const subtractNumber1 = Number(document.querySelector("#subtract1").value);
    const subtractNumber2 = Number(document.querySelector("#subtract2").value);

    document.querySelector("#difference").value =  difference(subtractNumber1, subtractNumber2);
}

/* Arrow Function - Multiply Numbers */
function product(factor1, factor2){
    return factor1 * factor2;
}

function multiplyNumbers(){
    const multiplyNumber1 = Number(document.querySelector("#factor1").value);
    const multiplyNumber2 = Number(document.querySelector("#factor2").value);

    document.querySelector("#product").value = product(multiplyNumber1, multiplyNumber2);
}

/* Open Function Use - Divide Numbers */
function quotient(dividend, divisor){
    return dividend/divisor;
}

function divideNumbers(){
    const divideNumber1 = Number(document.querySelector("#dividend").value);
    const divideNumber2 = Number(document.querySelector("#divisor").value);

    document.querySelector("#quotient").value = quotient(divideNumber1, divideNumber2);
}

function calculateTotal(){
    //get the numeric value entered by the user in the subtotal field.
    const subtotal = parseFloat(document.querySelector("#subtotal").value);

    //Check IF the membership checkbox has been checked by the user. 
    const isMember = document.querySelector("#member").checked;

    //Apply a 20% discount to the subtotal amount if the member box is checked.
    const discount = isMember? 0.2 : 0;

    //Calculate the total due
    const totalDue = subtotal * (1 - discount);
    
    //output the total due value.
    document.querySelector("#total").innerHTML = `$${totalDue.toFixed(2)}`;// similar to :.2f in python.
}

/* Decision Structure */
document.querySelector("#addNumbers").addEventListener("click", addNumbers);
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);
document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);
document.querySelector("#getTotal").addEventListener("click", calculateTotal)

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector("#array").innerHTML = numbersArray;

/* Output Odds Only Array */
const oddArray = numbersArray.filter(number => number % 2 == 1 );
document.querySelector("#odds").innerHTML = oddArray;

/* Output Evens Only Array */
const evenArray = numbersArray.filter(number => number % 2 == 0 );
document.querySelector("#evens").innerHTML = evenArray;

/* Output Sum of Org. Array */
const sumArray = numbersArray.reduce((sum, number) => sum + number);
document.querySelector("#sumOfArray").textContent = sumArray;


/* Output Multiplied by 2 Array */
const sourceMultiplied = numbersArray.map(number => number * 2);
document.querySelector("#multiplied").innerHTML = sourceMultiplied;

/* Output Sum of Multiplied by 2 Array */
const sumSourceMultiplied = sourceMultiplied.reduce((sum, number) => sum + number);
document.querySelector("#sumOfMultiplied").innerHTML = sumSourceMultiplied;






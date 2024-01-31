
// This is the original array 
const originalArr = ['one', 'two', 'three'];

// this constructs a new array using the map function. inside the map bracket holds an iteration
// name for the new function and a curly bracket with a return statement of the outcome. That is how 
// things must be done. This is true although it doesnot use a for loop. 
const arrHTML = originalArr.map(function (arr) {return `<li>${arr}</li>`});

//Last but not least is to place the new array in the HTML document where it's needed.
document.getElementById("myList").innerHTML = arrHTML.join();
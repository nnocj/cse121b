
// This is the original array 
const originalArr = ['one', 'two', 'three'];

// this constructs a new array using the map function. inside the map bracket holds an iteration
// name for the new function and a curly bracket with a return statement of the outcome. That is how 
// things must be done. This is true although it doesnot use a for loop. 
const arrHTML = originalArr.map(function (arr) {return `<li>${arr}</li>`});

//Last but not least is to place the new array in the HTML document where it's needed.
document.getElementById("myList").innerHTML = arrHTML.join();

const letterGrade = ['A','B','A'];

function gpaGrades(x) {
    if (x == 'A')
    {
       gpa = 4;
    }

    else if (x == 'B')
    {
        gpa = 3;
    }

    else if (x == 'C')
    {
        gpa = 2;
    }

    else if (x == 'D')
    {
        gpa = 1;
    }

    else if (x == 'E'|| x == 'F')
    {
        gpa = 0;
    }

    else 
    {
        gpa = 0;
    }

}
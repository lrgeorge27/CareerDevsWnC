/* global $0 */
// function runWithDebugger(ourFunction) {
//     debugger;
//     ourFunction();
// };

// runWithDebugger(function logTenNumbers() {   //runWithDebugger - higher order function, logTenNumbers is callback function
//     for (var i = 0; i < 10; i++) {
//         console.log(i);
//     }
// });

// setTimeout(function() { //turns a function into an alarm clock
//     console.log("Wake up!");   //setTimeout - higher order function, wake up is callback function
// }, 5000)

var students = ["Jonathan", "Jenny", "Elliot"];

function logName(name) {
    console.log(name); //need to manually enter each array index to print name.
}
// for (var i=0; i<students.length; i++) {  //iterate through the array to print name.
//     logName(students[i]);
// }

// students.forEach(logName);  //for each takes the place of the for loop, for each item in an array

function forEach(myArr, myFunction) { //create your own forEach function to work on any array and function.
    for (var i = 0; i < myArr.length; i++) {
        myFunction(myArr[i]);
    }
}

// forEach(students, function(student){ //this does the same thing as the function below.
//     console.log(student);
// });

forEach(students, logName); //forEach - higher order function, logName is callback function

var tutorialsElement = $0;
tutorialsElement.addEventListener('click', function(event) { //addEventListener - higher order function, function(event) is callback function
    console.log('The tutorials element was clicked!');
});

//Higher order functions:
//functions that accept other functions and enhance their behavior
//ex: runWithDebugger, setTimeout, forEach, addEventListener

//Callback functions:
//functions passed into higher order functions.

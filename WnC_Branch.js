//Arrays version1
//Create an array
var todos = ["item 1", "item 2", "item 3"];

//Add new items to an array
todos.push("item 4");
todos.push("item 5");

//Get a specific item from an array with index#
todos[0];

//Change an item in an array
todos[0] = "item 1 updated";

//Delete an item in an array
todos.splice(0, 1);
todos.splice(3, 1);

//Display an array
console.log(todos);

//Customize functions
console.log('My Todos', todos);

//Functions Version2
//Customizing functions with var in ()
function sayHiTo(person) {
    console.log('hi', person);
}
console.log(sayHiTo('gordon'));

//function to display todos
function displayTodos() {
    console.log('My todos:', todos);
}

//function to add todos
function addTodo(todo) { //todo parameter you want to add
    todos.push(todo);
    displayTodos();
}

addTodo("hello there");

//function to change todos
function changeTodo(position, newValue) { //2 parameters, positon of array item to change, and change to make.
    todos[position] = newValue;
    displayTodos();
}

displayTodos();
changeTodo(0, 'changed');
changeTodo(0, 'changed again');

//function to delete todos
function deleteTodo(position) {
    todos.splice(position, 1); //position of array item you'd like to delete. Number of items to delete at a time. 
    displayTodos();
}

deleteTodo(0);
deleteTodo(2);

//Objects version3
//Creating an object
var myComputer = {
    operatingSystem: "windows",
    screenSize: "12 inches",
    purchaseYear: 2013
};
console.log(myComputer);
console.log(myComputer.operatingSystem);
console.log(myComputer.screenSize);
console.log(myComputer.purchaseYear);

var Lauren = {
    name: "Lauren",
    sayName: function() { //function inside object (method), sayName is function name.
        console.log(this.name); //this refers to the object the function is housed in. 
    }
};
Lauren.sayName();

//Store todos array on an object & create function methods, Version 3
//Changed w/ Version 4 to create objects w/ Booleans
var todoList = {
    todos: [],
    displayTodos: function() { //displayTodos method
        if (this.todos.length === 0) { //Version 5 alerts us to an empty todo list
            console.log("Your todo list is empty!"); //using if else statements and setting the array length strictly equal to 0.
        }
        else {
            console.log("My Todos:");
            for (var i = 0; i < this.todos.length; i++) { //Version 5 displays the todoText portion 
                console.log(this.todos[i].todoText); //of the array objects.
                //Version 5 check if .completed is true
                if (this.todos[i].completed === true) {
                    console.log('(x)', this.todos[i].todoText); //print with (x)
                }
                else {
                    console.log('()', this.todos[i].todoText); //print with ()
                }
            }
        }
    },
    addTodos: function(todoText) { //addTodos method
        this.todos.push({ //addTodos now creates an object in an array instead of an item.
            todoText: todoText, //label: parameter 
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function(position, todoText) { //changeTodo method
        //this.todos[position] = newValue;
        this.todos[position].todoText = todoText; //changeTodo now creates new text in the todoText position of the object.
        this.displayTodos();
    },
    deleteTodo: function(position) { //deleteTodo method
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleCompleted: function(position) {
        var todo = this.todos[position]; //var keeps us from having to type this.todos[position] on both sides of = in next line.
        todo.completed = !todo.completed; //change value to opposite, false = !false (=true)
        this.displayTodos();
    },
    toggleAll: function() { //version 6 creating the toggleAll method. If everything is true, make everything false. Otherwise, make everything true.
        var totalTodos = this.todos.length;
        var completedTodos = 0;
        //Get number of completed todos
        for (var i = 0; i < totalTodos; i++) {
            if (this.todos[i].completed === true) {
                completedTodos++;
            }
        }
        //Case 1: if everything is true make everything false
        if (completedTodos === totalTodos) {
            //make everything false
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            }
            //Case 2: Otherwise, make everything true.    
        }
        else {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;
            }
        }
        this.displayTodos();
    }
};


// todoList.displayTodos();
// todoList.addTodos('c9');
// todoList.changeTodo(0, "first");
// todoList.deleteTodo(1);

//Version 4 Booleans
// {
//     todoText: "item 1", 
//     completed: false //boolean value true or false
// }

// todoList.addTodos('first try');
// todoList.changeTodo(0, 'second try');
// todoList.toggleCompleted(0);

//Version 5 for loops
// todoList.displayTodos();
//Version 6 toggleAll
todoList.addTodos('first');
todoList.addTodos('second');
todoList.addTodos('third');
// todoList.addTodos('four');
// todoList.addTodos('fifth');
todoList.toggleCompleted(0);
// todoList.toggleCompleted(1);
// todoList.toggleCompleted(2);
todoList.toggleAll();
// todoList.toggleAll();

//Interlude - Data types overview
// Objects {} todoList, arrays, functions
// Primatives (building blocks)
// -String = 'text in quotes'
// -Number = 1, 2, 3, 4 ...integers
// -Boolean = true, false
// -Undefined = value that hasn't been set, no variable
// -Null = 'nothing' ex: score for an exam not taken

// Comparisons with primitives(values)
// 'text' === 'text', true
// 'text' === 'text1', false
// 1 === 1, true
// 1 === 2, false
// true === true, true
// true === false, false
// false === false, true

// Comparisons with objects (refernces - saving a memory address so you can refer to the values)
// {} === {}, false
// [1, 2, 3] === [1, 2, 3], false
// Identical street, comparisons only work when you are comparing the same house. 
// JS doesn't care if the houses look identical, it is looking at the address, which is different.
// Each object created has a unique memory address.
// var houseA = {};
// houseA === houseA;

//Version 7
//DOM browsers interpretation of HTML
//1. Get access to the display todos button
var displayTodosButton = document

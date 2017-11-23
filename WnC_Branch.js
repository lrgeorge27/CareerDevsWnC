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

//Store todos array on an object & create function methods
var todoList = {
    todos: [],
    displayTodos: function() { //displayTodos method
        console.log("My Todos:", this.todos);
    },
    addTodos: function(todoText) { //addTodos method
        this.todos.push({
            todoText: todoText, //label: parameter
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function(position, todoText) { //changeTodo method
        //this.todos[position] = newValue;
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function(position) { //deleteTodo method
        this.todos.splice(position, 1);
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

todoList.addTodos('first try');
todoList.changeTodo(0, 'second try');

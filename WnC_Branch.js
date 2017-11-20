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
function addTodo(todo) {
    todos.push(todo);
    displayTodos();
}

addTodo("hello there");

//function to change todos
function changeTodo(position, newValue) {
    todos[position] = newValue;
    displayTodos();
}

displayTodos();
changeTodo(0, 'changed');
changeTodo(0, 'changed again');

//function to delete todos
function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}

deleteTodo(0);
deleteTodo(2);
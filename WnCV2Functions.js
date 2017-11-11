var todos =['item1', 'item2', 'item3']

//It should have a function to display todos. 
function displayTodos() {
    console.log("My Todos:", todos);
}
displayTodos()

//Function to add todos. addTodos(requires a value) to work.
function addTodos() {  //a
    todos.push("new todo");
    displayTodos();
}

//Function to change a todo item. changeTodo(requires a 0+ position locator, and the value it is being changed to). 
function changeTodo(postion, newValue) {
    todos[position] = newValue;
    displayTodos();
}

//Function to delete todo items. deleteTodo(requires a position value of 0+).
function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}
undefined
deleteTodo(0);
//VM103:4 My Todos: (6) ["item2", "item3", "new todo", "new todo", "new todo", "some stuff"]
undefined
deleteTodo(0)
//VM103:4 My Todos: (5) ["item3", "new todo", "new todo", "new todo", "some stuff"]
undefined
deleteTodo(2)
//VM103:4 My Todos: (4) ["item3", "new todo", "new todo", "some stuff"]
undefined
deleteTodo(1)
//VM103:4 My Todos: (3) ["item3", "new todo", "some stuff"]
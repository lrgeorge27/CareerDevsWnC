var todos =['item1', 'item2', 'item3']

function displayTodos() {
    console.log("My Todos:", todos);
}
displayTodos()

function addTodos() {
    todos.push("new todo");
    displayTodos();
}
function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}
undefined
deleteTodo(0);
VM103:4 My Todos: (6) ["item2", "item3", "new todo", "new todo", "new todo", "some stuff"]
undefined
deleteTodo(0)
VM103:4 My Todos: (5) ["item3", "new todo", "new todo", "new todo", "some stuff"]
undefined
deleteTodo(2)
VM103:4 My Todos: (4) ["item3", "new todo", "new todo", "some stuff"]
undefined
deleteTodo(1)
VM103:4 My Todos: (3) ["item3", "new todo", "some stuff"]
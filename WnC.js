var todos = ['item 1', 'item 2', 'item 3'];
undefined
todosnode
(3) ["item 1", "item 2", "item 3"]
console.log('hello there')
VM163:1 hello there
undefined
console.log('hello there', 'gordon')
VM187:1 hello there gordon
undefined
var todos = ['item 1', 'item 2', 'item 3'];
undefined
console.log(todos)
VM219:1 (3) ["item 1", "item 2", "item 3"]
undefined
console.log('My todos:' todos)
VM255:1 Uncaught SyntaxError: missing ) after argument list
console.log('My todos:', todos)
VM257:1 My todos: (3) ["item 1", "item 2", "item 3"]
undefined
todos.push('item 4')
4
todos.push('item 5')
5
todos
(5) ["item 1", "item 2", "item 3", "item 4", "item 5"]
todos[0]
"item 1"
todos[1]
"item 2"
todos[2]
"item 3"
todos[4]
"item 5"
todos[5]
undefined
todos[0] = 'item 1 updated'
"item 1 updated"
todos
(5) ["item 1 updated", "item 2", "item 3", "item 4", "item 5"]
todos.splice(0, 1)
["item 1 updated"]
todos
(4) ["item 2", "item 3", "item 4", "item 5"]
todos.splice(3, 1)
["item 5"]
todos
(3) ["item 2", "item 3", "item 4"]
todos.splice(3, 1)
[]

var todos =['item1', 'item2', 'item3']

function displayTodos() {
    console.log('My Todos:', todos);
}
displayTodos()
VM103:4 My Todos: (3) ["item1", "item2", "item3"]
undefined
function addTodo() {
    todos.push('new todo');
	displayTodos();
}
undefined
addTodo()
VM103:4 My Todos: (6) ["item1", "item2", "item3", "new todo", "new todo", "new todo"]
undefined
function addTodo(todo) {
    todos.push(todo);
	displayTodos();
}
undefined
addTodo('some stuff')
VM103:4 My Todos: (7) ["item1", "item2", "item3", "new todo", "new todo", "new todo", "some stuff"]
undefined
function changeTodo(position, newValue) {
     todos[position] = newValue;
}
undefined
displayTodos()
VM103:4 My Todos: (7) ["item1", "item2", "item3", "new todo", "new todo", "new todo", "some stuff"]
undefined
changeTodo(0, "changed")
undefined
displayTodos()
VM103:4 My Todos: (7) ["changed", "item2", "item3", "new todo", "new todo", "new todo", "some stuff"]
undefined
function changeTodo(position, newValue) {
     todos[position] = newValue;
	 displayTodos();
}
undefined
displayTodos()
VM103:4 My Todos: (7) ["changed", "item2", "item3", "new todo", "new todo", "new todo", "some stuff"]
undefined
changeTodo(0, "changed again")
VM103:4 My Todos: (7) ["changed again", "item2", "item3", "new todo", "new todo", "new todo", "some stuff"]
undefined
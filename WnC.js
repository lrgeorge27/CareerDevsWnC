var todos = ['item 1', 'item 2', 'item 3'];
undefined
todos
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
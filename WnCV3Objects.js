var myComputer = {
    operatingSystem: 'windows',
    screenSize: '15 inches',
    purchaseYear: 2013
};

// myComputer
// { operatingSystem: 'windows',
//  screenSize: '15 inches',
//  purchaseYear: 2013 }
// > myComputer.operatingSystem
// 'windows'
// > myComputer.screenSize
// '15 inches'
// > myComputer.purchaseYear
// 2013
// > 
var lauren = {
    name: 'Lauren', 
    sayName: function() {
        console.log(this.name);
    }
}

//Display todos method
var todoList = {
  todos: ['item 1', 'item 2', 'item 3'], 
  displayTodos: function() {
  console.log("My Todos:", this.todos);
  },
  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodo: function(position, newValue) {
      this.todos[position] = newValue;
      this.displayTodos();
  }, 
  deleteTodo: function(positon) {
      this.todos.splice(position, 1);
      this.displayTodos();
  }
    
};

// todoList.displayTodos();
// Todos: ['item 1', 'item 2', 'item 3' ]
// todoList.addTodo("new")
// My Todos: [ 'item 1', 'item 2', 'item 3', 'new' ]
// todoList.changeTodo(0, "first")
// My Todos: [ 'first', 'item 2', 'item 3' ]
todoList.deleteTodo(1)
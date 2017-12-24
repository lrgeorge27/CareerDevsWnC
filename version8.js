//version 8
//Refactoring - process of restructuring existing code, w/o changing external behavior. Improves nonfuctional attributes of software.
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

//version 8 -refactoring the process of getting elements by id 
//and adding event listeners to a simplified process with a handler object and onclick attributes.
var handlers = { //object handles all the methods for different events
    displayTodos: function() {
        todoList.displayTodos();
    },
    toggleAll: function() {
        todoList.toggleAll();
    },
    addTodos: function() {
        var addTodoTextInput = document.getElementById("addTodoTextInput"); //grabing the text input
        todoList.addTodos(addTodoTextInput.value); //setting it as an argument to meet the parameter todoText
        addTodoTextInput.value = ""; //clears the input box on submit
    },
    changeTodos: function() {
        var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
        var changeTodoTextInput = document.getElementById("changeTodoTextInput");
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = "";
        changeTodoTextInput.value = "";
    }
};

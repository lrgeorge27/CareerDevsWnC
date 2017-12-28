//version 8
//Refactoring - process of restructuring existing code, w/o changing external behavior. Improves nonfuctional attributes of software.
var todoList = {
    todos: [],
    addTodos: function(todoText) { //addTodos method
        this.todos.push({ //addTodos now creates an object in an array instead of an item.
            todoText: todoText, //label: parameter 
            completed: false
        });
    },
    changeTodo: function(position, todoText) { //changeTodo method
        //this.todos[position] = newValue;
        this.todos[position].todoText = todoText; //changeTodo now creates new text in the todoText position of the object.
    },
    deleteTodo: function(position) { //deleteTodo method
        this.todos.splice(position, 1);
    },
    toggleCompleted: function(position) {
        var todo = this.todos[position]; //var keeps us from having to type this.todos[position] on both sides of = in next line.
        todo.completed = !todo.completed; //change value to opposite, false = !false (=true)
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
    }
};

//version 8 -refactoring the process of getting elements by id 
//and adding event listeners to a simplified process with a handler object and onclick attributes.
var handlers = { //object handles all the methods for different events
    addTodos: function() {
        var addTodoTextInput = document.getElementById("addTodoTextInput"); //grabing the text input
        todoList.addTodos(addTodoTextInput.value); //setting it as an argument to meet the parameter todoText
        addTodoTextInput.value = ""; //clears the input box on submit
        view.displayTodos();
    },
    changeTodos: function() {
        var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
        var changeTodoTextInput = document.getElementById("changeTodoTextInput");
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = "";
        changeTodoTextInput.value = "";
        view.displayTodos();
    },
    deleteTodo: function() {
        var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput = "";
        view.displayTodos();
    },
    toggleCompleted: function() {
        var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput = "";
        view.displayTodos();
    },
    toggleAll: function() {
        todoList.toggleAll();
        view.displayTodos();
    }
};

//version 9 - dynamic list display
var view = {
    displayTodos: function() { //creates a dynamic list display.
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = "";
        for (var i = 0; i < todoList.todos.length; i++) { //iterate through the todoList array to grab the items.
            var todoLi = document.createElement('li'); //creates a list element.
            var todo = todoList.todos[i]; //create a variable to access each todo item for copletion if/else statement. Saves us from typing todoList.todos[i] repeatedly.
            var todoTextWithCompletion = "";

            if (todo.completed === true) {
                todoTextWithCompletion = "(x) " + todo.todoText;
            }
            else {
                todoTextWithCompletion = "( ) " + todo.todoText;
            }

            todoLi.textContent = todoTextWithCompletion; //replaces line below and includes completion info.
            // todoLi.textContent = todoList.todos[i].todoText; //adds the todoText to the list item
            todosUl.appendChild(todoLi); //places the list element with text into the unordered list.
        }
    }
};

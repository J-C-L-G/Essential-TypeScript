"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TodoItem_1 = require("./TodoItem");
const TodoCollection_1 = require("./TodoCollection");
const inquirer_1 = require("inquirer");
var Commands;
(function (Commands) {
    Commands["Toggle"] = "Show/Hide Completed";
    Commands["Add"] = "Add Mew Task";
    Commands["Complete"] = "Complete Task";
    Commands["Purge"] = "Remove Completed Tasks";
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
const todos = [
    new TodoItem_1.TodoItem(1, "Learn TypeScript"),
    new TodoItem_1.TodoItem(2, "Learn Mobx"),
    new TodoItem_1.TodoItem(3, "Learn Loopback"),
    new TodoItem_1.TodoItem(4, "Learn Hooks"),
    new TodoItem_1.TodoItem(5, "Learn React", true)
];
const collection = new TodoCollection_1.TodoCollection("Carlos", todos);
let showCompletedTodo = false;
const displayTodoList = (collection) => {
    const todoCount = collection.getItemCounts();
    console.log(`${collection.userName}'s Todo List`);
    console.log(`Total Todo's: ${todoCount.total}, Pending tasks: ${todoCount.incomplete}`);
    collection.getTodoItems(showCompletedTodo).forEach(todo => todo.printDetails());
};
const promptInput = (message) => inquirer_1.prompt({
    type: "input",
    name: "data",
    message
});
const promptUser = async () => {
    console.clear();
    displayTodoList(collection);
    const answer = await inquirer_1.prompt({
        type: "list",
        name: "command",
        message: "Choose an option",
        choices: Object.values(Commands),
    });
    switch (answer.command) {
        case Commands.Quit: {
            return answer;
        }
        case Commands.Add: {
            const { data } = await promptInput("Enter task:");
            if (data) {
                collection.addTodo(data);
            }
            break;
        }
        case Commands.Complete: {
            const { data } = await promptInput("Enter task ID:");
            if (data) {
                collection.markComplete(+data, true);
            }
            break;
        }
        case Commands.Toggle: {
            showCompletedTodo = !showCompletedTodo;
            break;
        }
        case Commands.Purge: {
            collection.removeComplete();
            break;
        }
    }
    return promptUser();
};
promptUser().then(console.log);

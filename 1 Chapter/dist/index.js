"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TodoItem_1 = require("./TodoItem");
const TodoCollection_1 = require("./TodoCollection");
const inquirer_1 = require("inquirer");
var Commands;
(function (Commands) {
    Commands["Quit"] = "Quit";
    Commands["Add"] = "Add";
})(Commands || (Commands = {}));
const todos = [
    new TodoItem_1.TodoItem(1, "Learn TypeScript"),
    new TodoItem_1.TodoItem(2, "Learn Mobx"),
    new TodoItem_1.TodoItem(3, "Learn Loopback"),
    new TodoItem_1.TodoItem(4, "Learn Hooks"),
    new TodoItem_1.TodoItem(5, "Learn React")
];
const collection = new TodoCollection_1.TodoCollection("Carlos", todos);
const displayTodoList = (collection) => {
    const todoCount = collection.getItemCounts();
    console.log(`${collection.userName}'s Todo List`);
    console.log(`Total Todo's: ${todoCount.total}, Pending tasks: ${todoCount.incomplete}`);
    collection.getTodoItems(false).forEach(todo => todo.printDetails());
};
const promptUser = async () => {
    console.clear();
    displayTodoList(collection);
    const answer = await inquirer_1.prompt({
        type: "list",
        name: "command",
        message: "Choose an option",
        choices: Object.values(Commands)
    });
    if (answer["command"] !== Commands.Quit) {
        return promptUser();
    }
    else {
        return answer;
    }
};
promptUser().then(console.log);

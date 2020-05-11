"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TodoItem_1 = require("./TodoItem");
const TodoCollection_1 = require("./TodoCollection");
const todos = [
    new TodoItem_1.TodoItem(1, "Learn TypeScript"),
    new TodoItem_1.TodoItem(2, "Learn Mobx"),
    new TodoItem_1.TodoItem(3, "Learn Loopback"),
    new TodoItem_1.TodoItem(4, "Learn Hooks"),
];
const collection = new TodoCollection_1.TodoCollection("Carlos", todos);
const todoId = collection.addTodo("Learn React");
const reactTodo = collection.getTodoById(todoId);
const todoCount = collection.getItemCounts();
console.clear();
console.log(`${collection.userName}'s Todo List`);
console.log(`Total Todo's: ${todoCount.total}, Pending tasks: ${todoCount.incomplete}`);
console.log(reactTodo.printDetails());
collection.markComplete(todoId, true);
console.log(collection.getTodoItems(true));
collection.removeComplete();
console.log(collection.getTodoItems(true));
console.log(reactTodo.printDetails());

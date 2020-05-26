"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TodoItem_1 = require("./TodoItem");
const TodoCollection_1 = require("./TodoCollection");
const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
class JsonTodoCollection extends TodoCollection_1.TodoCollection {
    constructor(userName, todoItems = []) {
        super(userName, todoItems);
        this.userName = userName;
        this.database = lowdb(new FileSync("Todo.json"));
        if (this.database.has("tasks").value()) {
            const dbItems = this.database.get("tasks").value();
            dbItems.forEach(item => this.todoMap.set(item.id, new TodoItem_1.TodoItem(item.id, item.task, item.complete)));
        }
        else {
            this.database.set("tasks", todoItems).write();
            todoItems.forEach(item => this.todoMap.set(item.id, item));
        }
    }
    addTodo(task) {
        let result = super.addTodo(task);
        this.storeTasks();
        return result;
    }
    markComplete(id, complete) {
        const result = super.markComplete(id, complete);
        this.storeTasks();
        return result;
    }
    removeComplete() {
        super.removeComplete();
        this.storeTasks();
    }
    storeTasks() {
        this.database.set("tasks", [...this.todoMap.values()]).write();
    }
}
exports.JsonTodoCollection = JsonTodoCollection;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TodoItem_1 = require("./TodoItem");
class TodoCollection {
    constructor(userName, todoItems = []) {
        this.userName = userName;
        this.nextId = 1;
        this.todoMap = new Map();
        todoItems.forEach(todo => this.todoMap.set(todo.id, todo));
    }
    addTodo(task) {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        this.todoMap.set(this.nextId, new TodoItem_1.TodoItem(this.nextId, task));
        return this.nextId;
    }
    getTodoById(id) {
        return this.todoMap.get(id);
    }
    getTodoItems(showCompleted = true) {
        return [...this.todoMap.values()].filter(({ complete }) => complete === showCompleted);
    }
    markComplete(id, complete) {
        const todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = complete;
            return true;
        }
        return false;
    }
    removeComplete() {
        this.todoMap.forEach(({ id, complete }) => {
            if (complete) {
                this.todoMap.delete(id);
            }
        });
    }
    getItemCounts() {
        return {
            total: this.todoMap.size,
            incomplete: this.getTodoItems(false).length
        };
    }
}
exports.TodoCollection = TodoCollection;

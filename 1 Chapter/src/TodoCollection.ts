import {TodoItem} from "./TodoItem";

export class TodoCollection {

    private nextId: number = 1;

    constructor(public username: string, public todoItems: TodoItem[] = []) {
    }

    addTodo(task: string): number {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        this.todoItems.push(new TodoItem(this.nextId, task));
        return this.nextId;
    }

    getTodoById(id: number): TodoItem {
        return this.todoItems.find(todo => todo.id === id);
    }

    markComplete(id: number, complete: boolean): boolean {
        const todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = complete;
            return true;
        }
        return false;
    }
}
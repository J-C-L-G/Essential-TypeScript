import {TodoItem} from "./TodoItem";
import {TodoCollection} from "./TodoCollection";
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync"

type Task = {
    id: number,
    task: string,
    complete: boolean
};

type SchemaType = {
    tasks: Task[]
};

export class JsonTodoCollection extends TodoCollection {
    private database: lowdb.LowdbSync<SchemaType>;

    constructor(public userName: string, todoItems: TodoItem[] = []) {
        super(userName, todoItems);
        this.database = lowdb(new FileSync("Todo.json"));
        if (this.database.has("tasks").value()) {
            const dbItems = this.database.get("tasks").value();
            dbItems.forEach(item => this.todoMap.set(item.id,
                new TodoItem(item.id, item.task, item.complete)));
        } else {
            this.database.set("tasks", todoItems).write();
            todoItems.forEach(item => this.todoMap.set(item.id, item));
        }
    }

    addTodo(task: string): number {
        let result = super.addTodo(task);
        this.storeTasks();
        return result;
    }

    markComplete(id: number, complete: boolean): boolean {
        const result = super.markComplete(id, complete);
        this.storeTasks();
        return result;
    }

    removeComplete(): void {
        super.removeComplete();
        this.storeTasks();
    }

    private storeTasks() {
        this.database.set("tasks", [...this.todoMap.values()]).write();
    }
}
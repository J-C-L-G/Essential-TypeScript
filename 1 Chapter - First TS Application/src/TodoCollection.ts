import {TodoItem} from "./TodoItem";

type ItemCount = {
    total: number,
    incomplete: number
}



export class TodoCollection {

    private nextId: number = 1;
    // The protected keyword tells the TypeScript compiler that a property can be accessed only by a class or its subclasses.
    protected todoMap = new Map<number, TodoItem>();

    constructor(public userName: string, todoItems: TodoItem[] = []) {
        todoItems.forEach(todo => this.todoMap.set(todo.id, todo));
    }

    addTodo(task: string): number {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        this.todoMap.set(this.nextId, new TodoItem(this.nextId, task));
        return this.nextId;
    }

    getTodoById(id: number): TodoItem {
        return this.todoMap.get(id);
    }

    getTodoItems(showCompleted: boolean = true): TodoItem[] {
        return [...this.todoMap.values()].filter(({complete}) => complete === showCompleted);
    }

    markComplete(id: number, complete: boolean): boolean {
        const todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = complete;
            return true;
        }
        return false;
    }

    removeComplete() {
        this.todoMap.forEach(({id, complete}) => {
            if (complete) {
                this.todoMap.delete(id);
            }
        });
    }

    getItemCounts(): ItemCount {
        return {
            total: this.todoMap.size,
            incomplete: this.getTodoItems(false).length
        }
    }
}
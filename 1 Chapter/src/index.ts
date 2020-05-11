import {TodoItem} from "./TodoItem";
import {TodoCollection} from "./TodoCollection";

const todos: TodoItem[] = [
    new TodoItem(1, "Learn TypeScript"),
    new TodoItem(2, "Learn Mobx"),
    new TodoItem(3, "Learn Loopback"),
    new TodoItem(4, "Learn Hooks"),
];
const collection: TodoCollection = new TodoCollection("Carlos", todos);
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

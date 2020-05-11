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

console.clear();
console.log(`${collection.userName}'s Todo List`);
console.log(reactTodo.printDetails());
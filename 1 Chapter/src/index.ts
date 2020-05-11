import {TodoItem} from "./TodoItem";
import {TodoCollection} from "./TodoCollection";
import {prompt} from "inquirer";

enum Commands {
    Quit = "Quit",
    Add = "Add",
}

const todos: TodoItem[] = [
    new TodoItem(1, "Learn TypeScript"),
    new TodoItem(2, "Learn Mobx"),
    new TodoItem(3, "Learn Loopback"),
    new TodoItem(4, "Learn Hooks"),
    new TodoItem(5, "Learn React")
];
const collection: TodoCollection = new TodoCollection("Carlos", todos);

const displayTodoList = (collection: TodoCollection): void => {
    const todoCount = collection.getItemCounts();
    console.log(`${collection.userName}'s Todo List`);
    console.log(`Total Todo's: ${todoCount.total}, Pending tasks: ${todoCount.incomplete}`);
    collection.getTodoItems(false).forEach(todo => todo.printDetails());
};

const promptUser = async (): Promise<object> => {
    console.clear();
    displayTodoList(collection);
    const answer = await prompt({
        type: "list",
        name: "command",
        message: "Choose an option",
        choices: Object.values(Commands)
    });

    if (answer["command"] !== Commands.Quit) {
        return promptUser();
    } else {
        return answer;
    }
};

promptUser().then(console.log);

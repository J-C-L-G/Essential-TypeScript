import {TodoItem} from "./TodoItem";
import {TodoCollection} from "./TodoCollection";
import {prompt} from "inquirer";

type CommandObject = {
    command: string
};

type UserData = {
    data: string
}

enum Commands {
    Toggle = "Show/Hide Completed",
    Add = "Add Mew Task",
    Complete = "Complete Task",
    Purge = "Remove Completed Tasks",
    Quit = "Quit",
}

const todos: TodoItem[] = [
    new TodoItem(1, "Learn TypeScript"),
    new TodoItem(2, "Learn Mobx"),
    new TodoItem(3, "Learn Loopback"),
    new TodoItem(4, "Learn Hooks"),
    new TodoItem(5, "Learn React", true)
];
const collection: TodoCollection = new TodoCollection("Carlos", todos);
let showCompletedTodo: boolean = false;

const displayTodoList = (collection: TodoCollection): void => {
    const todoCount = collection.getItemCounts();
    console.log(`${collection.userName}'s Todo List`);
    console.log(`Total Todo's: ${todoCount.total}, Pending tasks: ${todoCount.incomplete}`);
    collection.getTodoItems(showCompletedTodo).forEach(todo => todo.printDetails());
};

const promptInput = (message: string): Promise<UserData> => prompt({
    type: "input",
    name: "data",
    message
});

const promptUser = async (): Promise<CommandObject> => {
    console.clear();
    displayTodoList(collection);
    const answer = await prompt({
        type: "list",
        name: "command",
        message: "Choose an option",
        choices: Object.values(Commands),
    });

    switch (answer.command) {
        case Commands.Quit: {
            return answer;
        }
        case Commands.Add: {
            const {data} = await promptInput("Enter task:");
            if (data) {
                collection.addTodo(data);
            }
            break;
        }
        case Commands.Complete: {
            const {data} = await promptInput("Enter task ID:");
            if (data) {
                collection.markComplete(+data, true);
            }
            break;
        }
        case Commands.Toggle: {
            showCompletedTodo = !showCompletedTodo;
            break;
        }
        case Commands.Purge: {
            collection.removeComplete();
            break;
        }
    }
    return promptUser();
};

promptUser().then(console.log);

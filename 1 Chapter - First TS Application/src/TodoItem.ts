// ..:: Concise ::..
// Allows the TodoItem class to receive parameters and use them to create instance properties in a single step.
export class TodoItem {
    constructor(public id: number,
                public task: string,
                public complete: boolean = false) {
    }

    public printDetails(): void{
        console.log(`${this.id}\t${this.task}\t Completed: "${this.complete}"`);
    }
}


// ..:: Verbose ::..
/*
export class TodoItem {
    public id: number;
    public task: string;
    public complete: boolean;

    public constructor(id: number, task: string, complete: boolean = false){
        this.id = id;
        this.task = task;
        this.complete = complete;
    }

    public printDetails(): void{
        console.log(`${this.id}\t${this.task}\t Completed: "${this.complete}"`);
    }
}*/

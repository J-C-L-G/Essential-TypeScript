import {sum} from "./calc";

type test = {
    message: string;
    num: 1;
};

function printMessage(msg: test){
    return `Log: ${msg.message}`;
}

console.log(printMessage({message: "hey", num: 1}));

console.log(sum(1,2,3));
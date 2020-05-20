import {sum} from "./calc";

const vals: number[] = [1,2,3,4,5,6,7,8,9];

console.log(`${vals.toString().split(",").join(" + ")} = ${sum(...vals)}`);

#! /usr/bin/env node 
import inquirer from "inquirer";
const result = await inquirer.prompt([
    { message: "Enter the first number", type: "number", name: "firstNumber" },
    { message: "Enter the Second number", type: "number", name: "SecondNumber" },
    { message: "Select one of the operator to perform your operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multipication", "Division"],
    },
]);
// condition 
if (result.operator === "Addition") {
    console.log(result.firstNumber + result.SecondNumber);
}
else if (result.operator === "Subtraction") {
    console.log(result.firstNumber - result.SecondNumber);
}
else if (result.operator === "Multipication") {
    console.log(result.firstNumber * result.SecondNumber);
}
else if (result.operator === "Division") {
    console.log(result.firstNumber / result.SecondNumber);
}
else {
    console.log("Please select valid operator");
}

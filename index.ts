import inquirer from "inquirer";

const answer = await inquirer.prompt([
  {
    type: "number",
    name: "num1",
    message: "Enter your first number",
  },
  {
    type: "number",
    name: "num2",
    message: "Enter your second number",
  },
  {
    type: "list",
    name: "operator",
    message: "Select the operator you want perform",
    choices: ["Add", "Divide", "Multiply", "Substraction"],
  },
]);
let result: number;
switch (answer.operator) {
  case "Add":
    result = answer.num1 + answer.num2;
    console.log("The answer for Add is " + result);
    
    break;
  case "Divide":
    result = answer.num1 / answer.num2;
    console.log("The answer for Divide is " + result);

    break;
  case "Multiply":
    result = answer.num1 * answer.num2;
    console.log("The answer for Multiply is " + result);

    break;
  case "Substraction":
    result = answer.num1 - answer.num2;
    console.log("The answer for Substraction is " + result);

    break;
  
}

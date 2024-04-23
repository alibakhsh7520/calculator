import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "select one number", type: "number", name: "firstnumber" },
    { message: "select second number", type: "numbr", name: "secondnumber" },
    {
        message: "select one operator to perform",
        type: "list",
        name: "operator",
        choices: ["ADDITION", "SUBTRUCTION", "MULTIPLICATION", "DIVISION"],
    },
]);
if (answer.operator === "ADDITION") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "SUBTRUCTION") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "MULTIPLICATION") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "DIVISION") {
    console.log(answer.firstnumber / answer.secondnumber);
}

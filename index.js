#! /usr/bin/env node
//guess game
import inquirer from "inquirer";
//now declear verible
let a = Math.floor(Math.random() * 8);
console.log("guess a number between 0 to 8");
while (true) {
    let input = await inquirer.prompt({
        name: "guess",
        type: "number",
        message: "enter your guess number you want to 0 to 8: ",
    });
    //provide code
    let ans = input.guess;
    if (a == ans) {
        console.log("congratulation your guess number is correct");
        break;
    }
    else {
        console.log("sorry you guess wrong number try again");
    }
}

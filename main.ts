#!/usr/bin/env node
import inquirer from "inquirer"

const randomNumber = Math.floor(Math.random()* 10 + 1);


const answer =  await inquirer.prompt(
    [
        {
            name: "userGuessedNumber",
            type: "number",
            message: "please guess a number between 1 to 10: "
        }
    ]
) 


if (answer.userGuessedNumber === randomNumber){
    console.log("congratulations! you gussed the right number")
}else {
    console.log("you gussed wrong number.")
}

console.log(`I guessed ${randomNumber}`);

#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.blackBright.bgYellow("\n\t**** WELLCOME TO SUK CURRENCY CONVERTER ****\n"));
const currency_rate = {
    PKR: 1,
    INR: 0.3,
    USD: 0.0036,
    AFN: 0.26,
    LRD: 0.69,
    IRR: 151.6,
    HKD: 0.028,
    JMD: 0.56,
    NZD: 0.006,
    OMR: 0.0014,
    QAR: 0.013,
    CAD: 0.0049,
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: chalk.blueBright("Select your currency"),
        type: "list",
        choices: ["PKR", "INR", "USD", "AFN", "LRD", "IRR", "HKD", "JMD", "NZD", "OMR", "QAR", "CAD"],
    },
    {
        name: "to",
        message: chalk.blueBright("Select converted currency"),
        type: "list",
        choices: ["PKR", "INR", "USD", "AFN", "LRD", "IRR", "HKD", "JMD", "NZD", "OMR", "QAR", "CAD",],
    },
    {
        name: "amount",
        message: chalk.blue("Enter your amount"),
        type: "number",
    },
]);
let FromAmount = currency_rate[user_answer.from];
let ToAmount = currency_rate[user_answer.to];
let amount = user_answer.amount;
let BaseAmount = amount / FromAmount;
let convertedAmount = BaseAmount * ToAmount;
console.log(chalk.green("Converted Amount"), "=", convertedAmount.toFixed(2));

const  a = require("readline-sync");

let result;
const operator = a.question('Enter operator: ');
const number1 =a. questionInt(('Enter first number: '));
const number2 = a.questionInt(('Enter second number: '));

switch(operator) {
    case '+':
        result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;
    case '-':
        result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;
    case '*':
        result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;
    case '/':
        result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;

    
    default:
        console.log('Invalid operator');
        break;
}
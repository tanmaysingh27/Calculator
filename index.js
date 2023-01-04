let number1 = document.getElementById("number1")

let number2 =  document.getElementById("number2")

let number  = ""
let operation = null

let result = document.getElementById("answer")

function answer()
{
    number2.textContent = number

    if(operation === 1)
    {
        result.textContent = parseInt(number1.textContent) / parseInt(number2.textContent)
    }
    else if(operation === 2)
    {
        result.textContent = parseInt(number1.textContent) * parseInt(number2.textContent)
    }
    else if(operation === 3)
    {
        result.textContent = parseInt(number1.textContent) + parseInt(number2.textContent)
    }
    else if(operation === 4)
    {
        result.textContent = parseInt(number1.textContent) - parseInt(number2.textContent)
    }
}
function print1() {
    console.log(1);
    number += "1"
    console.log(number);
}

function print2() {
    console.log(2);
    number += "2"
    console.log(number);
}

function print3() {
    console.log(3);
    number += "3"
    console.log(number);
}

function print4() {
    console.log(4);
    number += "4"
    console.log(number);
}

function print5() {
    console.log(5);
    number += "5"
    console.log(number);
}

function print6() {
    console.log(6);
    number += "6"
    console.log(number);
}

function print7() {
    console.log(7);
    number += "7"
    console.log(number);
}

function print8() {
    console.log(8);
    number += "8"
    console.log(number);
}

function print9() {
    console.log(9);
    number += "9"
    console.log(number);
}

function print0() {
    console.log(0);
    number += "0"
    console.log(number);
}

function sum() {
    number1.textContent = number
    number = ""
    operation = 3
    console.log(number1.textContent);
}
function subtract() {
    number1.textContent = number
    number = ""
    operation = 4
    console.log(number1.textContent);
}
function divide() {
    number1.textContent = number
    number = ""
    operation = 1
    console.log(number1.textContent);
}
function multiply() {
    number1.textContent = number
    number = ""
    operation = 2
    console.log(number1.textContent);
}



function clear() {
    number = ""
    number1.textContent = ""
    number2.textContent = ""
    console.log(number1);
}
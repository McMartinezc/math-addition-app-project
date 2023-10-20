//generate random numbers. Utilizo la biblioteca Chance !
// https://chancejs.com/basics/integer.html

let firstNumber = chance.integer({ min: 0, max: 10 })

let secondNumber = chance.integer({ min: 0, max: 10 })

//get the total
let total = firstNumber + secondNumber;

const num1= document.getElementById('primary-number');
const num2= document.getElementById('secondary-number');
const btn = document.getElementById('btn');
const message = document.getElementById('message');

num1.textContent = firstNumber;
num2.textContent = secondNumber;

btn.addEventListener("click", ()=>{
    const input = document.querySelector('#guess').value;
    
    if(+input === total){
        message.textContent = "Es correcto!"
    }else{
        message.textContent = `No es correcto el resultado es ${total}`
    }
})
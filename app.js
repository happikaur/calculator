const numbers = document.querySelectorAll('.number');
const input = document.querySelector('.input');
const equal = document.querySelector('.equals')
const operators = document.querySelectorAll('.operator');

let firstNumber;
let secondNumber;
let total;
let operator;

// On-click displays the value
numbers.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(event.target.innerHTML)
    // Show the input
    input.innerHTML += event.target.innerHTML;
  });
});

operators.forEach((symbol) => {
  symbol.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(event.target.innerHTML)
    // Show the input
    firstNumber = input.value;
    operator = event.target.innerHTML;
    input.innerHTML += event.target.innerHTML;
    // operator = input.value
  });
});

console.log(input);

// When pressed "=" take the input/value (need to use querySelector)
equal.addEventListener("click", (event) => {
  getTotal(input.value);
});

// Make a function of calculation with input string
const getTotal = (inputText) => {
 // 5+5
 // number,symbol,number
 // switch on symbol
  // do the calc in javascript
  // return the result
};

// Change numbers to number & symbols stays as string
 
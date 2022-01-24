// Number symbol number


// On-click displays the value
const buttons = document.querySelectorAll('.button');
const input = document.querySelector('.input');
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(event.target.textContent)
    input.innerHTML = input.innerHTML + event.target.textContent;
  });
});
console.log(input);
// Show the input
// When pressed "=" take the input/value (need to use querySelector)
// Make a function of calculation with input string
// Change numbers to number & symbols stays as string
 
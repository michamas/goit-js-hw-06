/*
Napisz skrypt, który przy wpisywaniu tekstu w polu input input#name-input 
(zdarzenie input) wstawia jego aktualną wartość do span#name-output. 
Jeśli pole input jest puste, w spanie powinien wyświetlić się komunikat "Anonymous".
*/

const inputName = document.querySelector("#name-input");
console.log(inputName);
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", (event) => {
  outputName.textContent = event.currentTarget.value;
});

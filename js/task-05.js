/*
Napisz skrypt, który przy wpisywaniu tekstu w polu input input#name-input 
(zdarzenie input) wstawia jego aktualną wartość do span#name-output. 
Jeśli pole input jest puste, w spanie powinien wyświetlić się komunikat "Anonymous".
*/

const inputName = document.querySelector("#name-input");
console.log(inputName);
console.log(typeof inputName.value);
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", (event) => {
  if (inputName.value === "") {
    outputName.textContent = "Anonymous auto";
  } else {
    outputName.textContent = event.currentTarget.value;
  }
});

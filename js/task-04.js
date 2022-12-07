/*
Licznik składa się ze spana i przycisków, które, 
po ich kliknięciu, powinny zwiększać i zmniejszać 
jego wartość na jednostkę.

Utwórz zmienną counterValue w której będzie przechowywana 
aktualna wartość licznika i inicjalizuj wartość 0.
Dodaj click listeners do przycisków, wewnątrz których 
zwiększaj i zmniejszaj wartość licznika.
Aktualizuj interfejs nową wartością zmiennej counterValue.

*/

const minusButton = document.querySelector('button[data-action="decrement');
const plusButton = document.querySelector('button[data-action="increment"]');
let counterSpan = document.querySelector("#value");
let counterValue = parseInt(counterSpan.innerText);
console.log(counterValue); //test = 0
console.log(typeof counterValue); //test

const handleAdding = () => {
  counterValue += 1;
  counterSpan.innerHTML = `<span id="value">${counterValue}</span>`;
};
const handleSubstracting = () => {
  counterValue -= 1;
  counterSpan.innerHTML = `<span id="value">${counterValue}</span>`;
};

plusButton.addEventListener("click", handleAdding);
minusButton.addEventListener("click", handleSubstracting);

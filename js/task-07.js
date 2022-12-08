/*
Napisz skrypt, który reaguje na zmianę wartości 
input#font-size-control (zdarzenie input) i zmienia 
styl inline span#text aktualizując właściwość font-size. 
W rezultacie, podczas przeciągania paska przesuwania będzie 
zmieniał się rozmiar tekstu.
*/

const inputSlide = document.querySelector("#font-size-control");
console.log(inputSlide.value);
const spanToChange = document.querySelector("#text");
// console.log(spanToChange);

const handleSlide = () => {
  spanToChange.style.fontSize = `${inputSlide.value}px`;
};

inputSlide.addEventListener("input", handleSlide);

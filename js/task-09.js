function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
/*
Napisz skrypt, który zmienia kolor tła elementu <body> 
poprzez style inline po kliknięciu na button.change-color 
i wprowadza wartość koloru do span.color.
Aby wygenerować losowy kolor użyj funkcji getRandomHexColor.
*/

const button = document.querySelector(".change-color");
const spanField = document.querySelector(".color");
const body = document.querySelector("body");

function handleButton(event) {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  spanField.textContent = randomColor;
}

button.addEventListener("click", handleButton);
// console.log(getRandomHexColor());

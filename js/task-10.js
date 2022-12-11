function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

/*
Napisz skrypt tworzenia i usuwania kolekcji elementów. 
Użytkownik wprowadza liczbę elementów do input i naciska 
przycisk Utwórz, co rozpoczyna tworzenie się kolekcji. 
Po naciśnięciu przycisku Usuń, kolekcja elementów zostaje usunięta.

Utwórz funkcję createBoxes(amount), która bierze jeden 
parametr - liczbę. Funkcja tworzy tyle <div>, ile ukazano 
w amount i dodaje je do div#boxes.

Wymiary pierwszego <div> - 30px na 30px.
Każdy następny element powinien być szerszy i wyższy od 
poprzedniego o 10px.
Wszystkie elementy powinny mieć losowy kolor tła w formacie NEX. 
Użyj gotowej funkcji getRandomHexColor aby otrzymać kolor.

Utwórz funkcję destroyBoxes(), która usuwa zawartość div#boxes, 
tym samym usuwając wszystkie utworzone elementy.
*/

const inputField = document.querySelector("input");

const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const boxDiv = document.querySelector("#boxes");

const boxInitialDim = "30px";
// console.log(typeof parseInt(boxDimIncrement));

function createBoxes(event) {
  const numberOfBoxes = inputField.value;
  console.log(`Number of boxes to create: ${inputField.value}`);

  for (let i = 0; i < numberOfBoxes; i++) {
    let newBox = document.createElement("div");
    boxDiv.append(newBox);
    const boxDimIncrement = `${i}*10`;
    newBox.style.height = `(30+${boxDimIncrement})px`;
    newBox.style.width = `(30+${boxDimIncrement})px`;
    newBox.style.backgroundColor = getRandomHexColor();
  }
  console.log(`I've created ${inputField.value} boxes.`);
}

// const destroyBoxes = () => {};
buttonCreate.addEventListener("click", createBoxes);
// buttonDestroy.addEventListener("click", destroyBoxes);

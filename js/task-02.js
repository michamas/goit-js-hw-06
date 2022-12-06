const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

/*
Napisz skrypt, który dla każdego elementu tablicy ingredients:

Utworzy oddzielny element <li>. Koniecznie użyj metody document.createElement().
Doda nazwę elementu jako jego zawartość tekstową.
Doda do elementu klasę item.
Po czym umieści wszystkie <li> na liście podczas jednej operacji ul#ingredients.

*/

const findUl = document.querySelector("#ingredients");
// console.log(findUl);

const secondTask = ingredients.forEach((ingredient) => {
  let ingredientList = document.createElement("li"); //Utworzy oddzielny element
  ingredientList.textContent = ingredient; //Doda nazwę elementu jako jego zawartość tekstową.
  ingredientList.classList.add("item"); // Doda do elementu klasę item.
  findUl.append(ingredient);
});

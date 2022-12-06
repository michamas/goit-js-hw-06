/* 
Napisz skrypt, który:

Policzy i wprowadzi do wiersza poleceń liczbę kategorii w ul#categories, 
czyli elementy li.item.
Dla każdego elementu li.item na liście ul#categories, znajdzie i wprowadzi
 do wiersza poleceń tekst nagłówka elementu (tag <h2>) i liczbę elementów 
 w kategorii (wszystkich <li>).
*/

// WYNIK:-

/* Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5

*/

const numOfCat = document.querySelectorAll("li.item");
console.log(`Number of categories: ${numOfCat.length}`);
// Number of categories: 3

const catAndNumOfEls = numOfCat.forEach((el) => {
  console.log(`Category: ${el.querySelector("h2").textContent}`);
  console.log(`Elements: ${el.querySelector("ul").childElementCount}`);
});

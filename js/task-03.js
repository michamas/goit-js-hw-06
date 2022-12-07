const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

/*
Napisz skrypt do tworzenia galerii obrazów według tablicy danych.
 W HTML znajduje się lista ul.gallery.

Użyj tablicy obiektów images w celu utworzenia elementów <img> umieszczonych w <li>. 
Aby utworzyć znacznik użyj łańcuchów szablonowych i metody insertAdjacentHTML().

Wszystkie elementy galerii powinny być dodawane do DOM podczas jednej operacji.
Ulepsz galerię używając flexboxów lub gridów poprzez klasy CSS.
*/

const gallery = document.querySelector("ul.gallery"); // find ul in html
// console.log(gallery); // log to check if OK

const imageMarkup = images
  .map((image) => `<li><img></li>`) // creating img list els
  .join(""); //spacing betweetn els
gallery.insertAdjacentHTML("afterbegin", imageMarkup); //add to html

// tutaj petala ktora będzie znajdywać img i dodawać odpowiednie url i alt?

// trial if this works
// const galleryListImgs = document.querySelector("ul.gallery > li > img"); //find created img in hmtl
// console.log(galleryListImgs); //check if found

// galleryListImgs.src =
//   "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
// galleryListImgs.alt = "White and Black Long Fur Cat";

console.log("the5 end");

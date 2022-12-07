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
/*
// my trial
const gallery = document.querySelector("ul.gallery"); // find ul in html
console.log(gallery); // log to check if OK

const imageMarkup = images
.map((image) => `<li><img></li>`) // creating img list els
.join(""); //spacing betweetn els
gallery.insertAdjacentHTML("afterbegin", imageMarkup); //add to html

    `<li style="padding: 10px; list-style-type: none; display: flex;" >
    <img height="200" width=auto src="${imageItem.url}" alt="${imageItem.alt} "style="border: solid brown 2px"/>
    </li>`

*/

const galleryList = document.querySelector("ul.gallery"); //find ul in html

if (galleryList && galleryList.classList) {
  galleryList.classList.add("container");
} // ADVANCED-checks if galleryList is at all in HTML and has classList. NOT NECESSARY

images.forEach((imageItem) => {
  galleryList.insertAdjacentHTML(
    "beforeend",
    `<li><img height="200" width=auto src="${imageItem.url}" alt="${imageItem.alt}"/></li>`
  );
}); //creates li with img in ul.gallery for every imageItem from images

//adding styles to the html:
const listItem = document.querySelectorAll("ul.gallery > li"); // for li
console.log(listItem);
listItem.style.padding = "10px"; //Uncaught TypeError: Cannot set properties of undefined (setting 'padding')

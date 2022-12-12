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

const galleryList = document.querySelector("ul.gallery"); //find ul in html

if (galleryList && galleryList.classList) {
  galleryList.classList.add("container");
} // ADVANCED-checks if galleryList is at all in HTML and has classList. NOT NECESSARY

images.forEach((e) => {
  const listEl = document.createElement("li");
  const imgEl = document.createElement("img");
  imgEl.src = e.url;
  imgEl.alt = e.alt;
  imgEl.width = "300";
  imgEl.style.padding = "5px";
  listEl.appendChild(imgEl);
  galleryList.style.listStyle = "none";
  galleryList.style.display = "flex";
  galleryList.style.alignItems = "center";
  galleryList.style.flexDirection = "column";
  galleryList.insertAdjacentElement("beforeend", listEl);
});

/*
//Mariusza kod

1. Mariusza
const list = document.querySelector(".gallery")
images.map(createHTML);

function createHTML(item) {
  let listItem = document.createElement("li");
  let image = document.createElement("img");
  image.src = item.url;
  image.alt = item.alt;
  listItem.appendChild(image);
  list.appendChild(listItem);
}

2. Mój poprawiony
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

// //adding styles to the html:
const listItem = document.querySelectorAll("ul.gallery > li"); // for li
// console.log(listItem);
for(let item of listItem) {
  item.style.padding = "10px"; //Uncaught TypeError: Cannot set properties of undefined (setting 'padding')
  console.log(listItem);  
}



*/

/*
Napisz skrypt, który przy utracie fokusu na polu input 
(zdarzenie blur) sprawdza jego zawartość na prawidłową 
liczbę wprowadzonych symboli.
Informacja o liczbie symboli, która powinna znajdować się 
w polu input, pokazuje się w jego atrybucie data-length.
Jeśli wprowadzono odpowiednią liczbę symboli, to border 
pola input staje się zielone, a jeśli liczba jest 
nieprawidłowa - czerwone.
Aby dodać style, używaj klas CSS valid i invalid, które 
już dodaliśmy do plików źródłowych zadania.
*/

const inputField = document.querySelector("#validation-input");
console.log(typeof inputField); // object

const inputText = inputField.innerText;
console.log(typeof inputText); // string

const inputLength = inputField.getAttribute("data-length");
console.log(typeof inputLength); // string = 6
console.log(typeof parseInt(inputLength)); // number = 6

const checkInput = () => {
  if (inputField.value.trim().length === parseInt(inputLength)) {
    inputField.classList.add("valid");
    inputField.classList.remove("invalid");
  } else {
    inputField.classList.add("invalid");
    inputField.classList.remove("valid");
  }
};

inputField.addEventListener("blur", checkInput);

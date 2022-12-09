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

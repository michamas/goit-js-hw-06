/*
Napisz skrypt zarządzania formularzem logowania.
1. Opracowanie przesyłania formularza form.login-form 
powinno przebiegać zgodnie ze zdarzeniem submit.
2. Podczas przesyłania formularza strona nie powinna się restartować.
3. Jeśli w formularzu są nieuzupełnione pola, wprowadź alert 
z upomnieniem o tym, że wszystkie pola powinny zostać wypełnione.
4. Jeśli użytkownik uzupełnił wszystkie pola i wysłał formularz,
 zbierz wartość pól jako obiekt, gdzie nazwa pola będzie nazwą 
 właściwości, a wartość pola - wartością właściwości. 
 Aby otrzymać dostęp do elementów formularza użyj właściwości elements.
5. Umieść obiekt z wprowadzonymi danymi do wiersza poleceń 
i wyczyść wartości pól formularza metodą reset.
*/

const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault;
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return window.alert("Fill all the fields of gold!");
  }
  event.currentTarget.reset();
  console.log(`Login: ${email.value}, Password: ${password.value}`);
}

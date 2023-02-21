// $('form').on('submit', function (event) {
//     event.preventDefault();
//     var form = $("form").serializeArray();
//     localStorage.setItem("form", JSON.stringify(form));
//     for (var i = 0; i < form.length; i++) {
//         console.log(form[i]);
//     }
// });


function displayData() {
    const FORM = document.querySelector('#form');
    const FIRST_NAME = document.getElementById("fname").value;
    const LAST_NAME = document.getElementById("lname").value;
    const ABOUT_ME = document.getElementById("about__me").value;
    const LOCATION = document.getElementById("location").value;
    const LANGUAGE = document.getElementById("lang").value;
    const EXPERIENCE = Array.from(
        document.querySelectorAll(`input[name=experience]:checked`)).map(node=>node.value);
    const TERM_OF_WORK = Array.from(
        document.querySelectorAll(`input[name=term_of_work]:checked`)).map(node=>node.value);
    const RESULT = document.getElementById("result");
    

    RESULT.innerHTML = "Ім'я: " + FIRST_NAME + "<br>" + "Прізвище: " + LAST_NAME + "<br>" + "Про мене: " + ABOUT_ME + "<br>" + "Локація: " + LOCATION + "<br>" + "Мови спілкування: " + LANGUAGE + "<br>" + "Досвід роботи: " + EXPERIENCE  + "<br>" + "Термін, який готова працювати: " + TERM_OF_WORK;
}

const FIRST_NAME = document.querySelector('#fname');
const LAST_NAME = document.querySelector('#lname');
const ABOUT_ME = document.querySelector('#about__me');
const LOCATION = document.querySelector('#location');
const LANGUAGE = document.querySelector('#lang');
const EXPERIENCE = document.querySelectorAll(`input[name=experience]:checked`);

form.addEventListener('input', (event) => {
  // отримати значення полів форми
  const value1 = FIRST_NAME.value;
  const value2 = LAST_NAME.value;
  const value3 = ABOUT_ME.value;
  const value4 = LOCATION.value;
  const value5 = LANGUAGE.value;
  const value6 = EXPERIENCE.value;
  
  // зберегти значення у localStorage
  localStorage.setItem('myFormValues', JSON.stringify({ value1, value2, value3, value4, value5, value6 }));
});

// перевірити, чи містяться дані у localStorage
const storedValues = JSON.parse(localStorage.getItem('myFormValues'));
if (storedValues) {
  // встановити значення полів форми відповідно до даних у localStorage
  FIRST_NAME.value = storedValues.value1;
  LAST_NAME.value = storedValues.value2;
  ABOUT_ME.value = storedValues.value3;
  LOCATION.value = storedValues.value4;
  LANGUAGE.value = storedValues.value5;
  EXPERIENCE.value = storedValues.value6;
}
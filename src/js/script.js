// $('form').on('submit', function (event) {
//     event.preventDefault();
//     var form = $("form").serializeArray();
//     localStorage.setItem("form", JSON.stringify(form));
//     for (var i = 0; i < form.length; i++) {
//         console.log(form[i]);
//     }
// });


function displayData() {
    const FORM = document.getElementById("form").value;
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


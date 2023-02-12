const FORM = document.querySelector("form");
const FNAME = document.getElementById("fname");
const LNAME = document.getElementById("lname");
const ABOUT_ME = document.getElementsByClassName("about__me");
const LOCATION_DATA = document.getElementsByClassName("location");

FORM.addEventListener("submit", (event) => {
    event.preventDefault();
    const FIRST_NAME = FNAME.value;
    const LAST_NAME = LNAME.value;
    const ABOUT = ABOUT_ME.value;

    console.log(`Fisrt Name: ${FIRST_NAME}`);
    console.log(`Last Name: ${LAST_NAME}`);
    console.log(`About me: ${ABOUT}`);
})

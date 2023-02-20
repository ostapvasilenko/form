const FORM = document.querySelector("form");
const FNAME = document.getElementById("fname");
const LNAME = document.getElementById("lname");
const ABOUT_ME = document.getElementById("about__me");
const LOCATION_DATA = document.getElementById("location");
const LANGUAGE_USER = document.getElementById("lang");
const WORK_USER = document.querySelectorAll(`input[type="checkbox"]`);;

FORM.addEventListener("submit", (event) => {
    event.preventDefault();
    const FIRST_NAME = FNAME.value;
    const LAST_NAME = LNAME.value;
    const ABOUT = ABOUT_ME.value;
    const LOCATION = LOCATION_DATA.value;
    const LANGUAGE = LANGUAGE_USER.value;

    function capitalize(FNAME) {
        return `${FNAME.charAt(0).toUpperCase()}${FNAME.slice(1)}`;
    }
    console.log('First Name: ' + capitalize(`${FIRST_NAME}`))
    function capitalize(LNAME) {
        return `${LNAME.charAt(0).toUpperCase()}${LNAME.slice(1)}`;
    }
    console.log('Last Name: ' + capitalize(`${LAST_NAME}`))
    console.log(`About me: ${ABOUT}`);

    function capitalize(LOCATION_DATA) {
        return `${LOCATION_DATA.charAt(0).toUpperCase()}${LOCATION_DATA.slice(1)}`;
    }
    console.log('Location: ' + capitalize(`${LOCATION}`))

    console.log(`Language: ${LANGUAGE}`);
    WORK_USER.forEach((checkbox) => {
        const isChecked = checkbox.checked;
        const value = checkbox.value;
        if (isChecked) {
            console.log(`Experience: ${value}`);
        } else if (isChecked === checkbox.unchecked) {
            console.log('Pomylka');
        }
    });
})

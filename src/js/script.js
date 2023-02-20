$('form').on('submit', function (event) {
    event.preventDefault();
    var form = $("form").serializeArray();
    localStorage.setItem("form", JSON.stringify(form));
    for (var i = 0; i < form.length; i++) {
        console.log(form[i]);
    }
});


function displayData() {
    const name = document.getElementById("fname").value;
    const email = document.getElementById("lname").value;
    const result = document.getElementById("result");
  
    result.innerHTML = "Ім'я: " + name + "<br>" + "Прізвище: " + email;
  }
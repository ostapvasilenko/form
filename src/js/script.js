$('form').on('submit', function (event) {
  event.preventDefault();
  var form = $("form").serializeArray();
  localStorage.setItem("form", JSON.stringify(form));

});

var storedValues = JSON.parse(localStorage.getItem('form'));

for (var i = 0; i < storedValues.length; i++) {
  var formName = storedValues[i]['name']
  var formValue = storedValues[i]['value']
  if (formName == 'experience' || formName == 'term_of_work') {
    $('input[value=' + formValue + ']').prop('checked', true);
  } else if (formName == 'language') {
    $('#lang > option[value=' + formValue + ']').prop('selected', true);
  } else if (formName == 'about_me') {
    $('#about__me').text(formValue)
  }
  else {
    $('input[name=' + formName + ']').val(formValue)
  }
}



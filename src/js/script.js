
$('form').on('submit', function (event) {
    event.preventDefault();
    var form = $("form").serializeArray();
    console.log(form)
});
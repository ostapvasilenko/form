$('form').on('submit', function (event) {
    event.preventDefault();
    var form = $("form").serializeArray();

    for (var i = 0; i < form.length; i++) {
        console.log(form[i]);
    }
});
function showDataInModal(data) {
    // Отримуємо посилання на модальне вікно
    const modal = document.getElementById('modal');

    // Створюємо елемент списку
    const list = document.createElement('ul');

    // Додаємо кожен об'єкт з масиву до списку
    data.forEach(item => {
        const listItem = document.createElement('li');
        const text = document.createTextNode(JSON.stringify(item));
        listItem.appendChild(text);
        list.appendChild(listItem);
    });

    // Очищаємо вміст модального вікна та додаємо до нього список
    modal.innerHTML = '';
    modal.appendChild(list);

    // Показуємо модальне вікно
    modal.style.display = 'block';
} 
const data = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Mary' },
    { id: 3, name: 'Bob' }
];

showDataInModal(data);

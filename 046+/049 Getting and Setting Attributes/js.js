const link = document.querySelector('a');

console.log(link.getAttribute('href')); // выделяем атрибут href - ссылку
link.setAttribute('href', 'https://www.yandex.ru'); // меняем атрибут внутри href на яндекс
link.innerText = 'Yandex bruh'; // меняем текст на Яндекс

const mssg = document.querySelector('p');

console.log(mssg.getAttribute('class')); // получаем class атрибута p
mssg.setAttribute('class', 'success'); // меняем class с ерорра на саксесс
mssg.setAttribute('style', 'color: green;'); // добавляем стиль к P тагу
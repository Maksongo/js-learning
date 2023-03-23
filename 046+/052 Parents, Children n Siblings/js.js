const article = document.querySelector('article');

// console.log(article.children); // получаем HTML Collection
// console.log(Array.from(article.children)); // превращем ее в array
// console.log(article.children); // но оригинальный объект остаетс HTML collection

// Array.from(article.children).forEach(child =>{
//     child.classList.add('article-element');
// }); // добавляем каждому чайлду+самому артиклу класс

const title = document.querySelector('h2');

console.log(title.parentElement); // находим родителя h2 = артикл
console.log(title.parentElement.parentElement); // находим родителя родителя h2 = body

console.log(title.nextElementSibling); // элемент после нашего h2
console.log(title.previousElementSibling) // элемент до нашего h2 - родителя не покажет

// chaining
console.log(title.nextElementSibling.parentElement.children) // покажет коллекцию html
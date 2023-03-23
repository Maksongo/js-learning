const title = document.querySelector('h1');

//title.setAttribute('style', 'margin: 50px;'); // этот метод уберет уже существующий стиль

console.log(title.style); // смотрим все стили атрибута
console.log(title.style.color); // смотрим цвет

title.style.margin = '50px';
title.style.color = 'crimson';
title.style.fontSize = '60px';
title.style.margin = ''; 
// выше добавялем стили


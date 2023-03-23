// const content = document.querySelector('p');

// console.log(content.classList); // смотрим какие классы ваще есть у элема
// content.classList.add('error'); // добавляем класс
// content.classList.remove('error') // удаляем класс
// content.classList.add('success'); 

const content = document.querySelectorAll('p');

content.forEach(p => {
    if(p.textContent.includes('error')){
        p.classList.add('error');
    }
    if(p.innerText.includes('success')){
        p.classList.add('success');
    }
});
 
const title = document.querySelector('.title')

title.classList.toggle('test'); // переключает класс
title.classList.toggle('test'); // если повторно, то удаляет

// con.innerText - выводит только видимый текст
// con.textContent - выводит весь текст внутри <p> элементов
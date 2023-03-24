const button = document.querySelector('button');

button.addEventListener('click', () =>{
    console.log('you clicked me'); // фиксируем нажатие на кнопку, добавив листинер
});

const items = document.querySelectorAll('li');

items.forEach(item => {
    item.addEventListener('click', e => {
        //console.log('item clicked'); // выводит что мы нажали на любую кнопку
        //console.log(e); // показывает что такое e
        //console.log(e.target); // выделяет конкретный элемент
        //console.log(item); // тоже самое что e.target. т.к. мы задали item
        e.target.style.textDecoration = 'line-through'; // зачериквает индивидуальный li 
    });
});
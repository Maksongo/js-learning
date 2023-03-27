const ul = document.querySelector('ul');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const li = document.createElement('li'); // создаем элемент в дом, и можем добавить ему класс тил ьи тд
    li.textContent = 'че та';
    ul.prepend(li); // добавляет элемент сверху
});


// const items = document.querySelectorAll('li');

// items.forEach(item => {
//     item.addEventListener('click', e => {
//         console.log('event in LI');
//         e.stopPropagation(); // действия происходит только В ЛИ, заканчивается вслытие "баблинг" и родители не активируются
//         e.target.remove();
//     });
// });

ul.addEventListener('click', e => {
    //console.log('event in UL');
    if(e.target.tagName === 'LI'){
        e.target.remove(); // удалится каждый объект который имеет tagName LI
    }
});
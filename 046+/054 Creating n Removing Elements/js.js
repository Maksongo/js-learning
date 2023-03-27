const ul = document.querySelector('ul');


const button = document.querySelector('button');

button.addEventListener('click', () => {
//    ul.innerHTML += ('<li>че та</li>'); // 1 таким образом можно что то добавить
    const li = document.createElement('li'); // создаем элемент в дом, и можем добавить ему класс тил ьи тд
    li.textContent = 'че та';
    ul.append(li); // добавляент элемент снизу
    ul.prepend(li); // добавляет элемент сверху
});



const items = document.querySelectorAll('li');

items.forEach(item => {
    item.addEventListener('click', e => {
        e.target.remove() // удаляет элемент нажав на него
    });
});

// на этоп этапе нет возможности кнопкой удалить новые элементы. В следующем уроке эта тема будет раскрыта
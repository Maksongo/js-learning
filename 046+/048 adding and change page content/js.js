const para = document.querySelector('p');

// para.innerText = 'ninjas are awesome!'; - = заменяет текст в p tag
// para.innerText += '! ninjas are awesome!'; += прибавляет его

const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//     para.innerText += ' new text';
// } ) // <----- это добавляет новый текст ко всем P tags

const content = document.querySelector('.content')

// content.innerHTML = '<h2>THIS IS A NEW H2</h2>' // = заменяет ; += прибавляет кусок HTML кода к классу

const people = ['mario', 'luigi', 'yoshi'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`; // добавляем список людей из массива к диву класса content
});
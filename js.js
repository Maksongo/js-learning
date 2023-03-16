const peopleInFiller = () => {
    const ul = document.querySelector('.people');
    
    const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];
    
    let html = ``;
    
    people.forEach(person => {
        // create html template
        html += `<li style="color: purple">${person}</li>`;
    });
    
    console.log(html);
    ul.innerHTML = html;
}


let buttons = document.getElementsByTagName('button');

for (let i = 0, len = buttons.length; i < len; ++i) {
    const singleButton = buttons[i];
    singleButton.addEventListener("click", peopleInFiller
    )
};
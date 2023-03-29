const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () =>{
    console.log('OI! my content is copyright');
});

const box = document.querySelector('.box');

box.addEventListener('mousemove', e => {
    //console.log(e); // смотрим элемент
    //console.log(e.offsetX, e.offsetY); // из элемента выделяем 2 параметра. Х и Н положение курсора пользователя
    box.textContent = `x pos - ${e.offsetX}   y pos - ${e.offsetY}`; // кор-ды будут меняться каждый раз при движении курсора
});

document.addEventListener('wheel', e => {
    //console.log(e); // смотрим элемент
    console.log(e.pageX, e.pageY); // выводим координаты странциы при скролле колесиком мышки
});
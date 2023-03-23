// 046 The Query Selector

// const para = document.querySelector('p'); - select 1(first) P tag

// const para = document.querySelector('.error'); - select 1(first) .error class

// const para = document.querySelector('div.error'); - select 1(first) div.error class

// console.log(para)

const paras = document.querySelectorAll('p'); // select ALL P tags
const errors = document.querySelectorAll('.error'); // select ALL .error classes

paras.forEach(para => {
    console.log(para)
}); // метод, который выполняет необходимую команду для каждого (forEach) элемента

console.log(paras[2]);
console.log(errors);
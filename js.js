// 042 Math object

// готовый Math объект со своими методами

console.log(Math); 
console.log(Math.PI); // число P
console.log(Math.E); // число Е

const area = 7.1;

console.log(Math.round(area)); // округляет число в меньшую или большую
console.log(Math.floor(area)); // округляет в меншую
console.log(Math.ceil(area)); // округляет в большую 
console.log(Math.trunc(area)); // убирает из 7.1 все что после целого числа

// random numbers

const random = Math.random(); // случайно число от 0.000 до 1
console.log(random);

console.log(Math.round(random * 100)); // случайной число от 1 до 100
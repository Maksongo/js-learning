// let age = 25;
// console.log(age === 25);
// console.log(age === '25');
// console.log(age !== 25);
// console.log(age !== '25');


// 017 Type Conversion 

//Превращение стринга в намбер

let score = '100';

score = Number(score);
console.log(score + 1)

//Превращение инта в намбер + проверка типа

let result = String(100);

console.log(result, typeof result);

// Booleans

let val = Boolean(0); // нулевой булиан равен false
let val2 = Boolean(1); // if let ≠ 0 -> будет true

let val3 = Boolean(''); // Если стринговый булин не пустой - true, пуст false


console.log(val, val2, val3)

////////////////////////////////
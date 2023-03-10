// 033 Arrow Functions

//regular function

// const CalcArea = function(radius){
//     return 3.14 * radius**2;
// }


// arrow function

// const CalcArea = (radius) => {
//     return 3.14 * radius**2;
// }


// Сокращения ниже:

// const CalcArea = (radius) => 
// скобки у (radius) можно убрать если это единственная переменная. Если несколько или 0 – то () нужны

// const CalcArea = radius =>  3.14 * radius**2;
// если return всего 1 – можно использовать следующее правописание. Без использования {} и return word

// Some exercises:

// const bill = function(products, tax){
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}

console.log(bill([10,15,30], 0.2));
// 032 Returning Values

// const speak = function(name = 'luigi', time = 'night'){
//     console.log(`good ${time} ${name}`)
// };

const CalcArea = function(radius){
    return 3.14 * radius**2;
    // let area = 3.14 * radius**2;
    // return area; - ALSO WORKS
}

const area = CalcArea(5);
console.log(area);
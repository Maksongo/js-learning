// 037 Creating an Object Literal

let user = {
    name: 'crystal',
    age: 30,
    email: 'trap@trap.ru',
    location: 'omsk',
    drinks: ['beer', 'vodka']
};

console.log(user);
console.log(user.name);

// меняем значение в объекте
user.age = 35;
console.log(user.age);

// так-же можно так запрос делать
console.log(user['name']);
user['name'] = 'chun-li';
console.log(user['name']);
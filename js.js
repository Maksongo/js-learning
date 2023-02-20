// 018+019 Control Flow + For Loops

// Simple Loop ( цикл )

for (let i = 0; i< 5; i++ ){
    console.log('in loop:', i);
}

// Loop with Array

const names = ['Max','Rax','Tax']

for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}

// Loop with Template String

for (let i = 0; i < names.length; i++){
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}
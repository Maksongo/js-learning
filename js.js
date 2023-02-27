// 024 Logical operators

// OR ||
// AND &&

const password  = 'p@sse';


if(password.length >= 12){
    console.log('nice password,bruh');
} else if(password.length >= 8 || password.includes('@') && password.length >= 5){
    console.log('normal password,bruh');
} else {
    console.log('lame pass, bruh');
}

// 030 Function Declarations & Expressions


// function declaration

function greet(){
    console.log('hello there');
}

// function expression

const speak = function(){
    console.log('good day!');
};

// greet();
// greet();
// greet();

speak();
speak();
speak();

// Function declaration – может быть в любом порядке ( hoisting ) функцию вызвать можно в любом месте
// Function expression – функция должна быть объявлена исключительно до того, как мы ее будет вызывать

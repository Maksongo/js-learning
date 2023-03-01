// 028 Variables & Block Scope

const age = 30;

if(true){
    const age = 40;
    const name = 'Max';
    console.log('inside 1st code block: ', age, name);

    if(true){
        const age = 50;
        console.log('inside 2nd code block: ', age);
        var test = 'hello'; // var видно во всем пространстве
    }
}

console.log('Outsude code block: ', age, name, test)
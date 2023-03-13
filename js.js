// 034 Foreach Method & Callbacks

// Normal Function

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

people.forEach((person, index) => {
    console.log(index, person);
}); 

// Call back

let people2 = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

const logPerson = (person, index) => {
    console.log (`${index} - hello ${person}`);
};

people2.forEach(logPerson);
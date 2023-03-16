// 041 Objects in Arrays

// how to create a Objects in Arrays
// const drinks = [
//     { title: 'vodka', val: 40},
//     { title: 'beer', val: 5}
// ];

let user = {
    name: 'crystal',
    age: 30,
    email: 'trap@trap.ru',
    location: 'omsk',
    drinks: [
        { title: 'vodka', val: 40},
        { title: 'beer', val: 5}
    ],
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    },
    logDrinks(){
        console.log('the user like to drink: ', this.drinks)
        this.drinks.forEach(drink => {
            console.log(drink.title, drink.val);
        })
    }
};

user.login();
user.logout();
user.logDrinks();
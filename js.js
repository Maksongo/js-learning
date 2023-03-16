// 040 ‘this’ keyword

let user = {
    name: 'crystal',
    age: 30,
    email: 'trap@trap.ru',
    location: 'omsk',
    drinks: ['beer', 'vodka'],
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    },
    logDrinks(){
        console.log('the user like to drink: ', this.drinks)
        this.drinks.forEach(drink => {
            console.log(drink);
        })
    }
};

user.login();
user.logout();
user.logDrinks();
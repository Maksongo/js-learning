// 039 Adding Methods

let user = {
    name: 'crystal',
    age: 30,
    email: 'trap@trap.ru',
    location: 'omsk',
    drinks: ['beer', 'vodka'],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out');
    },
    logDrinks: function (){

    }
};

user.login();
user.logout();

const name = 'mario';
name.toUpperCase();
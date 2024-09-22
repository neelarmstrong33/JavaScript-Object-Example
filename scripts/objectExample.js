/*
const person = {
    name : 'Max',
    age : 30,
    hobbies : ['Sports', 'Cooking'],
    greet : function() {
        alert('Hi there!');
    }
};

person.isAdmin = true;
person.age = 31;

delete person.name;
// person.name = undefined;
// person.name = null

console.log(person);

*/

/*
const movieList = document.getElementById('movie-list');

movieList.style.backgroundColor = 'red';
movieList.style.display = 'block';

const userChosenKeyName = 'level';

let person = {
    'first name' : 'Max',
    age : 39,
    [userChosenKeyName] : 'Hyper',
    hobbies: ['Sports', 'Cooking'],
    greet : function() {
        alert('Hi there!');
    },

    1.5 : 'hello'
};

console.log(person["first name"]);
console.log(person["1.5"]);
console.log(person);

*/

/* Spread Operator on Object 

const person = {
    name : 'Ajay',
    hobbies : ["Sports", "Cooking"]
};

console.log(person);

const anotherPerson = person;
person.age = 30;
console.log(anotherPerson);

const person2 = { ...person };

person.age = 31
console.log(person);
console.log(person2);

person.hobbies.push('Coding');
console.log(person2);

const person3 = { ...person, age: 29, hobbies: [...person.hobbies]}

console.log(person);
console.log(person3);

person.hobbies.pop();

console.log(person);
console.log(person3);
*/

/* 
const person = { name : 'Max'};
const person2 = Object.assign({}, person);

console.log(person);
console.log(person2);

person.name = 'Ajay';

console.log(person);
console.log(person2);

*/
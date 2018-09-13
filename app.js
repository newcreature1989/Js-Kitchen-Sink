var myName ='Aaron';
const states = 50;
var num = 5 + 4;

//This determines if the first letter of my name is L and displays different messages accordingly.
if(myName.charCodeAt(0) > 77) {
    alert('Back of the line!');
} else {
    alert('Next!');
}

function sayHello() {
    alert('Hello World!');
}

sayHello();

function checkAge(name, age) {
    if(age < 21){ 
    alert("Sorry" + " " + name + " " + ",you aren't old enough to view this page!");
    }
} 

checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

var myFavVeggies = ['Carrot', 'Potato', 'Celery', 'Squash', 'Cabbage', 'Onion'];

let i = 0;

while(i < myFavVeggies.length) {
    console.log(myFavVeggies[i]);
    ++i;
}

let personOne = {
    name: 'James',
    age: 17, 
}

let personTwo = {
    name: 'Bob',
    age: 27,
}

let personThree = {
    name: 'Susan',
    age: 19,
}

let personFour = {
    name: 'Eric',
    age: 20,
}

let personFive = {
    name: 'Larry',
    age: 25,
}

let applicants = [personOne, personTwo, personThree, personFour, personFive];

for(i = 0; i < applicants.length; ++i) {
    checkAge(applicants[i].name, applicants[i].age);
}

function getLength(str) {
    return str.length;
}

let check = getLength('Hello World')


if(check % 2 === 1) {
    console.log('The world is nice and even!');
}   else  {
    console.log('The world is an odd place!');
}


// get name
var name = prompt('Please enter your first name');
console.log(name);

// get surmane
var lastName = prompt('Please enter your last name');
console.log(lastName);

// get color
var color = prompt('What is your favorite color?');
console.log(color);

// generates random number
var number = Math.floor((Math.random() * 99) + 1);

// Insert in HTML
document.getElementById('password').innerHTML = name + lastName + color + number;

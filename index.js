//! CONDITIONALS
/*
        - Evaluates an expression and responds if it is true.
        - Falsy
                - false
                - 0
                - empty strings
                - null
                - undefined
                - NaN (not a number)
        
?   Structure
    if(condition evaluated) {
        code that runs if expression is true
    }
        
*/

let isOn = true;
if(isOn == true){
    console.log('The light is on!')
}

if(isOn){
    console.log('THe light is on, yay!')
}

isOn = false;
if(isOn==false){
    console.log("The light is off!")
}

let weather = 65;

if (weather <70) {
    console.log('Its kinda cold, Wear a jacket.')
}

// * If Else

weather = 75;
if(weather<70){
    console.log('Wear a jacket');
}
else { console.log('No jacket necessary.')}

//! AND OR
weather = 60;
let rain = true;
if (weather <70 && rain){
    console.log('Wear a jacket')
} else{
    console.log('No jacket necessary')
}

weather = 80;
if (weather <70 || rain){
    console.log('Wear a jacket')
} else{
    console.log('No jacket necessary')
}

rain = false;
if(!rain){
    console.log('Seems to be a clear day');
}

// * Else if
// let grade = 88;          //test 1
let grade = 73;             //test 2
// let grade = 50;             //test 3


if(grade >= 75){
    console.log('Passing');
}else if(grade >= 69) {
    console.log('Please see the teacher')
}else {
    console.log('failing')
}

//! Switch Statements
let officeCharacter = 'Pam';

switch(officeCharacter){
    case "Michael":
        console.log('My mind is going a mile an hour')
        break;
    case 'Dwight':
        console.log("Perfectenschlag");
        break;
    case "Jim":
        console.log("Bears. Beerts. Battlestar Galacrica")
        break;
    default:
        console.log(`I'm sorry, ${officeCharacter}, but do i know you?`)
}


//! Ternary
/* 
    - Ternaries require the default/else catch all.
        - And If Statement can go without the "else" and a switch statement can function without a "default", ternaries must have a catch response if the statement returns a falsy value.
*/


let num = 6;
// If Else 

num > 0 ?   console.log('Yes') : console.log('no')   // is this expression greater than zero

if (num>0){
    console.log("yes")
}else{
    console.log('no')
}

//Else if
if(num == 0){
    console.log('hello')
}else if (num <0){
    console.log('hi')
}else {
    console.log('goodbye')
}

num == 0 ? 
    console.log('hello') : 
    num < 0 ? 
    console.log('hi') : 
    console.log('goodbye')

// * Check your name 

    function Name(myName){
    
    if (myName == "vick"){ console.log(`Hello, my name is ${myName}`);}
    else {console.log(`Hello, is your name ${myName}?`)}
    }

    Name("Vick")

// * Case Check 
    let caseName = 'SAmwISe';

    if (caseName.charAt(0)== caseName.charAt(0).toUpperCase()){ console.log(caseName.charAt(0) +caseName.slice(1).toLowerCase())}
    else{console.log(caseName.slice(1).toLowerCase())}

// * Age Check
    let age = 30;

    age <= 17 ? 
        console.log("Can you vote?") :
        age >= 21 && age < 25?
        console.log("You can drink!") :
        console.log("You can rent a car!")

// * Switch Dessert

function switchDessert(dessert){
    dessert == "pie" ?
        console.log('Pie, pie, me oh my!') :
        dessert == "cake" ?
        console.log('Cake is great') :
        dessert == "ice cream" ?
        console.log("I scream for ice cream!") :
        console.log('Not on the menu')
}

switchDessert('pie')

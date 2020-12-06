/*jslint devel: true */
/*jslint node: true */
'use strict';

/*

//strict mode


let hasDriverLicense = false;
let passTest = true;

if(passTest) hasDriverLicense = true;
if(hasDriverLicense) console.log("I can drive");

*/

/*
//function

function logger(){
    console.log("My name is Naim Hasan.");
}

logger();
logger();
logger();
logger();

function fruitProcessor(apple, orange){
    console.log(apple, orange);
    const juice = `Juice with ${apple} apples and ${orange} oranges`;
    return juice;
}

let result = fruitProcessor(5,0);
console.log(result);
*/


/*
// function declearation vs function expression


//function declearation
function calculateAge(birthYear){
    return 2020 - birthYear;
}

const age = calculateAge(1992);
// console.log(age);

//function expression
const calAge = function(birthYear){
    return 2020 - birthYear;
};

const age2 = calAge(1992);

console.log(age, age2);

*/


/*
//arrow function


//arrow function
const calAge3 = birthYear => 2020 - birthYear;

const age3 = calAge3(1995);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) =>{
    const age = 2020 - birthYear;
    const retirement = 65-age;
    return `${firstName} has ${retirement} years left to retirement.`;
};

console.log(yearsUntilRetirement(1995, 'Mou'));
console.log(yearsUntilRetirement(1992, 'Naim'));

*/

/*
// function overview

const calcAge = function (birthYear) {
    return 2020 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement <= 0) {
        return `${firstName} is already retired.`;
    } else {
        return `${firstName} has ${retirement} years left to retirement.`;
    }
};

const name = yearsUntilRetirement(1992, "Naim Hasan");
console.log(name);
const nameX = yearsUntilRetirement(1950, "X");
console.log(nameX);

*/

/*

//coding challenge -1

const calcAverage = (game1, game2, game3) => Number((game1 + game2 + game3) / 3).toFixed(2);

const aveDolphins = calcAverage(85, 54, 41);

const aveKoalas = calcAverage(23, 34, 27);

console.log(aveDolphins, aveKoalas);

function checkWinner(teamA, teamB){
    if( teamA >= teamB*2){
        return `Dolphins wins.(${teamA} vs ${teamB})`;
    }else if( teamB >= teamA*2){
        return `Koalas wins. (${teamB} vs ${teamA})`;
    }else{
        return 'No team wins.';
    }
}


const result = checkWinner(aveDolphins, aveKoalas);

console.log(result);
*/

/*
//arrays

const friend = ['Naim', "amin",`hasan`,'muhammad'];
console.log(friend);

const year = new Array(1991, 1992, 1995, 2002);
console.log(year);

console.log(year[2]);

console.log(friend[5]);

console.log(friend.length);
console.log(year[year.length-1]);

friend[2]='mou';
console.log(friend);

const firstName = 'Naim ';
const naim = [firstName, 'Hasan', 2020-1992, 'Programmer', friend];

console.log(naim);

*/
/*

//array method's

const arr = ['A','B','C','D'];
console.log(arr);


//add elements
arr.push('E');
console.log("push-> ",arr);

arr.unshift("-A");
console.log("unshift-> ",arr);

//remove elements
arr.pop();
console.log("pop-> ",arr);

arr.shift();
console.log("shift-> ",arr);

console.log(arr.indexOf('Cc'));

arr.push(23);
console.log(arr.includes(23));
console.log(arr.includes('23'));

*/
/*
//coding challenge-2

function calcTip(value){
    if(value>=50 && value<=300){
        return value*0.15;
    }else{
        return value*0.20;
    }
}

const result = calcTip(100);
console.log(result);

const bills = [125, 555, 44];

console.log(bills);

let tips=new Array('0');
let total = new Array('');


for(let i=0;i<bills.length;i++)
{
    tips[i] = calcTip(bills[i]); 
    total[i] = bills[i] + tips[i];
}

console.log("tips-> ",tips);
console.log("total-> ", total);

*/

/*
//object

const naimHasan = {

    firstName: "Naim",
    lastName: "Hasan",
    age: 2020-1992,
    job: "Programmer",
    friends: ['N', 'A', 'M']
};

console.log(naimHasan);

console.log(naimHasan.firstName);
console.log(naimHasan['firstName']);

const a = 'Name';

console.log(naimHasan['first'+a]);
console.log(naimHasan['last'+a]);

const interestedIn = prompt("Do you want to know about Naim Hasan? Choose between firstName, lastName, age, job and friends.");
//console.log(naimHasan[interestedIn]);

if(naimHasan[interestedIn]){
    console.log(naimHasan[interestedIn]);
}else{
    console.log("Wrong request.")
}

naimHasan.location = "Bangladesh";
naimHasan['github'] = 'naimhasan2711';

console.log(naimHasan);

const result = `${naimHasan.firstName} has ${naimHasan.friends.length} friends and his best friend is ${naimHasan.friends[0]}`;

console.log(result);
*/

/*
//object methods

const naimHasan = {

    firstName: "Naim",
    lastName: "Hasan",
    birthYear: 1992,
    job: "Programmer",
    friends: ['N', 'A', 'M'],
    hasDriverLicense: false,
    // calculateAge: function(birthYear){
    //     return 2020 - birthYear;
    // }

    calculateAge: function(){
        console.log(this);
        return 2020 - this.birthYear;
    },

    getSummary: function(){
        return `${this.firstName} is a ${this.calculateAge()}-years old ${this.job}, and he has ${this.hasDriverLicense? 'a' : 'no'} driver's lisence.`;
    }
};

// console.log(naimHasan.calculateAge(1992));
// console.log(naimHasan['calculateAge'](1992));

console.log(naimHasan.getSummary());
*/


/*
//coding challenge-3

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.BMI = this.mass / this.height**2;
        return this.BMI;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.BMI = this.mass / this.height**2;
        return this.BMI;
    }
};

mark.calcBMI();
john.calcBMI();

console.log(mark.BMI,john.BMI);

if(mark.BMI > john.BMI){
    console.log(`Mark BMI(${mark.BMI}) is higher than Jhon BMI(${john.BMI})`);
}else{
    console.log(`John BMI(${john.BMI}) is higher than Mark BMI(${mark.BMI})`);
}

*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips = [];
let total = [];

function calcTip(value){
    if(value>=50 && value<=300){
        return value*0.15;
    }else{
        return value*0.20;
    }
}

for(let i=0; i<bills.length; i++)
{
    tips.push(calcTip(bills[i]));

    total.push(bills[i]+tips[i]);
}

console.log(bills);
console.log(tips);
console.log(total);

function calcAve(a)
{
    let sum = 0;
    for(let i=0;i<a.length;i++)
    {
        sum += a[i];
    }

    let result = sum/a.length;
    return result;
}

console.log(calcAve(total));
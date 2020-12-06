"use strict";

/* Assignment */

/*
var country = 'Bangladesh';
var continent = 'Asia';
var population = '161.4 million';

console.log(country);
console.log(continent);
console.log(population);

*/
// let, const and var lecture

/*
let age = 27;
age = 28;

const birthYear = 1993;
// birthYear = 1992;
// const job;

var job = 'Programmer';
job = 'teacher';
*/
// operator precedence 

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

//console.log(now-1991 > now-2018);      
//console.log(typeof(now));

//console.log(25-10-5);

const averageAge = (ageJonas + ageSarah) / 2;

console.log(ageJonas, ageSarah, averageAge);
*/
// coding challenges-1

/*

const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

let markBMI, johnBMI;

markBMI = markMass / (markHeight**2);
johnBMI = johnMass / (johnHeight**2);

console.log(markBMI, johnBMI);

let markHigherBMI;

markHigherBMI = markBMI>johnBMI? "mark is higher": "john is higher";

console.log(markHigherBMI);

*/
// string and string literal

/*

const firstName = 'Naim';
const job = 'Programmer';
const birthYear = 1992;
const year = 2037;

const naim = "I'm " + firstName + ' , a ' + (year-birthYear)+' years old '+job;
console.log(naim);

const naimNew = `I'm ${firstName}, a ${year-birthYear} years old ${job} and this is ${year}.`;
console.log(naimNew);

const regularString = `This is a regular string`;
console.log(regularString);

console.log('String with \n\
multiple\n\
lines.');

console.log(`string with
multiple 
line`);

*/
//coding challenge - 2

/*

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

let markBMI, johnBMI;

markBMI = markMass / (markHeight ** 2);
johnBMI = johnMass / (johnHeight ** 2);

markBMI = markBMI.toFixed(2);
johnBMI = johnBMI.toFixed(2);

// if(markBMI > johnBMI){
//     console.log(`Mark's BMI(${markBMI}) is higher than John's BMI(${johnBMI}).`);
// }else{
//     console.log(`Mark's BMI(${markBMI}) is higher than John's BMI(${johnBMI}).`);
// }

const result = markBMI > johnBMI ? `Mark's BMI(${markBMI}) is higher than John's BMI(${johnBMI}).` : `Mark's BMI(${markBMI}) is higher than John's BMI(${johnBMI}).`;


console.log(result);

*/
//type coercion and type conversion

/*

//type conversion
const birthYear = '1992';
console.log(birthYear);
console.log(Number(birthYear), birthYear);
console.log(Number(birthYear)+10);

console.log(Number("Naim"));
console.log(typeof(NaN));
console.log(String(23), 23);

//type coersion

console.log("I am "+23+" years old.")
console.log('23'-'10'- 3);
console.log('23'+'10'+ 3);
console.log('23'*'10'* 3);
console.log('23'/'10'/ 3);
console.log('23'>'10');
console.log('23'<'10');

let n = 1 + '1';
n = n-1;
console.log(n);

console.log(2+3+4+'5');

console.log('10'-'4'-'3'-2+'5');

*/

/*
//trythy values and falsy values

//5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

console.log(Boolean(10));
console.log(Boolean('a'));
console.log(Boolean({}));


const money = 0;

if(money){
    console.log("You dont need a job.");
}else{
    console.log("Get a job.");
}

let height;

if(height){
    console.log("Height is defined.");
}else{
    console.log("Height is undefined.");
}

*/

/*
// coding challenge -3

const dolphinsAverage = (97+101+112)/3;
const koalasAverage = (109+95+123)/3;

console.log(dolphinsAverage, koalasAverage);

if(dolphinsAverage === koalasAverage){
    console.log("Draw!!.");
}else if((dolphinsAverage > koalasAverage) && (dolphinsAverage >= 100)){
    console.log("Dolphins win the cup.!!!");
}else{
    console.log("Koalas win the cup.!!!");
}

*/

/*
// switch statement

const day = 'Monday';

switch(day){

    case 'Monday':
        console.log("Plan course structure.");
        console.log("Go to code meet up.");
        break;
    case 'Tuesday':
        console.log("Prepare theory videos.");
        break;
    case 'Wednesday':
        console.log("Write a blog on mediuem.");
        break;
    case 'Thursday':
        console.log("Fix bugs");
        break;
    case 'Friday':
        console.log("Go for jumah salat");
        break;
    case 'Saturday':
        console.log("take a rest");
        break;
    case 'Sunday':
        console.log("take more rest");
        break;
    default:
        console.log("Not a valid day");

}

*/
//coding challenge -4
var tip = 430;
var result = tip >= 50 && tip <= 300 ? tip + tip * .15 : tip + tip * .2;
console.log(result);
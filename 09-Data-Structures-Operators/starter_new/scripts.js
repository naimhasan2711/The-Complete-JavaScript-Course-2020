// function constructor

/*
var Person = function(name, yearOfBirth, job){

    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    
};

Person.prototype.calculateAge = function(){
    console.log("Age of "+ this.name + " is "+(2020-this.yearOfBirth));
};

Person.prototype.lastName = " Islam";

var jhon = new Person("Jhon", 1992, "Teacher");
var naim = new Person("Naim",1993, "Developer");
var mou = new Person("Mou", 1995, "Self-employeed");

jhon.calculateAge();
naim.calculateAge();
mou.calculateAge();

console.log(naim.lastName);
console.log(mou.lastName);
console.log(jhon.lastName);
*/


//object.create
/*
var personProto = {
    calculateAge: function(){
        console.log(2020 - this.yearOfBirth);
    }
};

var jhon = Object.create(personProto);
jhon.name = 'jhon';
jhon.yearOfBirth = 1992;
jhon.job = "teacher";

var jane = Object.create(personProto, {
    name: {value: "jane"},
    yearOfBirth: {value: 1995},
    job: {value: "HW"}
});

*/


// Object

var a = 23;
var b = a;
a = 47;

console.log(a);
console.log(b);

var obj1 = {
    name: "jhon",
    age: 30
};
var obj2 = obj1;
obj1.age = 40;

console.log(obj1.age);
console.log(obj2.age);

//functions

var age = 27;

var obj = {
    name:'Jhon',
    city: 'savar'
};

function change(a,b){
    a = 30;
    b.city = "Dhaka";
}


change(age,obj);

console.log(age);
console.log(obj.city);
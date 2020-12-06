//A List of JavaScript Array Methods


//1
// map( )
// This method creates a new array 
// with the results of calling a provided function 
// on every element in this array.

/*

const arr = [1, 2, 3, 4, 5, 6];
const mapped = arr.map(element=>element+30);
const mapped2 = arr.map(element => element-20);

console.log(arr);
console.log(mapped);
console.log(mapped2);
*/

/*
// 2
// filter( )
// This method creates a new array 
// with only elements that passes the condition 
// inside the provided function.

const arr = [1,2,3,4,5,6];
const mapped = arr.filter(element => element===2 || element===4);
console.log(mapped);

const mapped2 = arr.filter(element => element<2 || element>4);
console.log(mapped2);
*/


/*
// 3
// sort( )
// This method is used to 
// arrange/sort array’s elements either 
// in ascending or descending order.

const arr = [1,3,2,6,4,5];

 arr.sort((a,b) => a>b?-1:1);
console.log(arr);

arr.sort((a,b) => a>b? 1:-1);
console.log(arr);

const alphabet = ['a','c','b','e','d'];
console.log(alphabet);

console.log(alphabet.sort((a,b) => a>b? 1: -1 ));
console.log(alphabet.sort((a,b) => a>b ? -1: 1));

*/


/*
// 4
// forEach( )
// This method helps to loop over array 
// by executing a provided callback function 
// for each element in an array.

const arr = [1, 2, 3, 4];

arr.forEach(element => {
    element *= element;
    console.log(element)});

    */


    /*
// 5
// concat( )
// This method is used to merge two or more 
// arrays and returns a new array,
// without changing the existing arrays.

const arr1 = ['a','b','c'];
const arr2 = ['d','e','f'];

const arr = arr1.concat(arr2);

console.log(arr1);
console.log(arr2);
console.log(arr);

*/
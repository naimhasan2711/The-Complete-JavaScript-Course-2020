/*jshint -W117 */
/*jshint -W097 */
'use strict';

const hour = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  hour,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will delivered to ${address} at ${time}.`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your pasta.This is made of ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredients, ...optionalIngredients) {
    console.log(mainIngredients, optionalIngredients);
  },
};


//looping array

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

for (const item of menu) console.log(item);
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}.`);
}
console.log([...menu.entries()]);


//coding challenge-1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};





//1
const [player1, player2] = game.players;
console.log(player1, player2);

//2
const [gk, ...fieldPlayer] = player1;
console.log(gk, fieldPlayer);

//3
const allPayer = [...player1, ...player2];
console.log(allPayer);

//4
const player1Final = [...player1, 'Thiago', 'Perisic', 'Coutinho'];
console.log(player1Final);

//5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//6

const printGoal = function (...playerNames) {
  console.log(`${playerNames.length} goals were scored.`);
};

printGoal('naim', 'mou', 'sarah');
printGoal('naim', 'mou', 'sarah', 'hasan', 'muhammad');





//short circuitting start

console.log(3 || 'naim');
console.log('' || 'naim');
console.log(true || 3);
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || '' || 0 || 'naim' || 27);

restaurant.numguest = 23;
const guest1 = restaurant.numguest ? restaurant.numguest : 10;
console.log(guest1);

const guest2 = restaurant.numguest || 10;
console.log(guest2);

console.log(0 && 'naim');
console.log(3 && 'naim');

console.log('naim' && 3 && true && null && 0);
console.log('naim' && 3 && true && 'a' && 0);


//end


//REST patter and parameter start

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , rissoto, ...other] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, rissoto, other);

const { sat, ...weekdays } = restaurant.openingHour;

console.log(weekdays);

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];

  console.log(sum);
};

add(1, 2);
add(1, 2, 3, 4);
add(1, 2, 3, 4, 5, 6, 7, 8, 9);

const x = [1, 2, 3, 4, 5];
add(...x);

restaurant.orderPizza('mushroom', 'onion', 'olives', 'spicy');
restaurant.orderPizza('mushroom');

//REST patter and parameter end




//the spread operator start

const arr = [1, 2, 3];
const badNewArr = [4, 5, 6, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const goodNewArr = [4, 5, 6, ...arr];
console.log(goodNewArr);

console.log(...goodNewArr);

const newMenu = [...restaurant.mainMenu, 'Fuska'];
console.log(newMenu);

const s = 'string';
console.log(s);
console.log(...s);

const mainMenuCopy = [...restaurant.mainMenu];

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);


const ingredients = [
  prompt("Let's make pasta!!!Ingredients 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3'),
];

console.log(ingredients);

restaurant.orderPasta(...ingredients);


// const newRestaurent = { foundingIn: 2000, ...restaurant, founder: 'Gus Fring' };
// console.log(newRestaurent);

//the spread operator end



////destructuring object start

restaurant.orderDelivery({
  time: '12:30',
  address: 'Savar, Dhaka',
  mainIndex: 2,
  starterIndex: 1,
});

const { name, openingHour, categories } = restaurant;
console.log(name, openingHour, categories);

//changing main key names
const {
  name: restaurentName,
  openingHour: hours,
  categories: tags,
} = restaurant;

console.log(restaurentName, hours, tags);

//default values
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

//mutating variables
let a = 111;
let b = 234;
const obj = { a: 23, b: 35 };
({ a, b } = obj);
console.log(a, b);

//nested object
const {
  fri: { open: o, close: c },
} = openingHour;
console.log(o, c);

////destructuring object end



//destructuring array start

const arr = [3, 5, 7, 9];


this is the old approach

const x = arr[0];
const y = arr[1];
const z = arr[2];
const a = arr[3];



const [x, y, z, a] = arr; // array destructuring

console.log(x, y, z, a);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);


//swap without array destrucuring
let temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

//swap with array destrucuring


[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(0, 2);

console.log(starter, mainCourse);

const nested = [1, 2, [3, 4]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

//destructuring array end


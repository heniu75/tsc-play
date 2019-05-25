// Typescript syntax and support of ES6 features

// destructuring array
let ponies = [ "first", "second", "third" ];
let [ winner, ...losers] = ponies;

console.log(winner);

console.log(losers);

// destructuring object
let morePonies = { first:"first", second:"second" };
let { first, second } = morePonies;
console.log(first);
console.log(second);

// multi-return function
function randomPonyInRace() {
    const pony = { name: 'Rainbow Dash' }; 
    const position = 2;
    return { pony, position };
}
const { position, pony } = randomPonyInRace();
console.log("position" ,position);
console.log("pony", pony);

// spread operator
const ponyPrices = [12, 3, 4];
const minPrice = Math.min(...ponyPrices);
console.log('minprice', minPrice);


class Animal { 
    speed() {
        return 10; 
    }
}

class Pony extends Animal {
}

// class inheritance and overriding
const pony1 = new Pony();
console.log("pony1.speed():", pony1.speed()); 

class AnimalB { constructor(public speed) {
     }
    }

class PonyB extends AnimalB {
    constructor(speed, private color) { super(speed);
   
    } }
const ponyB = new PonyB(20, 'blue'); 
console.log("ponyB.speed", ponyB.speed); // 20
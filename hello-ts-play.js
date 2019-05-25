// Typescript syntax and support of ES6 features
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// destructuring array
var ponies = ["first", "second", "third"];
var winner = ponies[0], losers = ponies.slice(1);
console.log(winner);
console.log(losers);
// destructuring object
var morePonies = { first: "first", second: "second" };
var first = morePonies.first, second = morePonies.second;
console.log(first);
console.log(second);
// multi-return function
function randomPonyInRace() {
    var pony = { name: 'Rainbow Dash' };
    var position = 2;
    return { pony: pony, position: position };
}
var _a = randomPonyInRace(), position = _a.position, pony = _a.pony;
console.log("position", position);
console.log("pony", pony);
// spread operator
var ponyPrices = [12, 3, 4];
var minPrice = Math.min.apply(Math, ponyPrices);
console.log('minprice', minPrice);
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.speed = function () {
        return 10;
    };
    return Animal;
}());
var Pony = /** @class */ (function (_super) {
    __extends(Pony, _super);
    function Pony() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Pony;
}(Animal));
// class inheritance and overriding
var pony1 = new Pony();
console.log("pony1.speed():", pony1.speed());
var AnimalB = /** @class */ (function () {
    function AnimalB(speed) {
        this.speed = speed;
    }
    return AnimalB;
}());
var PonyB = /** @class */ (function (_super) {
    __extends(PonyB, _super);
    function PonyB(speed, color) {
        var _this = _super.call(this, speed) || this;
        _this.color = color;
        return _this;
    }
    return PonyB;
}(AnimalB));
var ponyB = new PonyB(20, 'blue');
console.log("ponyB.speed", ponyB.speed); // 20

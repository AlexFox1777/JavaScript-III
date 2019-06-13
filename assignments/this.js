/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Context - Java code executes in global context. When 'this' is called in global scope it will refer to global object.
*  If we call 'this' from function`s scope, it will refer to global object as well. In this two cases our context is global scope.
* 2. Implicit Binding - This is used for adding the same statements to different context.
*  We can just add the function to needed context (object) and then this keyword will refer to the context. In this case our context is object`s scope
* 3. Explicit Binding - (call, apply, bind) -
* 4. New Binding -
*
* write out a code example of each explanation above
*/

// Principle 1
this
// code example for Window Binding
function globalContext() {
    console.log(this);
    return 'gav';
}
globalContext();
// Principle 2
// code example for Implicit Binding
const sayHi = (obj) => {
  obj.sayHello = function () {
      console.log(`My context is ${this.species}`);
      return `Hello, I am a ${this.species}`;
  };
};
const dog = {species: 'dog'};
const cat = {species: 'cat'};
sayHi(dog);
sayHi(cat);
console.log(dog.sayHello());
console.log(cat.sayHello());
// Principle 3
// code example for New Binding
const startTheEngine = function(car1, car2) { return `The ${this.car_make} engine started ${car1} ${car2}`};
const car = {car_make: 'Audi', car_model: 'Q7', car_year: 2009};
const arrCar = ['ddd', 'dd'];
console.log(startTheEngine.call(car, arrCar[0], arrCar[1]));
console.log(startTheEngine.apply(car, arrCar));
const audi = startTheEngine.bind(car, arrCar[0], arrCar[1]);
console.log(audi());
// Principle 4
// code example for Explicit Binding

function Greeting(word) {
    this.greeting = word;
    this.hello = function () {
        return `${this.greeting} man`;
    };
}
const formal = new Greeting("Hello, How do you do?");
const casual = new Greeting("Hi, How are you doing?");
const informal = new Greeting("Yo, What`s up!?");
console.log(formal.hello());
console.log(casual.hello());
console.log(informal.hello());
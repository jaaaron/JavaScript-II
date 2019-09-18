// closure example
const foo = 'bar';
function returnFoo () {
  return foo;
}
returnFoo();
// The function body (code inside returnFoo) has access to the outside scope (code outside of returnFoo) and can access that ‘foo’ variable.

console.log("hello")

// const functionFeeder = function(callback) {
//     callback('Hello from the inside of Function Feeder');
//   };
// functionFeeder((string) => { // invoking the function
//     alert(string); // alert a function that pops up a box in the browser.
//   });

// functionFeeder respectively becomes what is known as a higher order function or a callBack function allowing it to take in a function as a parameter and executes a function when called with a function as it’s argument
console.log("test")

// Now lets use forEach again to loop over our array and alert each item in the array.
// elements.forEach(element => alert(element));
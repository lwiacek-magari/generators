/**
 * Logging intermediate values
 * Function generators can be used to add logging to functions without tight
 * coupling. For example, the generator can simply yield a value to be processed
 * by the outside caller, and the outside caller might log it.
 *
 * @url http://bahmutov.calepin.co/a-second-taste-of-nodejs-generators.html
 */
function *square() {
  yield 1;
  yield 2;
  yield 4;
  yield 9;
}

function logValues(generator) {
  var v;

  while (!(v = generator.next()).done) {
    console.log('generated value', v.value);
  }
}

/**
 * yield is synchronous
 * When a generator yields a value, it happens synchronously, you can test this
 * by adding a couple of functions that place other messages on the event queue
 */
process.nextTick(function () {
    console.log('trying to print between yield and return');
});
process.nextTick(function () {
    console.log('trying to print between yield and return again');
});

var squares = square();

logValues(squares);


// readable version
// function logValues(generator) {
//   var v;

//   while (true) {

//     if (generator.next().done) {
//       return;
//     }

//     console.log('generated value', v.value);
//   }
// }

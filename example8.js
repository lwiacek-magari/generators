/**
 * caller can transform yielded values
 * yield returns a value, which can be transformed by the caller and sent
 * back to the generator via next() call. For example, lets double the numbers
 * before printing
 *
 * @url http://bahmutov.calepin.co/a-second-taste-of-nodejs-generators.html
 */
function *square() {
  console.log(yield 1);
  console.log(yield 2);
  console.log(yield 4);
  console.log(yield 9);
}

var squares = square();

function doubleValues(generator) {
  do {
    var v = generator.next(v && v.value * 2);
  } while (!v.done);
}

doubleValues(squares);

function *square() {

  var k = 0;

  while (true) {
    k = yield (++k)*k;
    console.log(k);
  }
}

var squares = square();

// run 1. prints 1 via yield
console.log(squares.next().value);
// run 1. makes yield return 10, and prints it via console.log
// run 2. prints 11*11 via yield
console.log(squares.next(10).value);
// run 1. makes yield return 20, and prints it via console.log
// run 2. prints 21*21 via yield
console.log(squares.next(20).value);

/**
 * old js way
 */
// function square() {

//   var k = 0;

//   return function genNextSquare() {
//     return (++k)*k;
//   }
// }

// var squares = square();

// console.log(squares());
// console.log(squares());
// console.log(squares());

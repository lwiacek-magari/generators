function *square() {
  yield 1;
  yield 2;
  yield 4;
  yield 9;
}

var squares = square();

function logValues(generator) {
  var v;

  while (!(v = generator.next()).done) {
    console.log('generated value', v.value);
  }
}

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

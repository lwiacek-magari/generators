function *square () {
  console.log('yielding 1');
  yield 1;
  console.log('yielding 2');
  return 2;
}

var squares = square();

function logValues(generator) {
  console.log(generator.next());
  console.log(generator.next());
}

logValues(squares);

/**
 * generator and caller work in parallel
 * You can think of the generator and its caller as executing in turns at
 * the same time. The generator surrenders to the caller using yield and
 * the caller resumes the generator by calling next(). You can see by inserting
 * print statements into both generator and caller functions.
 *
 * @url http://bahmutov.calepin.co/a-second-taste-of-nodejs-generators.html
 */
function *square() {
  console.log('yielding 1');
  yield 1;
  console.log('yielding 2');
  yield 2;
  console.log('all done');
}

function logValues (generator) {
  do {
    console.log('starting generator');
    var v = generator.next();
    console.log('got back', v);
  } while (!v.done);

  console.log('caller done');
}

var squares = square();

logValues(squares);

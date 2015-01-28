var Q = require('q');

function asyncSquare (n) {

  var defer = Q.defer();

  process.nextTick(function () {
    defer.resolve(n*n);
  });

  return defer.promise;
}

// ES5 using promises
// asyncSquare(5)
// .then(console.log)
// .then(function () {
//     return asyncSquare(6);
// })
// .then(console.log)
// .done(function () {
//   console.log('all done');
// });

// ES6 using generator that yields promises to Q.spawn
Q.spawn(function *() {
  console.log(yield asyncSquare(5));
  console.log(yield asyncSquare(6));
  console.log('all done');
});

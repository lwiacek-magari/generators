var weather = require('./weather');
var runner  = require('./runner');

var findTemperatures = function *() {
  var result;
  result = yield weather.getTemperatureByLocation('San Francisco,CA');
  console.log(result);
  result = yield weather.getTemperatureByLocation('New York,NY');
  console.log(result);
  result = yield weather.getTemperatureByLocation('Seattle,WA');
  console.log(result);
}

var gen = findTemperatures();

runner(gen);

/**
 * without generators
 */
// weather.getTemperatureByLocation('San Francisco,CA', function(err, temp) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(temp);
//   }
// });

var weather = require('weather-js');
 
// Options:
// search:     location name or zipcode
// degreeType: F or C
 
weather.find({search: 'San Francisco, CA', degreeType: 'C'}, function(err, result) {
  if(err) console.log(err);

  console.log("In " + result[0].current.observationpoint + " the temperature is " + result[0].current.temperature + " celcius degree, the sky is " + result[0].current.skytext + " . Have a good day! :) " );
});

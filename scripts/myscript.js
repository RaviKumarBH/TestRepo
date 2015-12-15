/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
// import the scriptr.io http module to issue calls to remote APIs
var http = require("http");
// retrieve the location parameter from the request
var location = request.parameters.location;
var weatherService = "http://api.openweathermap.org/data/2.5/weather?q=" + location;
// invoke the weatherService third party API
var callResult = http.request({"url":weatherService});
// parse the result of the call using regular JSON object
var weatherInfo = JSON.parse(callResult.body);
var temperature = weatherInfo.main.temp;
var humidity = weatherInfo.main.humidity;
// return the result of the function call
return getAmbianceConfiguration(temperature, humidity);


  
  			
/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var twitter = require("twitter");
twitter.getRequestToken
var callbackUrl = "http://test.scriptr.io";

//tokens are optional params
var consumerKey = request.parameters["consumerKey"];
var consumerSecret = request.parameters["consumerSecret"];

var credentials = {
	"consumerKey": "pnB82bHGXC0GPBOvGPGDwvxkc",
	"consumerSecret": "ESUrwOXn8actHJtymKn5cBd5P9cu7fmTrAk5Yq4dABxWED5Dpj"
};

var response = twitter.getRequestToken(callbackUrl, credentials);

return response;   				   				   				   				   				   										
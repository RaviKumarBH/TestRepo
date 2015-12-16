/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var twitter = require("twitter");
var callbackUrl = "http://test.scriptr.io";

//tokens are optional params
var consumerKey = request.parameters["consumerKey"];
var consumerSecret = request.parameters["consumerSecret"];

var credentials = {
	"consumerKey": "pnB82bHGXC0GPBOvGPGDwvxkc",
	"consumerSecret": "ESUrwOXn8actHJtymKn5cBd5P9cu7fmTrAk5Yq4dABxWED5Dpj"
};

var requestToken = "vOaJggAAAAAAdpyhAAABUamOPZ0";
var requestSecret = "Vt0LhHPONMZTs5XX5dsujvMhlJ6wtL4M";

var oAuthVerifier = "uAFj5UB05XJNrF6dAC05aYEKkR7wxhDn";

return twitter.getAccessToken(requestToken, requestSecret, oAuthVerifier, credentials); 				   				   				   				   													
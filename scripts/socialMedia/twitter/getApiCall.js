/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var twitter = require("twitter");

var resource_url = "https://api.twitter.com/1.1/statuses/user_timeline.json";

var method = "GET";

var credentials = {
	"consumerKey": "pnB82bHGXC0GPBOvGPGDwvxkc",
	"consumerSecret": "ESUrwOXn8actHJtymKn5cBd5P9cu7fmTrAk5Yq4dABxWED5Dpj",
	"accessToken": "4564663338-7XrwTdAEVdTRHnWCfYiKu0Cj6H8bCzmLXEgAhM7",
	"accessTokenSecret": "iaPZwRMgUNlId8jV1CwNaEsv8gKcdA1gdH02gJ17GqHam"
};

var params = {
	"screen_name": "sravanivl",
	"count": "10"
};

return twitter.getApiCall(resource_url, method, params, credentials);   				   													
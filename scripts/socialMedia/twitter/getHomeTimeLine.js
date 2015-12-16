/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var t = require("twitter");

var credentials = {
	"consumerKey": "pnB82bHGXC0GPBOvGPGDwvxkc",
	"consumerSecret": "ESUrwOXn8actHJtymKn5cBd5P9cu7fmTrAk5Yq4dABxWED5Dpj",
	"accessToken": "4564663338-7XrwTdAEVdTRHnWCfYiKu0Cj6H8bCzmLXEgAhM7",
	"accessTokenSecret": "iaPZwRMgUNlId8jV1CwNaEsv8gKcdA1gdH02gJ17GqHam"
};

return t.getHomeTimeLine(credentials);   				   													
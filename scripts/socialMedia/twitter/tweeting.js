/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var count = 0;
if(!storage.local.counter)
    storage.local.counter = count;
else
  count = storage.local.counter;

count++;
storage.local.counter = count;

var credentials = {
	"consumerKey": "pnB82bHGXC0GPBOvGPGDwvxkc",
	"consumerSecret": "ESUrwOXn8actHJtymKn5cBd5P9cu7fmTrAk5Yq4dABxWED5Dpj",
	"accessToken": "4564663338-7XrwTdAEVdTRHnWCfYiKu0Cj6H8bCzmLXEgAhM7",
	"accessTokenSecret": "iaPZwRMgUNlId8jV1CwNaEsv8gKcdA1gdH02gJ17GqHam"
};

return tweet("this is Sravz' tweet #" + count + " coming from socialMedia/tweeting", credentials);   				   													
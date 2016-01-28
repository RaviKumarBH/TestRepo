/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var fb = require("facebook");

var callbackUrl = "http://www.scriptr.io/";

var scope = "user_photos,user_videos,publish_actions";

var state = "getAuthorizationUrl";

var credentials = {
  "apiKey": "341726685895718",
  "apiSecret": "62d55f6f76433f42c644ef2e9caf91bf"
};

return fb.getAuthorizationUrl(callbackUrl, scope, state, credentials);
var fb = require("facebook");

var callbackUrl = "http://www.scriptr.io/";

var scope = "user_photos,user_videos,publish_actions";

var state = "getAuthorizationUrl";

var credentials = {
  "apiKey": "341726685895718",
  "apiSecret": "62d55f6f76433f42c644ef2e9caf91bf"
};

return fb.getAuthorizationUrl(callbackUrl, scope, state, credentials);			
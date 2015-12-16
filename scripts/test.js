/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var fb = require("facebook");

// In this example, we are posting to Facebook using the configuration saved in Settings.
fb.post("Hello from scriptr.io!");

// In this example, we are posting to Facebook using a different set of configuration than the one saved in Settings.
var credentials = {
   "apiKey": "341726685895718",
   "apiSecret": "62d55f6f76433f42c644ef2e9caf91bf",
   "accessToken": "CAACEdEose0cBAAJUJkBizd3DQQocZAnDa0pbk7i7eahZCwWnLU3v3hGrP0ZB27GXwXuQPZB1rgtMW2ERUq2ukfTBiWr4MQGVAIxfDrzxj90XLkVO0JZA7J2yWue6HoPKZA2gtWtsoZA3VPOWF1Ru57JfjrM0lCVF4bWA3HeEfzssyuoKxxvMMLfeMLmOUKl2CwQsCsxmC0wcQZDZD"
};
return fb.post("Hello from scriptr.io!", credentials);
			
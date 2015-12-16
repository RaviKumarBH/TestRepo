/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 
 var channel = "MyNotificationChannel";
var type = "notificationsGroup";
var callBack = "MyAndroidGroup";

var log = require("log");
log.setLevel("DEBUG");

var messaging = require("messaging");
var result = messaging.subscribe(channel, type, callBack);
log.debug(JSON.stringify(result));

return result;   				   				   							
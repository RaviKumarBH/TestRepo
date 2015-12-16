/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 
 var channel = "MyNotificationChannel";
var message = "Maher is always high";
var wrapMessage = "true";

var log = require("log");
log.setLevel("DEBUG");

var messaging = require("messaging");
var result = messaging.publish(channel, message, wrapMessage);
log.debug(JSON.stringify(result));

return result;   				   				   				   				   							
/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 
 var channel = "MyChannel";
var message = "This is a testing message sent to MyChannel to which callBackScript is subscribed.";
var wrapMessage = "true";

var log = require("log");
log.setLevel("DEBUG");

var messaging = require("messaging");
var result = messaging.publish(channel, message, wrapMessage);
log.debug(result);

return result;   				   							
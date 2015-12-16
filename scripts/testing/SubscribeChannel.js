/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 
 var channel = "MyChannel";
var type = "notificationsGroup";
var callBack = "MyGroup";

var log = require("log");
log.setLevel("DEBUG");

var messaging = require("messaging");
var result = messaging.subscribe(channel, type, callBack);
log.debug(result);

return result;   				   				   				   							
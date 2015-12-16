/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 
 var id = "MyChannel";
var update = "false";
var subscribeACL = "authenticated";
var publishACL = "authenticated";

var options = {
  "id": id,
  "update": update,
  "subscribeACL": subscribeACL,
  "publishACL": publishACL
}

var log = require("log");
log.setLevel("DEBUG");

var messaging = require("messaging");
var result = messaging.channel.save(options);
log.debug(result);

return result;     				   							   				   							   				   				   							
/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 
 
 var id = "MyAndroidGroup";
var platform = "android";

var update = "false";
var pushTokens = ["frSZbSZIdZE:APA91bGSZ25e_iVvWf9WgIwZbD99SbPexcZ0DUAiIeNz2XwyrWNHuUCT4phSJV1ZclM5WOUVNzzLM4QwNEskoAb2yDICG4-o_vdOH-lFFOcBdjU8LGagWg8kU088Ddzx0MqXg5s_mJis"];
var lifetime = "5000";
var isProduction = "true";

var options = {
  "update": update,
  "pushTokens": pushTokens,
  "lifetime": lifetime
}

var log = require("log");
log.setLevel("DEBUG");

var messaging = require("messaging");
var result = messaging.notification.group.save(id, platform, options);
log.debug(JSON.stringify(result));

return result;   				   				   				   				   				   				   				   				   				   							
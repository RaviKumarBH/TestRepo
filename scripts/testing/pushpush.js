/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 
 var message = '{"Content":"Get back to Julien when you get this notification."}';  
var arrayDevices = ["APA91bFQqjlRLfUaci3JftffvX9PFi_y-dFeZIUZm0lKoOWnZISljrbQWnKuoIKxGvRHtVbbHhKrRuyxcDDrHq2FIPkZOG9zzbXyJX-svVXXD6yFs3cSWmfVdWlrdiJs2w_8JBlmCWU7KddgRHgYKmxJSP-ZvI4Oqa3Qe1hdIolzWpWDRudJwZQ"];
var deviceType = "android";
return push(arrayDevices, message, deviceType);    				   				   							
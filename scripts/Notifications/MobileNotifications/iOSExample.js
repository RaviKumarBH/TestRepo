/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 var message = '{"aps": { "alert" : "The notification you want to send", "badge" : 5, "sound" : "default"}}';
var arrayDevices = ["45866802973125d73b144b6c5d9c17b24fb4b09cf4d7bff855e2dd8e852a49c6","4565656d3423e455b45355c34243f3553f3255b235352c55454dd3255e324b24"];
var deviceType = "ios";

//this is a push to iOS using the development certificate.
var isProduction = "false";
return push(arrayDevices, message, deviceType, isProduction);

//this is a push to iOS using the production certificate.
isProduction = "true";
return push(arrayDevices, message, deviceType, isProduction);
   							
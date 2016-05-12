/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var location = request.parameters.location;
var country = request.parameters.country;
var state = request.parameters.state;
return location+country+state;
			
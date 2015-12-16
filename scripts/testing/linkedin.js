/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 
 var clientId = "pn18vv4vcazj";
var clientSecret = "nmGRDm0UVMRJBAhj";
var callbackUrl = "http://www.batata.com";
var code = request.parameters['code'];
var result = null;
var requestToken = "75--a85eace4-a5d0-4bbd-b845-ba9d2087904c";
var requestTokenSecret = "a2c90320-0fa2-458f-8f1d-2d253cdf0a39";
if(code == null){
     result = apsdb.social.linkedin.getRequestToken(clientId, clientSecret, callbackUrl);
     return result;
}else{
    //this code will run when google does the callback with the code parameter
     
     result = apsdb.social.linkedin.getAccessToken(clientId, clientSecret,requestToken,requestTokenSecret, code);
    //save the access token of the currently logged in user
     apsdb.callApi("SaveUser",
    { 
     "login" : "asd",
     "apsdb.update" : "true",
     "accessToken" :  result.result.accessToken
     }, null);
    return result;
}
return {"status" : "success"};   							   							
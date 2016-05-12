/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var a = {
  "execTimeMillis": "204",
  "response": {
    "metadata": {
      "requestId": "09130f98-c585-4fe4-9fb0-3d2822b7343e",
      "status": "success",
      "statusCode": "200"
    },
    "result": {
    } 
  }
};
response.addHeaders(configuration.crossDomainHeaders);
response.write(JSON.stringify(a));
response.close();			
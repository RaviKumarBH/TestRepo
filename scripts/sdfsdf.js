/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 tweet ('sdfsdf');

 response.addHeaders(configuration.crossDomainHeaders); response.setStatus(200); response.setHeader('key','null'); response.write(''); response.close();			
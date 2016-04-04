/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"test message;"},"scriptrdata":[]}}*#*#*/
var content= 'test message;';  response.write(content);response.close();			
/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"//myfile is in"},"scriptrdata":[]}}*#*#*/
var content= '//myfile is in'; var response = apsdb.httpRespond(); response.write(content);response.close();			
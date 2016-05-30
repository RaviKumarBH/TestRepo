/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"//ravi"},"scriptrdata":[]}}*#*#*/
var content= '//ravi';  response.write(content);response.close();			
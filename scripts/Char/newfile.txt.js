/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"//ravi file"},"scriptrdata":[]}}*#*#*/
var content= '//ravi file';  response.write(content);response.close();			
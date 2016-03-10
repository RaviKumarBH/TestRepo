/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"//myscripts"},"scriptrdata":[]}}*#*#*/
var content= '//myscripts';  response.write(content);response.close();			
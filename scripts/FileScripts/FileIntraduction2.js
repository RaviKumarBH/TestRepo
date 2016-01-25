/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"//myscript123"},"scriptrdata":[]}}*#*#*/
var content= '//myscript123'; var response = apsdb.httpRespond(); response.write(content);response.close();			
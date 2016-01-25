/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"//myscript"},"scriptrdata":[]}}*#*#*/
var content= '//myscript'; var response = apsdb.httpRespond(); response.write(content);response.close();			
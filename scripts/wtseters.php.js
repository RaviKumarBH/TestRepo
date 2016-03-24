/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"sdfsdfsdf\nsdfsdfsdf"},"scriptrdata":[]}}*#*#*/
var content= 'sdfsdfsdf\n\
sdfsdfsdf';  response.write(content);response.close();			
/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"ravikumar is a employee in VL\n\n<my file it is>\n</my file it is>\n\n\nsdfsdfsd\n"},"scriptrdata":[]}}*#*#*/
var content= 'ravikumar is a employee in VL\n\
\n\
<my file it is>\n\
</my file it is>\n\
\n\
\n\
sdfsdfsd\n\
'; var response = apsdb.httpRespond(); response.write(content);response.close();			
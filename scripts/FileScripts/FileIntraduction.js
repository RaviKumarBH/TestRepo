/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"//Java code\n\n\nclass First {\n  public static void main(String[] arguments) {\n    System.out.println(\"Let's do something using Java technology.\");\n  }\n}\n\n\n\n\n//XML Code\n<note><to>Tove</to><from>Jani</from><heading>Reminder</heading><body>Don't forget me this weekend!</body></note>\n\n\n\n\n\n"},"scriptrdata":[]}}*#*#*/
var content= '//Java code\n\
\n\
\n\
class First {\n\
  public static void main(String[] arguments) {\n\
    System.out.println(\"Let\'s do something using Java technology.\");\n\
  }\n\
}\n\
\n\
\n\
\n\
\n\
//XML Code\n\
<note><to>Tove</to><from>Jani</from><heading>Reminder</heading><body>Don\'t forget me this weekend!</body></note>\n\
\n\
\n\
\n\
\n\
\n\
'; var response = apsdb.httpRespond(); response.write(content);response.close();			
/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="scriptr_response" id="1" inline="false" x="231" y="-2"><field name="addCorsResponse">TRUE</field><field name="addCloseResponse">TRUE</field><value name="responseInput"><block type="text" id="2"><field name="TEXT">sdfasdfsdf</field></block></value><value name="statusInput"><block type="math_number" id="3"><field name="NUM">200</field></block></value><value name="headersInput"><block type="dicts_create_with" id="4" inline="false"><mutation items="2"></mutation><field name="KEY0">key</field><field name="KEY1">key</field><value name="INPUT0"><block type="text" id="5"><field name="TEXT">sdfasdfsdf</field></block></value><value name="INPUT1"><block type="text" id="6"><field name="TEXT">sdfasdfsdf</field></block></value></block></value></block></xml>*#*#*/
 response.addHeaders(configuration.crossDomainHeaders); response.setStatus(200); response.setHeader('key','sdfasdfsdf'); response.write('sdfasdfsdf'); response.close();			
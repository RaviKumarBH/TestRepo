/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="scriptr_return" id="37" inline="false" x="49" y="20"><value name="return"><block type="math_arithmetic" id="75" inline="true"><field name="OP">ADD</field><value name="A"><block type="math_number" id="109"><field name="NUM">5</field></block></value><value name="B"><block type="math_number" id="110"><field name="NUM">6</field></block></value></block></value></block></xml>*#*#*/
return 5 + 6			
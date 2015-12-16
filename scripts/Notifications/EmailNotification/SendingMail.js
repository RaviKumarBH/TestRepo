/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 var time = new Date();
var mailBody = "Hello,<br>An intrusion was detected at " + time + "<br>";
mailBody += "<a href='https://api.scriptr.io/discard?id=" + request.id + "'>Click here to discard the alert</a>";
var emailConfig = {
  "to": "sravani.thota@valuelabs.com",
  "fromName": "sravanivaluelabs@gmail.com",
  "subject": "Intrusion alert",
  "body": mailBody
};
return sendMail(emailConfig.to, emailConfig.fromName, emailConfig.subject, emailConfig.body);			
/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var time = new Date();
var mailBody = "Hello,<br>An intrusion was detected at " + time;

var emailConfig = {
  "to": "bhchinna578@gmail.com",
  "fromName": "Chinna",
  "subject": "Test alert",
  "body": mailBody
};
return sendMail(emailConfig.to, emailConfig.fromName, emailConfig.subject, emailConfig.body);			
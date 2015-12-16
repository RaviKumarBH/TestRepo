/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 
 
 
 
 var fb = require("facebook");

var currentDate = new Date();
var formattedDate = currentDate.getFullYear() + "-" + atLeastTwoDigits(currentDate.getMonth() + 1)
  + "-" + atLeastTwoDigits(currentDate.getDate()) + "T" + atLeastTwoDigits(currentDate.getHours())
  + ":" + atLeastTwoDigits(currentDate.getMinutes()) + ":" + atLeastTwoDigits(currentDate.getSeconds());
formattedDate += currentDate.getTimezoneOffset() < 0 ? "+" : "-";
formattedDate += atLeastTwoDigits((Math.abs(currentDate.getTimezoneOffset()) / 60)) + "00";

var message = "Check out this imagi: http://www.google.com/intl/en_ALL/images/logo.gif";

var credentials = {
  "apiKey": "341726685895718",
  "apiSecret": "62d55f6f76433f42c644ef2e9caf91bf",
  "accessToken": "CAAE2zHG5HCYBAKnvZCb0e9EwIZAGqNhqDODvLfHHZChOZCkShI0kfFfolUPhaWGZBurLV1LpVuXLJJxb7ZCyqcdGTrwvhzcpbUQZAqNprl6bXMcQXFMEjRnahMeDYACdreEH7BpUtPZAkizyykqGu6uNaHM25d5AM3uigS7d84F7ZBmNsAoSD1Upbq0PbUiA34RdxAN2EqZALDJ6ZAPofHdzOQm"
};

return fb.post(message, credentials);


function atLeastTwoDigits (value) {
    return value < 10 ? "0" + value : value;
}   				   				   				   				   				   				   				   							
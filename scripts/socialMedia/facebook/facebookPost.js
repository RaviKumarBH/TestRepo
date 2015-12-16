/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var currentDate = new Date();
var formattedDate = currentDate.getFullYear()
  + "-" + atLeastTwoDigits(currentDate.getMonth() + 1)
  + "-" + atLeastTwoDigits(currentDate.getDate())
  + "T" + atLeastTwoDigits(currentDate.getHours())
  + ":" + atLeastTwoDigits(currentDate.getMinutes())
  + ":" + atLeastTwoDigits(currentDate.getSeconds());
formattedDate += currentDate.getTimezoneOffset() < 0 ? "+" : "-";
formattedDate += atLeastTwoDigits((Math.abs(currentDate.getTimezoneOffset()) / 60)) + "00";

var credentials = {
  "apiKey": "341726685895718",
  "apiSecret": "62d55f6f76433f42c644ef2e9caf91bf",
  "accessToken": "CAAE2zHG5HCYBAOx0r7Ww77sCVOCbVWBLtViyWuerUSzCXypV674xlZAaZAtq0qCLq3ZAUY5V49FAh1BySnsPBcDCLOQq0Mif2sMyloZAlOUNGXIJHc1HAAo79q7LnWyL0tcg6nHCdV0nVOh5ZCwm11S5vSlHtWAOuY0ZAAq4R3LxLZA9cee9lL0GjHkNbyasv8ZD"
};

return facebookPost("This is a beautiful posting day, Holla Scriptr! " + formattedDate, credentials);

function atLeastTwoDigits (value) {
    return value < 10 ? "0" + value : value;
}   				   				   				   				   				   				   				   				   													
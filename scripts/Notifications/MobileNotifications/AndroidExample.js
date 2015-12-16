/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 var message = '{"Content":"Hello!"}';  
var arrayDevices = ["eNN8LT1W8w8:APA91bGBArTuZYSiHOx5Ip3FeIBCtp_lzAacjBubopV4li91B1iNmKLJi6rlmkfX-t5gNaTyxyVyxeEjmPNf7JE5OQYYVpVuB20APA3qkjzBazCNc1meA0D9E9-52Cz6we77j8Gy32ql","eNN8LT1W8w8:APA91bGBArTuZYSiHOx5Ip3FeIBCtp_lzAacjBubopV4li91B1iNmKLJi6rlmkfX-t5gNaTyxyVyxeEjmPNf7JE5OQYYVpVuB20APA3qkjzBazCNc1meA0D9E9-52Cz6we77j8Gy32ql"];
var deviceType = "android";
return push(arrayDevices, message, deviceType);   			

			
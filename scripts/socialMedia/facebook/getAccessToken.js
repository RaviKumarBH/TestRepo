/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var fb = require("facebook");

var callbackUrl = "http://www.scriptr.io/";

var oauthVerifier = "AQBP2yRzz2ajFMYXzU59TbfrwoDDW8yKIUlLFNM2QTZFaInzRV6b1FHphLvgNba6myPqkHiFhrtPtXw28aWEhV4mHHqNrK-T7AvD59Ix7n9wQ-I_kVn3766eXHvIBM6Nwv4BxjG3wZFiq955tlmW4-uLtvuHmeoPSvyVeWZFoX68OX3rPsN25MH_JtJzflJQWiVD-r-ghaS6pGDVeoQgzx-fY2nUwa2OzL_zyXVty7Wcj6JKzDXj2SPA1yTZ5DckFlK3HlrHtytVOjhS-hzhB5sUlFyBL1P7vynTJGF_Kz6LlBg9kREeMzdK2KBTW3cCpUbf75pn3QQ7UrC-alsmkUdv";

var credentials = {
  "apiKey": "341726685895718",
  "apiSecret": "62d55f6f76433f42c644ef2e9caf91bf"
};
return fb.getAccessToken(callbackUrl, oauthVerifier, credentials);   				   				   				   				   				   				   													
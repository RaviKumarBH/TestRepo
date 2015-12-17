var http = require("http");
var ip = request.headers["x-forwarded-for"];
var iplookupUrl = "http://ip-api.com/json/" + ip;
var response = http.request({url: iplookupUrl});
if(response.status == "200"){
    var result = JSON.parse(response.body);
    var country = result.country;
    if(!storage.local[country]){
	 	storage.local[country] = {count :1}
	}else{
		storage.local[country].count += 1;
	}
	var message= "Thank you for tweeting from scriptr.io. There are now " + storage.local[country].count +  " tweets from " + country +".";
	var tweetResult = tweet(message);
	return "You've just tweeted [" + message + "] from scriptr.io, you can check it <a href='http://twitter.com/scriptrdemo' target='_blank'>here</a>."
}else{
	return "Ooops, we can't figure out your location!";
}			                

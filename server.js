var http =require('http');
var handleRequest= function(request, response){
    response.writeHead(200);
    response.end("<h1>HII Team this is divi , and this is  GAE-IAP DEMO")
}
var www=http.createServer(handleRequest);
www.listen(8080);

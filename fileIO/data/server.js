var http=require("http");
var fs =require('fs');
var onRequestHandler=function(request,response){
var pathname="./"+request.url;
console.log(pathname);

fs.readFile(pathname,(err, data)=>{
    if(err){
        console.log("somthing has been gone wrong");
        console.log(err);
        response.writeHead(404,{'Content-Type':'text/html'});
    }
    else{
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write(data.toString());
    }
    response.end();
    });
 };
 var server=http.createServer(onRequestHandler);
 server.listen(9898);
 console.log("HTTP Server is listening on port number 9898");
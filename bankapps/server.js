

//HTTP Web server
 var http=require('http');
     
  var person={
    'firstname':'Eshvari',
    'lastname':'Navale',
    'email':'eshvarinavale@transflower.in',
    'contactnumber':'5676899876'
  };

  var people=[
   { 'firstname':'sanika','lastname':'Shinde', 'email':'sanikashinde@transflower.in','contactnumber':'5676899876'},
   {'firstname':'samiksha','lastname':'Shinde', 'email':'samikshashinde@transflower.in','contactnumber':'5676899876'},
   {'firstname':'sonal','lastname':'Shinde', 'email':'samikshashinde@transflower.in','contactnumber':'5676899876'},
   {'firstname':'eshvari','lastname':'navale', 'email':'eshvarinavale@transflower.in','contactnumber':'5676899876'},
  ];

  var data="Transflower Learning Pvt.Ltd";
   var onRequestHandler=function (request,response){
    console.log("Request is received.....");
    response.writeHead(200,{'Content-Type':"text/json"})

    response.write(JSON.stringify(people));
    response.end();
   };

 var server=http.createServer(onRequestHandler);
 server.listen(9999);//0 to 1024 port number

 console.log("server is listening on  port no. 9999");



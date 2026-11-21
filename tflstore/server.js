var express= require('express');
var path=require('path');

var app=express();

var credentials=require("./data/credentials.json");
var flowers=require("./data/flowers.json");
var customers=require("./data/customers.json")

var orders=[];
var payments=[];

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/",function(req,res){
    res.sendFile("index.html");
});

app.get("/api/flowers",(request, response)=>{
    response.send(flowers);
})

app.get("/api/flowers/:id",(request,response)=>{
    let id =request.params.id;
    let flower=flowers.find(productr=>productr.id==id);
    response.send(flower);
})

app.get("/api/customers",(request,response)=>{
    response.send(customers);
})

app.get("/api/customers/:id",(request,response)=>{
    let customerId =request.params.id;
    let theCustomer=customers.find(cust=>cust.id==customerId);
    response.send(theCustomer);
});


    app.put("/api/customers/:id",(request, response)=>{
        var existingCustomerId=request.params.id;
        console.log(request.body);
        var theCustomer=request.body;

        customers=customers.filter((customers)=>customers.id !=existingCustomerId);
        console.log(customers);
        customers.push(theCustomer);
        response.send("customer updated...");
        
});

app.post("/api/login",(request,response)=>{
    console.log("Login post id invoked");
    var user=request.body;
     
}); 
app.post("/api/register",(request,response)=>{
    console.log("POST register is invoked....")
    var newCustomer=request.body;
    customers.push(newCustomer);
        response.send("Customer Registration succeessful");

    });

   

app.post("/api/flowers",(request, response)=>{
    let newFlower=request.body;
    flowers.push(newFlower);
    response.send("New Flower is inserted to collection");
});

app.delete("/api/flowers/:id",(request,response)=>{
      let id=request.params.id;
      let remainingFlowers=flowers.filter(f=>f.id!=id);
      flowers=remainingFlowers;
      response.send("flower is removed from collection");
});

app.listen(9898);
console.log("Server is listening on port 9898");
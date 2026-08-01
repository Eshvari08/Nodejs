
 
var handlers=require("./handler");
var events=require("events");

var emitter=new events.EventEmitter(); 

var Account=function(amount){
var balance=amount;
//inner function
    var getBalance=function(){ 
        return balance;
    };
    

    var monitor=function(){
        if(balance < 10000){
            emitter.emit("underbalance");
            //handlers.blockAccount();
        }
           else if(balance<250000){
            emitter.emit("overbalance");
            //handlers.payIncomeTax();
           }
           else{
            handlers.payServiceTax();
           }
        
    }
    var withdraw=function(amount){
      balance=balance-amount;
      monitor();
    };

    var deposit=function(amount){
        balance=balance+amount;
        monitor();
    };
    
    return{
        receiveBalance:getBalance,
        debit:withdraw,
        credit:deposit
    }
}

emitter.on("underbalance",handlers.blockAccount);
emitter.on("underbalance",handlers.sendEmail);
emitter.on("underbalance",handlers.sendSMS);

emitter.on("overbalance",handlers.payIncomeTax);

var acct123=new Account(55000);
//var data=acct123.receiveBalance();
//console.log("Balance=" + data);
acct123.debit(52000);

//var amount=200000;//
//acct123.credit(amount);
 var data=acct123.receiveBalance();
console.log("Balance=" + data);

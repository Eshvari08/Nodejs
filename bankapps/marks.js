var handlers=require("./handler1");
var events=require("events");

var emitter=new events.EventEmitter();

var Student=function(Marks){
    var totalMarks = Marks;

    var getMarks=function(){
        return totalMarks;
    };

    emitter.on("exam",function(Marks){
        if(Marks > 35){
            emitter.emit("pass");
        }
        else if(Marks < 90){
            
            emitter.emit("fail");
        }
        else{
            handlers.sendEmail();
        }
    });
var monitor=function(){
    emitter.emit("exam",totalMarks);
}
    var addMarks = function(Marks){
        totalMarks=totalMarks+Marks;
        monitor();
    };

    var deductMarks = function(Marks){
        totalMarks=totalMarks-Marks
        monitor();
    };

    return{
        receiveMarks:getMarks,
        increase:addMarks,
        decrease:deductMarks,
        monitor:monitor
    }
}
 emitter.on("pass",handlers.checkPaper);
 emitter.on("pass",handlers.generateResult);
 emitter.on("fail",handlers.failStudents);
 emitter.on("pass",handlers.passStudents);
 emitter.on("fail",handlers.sendEmail);

 var Stu1 = new Student(50);

 //function call
 Stu1.monitor();

 var data = Stu1.receiveMarks();
 console.log("Marks =" + data);

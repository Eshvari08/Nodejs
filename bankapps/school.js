var events=require("events");
var emitter=new events.EventEmitter();


var sendHallticket=function(){
    console.log("Your hallticket is sent by post");
}

var onExamAppear=function(marks){
    if(marks >70){
        emitter.emit("pass");
    }
    else{
        emitter.emit("fail");
    }
}

var onPass=function(){
    console.log("distribute sweets");
}

var onFail=function(){
    console.log("apply for reexam");
}

var Student=function(subject){
    var study=function(completionLevel){
      if(completionLevel > 7){
            emitter.emit("exam",90);
        }
    }

    return{
        learn:study
    }
}

//event registration

emitter.on("exam",onExamAppear);
emitter.on("exam",sendHallticket);
emitter.on("pass",onPass);
emitter.on("fail",onFail);

//perform action
var st1=new Student("english");
st1.learn(9);
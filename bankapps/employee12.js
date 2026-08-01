
var handlers=require("./emphandler");
var events=require("events");


var emitter=new events.EventEmitter();

var onperformanceReview = function(rating){
    if(rating > 9){
        emitter.emit("promotion");
    }else {
        emitter.emit("nopromotion");
    }
}

var Employee = function(name) {
    var work = function(performance) {
        if (performance > 9) {
            emitter.emit("performanceReview", performance);
        }
    };

    return {
        perform: work
    };
};

emitter.on("performanceReview",onperformanceReview);
emitter.on("promotion",handlers.sendPromotionLetter);
emitter.on("nopromotion",handlers.noPromotionLetter);


var emp = new Employee("sanuu");
emp.perform(20);


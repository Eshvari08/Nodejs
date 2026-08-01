
var events = require("events");
var emitter = new events.EventEmitter();

// Main Event
var onPerformanceReview = function(rating) {
    if (rating > 15) {
        emitter.emit("promotion");
    } else {
        emitter.emit("noPromotion");
    }  
}

var sendPromotionLetter = function() {
    console.log("Congratulations!");
}

var noPromotionLetter = function() {
    console.log("You are not eligible for promotion");
}


var Employee = function(name) {
    var work = function(performance) {
        if (performance > 9) {
            emitter.emit("performanceReview",90);
        }
    }

    return {
        perform: work
    }

}

// Event Registration
emitter.on("performanceReview",onPerformanceReview);
emitter.on("promotion", sendPromotionLetter);
emitter.on("noPromotion", noPromotionLetter);

// Perform Action
var emp1 = new Employee("Sanika");
emp1.perform(20);
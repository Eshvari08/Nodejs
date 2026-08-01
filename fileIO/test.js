
var fs=require('fs');
var fileName="./data/transflower.txt";
//var fileName="./data/result.txt";

var onFileRead=function(err, data){
     if(err){
          throw err;
         // console.log("Somthing has gone wrong")
     }
     console.log("Data from File available");
     console.log(data.toString());
};
fs.readFile(fileName,onFileRead);

console.log("Terminating Node JS Application");

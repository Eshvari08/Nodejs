

var  fs= require('fs');
var fileName="../data/result123.txt";

var dataTobeWritten=" this data is written by Node JS Apploication....";

var onFileWrite=function(err){
    if(err){
        throw err;
    }

    console.log("Content has been successfully written into file");
}
;

fs.writeFile(fileName,dataTobeWritten,onFileWrite);
console.log("Node js application about to be terminated.....");
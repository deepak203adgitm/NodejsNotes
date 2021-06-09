const fs = require("fs");


console.log("start");

let f1KaContent = fs.readFileSync("./f1.txt"); // 100gb file
console.log(f1KaContent+"");

console.log("end");



// multiple files
// async code
// simulatenously read all the files and get data !!
const fs = require("fs");

console.log("start");


fs.readFile("./f1.txt" , function(err , data){
    console.log(data+"");
})

fs.readFile("./f2.txt" , function(err , data){
    console.log(data+"");
})

fs.readFile("./f3.txt" , function(err , data){
    console.log(data+"");
})


// for n files

let files = ["../f1.txt" , "../f2.txt" , "../f3.txt"];
const fs = require("fs");
// async code
// simultaneous process
console.log("start");

for(let i=0 ; i<files.length ; i++){
    fs.readFile(files[i] , function(err , data){
        console.log(data+"");
    })
}

console.log("end");




////////////////////////////////////////////////////////////
//for parallel
let files = ["../f1.txt" , "../f2.txt" , "../f3.txt"];
const fs = require("fs");

// F1ka data => f2kaData => f3Kadata
// async code

// not possible with while loop , do while , for loop , for each

// try recursive solution ?


console.log("end");


// multiple files
// async code
//  F1kaData => F2KaData => F3KaData

const fs = require("fs");


console.log("start");


fs.readFile("./f1.txt" , function(err , data){
    console.log(data+"");
    fs.readFile("./f2.txt" , function(err , data){
        console.log(data+"");
        fs.readFile("./f3.txt" , function(err , data){
            console.log(data+"");
        })
    })
})






console.log("end");
  
// parallely read contents of f1 f2 and f3 using promisified function
const fs = require("fs");

let f1KaPromise = fs.promises.readFile("./f1.txt");
f1KaPromise.then(function(data){
    console.log(data+"");
});

let f2KaPromise = fs.promises.readFile("./f2.txt");
f2KaPromise.then(function(data){
    console.log(data+"");
});

let f3KaPromise = fs.promises.readFile("./f3.txt");
f3KaPromise.then(function(data){
    console.log(data+"");
});


//if n files
let files = ["../f1.txt" , "../f2.txt" , "../f3.txt"];

const fs = require("fs");

for(let i=0 ; i<files.length ; i++){
    
    let fileKaPromise = fs.promises.readFile(files[i]);
    fileKaPromise.then(function(data){
        console.log(data+"");
    })

    
}
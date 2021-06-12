// Serially read contents of f1 f2 and f3 using promisified function

const fs = require("fs");

// promise hell

let f1KaPromise = fs.promises.readFile("./f1.txt");

f1KaPromise.then(function(data){
    console.log(data+"");
    let f2KaPromise = fs.promises.readFile("./f2.txt");
    f2KaPromise.then(function(data){
        console.log(data+"");
        let f3KaPromise = fs.promises.readFile("./f3.txt");
        f3KaPromise.then(function(data){
            console.log(data+"");
        })
    })
})


// if n files
let fs = require("fs");
let files = ["../f1.txt" , "../f2.txt" , "../f3.txt"];


// Chaining with the help of loop !!!!

let f1KaPendingPromise = fs.promises.readFile(files[0]);

for(let i=1 ; i<files.length ; i++){

    f1KaPendingPromise = f1KaPendingPromise.then( function(data){
        console.log(data+"");
        let nextFilePromise = fs.promises.readFile(files[i]);
        return nextFilePromise;
    })

}

f1KaPendingPromise.then(function(data){
    console.log(data+"");
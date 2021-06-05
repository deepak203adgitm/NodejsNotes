

//const obj = require("fs");
//console.log(obj);
 //let filedata = obj.readFileSync("./v.txt");
 //console.log(filedata+ " ");

 //obj.writeFileSync("./v.txt", " yaar koi job dila dooooo");


let fs = require("fs");

let extensionsMapping = require("./util.js");

console.log(extensionsMapping);

let testFolderPath = "./Downloads";
let allFiles = fs.readdirSync(testFolderPath);
console.log(allFiles);


//get all files  from folder

for(let i =0;i<allFiles.length;i++)
{
	sortFile(allFiles[i]);
}



//get extension of file 
function getExtension(file){
    file = file.split(".");
    return file[1];
}




function checkExtensionFolder(extension){
    // extension = "doc";
    let extensionFolderName = testFolderPath;
    for(let key in extensionsMapping){
        let extensions = extensionsMapping[key];
        if(extensions.includes(extension)){
            extensionFolderName = extensionFolderName+"/"+key;
            break;
        }
    }
    // extensionFolderName = 'Documents'
    // "./Downloads"
    // let folderToBeChecked = testFolderPath+"/"+extensionFolderName;
    // "./Downloads/Documents"
    let isFolderExist =  fs.existsSync(extensionFolderName);
    if(!isFolderExist){
        fs.mkdirSync(extensionFolderName);
    }
    return extensionFolderName;
}


function moveFile(file , extensionFolderName){
    let sourceFile = testFolderPath+"/"+file;
    let destinationFile = extensionFolderName+"/"+file;
    // copy file from the source path to destination path !!
    fs.copyFileSync(sourceFile , destinationFile);
    // then delete file from the source path !!
    fs.unlinkSync(sourceFile);
}


















function sortFile( File) {
	//console.log(File);

	let extension = getExtension(File);
	console.log(extension);
	 let extensionFolderName = checkExtensionFolder(extension);
	  moveFile(File , extensionFolderName );
}
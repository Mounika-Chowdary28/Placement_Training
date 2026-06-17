const fs=require('fs');

// fs.readFile('test.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// });

const student="Name: S Mounika Chowdary, Age: 22, Department: CSE, College: SRM University";
fs.writeFile('test.txt',student,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Added successfully");
    }
});

fs.readFile('test.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});

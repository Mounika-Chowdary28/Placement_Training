
let myPromise=new Promise((resolve,reject)=>{
    let success=true;
    if(success){
        resolve("Promise is resolved successfully");
    }else{
        reject("Promise is rejected");
    }
});

myPromise
.then(res=> console.log(res))
.catch(err=>console.log(err));


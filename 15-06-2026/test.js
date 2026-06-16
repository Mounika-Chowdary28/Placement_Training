// const add= (a,b)=>{
//     return a+b;
// }

// console.log(add(2,3));

function display(result){
    console.log(result);
}

function add(a,b,callback){
    const sum = a+b;
    callback(sum);
}

setTimeout(()=>{
    add(2,3,display);
}, 0);

add(3,3,display);
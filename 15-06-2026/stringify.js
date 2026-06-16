//stringify() ->to fetch the json data 
//can be use in API and database
let student={name :"S Mounika Chowdary",age:19};
let jsonData=JSON.stringify(student);
console.log(jsonData);
console.log(typeof jsonData);
//parse
let objectData=JSON.parse(jsonData);
console.log(objectData);
console.log(typeof objectData);

//API call using fetch method
fetch("https://jsonplaceholder.typicode.com/users/1")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));
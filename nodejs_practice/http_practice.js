const http=require('http');

const server=http.createServer((req,res)=>{
    res.write('Welcome to Nodejs');
    res.end();
});

const PORT=5000;
server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
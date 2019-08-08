/*
 http,https,fs,os
*/




// function rqListner(req ,res ){


// }
// http.createServer(rqListner);

// http.createServer(function(req,res){

// });


const http = require('http');

const routes = require('./routes');

const server = http.createServer(routes.handler);
console.log(routes.text);
//process.exit();       // closes the program
server.listen(3000);



// cosole.log(req.url,req.method,req.headers);

    
// console.log(req.url,req.method,req.headers);



// const url = req.url;
// const method = req.method;

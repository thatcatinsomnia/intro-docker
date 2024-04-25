const http = require('http');


const port = 3000;

http
  .createServer(function(req, res) {
    console.log('request received.');
    res.end('hello world');
  })
  .listen(port);

console.log(`server started at http://localhost:${port}`);

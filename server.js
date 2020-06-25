//jshint esversion:6
const http = require('http'),
  fileSystem = require('fs');
  //path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200,{'Content-Type': 'text/html'});
  fileSystem.readFile('index.html',function(error,data)
{
  if(error)
  {
    res.writeHead(404);
    res.write("file not found");
  }
  else
  {
    res.write(data);
  }
  res.end();
});


});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

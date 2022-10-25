const http = require('http');

const server = http.createServer((request, response) => {
  console.log(request.url);

 /* if (request.url === '/') {
    response.write('Hello, welcome to the Steve Jobs page.');
    response.end();
  } else if (request.url === '/andre') {
    response.write('Spooky Andrea');
    response.end();
  } else {
    response.statusCode = 404;
    response.write('Page not found');
    response.end();
  }*/
}); 

server.listen(3000);
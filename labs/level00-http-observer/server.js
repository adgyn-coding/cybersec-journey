'use strict';

const http = require('node:http');

const server = http.createServer((request, response) => {
  console.log(`${request.method} ${request.url}`);
  response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  response.end('Hello from the local learning server.\n');
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Listening only on http://127.0.0.1:3000');
});

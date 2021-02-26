        /***    cCOMMENTS */
// const fs = require('fs');
// fs.writeFileSync('hello.txt', 'hello from node.js');

const http = require('http');

const routes = require('./routes');

const server = http.createServer(routes);

server.listen(3000);

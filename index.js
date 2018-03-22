// entry point for our server

// setup config right before anything by requiring it
const config = require('./server/config');
const server = require('./server');

// start server
console.log(`Server is listened on port ${config.port}`);
server.listen(config.port);


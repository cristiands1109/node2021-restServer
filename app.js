
// importaciones
require('dotenv').config();


const Server = require('./models/server');

// Clase Server
const server = new Server();
server.listen();

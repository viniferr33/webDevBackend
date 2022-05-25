const express = require('express');
const cors = require('cors');
const server = express();

server.use(express.json());
server.use(cors({
    origin: "*"
}));

const routes = require('./routes');
server.use(routes);

server.get('/', (req, res) => {
    res.status(200).json({'Message': 'Ok'});
});

module.exports = server;
const express = require('express');
const helmet = require('helmet');

const projectsRouter = require('../routes/projects/projectsRouter')
const actionsRouter = require('../routes/actions/actionsRouter');

const server = express();
server.use(helmet());
server.use(express.json());

server.use('./api/projects', projectsRouter);
server.use('api/actions', actionsRouter);

server.get('/', (req, res) => {
    res.send('<h1>sanity check</h1>')
})

module.exports = server;
const express = require('express');
const helmet = require('helmet');

// Check after i make files
const projectsRouter = require('./projects/projectsRouter');
const actionRouter = require('./projects/actionsRouter');

const server = express();
server.use(helmet());
server.use(express.json());
server.use('./api/projects', projectsRouter);
server.use('api/actions', actionsRouter);

// sanity check
server.get('/', (req, res) => {
    res.send('<h1>sanity check</h1>')
})

module.exports = server
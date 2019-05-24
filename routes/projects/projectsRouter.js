const projectsRouter = require('express').Router();
const knex = require('knex');

const db = knex(knexConfig.development);

projectsRouter.get('/', (req, res) => {
    db('projects')
    .then(actions => {
        a
    })
})

projectsRouter.get('/:id', (req, res) => {
    db('projects')
    const id = {req.params.id}
    .where({ id }).first().then(project => {
        res.200
    })
})

projectsRouter.post('/', (req, res) => {
    db('projects')
    .insert(req.body)
    .then(project => {
        db('projects')
        .then(projects2 => {
            projects2. res.
        })
    })
})

projectsRouter.put('/:id', (req, res) => {
    db('actions')
    .where({ id })
})

projectsRouter.delete('/:id'), (req, res) => {
    
}
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "OPTIONS, HEAD, GET, POST, DELETE");
    next();
});

// Programs
app.get('/api/programs', (req, res) => {
    db.Program.findAll()
        .then((programs) => res.send(programs))
        .catch((err) => {
            console.log('There was an error getting programs:', JSON.stringify(err));
            return res.send(err);
        });
});
app.post('/api/programs', (req, res) => {
    const { name, description } = req.body;

    return db.Program.create({ name, description })
        .then((program) => res.send(program))
        .catch((err) => {
            console.log('There was an error creating program:', JSON.stringify(err));
            res.status(400).send(err);
        })
});
app.delete('/api/programs/:id', (req, res) => {
    const id = parseInt(req.params.id);
    return db.Program.findByPk(id)
        .then((program) => program.destroy())
        .then(() => res.send({ id }))
        .catch((err) => {
            console.log('There was an error deleting program:', JSON.stringify(err));
            res.status(400).send(err);
        });
});
app.put('/api/programs/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name, description } = req.body;
    // TODO: update item with id === id
});

// Rules
app.get('/api/rules', (req, res) => {
    db.Rule.findAll()
        .then((rules) => res.send(rules))
        .catch((err) => {
            console.log('There was an error getting rules:', JSON.stringify(err));
            return res.send(err);
        });
});
app.post('/api/rules', (req, res) => {
    const {
        name,
        description,
        type,
        template,
        language,
        programId,
        includeDynamicDate
    } = req.body;

    return db.Rule.create({
        name, description, type, template,
        language, programId, includeDynamicDate
    })
        .then((rule) => res.send(rule))
        .catch((err) => {
            console.log('There was an error creating rule:', JSON.stringify(err));
            res.status(400).send(err);
        })
});
app.delete('/api/rules/:id', (req, res) => {
    const id = parseInt(req.params.id);
    return db.Rule.findByPk(id)
        .then((rule) => rule.destroy())
        .then(() => res.send({ id }))
        .catch((err) => {
            console.log('There was an error deleting rule:', JSON.stringify(err));
            res.status(400).send(err);
        });
});

app.listen(3001, () => {
    console.log('Server is up on port 3001');
});

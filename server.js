const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// Programs
app.get('/api/programs', (req, res) => {
    // TODO: get list of programs
});
app.post('/api/programs', (req, res) => {
    // TODO: insert program
});
app.delete('/api/programs/:id', (req, res) => {
    const id = parseInt(req.params.id);
    // TODO: delete item with id === id
});
app.put('/api/programs/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name, description } = req.body;
    // TODO: update item with id === id
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});
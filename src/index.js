const express = require('express');
const twig = require('twig');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.set("twig options", {
    strict_variables: false 
});

app.use(express.static(path.join(__dirname, '..', 'public')));

const great = (req, res) => {
    let names = null;
    if (req.query && req.query.names) {
        names = req.query.names;
    }

    const { name = '<i>no name provided</i>' } = req.params;

    res.render("index.html.twig", {
        name,
        names
    });
};

// app.get('/', (req, res) => great(req, res, '<i>no name provided</i>'));
app.get('/:name?', great);

app.listen(port, () => {
    console.log(`app listening on port: ${port}!`);
});
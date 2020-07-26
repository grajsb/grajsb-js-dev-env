import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console*/

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../dist/index.html'));
});

app.get('/users', (req, res) => {
    res.json([
        {"id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@bob.com"},
        {"id": 2, "firstName": "Jim", "lastName": "Nesh", "email": "jim@jim.com"},
        {"id": 3, "firstName": "Wyatt", "lastName": "Nelson", "email": "wyatt@wyatt.com"}
    ]);
})

app.listen(port, err => {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:'+ port);
    }
})
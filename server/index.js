const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const host = 'http://localhost';
const port = 3000;

var corsOptions = {
    origin: `${host}:${port + 1}`
};
app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));



app.use(express.static('public'));


app.listen(port, ()=>{
    console.log(`App listening on ${host}:${port}`);
});






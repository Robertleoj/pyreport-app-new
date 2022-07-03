const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const db = require("./app/models");

// db.sequelize.sync();

// db.sequelize.sync({force: strue}).then(()=>{
//     console.log("Drop and re-sync db.");
// });

var corsOptions = {
    origin: `http://localhost:8081`
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

require('./app/routes/report.routes')(app);

app.get('/',async (req, res) => {
    // res.json({message: "Welcome to reports"});
    let [folders, _] = await db.sequelize.query("select * from PyRepDB.report_folders");
    res.json(folders);
});


const port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log(`App listening on ${port}`);
});






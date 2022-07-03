const dbConfig = require('../config/db.config.js');
const Sequelize = require('sequelize');
// const sequelize = new Sequelize( dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {

const sequelize = new Sequelize({
    name: "PyRepDB",
    username: dbConfig.username,
    database: "PyRepDB",
    password: dbConfig.password,
    dialect: dbConfig.dialect,
    host: dbConfig.host,
    port: dbConfig.port,
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.reports = require("./report.model.js")(sequelize, Sequelize);
db.folders = require('./folder.model')(sequelize, Sequelize);
module.exports = db;



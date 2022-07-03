module.exports = {
    conn_str: "mysql://root:mysqlpw@localhost:55000",
    HOST: "localhost",
    USER: "root",
    PASSWORD: "mysqlpw",
    DB: "PyRepDB",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        aquire: 30000,
        idle: 10000
    }
};
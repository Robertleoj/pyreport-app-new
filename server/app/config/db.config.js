const url = require('url');
const conn_str = "mysql://root:mysqlpw@localhost:55000";
const dbConfig =parseConnectionString(conn_str);
dbConfig.pool = {
    max: 5,
    min: 0,
    aquire: 30000,
    idle: 10000
};

console.log(dbConfig);
module.exports = dbConfig;


function parseConnectionString(connectionString){
    let config= {};
    let options = {}

    const urlParts = url.parse(connectionString);

    options.dialect = urlParts.protocol.replace(/:$/, '');
    options.host = urlParts.hostname;

    if (options.dialect === 'mysql' && urlParts.pathname && urlParts.pathname.indexOf('/:memory') !== 0) {
        const path = Path.join(options.host, urlParts.pathname);
        options.storage = options.storage || path;
    }

    if (urlParts.pathname) {
        config.database = urlParts.pathname.replace(/^\//, '');
    }

    if (urlParts.port) {
        options.port = urlParts.port;
    }

    if (urlParts.auth) {
        const authParts = urlParts.auth.split(':');

        config.username = authParts[0];

        if (authParts.length > 1)
            config.password = authParts.slice(1).join(':');
    }

    let result = Object.assign({}, config, options);

    return result;
}
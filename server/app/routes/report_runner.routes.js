
module.exports = app => {
    var router = require('express').Router();
    var reportRunner = require('../controllers/report_runner.controller.js');

    router.post('/', reportRunner.run);
    app.use('/api/run', router);
}

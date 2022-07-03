module.exports = app => {
    const reports = require('../controllers/report.controller.js');
    var router = require('express').Router();

    router.post('/', reports.create);
    router.get('/', reports.findAll);
    router.get('/:id', reports.findOne);
    router.put('/:id', reports.update);
    
    app.use('/api/reports', router);
}
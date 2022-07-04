module.exports = app => {
    const reports = require('../controllers/report.controller.js');
    var router = require('express').Router();



    // create report
    router.post('/', reports.create);

    // get all reports
    router.get('/', reports.findAll);

    // get report by id
    router.get('/:id', reports.findOne);

    // update report
    router.put('/:id', reports.update);

    // delete rport
    router.delete('/:id', reports.delete);

    // get reports in folder
    router.get('/infolder/:id', reports.inFolder);
    
    
    app.use('/api/reports', router);
}
module.exports = app =>{
    const folders = require('../controllers/folder.controller.js');
    var router = require('express').Router();

    // create folder
    router.post('/', folders.create);

    // get root folder
    router.get('/root', folders.findRoot);

    // get folder by id
    router.get('/:id', folders.findOne);
    

    // get all folders in another folder
    router.get('/infolder/:id', folders.inFolder);

    // update folder
    router.put('/:id', folders.update);

    // delete folder
    router.delete('/:id', folders.delete);

    app.use('/api/folders', router);
}
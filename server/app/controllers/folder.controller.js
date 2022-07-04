const { folders } = require('../models');
const db = require('../models');

const Folder = db.folders;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if(!req.body.title){
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const report_folder = {
        name: req.body.name,
        parent_folder_id: req.body.parent_folder_id
    };

    Folder.create(report_folder)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error while creating folder"
            });
        });

}

exports.findRoot = (req, res) =>{
    Folder.findOne({where: {is_root: 1}})
        .then(data => {
            if(data){
                res.send(data);
            } else {
                res.send({
                    message: "No root folder!"
                });
            }
        })
        .catch(e => {
            res.status(500).send({
                message: e.message || "Error getting root folder"
            });
        });
}

exports.inFolder = (req, res) => {
    const folderId = req.params.folderId;

    let condition = {folder_id: folderId};

    Folder.findAll({where:condition})
        .then(data => {
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message || `Error getting folders in folder ${folderId}`
            });
        });
}

exports.findAll = (req, res) => {
    const title = req.query.title;
    let condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    Folder.findAll({where: condition})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message|| "Error while getting all folders"
            });
        });
}

exports.findOne = (req, res) => {
    const id = req.params.id;
    Folder.findByPk(id)
        .then(data=> {
            if(data){
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find folder ${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving folder "+ id
            });
        });
};
// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Folder.update(req.body, {
        where: {id: id}
    })
        .then(num => {
            if (num == 1){
                res.send({
                    message: "Folder updated successfully"
                });
            } else {
                res.send({
                    message: `Cannot update Folder ${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error updating folder ${id}`
            });
        });
};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Folder.destroy({
        where: {id: id}
    })
        .then(num => {
            if(num == 1){
                res.send({
                    message: `Folder ${id} deleted`
                });
            } else {
                res.send({
                    message: `${num} folders deleted`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error deleting report ${id}`
            });
        });
};

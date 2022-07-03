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
  
};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};
// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};
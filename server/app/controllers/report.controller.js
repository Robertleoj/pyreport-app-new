const { reports } = require('../models');
const db = require('../models');

const Report = db.reports;
const Op = db.Sequelize.Op;


exports.inFolder = (req, res) => {
    const folderId = req.params.id;

    const condition = {folder_id : folderId};

    Report.findAll({where: condition})
        .then(data => {
            res.send(data);
        })
        .catch(e => {
            res.status(500).send({
                message: e.message || `Error getting reports in folder ${folderId}`
            });
        });
}

exports.create = (req, res) => {
    if(!req.body.name){
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const report = {
        name: req.body.name,
        description: req.body.description,
        folder_id: req.body.folder_id,
        report_code: req.body.report_code
    };

    Report.create(report)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error while creating report"
            });
        });

}

exports.findAll = (req, res) => {
    const title = req.query.title;
    let condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    Report.findAll({where: condition})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message|| "Error while getting all reports"
            });
        });
}

exports.findOne = (req, res) => {
    const id = req.params.id;
    Report.findByPk(id)
        .then(data=> {
            if(data){
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find report ${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving report "+ id
            });
        });
};
// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Report.update(req.body, {
        where: {id: id}
    })
        .then(num => {
            if (num == 1){
                res.send({
                    message: "Report updated successfully"
                });
            } else {
                res.send({
                    message: `Cannot update report ${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error updating report ${id}`
            });
        });
};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Report.destroy({
        where: {id: id}
    })
        .then(num => {
            if(num == 1){
                res.send({
                    message: `Report ${id} deleted`
                });
            } else {
                res.send({
                    message: `${num} reports deleted`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error deleting report ${id}`
            });
        });
};
module.exports = (sequelize, Sequelize) => {
    const Folder = sequelize.define('report_folder', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        }
    })
}
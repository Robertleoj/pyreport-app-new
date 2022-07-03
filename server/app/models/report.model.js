module.exports = (sequelize, Sequelize) => {
    const Report = sequelize.define('report', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name : {
            type: Sequelize.STRING
        },
        description : {
            type: Sequelize.STRING
        },
        folder_id: {
            type: Sequelize.INTEGER
        },
        report_code: {
            type: Sequelize.TEXT
        },
        created_at: {
            type: Sequelize.DATE
        },
        updated_at: {
            type: Sequelize.DATE
        }
    });
    return Report;
}

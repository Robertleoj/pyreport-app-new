const {DataTypes} = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Folder = sequelize.define('report_folder', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        parent_folder_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    },{
        tableName: "report_folders",
        timestamps: true,
        createdAt: 'created_at',
        updated_at: 'updated_at'
    });
    return Folder;
}
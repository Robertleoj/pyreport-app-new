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
        },
        is_root: {
            type: DataTypes.TINYINT,
            allowNull: false
        }
    },{
        tableName: "report_folders",
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });
    return Folder;
}
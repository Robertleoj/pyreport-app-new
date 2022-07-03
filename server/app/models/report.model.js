const {DataTypes} = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Report = sequelize.define('report', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name : {
            type: DataTypes.STRING,
            allowNull: false
        },
        description : {
            type: DataTypes.STRING,
            allowNull: true
        },
        folder_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        report_code: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        // created_at: {
        //     type: DataTypes.DATE,
        //     defaultValue: DataTypes.NOW
        // },
        // updated_at: {
        //     type: DataTypes.DATE,
        //     allowNull: true
        // }
    },{
        tableName: "reports",
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });
    return Report;
}

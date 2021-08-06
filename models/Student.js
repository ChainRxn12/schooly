const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Student extends Model {}

Student.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,  
            primaryKey: true,
                 
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false, 
            primaryKey: true,
        },
        teacher: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'teacher',
                key: 'id'
            },
        },
        // grades: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model:'grades',
        //         key:'id'
        //     },
        // },
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'student',
    }
);

module.exports = Student;
const { UUIDV4, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Student extends Model {}

Student.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,       
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
            references: {
                model: 'teacher',
                key: 'id'
            },
        },
        grades: {
            type: DataTypes.STRING,
            references: {
                model:'grades',
                key:'id'
            },
        },
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
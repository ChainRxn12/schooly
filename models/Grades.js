const { UUIDV4, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Grades extends Model {}

Grades.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            
        },
        student_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'student',
                key: 'id'
            },
        },
        math: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        history: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        science: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        english: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'grades',
    }
);

module.exports = Grades;
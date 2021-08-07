const { UUIDV4, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Grades extends Model {}

Grades.init(
    {
        // id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     primaryKey: true,
        //     autoIncrement:true
        // },
        student_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            primaryKey: true,
            references: {
                model: 'student',
                key: 'id'
            },
            onDelete: 'CASCADE'
        },
        math: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        history: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        science: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        english: {
            type: DataTypes.STRING,
            allowNull: true,
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
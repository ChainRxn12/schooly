const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Teacher extends Model {}

Teacher.init(
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
        },
        principal: {
            type: DataTypes.STRING,
            defaultValue: 'Principal Chuck'
        },
        email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
            },
        },
        password: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Password1234',
        validate: {
            len: [1],
            },
        },
    },
    {
        hooks: {
            beforeCreate: async (newTeacher) => {
            try {
                newTeacher.password = await bcrypt.hash(newTeacher.password, 10);
                return newTeacher;
            } catch (err) {
                console.log(err);
                return err;
            }
            },
            beforeUpdate: async (updatedTeacher) => {
            try {
                updatedTeacher.password = await bcrypt.hash(
                    updatedTeacher.password,
                10
                );
                return updatedTeacher;
            } catch (err) {
                console.log(err);
                return err;
            }
            },
        },
    
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'teacher',
    }
);

module.exports = Teacher;
const { Teacher } = require('../models');

const teacherData = [
    {
        first_name: 'Billy',
        last_name: 'Mayfield',
        email: 'bilsters@hotmail.com',
        password: 'pass1234',
    },
    {
        first_name: 'Jeffy',
        last_name: 'Timberland',
        email: 'jeffthebest@gmail.com',
        password: 'pass1234',
    },
    {
        first_name: 'Josh',
        last_name: 'Slyme',
        email: 'joshypoo@gmail.com',
        password: 'pass1234',
    },
    {
        first_name: 'Aaron',
        last_name: 'Lowery',
        email: 'aaron43@gmail.com',
        password: 'pass1234',
    },
];

const seedTeachers = () => Teacher.bulkCreate(teacherData);

module.exports = seedTeachers;
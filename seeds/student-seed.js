const { Student } = require('../models');

const StudentData = [
  {
    id: 1,
    first_name: 'Billy',
    last_name: 'Doberman',
    teacher: 1,
    //grades: 1,
  },
  {
    id: 2,
    first_name: 'Zion',
    last_name: 'Gomez',
    teacher: 1,
    //grades: 2,
  },
  {
    id: 3,
    first_name: 'Jafetty',
    last_name: 'Guap',
    teacher: 2,
    //grades: 3,
  },
  {
    id: 4,
    first_name: 'Ricardo',
    last_name: 'akskjsdj',
    teacher: 2,
    //grades: 4,
  },
];

const seedStudentData = () => Student.bulkCreate(StudentData);

module.exports = seedStudentData;

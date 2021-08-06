const { Grades } = require('../models');

const GradesData = [
  {
    student_id: 1,
    math: 'A',
    history: 'B',
    science: 'C',
    english: 'A',
  },
  {
    student_id: 2,
    math: 'C',
    history: 'A',
    science: 'D',
    english: 'B',
  },
  {
    student_id: 3,
    math: 'B',
    history: 'B',
    science: 'F',
    english: 'D',
  },
  {
    student_id: 4,
    math: 'A',
    history: 'A',
    science: 'A',
    english: 'A',
  },
];

const seedGradesData = () => Grades.bulkCreate(GradesData);

module.exports = seedGradesData;
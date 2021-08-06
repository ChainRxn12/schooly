const { Grades } = require('../models');

const GradesData = [
  {
    id: 1,
    math: 'A',
    history: 'B',
    science: 'C',
    english: 'A',
  },
  {
    id: 2,
    math: 'C',
    history: 'A',
    science: 'D',
    english: 'B',
  },
  {
    id: 3,
    math: 'B',
    history: 'B',
    science: 'F',
    english: 'D',
  },
  {
    id: 4,
    math: 'A',
    history: 'A',
    science: 'A',
    english: 'A',
  },
];

const seedGradesData = () => Grades.bulkCreate(GradesData);

module.exports = seedGradesData;
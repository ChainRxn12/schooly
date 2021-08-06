const Grades = require('./Grades');
const Student = require('./Student');
const Teacher = require('./Teacher');

Teacher.hasMany(Student, {
    foreignKey: 'teacher',
});

// Student.belongsTo(Teacher,{
//     foreignKey: 'teacher',
// });

Student.hasOne(Grades, {
    foreignKey: 'student_id'
});

module.exports = {
    Grades,
    Student,
    Teacher,
  };
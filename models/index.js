const Grades = require('./Grades');
const Student = require('./Student');
const Teacher = require('./Teacher');

// Student.belongsTo(Teacher,{
//     foreignKey: 'teacher',
// });

Teacher.hasMany(Student, {
    foreignKey: 'teacher',
});



Student.hasOne(Grades, {
    foreignKey: 'student_id'
});

Grades.belongsTo(Student, {
    foreignKey: 'student_id'
});

module.exports = {
    Grades,
    Student,
    Teacher,
  };
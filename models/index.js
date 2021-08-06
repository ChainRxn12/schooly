const Grades = require('./Grades');
const Student = require('./Student');
const Teacher = require('./Teacher');



Teacher.hasMany(Student, {
    foreignKey: 'teacher',
    onDelete: 'NO ACTION'
});

// Student.hasOne(Teacher,{
//     foreignKey: 'teacher',
// });

Student.hasOne(Grades, {
    foreignKey: 'student_id',
    onDelete: 'CASCADE'
});

Grades.belongsTo(Student, {
    foreignKey: 'student_id',
    onDelete: 'CASCADE'
});

module.exports = {
    Grades,
    Student,
    Teacher,
  };
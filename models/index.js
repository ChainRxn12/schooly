const Grades = require('./Grades');
const Student = require('./Student');
const Teacher = require('./Teacher');



Student.belongsTo(Teacher, {
    foreignKey: 'teacher_id',
    // onDelete: 'NO ACTION'
});

Teacher.hasMany(Student, {
    foreignKey: 'teacher_id',
    // onDelete: 'CASCADE'
})

// Student.hasOne(Teacher,{
//     foreignKey: 'teacher',
// });

// Student.hasOne(Grades, {
//     foreignKey: 'student_id',
//     onDelete: 'CASCADE'
// });

// Grades.belongsTo(Student, {
//     foreignKey: 'student_id',
//     onDelete: 'CASCADE'
// });

module.exports = {
    Grades,
    Student,
    Teacher,
  };
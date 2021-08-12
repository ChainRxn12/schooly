const Grades = require('./Grades');
const Student = require('./Student');
const Teacher = require('./Teacher');



Student.belongsTo(Teacher, {
    foreignKey: 'teacher_id',
    // onDelete: 'CASCADE'
    onUpdate: 'CASCADE'
});

Teacher.hasMany(Student, {
    foreignKey: 'teacher_id',
    // onDelete: 'CASCADE'
})

// Student.hasOne(Teacher,{
//     foreignKey: 'teacher',
// });

Grades.belongsTo(Student, {
    foreignKey: 'student_id',
    // onDelete: 'CASCADE'
});

// Student.hasOne(Grades, {
//     foreignKey: 'student_id',
//     // onDelete: 'CASCADE'
// });



module.exports = {
    Grades,
    Student,
    Teacher,
  };
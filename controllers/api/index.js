const router = require('express').Router();
const userRoutes = require('./userRoutes');
const teacherRoutes = require('./teacher-routes');
const studentRoutes = require('./student-routes');
const gradeRoutes = require('./grade-routes');


router.use('/users', userRoutes);
router.use('/teachers', teacherRoutes);
router.use('/students', studentRoutes);
router.use('/grades', gradeRoutes)


module.exports = router;

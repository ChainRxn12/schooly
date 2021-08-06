const router = require('express').Router();
const userRoutes = require('./userRoutes');
const teacherRoutes = require('./teacher-routes');
const studentRoutes = require('./student-routes');

router.use('/users', userRoutes);
router.use('/teachers', teacherRoutes);
router.use('/students', studentRoutes);
module.exports = router;

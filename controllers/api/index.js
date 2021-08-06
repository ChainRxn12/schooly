const router = require('express').Router();
const userRoutes = require('./userRoutes');
const teacherRoutes = require('./teacher-routes');

router.use('/users', userRoutes);
router.use('/teachers', teacherRoutes);

module.exports = router;

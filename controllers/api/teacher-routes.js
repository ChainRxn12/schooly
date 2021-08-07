const router = require('express').Router();
const {Grades, Student, Teacher} = require('../../models');

// /api/teachers endpoint

router.get('/', async (req, res) => {
    //populates a roster of all teachers // excludes sensitive information
    try {
        const teacherData = await Teacher.findAll({
            attributes: { exclude: ['email', 'password'] },
        });
        res.status(200).json(teacherData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/sensitive', async (req, res) => {
    //populates a roster of all teachers including sensitive information
    try {
        const teacherData = await Teacher.findAll({});
        res.status(200).json(teacherData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    // gets teacher by id and includes sensitive information
    try {
        const teacherId = await Teacher.findByPk(req.params.id, {

        });
        res.status(200).json(teacherId);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/rosters', async (req, res) => {
    //populates a list of all teachers and their roster of students
    try {
        const teacherData = await Teacher.findAll({
            attributes: { exclude: ['email', 'password'] },
            include: [{model: Student, attributes:['id', 'first_name', 'last_name']}]
        });
        res.status(200).json(teacherData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/rosters/:id', async (req, res) => {
    // gets teacher by id and populates student roster
    try {
        const teacherId = await Teacher.findByPk(req.params.id, {
            attributes: { exclude: ['email', 'password'] },
            include: [{model: Student, attributes:['id', 'first_name', 'last_name']}]
        });
        res.status(200).json(teacherId);
    } catch (err) {
        res.status(500).json(err);
    }
});

// UPDATE routes

router.put('/fname/:id', async (req, res) => {
    //update teacher first name by id
    try{
        const updateFname = await Teacher.update({first_name: req.body.new_name}, {
            where: {
                id: req.params.id,
            }
        });
        res.status(200).json(updateFname);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/lname/:id', async (req, res) => {
    //update teacher last name by id
    try{
        const updateLname = await Teacher.update({last_name: req.body.new_name}, {
            where: {
                id: req.params.id,
            }
        });
        res.status(200).json(updateLname);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/email/:id', async (req, res) => {
    //update teacher email by id
    try{
        const updateEmail = await Teacher.update({email: req.body.new_email}, {
            where: {
                id: req.params.id,
            }
        });
        res.status(200).json(updateEmail);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/password/:id', async (req, res) => {
    //update teacher password by id
    try{
        const updatePassword = await Teacher.update({password: req.body.new_password}, {
            where: {
                id: req.params.id,
            }
        });
        res.status(200).json(updatePassword);
    } catch (err) {
        res.status(400).json(err);
    }
});

// ADD NEW TEACHER

router.post('/', async (req, res) => {
    try{
        const makeTeacher = await Teacher.create(req.body);
        res.status(200).json(makeTeacher);
    } catch (err) {
        res.status(400).json(err);
    }
});

//DELETE TEACHER

router.delete('/:id', async (req, res) => {
    try {
        const teacherData = await Teacher.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!teacherData) {
            res.status(404).json({ message: 'No Teacher found with this id!' });
            return;
        }
        res.status(200).json(teacherData);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
const router = require('express').Router();
const {Teacher, Grades, Student} = require('../../models');

// /api/students endpoint

router.get('/', async (req, res) => {
    //populates a roster of all students
    try {
        const studentData = await Student.findAll({});
        res.status(200).json(studentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    // gets student by id and displays grades
    try {
        const studentId = await Student.findByPk(req.params.id, {
            include: [{model:Grades, attributes: ['math', 'science', 'history', 'english']}]
        });
        res.status(200).json(studentId);
    } catch (err) {
        res.status(500).json(err);
    }
});

//UPDATE student information

router.put('/fname/:id', async (req, res) => {
    //update student first name by id
    try{
        const updateFname = await Student.update({first_name: req.body.new_name}, {
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
    //update student last name by id
    try{
        const updateLname = await Student.update({last_name: req.body.new_name}, {
            where: {
                id: req.params.id,
            }
        });
        res.status(200).json(updateLname);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/teacher/:id', async (req, res) => {
    //update student's teacher
    try{
        const updateTeacher = await Student.update({teacher: req.body.new_teacher}, {
            where: {
                id: req.params.id,
            }
        });
        res.status(200).json(updateTeacher);
    } catch (err) {
        res.status(400).json(err);
    }
});

//ADD NEW STUDENT

router.post('/', async (req, res) => {
    try{
        const makeStudent = await Student.create(req.body);
        res.status(200).json(makeStudent);
    } catch (err) {
        res.status(400).json(err);
    }
});

//DELETE STUDENT

router.delete('/:id', async (req, res) => {
    try {
        const studentData = await Student.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!studentData) {
            res.status(404).json({ message: 'No Student found with this id!' });
            return;
        }
        res.status(200).json(studentData);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
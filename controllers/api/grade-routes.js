const router = require('express').Router();
const {Grades, Student, Teacher} = require('../../models');

// /api/grades endpoint

//add new set of grades

router.post('/', async (req, res) => {
    try{
        const makeGrade = await Grades.create(req.body);
        res.status(200).json(makeGrade);
    } catch (err) {
        res.status(400).json(err);
    }
});

//update student grades
router.put('/math/:id', async (req, res) => {
    //update math grade by id
    try{
        const updateMath = await Grades.update({math: req.body.new_grade}, {
            where: {
                student_id: req.params.id,
            }
        });
        res.status(200).json(updateMath);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/science/:id', async (req, res) => {
    //update science grade by id
    try{
        const updateScience = await Grades.update({science: req.body.new_grade}, {
            where: {
                student_id: req.params.id,
            }
        });
        res.status(200).json(updateScience);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/history/:id', async (req, res) => {
    //update history grade by id
    try{
        const updateGrade = await Grades.update({history: req.body.new_grade}, {
            where: {
                student_id: req.params.id,
            }
        });
        res.status(200).json(updateGrade);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/english/:id', async (req, res) => {
    //update english grade by id
    try{
        const updateGrade = await Grades.update({english: req.body.new_grade}, {
            where: {
                student_id: req.params.id,
            }
        });
        res.status(200).json(updateGrade);
    } catch (err) {
        res.status(400).json(err);
    }
});


module.exports = router;
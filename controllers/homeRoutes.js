const router = require('express').Router();
const { Principal, Student, Teacher } = require('../models');

// router.get('/test', (req, res) => {
// res.render('teacher')
// })

router.get('/', async (req, res) => {
  try {
    const userData = await Teacher.findAll({
      attributes: { exclude: ['password'] },
      order: [['first_name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));
//console.log("-----------------------------" + users + "--------------------------")
    res.render('index', {
      users,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');

});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('signup')
});

router.get('/dashboard', (req, res) => {
  if (! req.session.logged_in) {
    res.redirect('/login');
    return;
  }

  res.render('dashboard')
});

router.get('/dashboard/principal', (req, res) => {
  if (! req.session.logged_in) {
    res.redirect('/login');
    return;
  }

  res.render('principal')
});

router.get('/dashboard/principal/teacher', (req, res) => {
  if (! req.session.logged_in) {
    res.redirect('/login');
    return;
  }

  res.render('alterTeacher')
});

router.get('/dashboard/principal/teacher/add', (req, res) => {
  if (! req.session.logged_in) {
    res.redirect('/login');
    return;
  }

  res.render('addTeacher')
});

router.get('/dashboard/principal/teacher/remove', async (req, res) => {
  if (! req.session.logged_in) {
    res.redirect('/login');
    return;
  }
  try {
    const dbTeacherData = await Teacher.findAll({});
    
    const teachers = dbTeacherData.map((teacher) => 
      teacher.get({plain:true})
    );

    res.render('removeTeacher', {
      teachers,
    })
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

});

router.get('/dashboard/principal/student', (req, res) => {
  if (! req.session.logged_in) {
    res.redirect('/login');
    return;
  }

  res.render('alterStudent')
});

router.get('/dashboard/teacher', (req, res) => {

  if (! req.session.logged_in) {
    res.redirect('/login');
    return;
  }


  res.render('teacher')
});

router.get('/dashboard/teacher/roster', async (req, res) => {
  // if (! req.session.logged_in) {
  //   res.redirect('/login');
  //   return;
  // }
  try {
    const dbStudentData = await Student.findAll({});
    
    const students = dbStudentData.map((student) => 
      student.get({plain:true})
    );

    res.render('roster', {
      students,
    })
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

});

router.get('/dashboard/student', (req, res) => {
  if (! req.session.logged_in) {
    res.redirect('/login');
    return;
  }

  res.render('student')
});




module.exports = router;
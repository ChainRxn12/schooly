const router = require('express').Router();
const { Principal, Student, Teacher, Grades } = require('../models');

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

  res.render('dashboard', {
    logged_in: req.session.logged_in,
  })
});

router.get('/dashboard/principal', (req, res) => {
  if (! req.session.logged_in) {
    res.redirect('/login');
    return;
  }

  res.render('principal', {
    logged_in: req.session.logged_in,
  })
});

router.get('/dashboard/principal/teacher', (req, res) => {
  if (! req.session.logged_in) {
    res.redirect('/login');
    return;
  }

  res.render('alterTeacher', {
    logged_in: req.session.logged_in,
  })
});

router.get('/dashboard/principal/teacher/add', (req, res) => {
  if (! req.session.logged_in) {
    res.redirect('/login');
    return;
  }

  res.render('addTeacher', {
    logged_in: req.session.logged_in,
  })
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
      logged_in: req.session.logged_in,
    })
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

});

router.get('/dashboard/principal/teacher/update', async (req, res) => {
  if (! req.session.logged_in) {
    res.redirect('/login');
    return;
  }
  try {
    const dbTeacherData = await Teacher.findAll({});
    
    const teachers = dbTeacherData.map((teacher) => 
      teacher.get({plain:true})
    );

    res.render('updateTeacher', {
      teachers,
    })
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

});

router.get('/dashboard/principal/teacher/update/:id', async (req, res) => {
  if (! req.session.logged_in) {
    res.redirect('/login');
    return;
  }
  try {
    const dbTeacherData = await Teacher.findByPk(req.params.id, {});
    
    const teacher = dbTeacherData.get({plain:true});

    res.render('specificTeacher', {
     teacher,
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

  res.render('alterStudent',{
  logged_in: req.session.logged_in
  })
});

router.get('/dashboard/principal/student/add', async (req, res) => {
  if (! req.session.logged_in) {
    res.redirect('/login');
    return;
  }
  try {
    const dbTeacherData = await Teacher.findAll({});
    
    const teachers = dbTeacherData.map((teacher) => 
      teacher.get({plain:true})
    );

    res.render('addStudent', {
      teachers,
    })
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/dashboard/principal/student/remove', async (req, res) => {
  if (! req.session.logged_in) {
    res.redirect('/login');
    return;
  }
  try {
    const dbStudentData = await Student.findAll({});
    
    const students = dbStudentData.map((student) => 
      student.get({plain:true})
    );

    res.render('removeStudent', {
      students,
    })
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

});

router.get('/dashboard/principal/student/update', async (req, res) => {
  if (! req.session.logged_in) {
    res.redirect('/login');
    return;
  }
  try {
    const dbStudentData = await Student.findAll({});
    
    const students = dbStudentData.map((student) => 
      student.get({plain:true})
    );

    res.render('updateStudent', {
      students,
    })
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

});

router.get('/dashboard/principal/student/update/:id', async (req, res) => {
  if (! req.session.logged_in) {
    res.redirect('/login');
    return;
  }
  try {
    const dbStudentData = await Student.findByPk(req.params.id, {
      include: [{model:Teacher, attributes: ['first_name']}]
    });
    const student = dbStudentData.get({plain:true});

    const dbTeacherData = await Teacher.findAll({});
    const teachers = dbTeacherData.map((teacher) => 
      teacher.get({plain:true})
    );

    res.render('specificStudent', {
     student,
     teachers
    })
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/dashboard/teacher', (req, res) => {
  if (! req.session.logged_in) {
    res.redirect('/login');
    return;
  }

  res.render('teacher', {
    logged_in: req.session.logged_in,
  })
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
      logged_in: req.session.logged_in,
    })
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

});

//get student grades info through teacher
router.get('/dashboard/teacher/roster/:id', async (req, res) => {
  if (! req.session.logged_in) {
    res.redirect('/login');
    return;
  }
  try {
    const dbStudentData = await Student.findByPk(req.params.id, {
      include: [{model: Grades, attributes: ['math', 'history', 'science', 'english']}]
    });
    const student = dbStudentData.get({plain:true});

    res.render('studentInfo', {
      student
    })
  } catch(err) {
    console.log(err);
    res.status(500).json(err);
  }
})

//get teachers list from student routes
router.get('/dashboard/student', async (req, res) => {
    if (! req.session.logged_in) {
    res.redirect('/login');
    return;
  }
  try {
    const dbTeacherdata = await Teacher.findAll({});
    
    const teachers = dbTeacherdata.map((teacher) => 
      teacher.get({plain:true})
    );

    res.render('student', {
      teachers,
      logged_in: req.session.logged_in,
    })
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/dashboard/student/:id', async (req, res) => {
  if (! req.session.logged_in) {
    res.redirect('/login');
    return;
  }
  try {
    const dbStudentData = await Student.findAll({
      where: {
        teacher_id: req.params.id
      }
    })

    const students = dbStudentData.map((student) => 
      student.get({plain:true}));
    
    res.render('myStudent', {
      students
    })
  } catch(err) {
    console.log(err);
    res.status(500).json(err);
  }
  
 })




module.exports = router;
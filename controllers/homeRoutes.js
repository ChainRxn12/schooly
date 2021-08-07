const router = require('express').Router();
const { Principal, Student, Teacher } = require('../models');

router.get('/test', (req, res) => {
res.render('index')
})

router.get('/', async (req, res) => {
  try {
    const userData = await Teacher.findAll({
      attributes: { exclude: ['password'] },
      order: [['first_name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));
//console.log("-----------------------------" + users + "--------------------------")
    res.render('homepage', {
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
    res.redirect('/');
    return;
  }

  res.render('login');

});

  module.exports = router;
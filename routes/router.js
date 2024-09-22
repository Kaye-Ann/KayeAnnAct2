const express = require('express');
const router = express.Router();
const controller = require('../controller/AppController');

router.get('/', controller.index);
router.get('/about', controller.about);
router.get('/blog', controller.blog);
router.get('/booking', controller.booking);
router.get('/contact', controller.contact);
router.get('/feature', controller.feature);
router.get('/menu', controller.menu);
router.get('/single', controller.single);
router.get('/team', controller.team);


module.exports = router;

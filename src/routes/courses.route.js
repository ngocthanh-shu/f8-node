const express = require('express');
const router = express.Router();
const coursesController = require('../app/controllers/course.controller');

// newsController.index

router.get('/create', coursesController.create);
router.post('/store', coursesController.store);
router.get('/:slug', coursesController.show);
router.get('/edit/:id', coursesController.edit);
router.put('/update/:id', coursesController.update);
router.delete('/delete/:id', coursesController.delete);

module.exports = router;

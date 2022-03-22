const Course = require('../models/course.model');

class SiteController {
    //[GET] /home
    index(req, res) {
        // res.render('home');
        Course.find({}, function (err, courses) {
            if (!err) res.json(courses);
            else res.status(400).json({ error: 'error' });
        });
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();

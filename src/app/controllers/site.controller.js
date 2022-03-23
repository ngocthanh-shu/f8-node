const Course = require('../models/course.model');
const { multipleMongooseToObject } = require('../../util/mongoose.util');

class SiteController {
    //[GET] /home
    index(req, res, next) {
        // res.render('home');
        //callback
        // Course.find({}, function (err, courses) {
        //     if (!err) res.json(courses);
        //     else next(err);

        // });

        //promise
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();

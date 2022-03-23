const Course = require('../models/course.model');
const {
    multipleMongooseToObject,
    mongooseToObject,
} = require('../../util/mongoose.util');

class CourseController {
    //[GET] /course/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', {
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
    }
}

module.exports = new CourseController();

const newsRouter = require('./news.route');
const siteRouter = require('./site.route');
const coursesRouter = require('./courses.route');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/courses', coursesRouter);

    app.use('/', siteRouter);
}

module.exports = route;

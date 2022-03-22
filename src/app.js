const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
// const { path } = require('express/lib/application');
const app = express();
const port = 3000;

const route = require('./routes/index.route');
// app.use
app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(morgan('dev'));

app.engine(
    'hbs',
    handlebars.engine({
        extname: 'hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//route init
route(app);

app.listen(port, () => {
    console.log(
        `Server is running on port ${port} at http://localhost:${port}`,
    );
});

const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
// const { path } = require('express/lib/application');
const app = express();
const port = 3000;

const route = require('./routes/index.route');
const db = require('./config/db');

//connect db
db.connect();

// app.use
app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
app.use(methodOverride('_method'));

app.use(morgan('dev'));

app.engine(
    'hbs',
    handlebars.engine({
        extname: 'hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//route init
route(app);

app.listen(port, () => {
    console.log(
        `Server is running on port ${port} at http://localhost:${port}`,
    );
});

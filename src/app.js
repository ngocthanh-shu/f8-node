const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
// const { path } = require('express/lib/application');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded(
    {
        extended: true
    }
));
app.use(express.json());

app.use(morgan('dev'));

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/',(req,res)=>{
    res.render('home');
});

app.get('/news', (req, res) => {
    res.render('news');
});

app.get('/search', (req, res) => {
    res.render('search');
});

app.post('/search', (req, res) => {
    console.log(req.body);
    res.send();
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port} at http://localhost:${port}`);
}); 
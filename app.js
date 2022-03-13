const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(morgan('dev'));

app.get('/',(req,res)=>{
    return res.send('Hello World');
});
app.listen(port,()=>{
    console.log(`Server is running on port ${port} at http://localhost:${port}`);
}); 
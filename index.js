const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const routes = require('./src/routes/main.routes');
mongoose.connect('mongodb://localhost:27017/list', {
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

app.use(express.json());  
app.use(morgan('dev'));
app.use('/', routes);


//porta
app.listen(3000, () => {
    console.log('Meu servidor está funcionando');
});

module.exports = app;
const { application } = require("express");

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'WEB 420 RESTful APIs',
            version: '1.0.0',
        },
    },
    apis: ['./routes/*.js'],
};

var express = require('express');
var app = express.createServer();
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.get('/', function(req, res){
    res.render('index', { locals: 
    title: 'NowJS + Express Example'
});
});

app.listen(3000);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));
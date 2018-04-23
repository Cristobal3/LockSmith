const express = require('express');
var bodyParser = require('body-parser');


const pg = require('pg');
const db = require('./db'); //only one instance of database



const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/views/pages'));
app.set('view engine', 'ejs');


require('./config/route')(app, db);

var server = app.listen(3000, function(){
    console.log('Example app listening on port 3000 ');
})
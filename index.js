// grab express (import class)
var express = require('express'); 

// Instantiate  express app 
var app = express(); 


//Set EJS views
app.set('view engine', 'ejs');
app.set('views', 'views');

//We think we need to do for public folders
app.use(express.static('public'));


// create an express route for the home page 
// http://localhost:8080/ 

app.get('/', function(req, res) { 
    res.render('main'); 
}); 

app.get('/sugarland', function(req, res) { 
    res.render('sugarland'); 
}); 

app.get('/katy', function(req, res) { 
    res.render('katy'); 
}); 

app.get('/missouricity', function(req, res) { 
    res.render('missouricity'); 
}); 

app.get('/richmond', function(req, res) { 
    res.render('richmond'); 
}); 

app.get('/rosenberg', function(req, res) { 
    res.render('rosenberg'); 
}); 

app.get('/stafford', function(req, res) { 
    res.render('stafford'); 
}); 

// start the server on port 8080 
app.listen(8080); 

// send a message 
console.log('Server has started!');

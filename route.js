const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

const clean = require('./clean');



var Sequelize = require('sequelize'); 


var connection = new Sequelize('postgres://localhost:5432/test');

module.exports = (app, db) => {
    app.get('/', function (req, res){
        res.send('<h1> test test </h1>')
    })
    var list = '';
        
	var vote = connection.define('schedules', {
            first_name: Sequelize.STRING,
            last_name: Sequelize.STRING,
            
            start_time: Sequelize.INTEGER,
            end_time: Sequelize.INTEGER
          });
        vote.sync();
        vote.findAll({raw: true}).then(result => {app.locals.list=result 
         })
        
        
    app.get('/schedule', function (req, res){
        
        res.render('../views/pages/index.ejs')
    })
    app.post('/schedule', (req, res) => {
        let fname = req.body.firstname;
        let lname = req.body.lastname;
        let phone = req.body.phone;
        let snumber = req.body.snumber;
        let enumber = req.body.enumber;

        let user = vote.build({
			first_name: fname,
            last_name: lname,
            phone_number: phone,
            start_time: snumber,
            end_time: enumber
			
		})

		user.save();
		vote.sync();
		
		
        res.redirect('/schedule');
    })
    }
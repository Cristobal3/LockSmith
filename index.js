var Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://localhost:5432/test');

const models = {
    schedule: sequelize.import('./schedules')
}

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports =  models;

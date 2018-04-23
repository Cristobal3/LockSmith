'use strict';
module.exports = (sequelize, DataTypes) => {
  var post = sequelize.define('schedules', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    phone_number: DataTypes.INTEGER,
    start_time: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
    end_time: DataTypes.INTEGER.UNSIGNED.ZEROFILL
  }, {});
return post;
};

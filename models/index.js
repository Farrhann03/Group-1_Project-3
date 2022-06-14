const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('d860qjpe33op2k', 'lqfwpqvgfsqfwk', '79c203e3176d6d3cafac004b7ddfd1883a8cf63972a6cba04962e8b74dd50424', {
    host: 'ec2-44-196-223-128.compute-1.amazonaws.com',
    dialect: 'postgres',
    dialectOptions:{
      ssl: {
        required: true,
        rejectUnauthorized: false
      }
    }
  }
);

const Location = require("./location")(sequelize);
const Review = require('./review')(sequelize);
const User = require('./user')(sequelize);

module.exports = {
  sequelize,
  Location,
  Review,
  User
};

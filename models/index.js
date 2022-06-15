const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('d8n46i17g86as', 'zfietreoissnph', '79c203e3176d6d3cafac004b7ddfd1883a8cf63972a6cba04962e8b74dd50424', {
    host: 'ec2-34-236-94-53.compute-1.amazonaws.com',
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

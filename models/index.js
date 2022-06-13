const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('d7r4o5vvh2upn9', 'bimumvggwjprjc', '1d670fcd93a18be2cefeae429e845731e01788cd626b2e8382ec7798467bf7cf', {
    host: 'ec2-54-80-122-11.compute-1.amazonaws.com',
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

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('dbheroku', 'postgres', 'mypassword', {
    host: 'mydatabase-1.ctgdayi97uhz.ap-southeast-1.rds.amazonaws.com',
    dialect: 'postgres',
    dialectOptions:{
      ssl: {
        required: true,
        rejectUnauthorized: false
      }
    }
  }
);


// Import model(s)
const Location = require("./location")(sequelize);
const Review = require('./review')(sequelize);
const User = require('./user')(sequelize);
const Favorite = require('./favorite')(sequelize);

// Create associations
User.belongsToMany(Location, { through: 'review' });
Location.belongsToMany(User, { through: 'review' });

User.belongsToMany(Location, { through: 'favorite' });
Location.belongsToMany(User, { through: 'favorite' });


module.exports = {
  sequelize,
  Location,
  Review,
  User,
  Favorite
};

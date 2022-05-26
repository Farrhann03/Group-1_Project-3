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
const Cuisine = require("./cuisine")(sequelize);
const Price = require("./price")(sequelize);
const User = require('./user')(sequelize);

Location.belongsTo(Cuisine, {
  foreignKey: "cuisineId",
});
Location.belongsTo(Price, {
  foreignKey: "priceId",
});

Location.belongsTo(Cuisine, {
  foreignKey: "cuisineId",
});
Location.belongsTo(Price, {
  foreignKey: "priceId",
});


module.exports = {
  sequelize,
  Location,
  Cuisine,
  Price,
  User,
};

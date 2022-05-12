const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('makan', 'postgres', 'ocean272', {
    host: 'localhost',
    dialect: 'postgres',
});


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

module.exports  = {
  sequelize,
  Location,
  Cuisine,
  Price,
  User,
};

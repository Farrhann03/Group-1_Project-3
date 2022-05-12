const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('d15smmo3v9jq5p', 'pygcczeyvzqhbo', '1757cecd350f525b6b28af03efa6dec8cccc2f11bacbb3a2849a893fe90c41c4', {
    host: 'ec2-54-164-40-66.compute-1.amazonaws.com',
    dialect: 'postgres',
});


const Location = require("./location")(sequelize);
const Cuisine = require("./cuisine")(sequelize);
const Price = require("./price")(sequelize);
//const User = require('./user')(sequelize);

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
 // User,
};

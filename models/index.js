const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("makan_apa", "postgres", "password", {
  host: "localhost",
  dialect: "postgres",
});

const Location = require("./location")(sequelize);
const Cuisine = require("./cuisine")(sequelize);
const Price = require("./price")(sequelize);

// Location.belongsTo(Cuisine, {
//   foreignKey: "cuisine",
// });
// Location.belongsTo(Price, {
//   foreignKey: "price",
// });

module.exports = {
  sequelize,
  Location,
  Cuisine,
  Price,
};

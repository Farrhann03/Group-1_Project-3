const { Model, DataTypes } = require("sequelize");
const { Location } = require("./location");
const { User } = require("./user");
const location = require("./location");

module.exports = function (sequelize){
  class Favorite extends Model {}

  Favorite.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      location_id: {
        type: DataTypes.INTEGER,
        references: {
          model: Location,
          key: 'id'
        }
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: User,
          key: 'id'
        }
      },
      createdAt: {
          type: DataTypes.DATE,
          field: "createdAt",
      },
      updatedAt: {
          type: DataTypes.DATE,
          field: "updatedAt",
      },
    },
    {
      sequelize,
      tableName: "favorite",
      modelName: "Favorite",
    }
  );

  return Favorite;
};

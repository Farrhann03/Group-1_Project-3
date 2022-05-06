const { Model, DataTypes } = require("sequelize");

module.exports = function (sequelize){
  class Location extends Model {}

  Location.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      located_At: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cruisine: {
        //(FK)
        type: DataTypes.STRING,
        allowNull: false,
        field: "cruisine",
      },
      price: {
        //(FK)
        type: DataTypes.STRING,
        allowNull: false,
        field: "price",
      },
      createdAt: {
          type: DataTypes.DATE,
          field: "created_at",
      },
      updatedAt: {
          type: DataTypes.DATE,
          field: "updated_at",
      },
    },
    {
      sequelize,
      tableName: "location",
      modelName: "Location",
    }
  );

  return Location;
};

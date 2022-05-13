const { Model, DataTypes } = require("sequelize");


module.exports = function (sequelize){

  class Cuisine extends Model {}

  Cuisine.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      type_of_food: {
        type: DataTypes.STRING,
      },

      createdAt: { 
          type: DataTypes.DATE,
          field: "createdAt" ,   
      },
      updatedAt: { 
            type: DataTypes.DATE,
            field: "updatedAt",
      },
    },
    {
      sequelize,
      tableName: "cuisine",
      modelName: "Cuisine",
    }
  );

  return Cuisine;
};


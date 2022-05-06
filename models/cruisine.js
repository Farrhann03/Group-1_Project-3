const { Model, DataTypes } = require("sequelize");

module.exports = function (sequelize){
  class Cruisine extends Model {}

  Cruisine.init(
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
          field: "created_at" ,   
      },
      updatedAt: { 
            type: DataTypes.DATE,
            field: "updated_at",
            
      },
    },
    {
      sequelize,
      tableName: "cruisine",
      modelName: "Cruisine",
    }
  );

  return Cruisine;
};
const { Model, DataTypes } = require("sequelize");

module.exports = function (sequelize){
  class Price extends Model {}

  Price.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      cost: {
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
      tableName: "price",
      modelName: "Price",
    }
  );

  return Price;
};
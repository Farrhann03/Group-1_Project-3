const { Model, DataTypes } = require("sequelize");
const sequelize = require("./index");

class Price extends Model {}

Price.init(
  {
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true,
    // },
    cost: {
      type: DataTypes.STRING,
    },
    // createdAt: { 
    //     type: DataTypes.DATE,
    //     field: "created_at" ,   
    // },
    // updatedAt: { 
    //       type: DataTypes.DATE,
    //       field: "updated_at",
          
    // },
  },
  {
    sequelize,
    tableName: "price",
    modelName: "Price",
  }
);

module.exports = Price;
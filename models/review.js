const { Model, DataTypes } = require("sequelize");

module.exports = function (sequelize){
  class Review extends Model {}

  Review.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      review: {
        type: DataTypes.STRING,
        allowNull: false,
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
      tableName: "review",
      modelName: "Review",
    }
  );

  return Review;
};

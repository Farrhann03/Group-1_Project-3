const { Model, DataTypes } = require("sequelize");

module.exports = function (sequelize) {
  class User extends Model {}

  User.init(
    {
      username: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      tableName: "User",
      modelName: "user",
    }
  );

  return User;
};

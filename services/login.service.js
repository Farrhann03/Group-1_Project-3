const { User } = require("../models/");
const bcrypt = require("bcryptjs");

module.exports = {
  create: async (username, email, password) => {
    //The result object is where we will put the result to be sent to th client.
    let result = {
      message: null,
      status: null,
      data: null,
    };

    const newUser = await User.create({
      username: username,
      email: email,
      password: bcrypt.hashSync(password, 10),
    });

    await newUser.save(); // update the User
    result.data = newUser;
    result.status = 200;
    result.message = "New user is created!";

    return result;
    
  },
};

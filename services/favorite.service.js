const { Favorite } = require("../models");

module.exports = {

  create: async (favoriteId, location_id, user_id) => {
    //The result object is where we will put the result to be sent to th client.
    let result = {
      message: null,
      status: null,
      data: null,
    };

    //Look for the favorite and in the database.
    const newFavorite = await Favorite.create({
        favoriteId: favoriteId,
        location_id: location_id,
        user_id: user_id,
      });

    await newFavorite.save(); // update the Favorite
    result.data = newFavorite;
    result.status = 200;
    result.message = "Update successful";

    return result;
  },

  delete: async (favoriteId) => {
    let result = {
      message: null,
      status: null,
      data: null,
    };

    const favorite = Favorite.findByPk(favoriteId);
    console.log("Favorite", favorite)

    await Favorite.destroy({ where: { id: favoriteId } });

    result.data = favorite;
    result.status = 200;
    result.message = "deleted successful";

    return result;
  },
};

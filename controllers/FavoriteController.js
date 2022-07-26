const favoriteService = require("../services/favorite.service");

class FavoriteController {

  async create(req, res) {
    const { favoriteId, location_id, user_id } = req.body;
      // Make sure the sequence is the same as in location.
      const { status, data, message } = 
      await favoriteService.create(
      favoriteId,
      location_id,
      user_id,
           
      );
    res.status(status);

    res.json({ message, data });

  }

  async delete(req, res) {
    const favoriteId = req.params.favoriteId;
    console.log(favoriteId);

    const { status, data, message } = await favoriteService.delete(
      favoriteId
    );

    res.status(status);

    res.json({ message, data });
  }
}


module.exports = FavoriteController;

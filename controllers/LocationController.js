const locationService = require("../services/location.service");

class LocationController {
  async onboard(req, res) {
    const { priceId, cuisineId, locationId } = req.body;

    if (typeof priceId !== "number" || typeof cuisineId !== "number" || typeof locationId !== "number") {
      res.status(400);
      return res.send("priceId , cuisineId and locationId need to be integers.");
    }

      const { status, data, message } = await locationService.onboard(
      locationId,
      cuisineId,
      priceId,
    );
    res.status(status);

    res.json({ message, data });

  }

  // async offboard(req, res) {
  //   const { priceId, cuisineId, locationId } = req.body;

  //   if (typeof priceId !== "number" || typeof cuisineId !== "number" || typeof locationId !== "number") {
  //     res.status(400);
  //     return res.send("priceId , cuisineId and locationId need to be integers.");
  //   }

  //     const { status, data, message } = await locationService.offboard(
  //     locationId,
      
  //   );
  //   res.status(status);

  //   res.json({ message, data });

  // }

  async update(req, res) {
    const {locationId, name, address, located_at} = req.body;
    if(typeof locationId !== "number" || typeof name !== "string" || typeof address !== "string" || typeof located_at !== "string"){
      res.status(400);
      return res.send("Incorrect request data");
  }
      // Make sure the sequence is the same as in vehicle.
      const { status, data, message } = await locationService.update(
      locationId,
      name,
      address,
      located_at,
    );
    res.status(status);

    res.json({ message, data });

  }

  async create(req, res) {
    const {locationId, name, address, located_at, cuisineId, priceId} = req.body;
    if(typeof locationId !== "number" || typeof name !== "string" || typeof address !== "string" || typeof located_at !== "string"){
      res.status(400);
      return res.send("Incorrect request data");
  }
      // Make sure the sequence is the same as in location.
      const { status, data, message } = await locationService.create(
      locationId,
      name,
      address,
      located_at,
      cuisineId,
      priceId,
    );
    res.status(status);

    res.json({ message, data });

  }

  async delete(req, res) {
    const cuisineId = req.params.cuisineId;
    console.log(cuisineId);

    const { status, data, message } = await locationService.delete(
      cuisineId
    );
    res.status(status);

    res.json({ message, data });

  }

  async delete(req, res) {
    const priceId = req.params.priceId;
    console.log(priceId);

    const { status, data, message } = await locationService.delete(
      priceId
    );
    res.status(status);

    res.json({ message, data });

  }
}

module.exports = LocationController;

const locationService = require("../services/location.service");

class LocationController {
  async onboard(req, res) {
    const { priceId, cruisineId, locationId } = req.body;

    if (typeof priceId !== "number" || typeof cruisineId !== "number" || typeof locationId !== "number") {
      res.status(400);
      return res.send("priceId , cruisineId and locationId need to be integers.");
    }

      const { status, data, message } = await locationService.onboard(
      locationId,
      cruisineId,
      priceId,
    );
    res.status(status);

    res.json({ message, data });

  }

  // async offboard(req, res) {
  //   const { priceId, cruisineId, locationId } = req.body;

  //   if (typeof priceId !== "number" || typeof cruisineId !== "number" || typeof locationId !== "number") {
  //     res.status(400);
  //     return res.send("priceId , cruisineId and locationId need to be integers.");
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

  async delete(req, res) {
    const cruisineId = req.params.cruisineId;
    console.log(cruisineId);

    const { status, data, message } = await locationService.delete(
      cruisineId
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

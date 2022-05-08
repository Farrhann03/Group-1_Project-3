const { Location, Cruisine, Price } = require("../models");

module.exports = {
  onboard: async (locationId, cruisineId, priceId) => {
    let result = {
      message: null,
      status: null,
      data: null,
    };
    const location = await Location.findByPk(locationId);
    const cruisine = await Cruisine.findByPk(cruisineId);
    const price = await Price.findByPk(priceId);
    console.log("Location", location, "Cruisine", cruisine, "Price", price);

    if (!location) {
      result.message = `Location ID ${location.Id} is not found.`;
      result.status = 404;
      return result;
    }

    if (location.cruisineId) {
      result.message = `Location ID ${location.id} is already in use.`;
      result.status = 400;
      result.data = location;
      return result;
    }

    if (location.priceId) {
        result.message = `Location ID ${location.id} is already in use.`;
        result.status = 400;
        result.data = location;
        return result;
    }

    if (!cruisine) {
      result.message = `cruisine ID ${cruisine} is not found.`;
      result.status = 404;
      return result;
    }

    if (!price) {
        result.message = `Price ID ${price} is not found.`;
        result.status = 404;
        return result;
      }

    location.cruisineId = cruisine.id;
    await location.save();

    location.priceId = price.id;
    await location.save();

    result.data = location;
    result.status = 200;
    result.message = "Onboard successful";

    return result;
  },
  // offboard: async (locationId) => {
  //   let result = {
  //     message: null,
  //     status: null,
  //     data: null,
  //   };
  //   const location = await Location.findByPk(locationId);
  //   console.log('Location', location);

  //   if (!location) {
  //       result.message = `Location ID ${locationId} is not found.`;
  //       result.status = 404;
  //       return result;
  //     }

  //   location.cruisine = null;
  //   await location.save();

  //   result.data = location;
  //   result.status = 200;
  //   result.message = "Offboard successful";

  //   return result;

  // },

  update: async (locationId, name, address, located_at) => {
    //The result object is where we will put the result to be sent to th client.
    let result = {
      message: null,
      status: null,
      data: null,
    };

    //Look for the restaurant and in the database.
    const location = await Location.findByPk(locationId);

    //check if restarurant exists
    if (!location) {
      result.message = `Location ID ${locationId} is not found`;
      result.status = 404;
      return result;
    }

    // Make sure the sequence is the same as in the  update: async (...)
    location.name = name;
    location.address = address;
    location.located_at = located_at;

    await location.save(); // update the location
    result.data = location;
    result.status = 200;
    result.message = "Update successful";

    return result;
  },

  delete: async (locationId) => {
    let result = {
      message: null,
      status: null,
      data: null,
    };

    await Location.destroy({ where: { id: locationId } });

    result.data = location;
    result.status = 200;
    result.message = "deleted successful";

    return result;
  },
};
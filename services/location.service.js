const { Location } = require("../models");
//const { Cuisine, Price } = require("../models");

module.exports = {
  // onboard: async (locationId, cuisineId, priceId) => {
  //   let result = {
  //     message: null,
  //     status: null,
  //     data: null,
  //   };
  //   const location = await Location.findByPk(locationId);
  //   const cuisine = await Cuisine.findByPk(cuisineId);
  //   const price = await Price.findByPk(priceId);
  //   console.log("Location", location, "Cuisine", cuisine, "Price", price);

  //   if (!location) {
  //     result.message = `Location ID ${location.Id} is not found.`;
  //     result.status = 404;
  //     return result;
  //   }

  //   if (location.cuisineId) {
  //     result.message = `Location ID ${location.id} is already in use.`;
  //     result.status = 400;
  //     result.data = location;
  //     return result;
  //   }

  //   if (location.priceId) {
  //     result.message = `Location ID ${location.id} is already in use.`;
  //     result.status = 400;
  //     result.data = location;
  //     return result;
  //   }

  //   if (!cuisine) {
  //     result.message = `cuisine ID ${cuisine} is not found.`;
  //     result.status = 404;
  //     return result;
  //   }

  //   if (!price) {
  //     result.message = `Price ID ${price} is not found.`;
  //     result.status = 404;
  //     return result;
  //   }

  //   location.cuisineId = cuisine.id;
  //   await location.save();

  //   location.priceId = price.id;
  //   await location.save();

  //   result.data = location;
  //   result.status = 200;
  //   result.message = "Onboard successful";

  //   return result;
  // },

  // offboard: async (locationId) => {
  //   let result = {
  //     message: null,
  //     status: null,
  //     data: null,
  //   };
  //   const location = await Location.findByPk(locationId);
  //   console.log("location", location);

  //   if (!location) {
  //       result.message = `Location ID ${locationId} is not found.`;
  //       result.status = 404;
  //       return result;
  //     }

  //   location.cuisineId = null;
  //   location.priceId = null;
  //   await location.save();

  //   result.data = location;
  //   result.status = 200;
  //   result.message = "Offboard successful";

  //   return result;

  // },

  create: async (locationId, name, address, located_at, cuisineId, priceId) => {
    //The result object is where we will put the result to be sent to th client.
    let result = {
      message: null,
      status: null,
      data: null,
    };

    //Look for the restaurant and in the database.
    const newLocation = await Location.create({
        locationId: locationId,
        name: name,
        address: address,
        located_at: located_at,
        cuisineId : cuisineId,
        priceId: priceId
        
      });

    await newLocation.save(); // update the location
    result.data = newLocation;
    result.status = 200;
    result.message = "Update successful";

    return result;
  },
  
  update: async (locationId, name, address, located_at, cuisineId, priceId) => {
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
    location.cuisineId = cuisineId;
    location.priceId = priceId;

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

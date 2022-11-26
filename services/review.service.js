const { Review } = require("../models");

module.exports = {

  create: async (location_id, user_id, review) => {
    //The result object is where we will put the result to be sent to th client.
    let result = {
      message: null,
      status: null,
      data: null,
    };

    //Look for the review and in the database.
    const newReview = await Review.create({
        
        location_id: location_id,
        user_id: user_id,
        review: review,
      });

    await newReview.save(); // update the review
    result.data = newReview;
    result.status = 200;
    result.message = "Update successful";

    return result;
  },

  delete: async (reviewId) => {
    let result = {
      message: null,
      status: null,
      data: null,
    };

    const review = Review.findByPk(reviewId);
    console.log("Review", review)

    await Review.destroy({ where: { id: reviewId } });

    result.data = review;
    result.status = 200;
    result.message = "deleted successful";

    return result;
  },
};

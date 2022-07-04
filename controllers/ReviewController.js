const reviewService = require("../services/review.service");

class ReviewController {

  async create(req, res) {
    const { reviewId, location_id, user_id, review } = req.body;
    if(typeof review !== "string"){
      res.status(400);
      return res.send("Incorrect request data");
    }
      // Make sure the sequence is the same as in location.
      const { status, data, message } = 
      await reviewService.create(
      reviewId,
      location_id,
      user_id,
      review
      
      );
    res.status(status);

    res.json({ message, data });

  }

  async delete(req, res) {
    const reviewId = req.params.reviewId;
    console.log(reviewId);

    const { status, data, message } = await reviewService.delete(
      reviewId
    );

    res.status(status);

    res.json({ message, data });
  }
}


module.exports = ReviewController;

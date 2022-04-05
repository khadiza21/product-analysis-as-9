import React from "react";
import ReactStars from "react-rating-stars-component";

const Review = (props) => {
  const { name, rating, review } = props.review;
  // , img
  return (
    <div>
      <p>
        Name: {name}
        Review: {review}
      </p>

      <span>
        Ratings:
        <ReactStars count={5} value={rating} size={26} activeColor="#ffd700" />
      </span>
    </div>
  );
};

export default Review;

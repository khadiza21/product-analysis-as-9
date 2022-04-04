import React from "react";
import ReactStars from "react-rating-stars-component";

const Review = (props) => {
  const { id, name, rating } = props.review;

  return (
    <div>
      {/* "id": 
        "name": 
        "": review
        "img": 
        // "": */}
      <h1>id: {id}</h1>
      <h2>Name: {name}</h2>
      <span>
        Ratings:
        <ReactStars count={5} value={rating} size={26} activeColor="#ffd700" />
      </span>
    </div>
  );
};

export default Review;

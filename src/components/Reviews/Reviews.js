import React from "react";
import useProducts from "../../hooks/useProducts";
import Review from "../Review/Review";
import "./Reviews.css";

const Reviews = () => {
  const [reviews] = useProducts();

  return (
    <div className=" container reviews-container my-5 pb-5">
      {reviews.map((review) => (
        <Review key={review.id} review={review}></Review>
      ))}
    </div>
  );
};

export default Reviews;

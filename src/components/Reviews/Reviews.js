import React from "react";
import useProducts from "../../hooks/useProducts";
import Review from "../Review/Review";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useProducts();

  return (
    <div>
      <h1>review {reviews.length}</h1>
   
      
      {reviews.map((review) => (
        <Review key={review.id} review={review}></Review>
      ))}
    </div>
  );
};

export default Reviews;

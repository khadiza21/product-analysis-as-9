import React from "react";
import useProducts from "../../hooks/useProducts";
import CustomLink from "../CustomLink/CustomLink";
import Review from "../Review/Review";
import "./Main.css";

const Main = () => {
  const [reviews, setReviews] = useProducts();
  return (
    <div className="my-5">
      <h1>Customer Review (3)</h1>
      {reviews.slice(0, 3).map((review) => (
        <Review key={review.id} review={review}></Review>
      ))}

      <CustomLink className="btn my-3 fw-bold" variant="btn" to="/reviews">
        SEE ALL REVIEWS
      </CustomLink>
    </div>
  );
};

export default Main;

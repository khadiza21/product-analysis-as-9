import React from "react";
import useProducts from "../../hooks/useProducts";
import CustomLink from "../CustomLink/CustomLink";
import Review from "../Review/Review";
import "./Main.css";

const Main = () => {
  const [reviews] = useProducts();
  return (
    <div className="my-5 container">
      <h1 className="text-center py-4 fw-bold">
        Customer <span className="sp">Review (3)</span>
      </h1>

      <div className=" reviews-container">
        {reviews.slice(0, 3).map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>

      <div className="text-center text-light my-5 pb-5">
        <CustomLink className="btn my-3 fw-bold" variant="btn" to="/reviews">
          SEE ALL REVIEWS
        </CustomLink>
      </div>
    </div>
  );
};

export default Main;

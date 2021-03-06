import React from "react";
import ReactStars from "react-rating-stars-component";
import { Fade, Zoom } from "react-reveal";
import "./Review.css";

const Review = (props) => {
  const { name, rating, review, img } = props.review;

  return (
    <div className="container mt-3 pt-3 py-4 rounded shadow text-justify px-4">
      <div className="d-flex">
        <img className="img-r " src={img} alt="" />
        <Fade top>
          <h3 className="ps-3 mt-2 fw-bold"> {name}</h3>
        </Fade>
      </div>
      <Fade bottom>
        <p className="my-3 ">
          {" "}
          <span className="fw-bold">Review: </span>{" "}
          <span className="review-text">{review}</span>{" "}
        </p>
      </Fade>

      <span className="fw-bold">Ratings: ({rating})</span>
      <Zoom>
        <ReactStars count={5} value={rating} size={26} activeColor="#f15735" />
      </Zoom>
    </div>
  );
};

export default Review;

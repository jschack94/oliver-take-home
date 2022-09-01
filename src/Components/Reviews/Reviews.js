import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { axios } from "../../utils/axios";
import "./Reviews.scss";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const history = useHistory();

  const findAllReviews = async () => {
    const reviews = (await axios.get({ url: "/reviews" }))?.data || [];
    const products = (await axios.get({ url: "/products" }))?.data || [];
    const _reviews = reviews.map((review) => {
      const product = products.filter((e) => e.id == review.productId)?.[0];
      if (product) {
        review["product"] = product;
      }
      return review;
    });
    console.log({ _reviews });
    setReviews(_reviews);
  };

  useEffect(() => {
    findAllReviews();
    return () => {};
  }, []);

  return (
    <div className="review_section">
      <button onClick={() => history.push(`/products/`)}>
        Back to Products
      </button>

      <h1 className="heading">Reviews</h1>
      <div className="products">
        {reviews.map((review, index) => (
          <div className="product">
            <p className="product_name">Name : {review?.product?.name}</p>
            <p className="star_rating">Rating : {review?.["star_rating"]}</p>
            <p className="author">Author : {review?.["author"]}</p>
            <p className="headline">Headline : {review?.["headline"]}</p>
            <p className="body">Body : {review?.["body"]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;

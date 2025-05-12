import React from "react";

interface PropsType {
  params: {
    reviewId: string;
    productId: string;
  };
}

const Review = async ({ params }: PropsType) => {
  const { productId, reviewId } = await params;
  
  return (
    <div>
      Review {reviewId} product {productId}
    </div>
  );
};

export default Review;

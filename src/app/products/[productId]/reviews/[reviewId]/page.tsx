import React from "react";
import { notFound } from "next/navigation";
interface PropsType {
  params: {
    reviewId: string;
    productId: string;
  };
}

const Review = async ({ params }: PropsType) => {
  const { productId, reviewId } = await params;

  if (parseInt(reviewId) > 100) notFound();

  return (
    <div>
      Review {reviewId} product {productId}
    </div>
  );
};

export default Review;

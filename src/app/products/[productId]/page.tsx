import React from "react";

interface PropsType {
  params: {
    productId: string;
  };
}

const Product = async ({ params }: PropsType) => {
  const { productId } = await params;

  return <div>Product {productId}</div>;
};

export default Product;

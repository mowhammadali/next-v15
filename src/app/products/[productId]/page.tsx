import React from "react";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ productId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const productId = (await params).productId;

  try {
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const product = await res.json();

    return {
      title: product?.title,
      description: product?.description,
    };
  }
  catch (error) {
    return {
      title: 'no data found',
      description: 'empty'
    }
  }
}

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

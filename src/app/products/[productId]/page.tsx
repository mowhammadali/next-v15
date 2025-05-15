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

  const product = await fetch(
    `https://fakestoreapi.com/products/${productId}`
  ).then((res) => res.json());

  return {
    title: product?.title,
    description: product?.description,
  };
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

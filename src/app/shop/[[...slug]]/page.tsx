import React from "react";

const ShopSlug = async ({ params }: { params: { slug: string[] } }) => {
  const { slug } = await params;

  return <div>Shop slug: {JSON.stringify(slug)}</div>;
};

export default ShopSlug;

import Link from "next/link";
import React, { Suspense } from "react";
import Loading from "@/app/products/loading";

const Products = () => {
    return (
        <div>
            <h1>All products</h1>
            <Suspense fallback={<Loading />}>
                <ProductList />
            </Suspense>
        </div>
    );
};

const ProductList = async (): Promise<React.ReactNode> => {
    let data: { id: number; title: string }[] | null = null;
    let error = null;

    try {
      const res = await fetch(`https://fakestoreapi.com/products`);

      if (!res.ok) return <p>An error occured in fetching data...</p>;

      data= await res.json();
    }
    catch (err) {
      error = err;
    }

    if (data === null) return <p>no data found</p>
    if (error) return <p>you have error</p>

    return (
        <React.Fragment>
            {data.map((product) => (
                <li key={product.id}>
                    <Link
                        href={`/products/${product?.id}`}
                        replace={false}
                        prefetch
                        scroll
                    >
                        {product?.title}
                    </Link>
                </li>
            ))}
        </React.Fragment>
    );
};

export default Products;

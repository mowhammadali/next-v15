"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const products = [
    { id: 1, name: "lap top" },
    { id: 2, name: "head phone" },
    { id: 3, name: "phone" },
    { id: 4, name: "smart watch" },
];

const Products = () => {
    const pathname = usePathname();

    return (
        <div>
            {products.map((product) => {
                return (
                    <li key={product.id}>
                        <Link href={`/products/${product.id}`}>
                            {product.name}
                        </Link>
                    </li>
                );
            })}
        </div>
    );
};

export default Products;

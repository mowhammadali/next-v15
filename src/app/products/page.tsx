import Link from "next/link";
import React from "react";

const views = [
  { id: 1, viewNumber: 1, viewName: "review 1" },
  { id: 2, viewNumber: 2, viewName: "review 2" },
];

const Products = () => {
  return (
    <div>
      {views.map((view) => (
        <li key={view.id}>
          <Link
            href={`/products/1/reviews/${view.viewNumber}`}
            replace
            prefetch
            scroll
          >
            {view.viewName}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default Products;

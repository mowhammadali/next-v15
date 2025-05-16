'use client'
import React from "react";
import { useRouter } from "next/navigation";

const User: React.FC = (): React.JSX.Element => {
  const { push , replace , refresh } = useRouter();
  return <div>
    <button onClick={() => push("/products")}>go to products</button>
  </div>;
};

export default User;

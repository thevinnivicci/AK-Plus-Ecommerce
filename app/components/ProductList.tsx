import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ productLists }: any) => {
  return (
    <div className="w-full min-w-full p-5 flex flex-col items-center">
      <div className="w-full mb-10">
        {" "}
        <h1 className="text-center mt-8 text-4xl">Latest Product</h1>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
       place-items-center gap-5 p-2 lg:px-10"
      >
        {productLists.map((product: any, index: number) => (
          <div key={index}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

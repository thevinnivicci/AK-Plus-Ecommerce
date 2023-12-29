import React from "react";

const ProductList = ({ productLists }: any) => {
  return (
    <div className="w-full">
      <h1>Product List</h1>
      {/* Assuming productLists is an array of objects */}
      {productLists.map((product: any, index: number) => (
        <div key={index}>
          <p>Name: {product.productName}</p>
          <p>Price: {product.productPrice}</p>
          {/* Add other fields as needed */}
        </div>
      ))}
    </div>
  );
};

export default ProductList;

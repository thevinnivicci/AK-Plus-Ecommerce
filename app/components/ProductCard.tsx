import Image from "next/image";
import React, { useState } from "react";

const ProductCard = (props: { product?: any }) => {
  const [product, setProduct] = useState(props.product || {});

  if (!product || Object.keys(product).length === 0) {
    // Handle the case where product is undefined or an empty object
    return null; // or display a loading message, placeholder, or handle it according to your UI needs
  }

  return (
    <div className="w-full p-5 bg-base-200 hover:shadow-md">
      <div className=" bg-white aspect-square flex items-center justify-center p-5">
        <Image
          className="w-full h-full rounded-md object-contain"
          src={product?.productImage?.url || "/placeholder-image.jpg"}
          alt="product image"
          width={500}
          height={500}
        />
      </div>
      <div className="px-4 mt-2">
        <h1 className="text-xl  font-medium">
          {product.productName || "Product Name"}
        </h1>
      </div>
      <div className="flex items-center justify-between px-4">
        <p className="">Price: {product.productPrice || "0.00"}</p>
        <button className="btn  md:visible lg:visible btn-sm lg:btn-md btn-outline">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

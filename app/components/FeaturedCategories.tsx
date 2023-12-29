import Image from "next/image";
import React from "react";

const FeaturedCategories = () => {
  return (
    <div className="w-full lg:p-10">
      <div className="mb-10">
        <h1 className="text-4xl text-center">Trending Category</h1>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-5">
        <div className=".card w-96 bg-base-500 p-5">
          <Image
            src="/lcd.jpg"
            alt="lcd"
            width={1000}
            height={1000}
            className="w-full h-full "
          />
        </div>
        <div className=".card w-96 bg-base-200">
          <Image
            src="/lcd.jpg"
            alt="lcd"
            width={1000}
            height={1000}
            className="w-full h-full "
          />
        </div>
        <div className=".card w-96 bg-base-200">
          <Image
            src="/lcd.jpg"
            alt="lcd"
            width={1000}
            height={1000}
            className="w-full h-full "
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;

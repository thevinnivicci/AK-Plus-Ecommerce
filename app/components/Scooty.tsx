import Image from "next/image";
import React from "react";

const Scooty = () => {
  return (
    <div className="w-full h-full p-4 lg:px-40">
      <h1 className="lg:text-6xl text-4xl text-center mt-10">
        Our Exclusive Product
      </h1>
      <div className="w-full h-full mt-10 bg-red-200 flex flex-col lg:flex-row ">
        <div className="w-full lg:w-1/2 h-full">
          <Image
            src="/scootygrey.jpeg"
            alt="scooty"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 lg:h-100 bg-base-200 p-5 px-10 space-y-5">
          <h1 className="text-6xl">AK Plus</h1>
          <h2 className="text-xl">Pro + Specification</h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            pariatur modi qui sequi eveniet commodi ducimus recusandae suscipit
            quibusdam iusto repudiandae quae saepe facilis architecto, rerum ab
            minima autem repellendus.
          </p>
          <button className="btn btn-outline">See More</button>
        </div>
      </div>
    </div>
  );
};

export default Scooty;

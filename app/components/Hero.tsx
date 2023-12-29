import Image from "next/image";
import React from "react";
const Hero = () => {
  return (
    <div className="w-full h-fit px-1 lg:h-[calc(100vh-70px)] flex flex-col md:flex-row ">
      <div
        className="w-full h-fit flex flex-col p-4 space-y-5 items-center justify-center
       md:h-full
       lg:items-normal lg:pl-10"
      >
        <h1 className="text-4xl lg:text-6xl">
          Your Home, Our Appliances, Perfect Together
        </h1>
        <p className="text-md">
          Explore a realm of seamless living with our smart home appliances.
          Effortlessly blending innovation and style, our collection is designed
          to simplify your daily tasks, offering efficiency that enhances the
          harmony of your home. Transform your living space with cutting-edge
          technology and experience the joy of modern convenience every day.
        </p>
        <div className="w-full flex items-start">
          {" "}
          <button className="btn btn-outline">Shop Now</button>
        </div>
      </div>
      <div className="w-full h-full md:h-full p-5 lg:p-20">
        <Image
          src="/hero.jpg"
          alt="hero"
          width={1000}
          height={1000}
          className=" bg-cover w-full h-full rounded-md"
        />
      </div>
    </div>
  );
};

export default Hero;

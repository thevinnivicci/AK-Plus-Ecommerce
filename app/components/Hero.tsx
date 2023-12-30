import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const Hero = () => {
  // Variants for animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, delay: 1.5 },
    },
  };

  return (
    <motion.div
      className="w-full h-fit px-1 lg:h-[calc(100vh-70px)] flex flex-col md:flex-col lg:flex-row "
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="w-full h-fit flex flex-col p-4 space-y-5 items-center justify-center md:h-full lg:items-normal lg:pl-10"
        variants={textVariants}
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
        <motion.div
          className="w-full flex items-start"
          variants={buttonVariants}
        >
          <button className="btn btn-outline">Shop Now</button>
        </motion.div>
      </motion.div>
      <motion.div
        className="w-full h-full md:h-full p-5 lg:p-20"
        variants={textVariants}
      >
        <Image
          src="/hero.jpg"
          alt="hero"
          width={1000}
          height={1000}
          className="bg-cover w-full h-full rounded-md"
        />
      </motion.div>
    </motion.div>
  );
};

export default Hero;

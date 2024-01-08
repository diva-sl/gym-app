import React from "react";
import { logos } from "../../Data";
import { motion } from "framer-motion";
const Home = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 0,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <div className="section" id="Home">
      <div className="md:flex items-center justify-center">
        <div>
          <div className="font-bold text-xs text-Teal mb-4">
            Welcome To Your Fitness Hub!
          </div>
          <div className="sm:text-[2.5rem] text-[1.825rem] font-bold">
            This is <br />
            the new way <br /> to Stay Fit
          </div>
          <p className="text-sm leading-7 text-gray max-w-sm">
            "Discover a world of fitness at your fingertips. Our virtual gym
            offers expert guidance and motivation for your journey to a
            healthier you."
          </p>
          <div className="mt-6">
            <a href="tel:8861151876">
              <button className="px-6 py-3 font-bold text-white bg-Teal rounded-lg mr-4 text-sm">
                Get Started
              </button>
            </a>
            <button className="px-6 py-3 font-bold border border-solid border-gray rounded-lg text-sm">
              Discover
            </button>
          </div>
        </div>
        <div className="md:w-[60%]">
          <img src={"/assets/img/gym-02.png"} alt="" />
        </div>
      </div>
      <div>
        <p className="text-center text-xl">
          "We collaborate with fitness centers and trainers to provide ,
          <span className="text-Teal">
            you with the ultimate fitness experience.
          </span>
        </p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex items-center justify-center flex-wrap gap-8 p-2"
        >
          {logos.map((logo, index) => (
            <motion.div variants={item} className="w-28" key={index}>
              <img src={logo} alt="" className="w-full object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

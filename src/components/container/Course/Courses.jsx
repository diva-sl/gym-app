import React from "react";
import { categories } from "../../../Data";
import { courses } from "../../Data";
import Categories from "./Categories";
import Course from "./Course";
import { motion } from "framer-motion";

const Courses = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delatChildren: 0.3, staggerChildren: 0.2 },
    },
  };
  return (
    <div className="w-full p-2 md:w-[85%] mx-auto " id="courses">
      <div className="text-center">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          Our <span className="text-blue-600"> Core Focus Areas</span>
        </div>
        <p className="text-sm !text-white leading-7 max-w-[700px] mx-auto">
          Explore a diverse range of fitness domains, from Strength training to
          cardio workouts, all meticulously curated to cater to your fitness
          goals
        </p>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="grid md:grid-cols-4 sm:grid-cols-2 mt-12 gap-8 !text-Teal"
      >
        {categories.map((category) => {
          return <Categories key={category.id} {...category} />;
        })}
      </motion.div>
      {/* <div className="text-xl font-bold mt-32 text-center text-white">Our Highly Sought-After Fitness Program</div> */}
      <div className="mt-12 overflow-x-hidden w-full  relative">
        {/* <div className="flex gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[400%] animate-slide">
          {courses.map((course) => {
            return <Course key={course.id} {...course} />;
          })}
        </div> */}
      </div>
    </div>
  );
};

export default Courses;

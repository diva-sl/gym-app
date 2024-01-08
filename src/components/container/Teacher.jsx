import React from "react";
import teacher1 from "../../assets/teacher1.png";
import teacher2 from "../../assets/teacher2.png";
import { accordions } from "../../Data";
import Accordion from "./Accordion";
import ImageSlider from "../fit/ImageSlider";

const Teacher = () => {
  const gymPhotos = [
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img5.jpg",
    "/img6.jpg",
    "/img7.jpg",
    "/img8.jpg",
  ];

  return (
    <div className="w-full p-2 md:w-[85%] mx-auto text-white" id="teacher">
      <div className="grid sm:grid-cols-2 place-items-center gap-8">
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5 text-wwhite">
            Our <span className="text-Teal">Certified</span>
            <br />
            Fitness Trainer
          </div>
          <p className="text-sm leading-7 text-while mb-5">
            I’m shuhaib khan certified personal trainer I have 8years of
            experience in fitness field ,specialised in functional training and
            specialised in fat loss and weight gain I have done many
            transformations throughout my experience and I hope u people will
            also join and I’m specialised in gym sales and management.
          </p>
          <a href="tel:98598585895">
            <button className="py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold">
              Start Training
            </button>
          </a>
        </div>
        <div className="p-4 w-full md:w-3/4 sm:row-start-1">
          <ImageSlider images={gymPhotos} />
        </div>
      </div>
      <div className="text-center my-8 font-bold sm:text-[1.875rem] text-[1.5rem] !text-white">
        Frequently <span className="text_Teal">Asked Questions</span>
      </div>
      <div className="mt-12 max-w-[700px] mx-auto text-white">
        {accordions.map((accordion) => {
          return <Accordion key={accordion.id} {...accordion} />;
        })}
      </div>
    </div>
  );
};

export default Teacher;

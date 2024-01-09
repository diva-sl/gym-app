import React from "react";
import trainingImg from "../../assets/img/trainer.png";

const start = () => {
  return (
    <section id="classes" className="w-full">
      <div>
        <div className="w-full md:[w-85%] mx-auto grid grid-cols-1 gaap-4 md:grid-cols-2">
          <div>
            <img
              src={trainingImg}
              alt=""
              className="w-[full] md:w-[60%] md:ml-auto"
              data-aos="fade-left"
              data-aos-duration="700"
            />
          </div>
          <div
            className="start_content !w-full p-2 flex flex-col justify-center"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            <h2 className="section_title !text-white">
              The Ultimate
              <span className="highlights">Fitness Experience</span>
            </h2>
            <p className="!text-white">
              ur gym is equipped with the latest and finest fitness gear,
              ensuring you have access to the best tools for your workout
              regimen. From cardio machines to strength training equipment,
              we've got it all. Our investment in top-tier technology showcases
              our dedication to providing a world-class fitness experience.
            </p>
            <button className="register_btn">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;

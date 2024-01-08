import React from "react";
import heroImg from "../../assets/img/gym-02.png";
import dumbleIcon from "../../assets/img/dumble.png";

import "../../index.css";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section className="w-fit mx-auto">
      <div>
        <div className=" w-full md:w-[85%] flex flex-col gap-2 md:flex-row mt-8 mx-auto">
          <div className="hero_content pl-3 pr-4">
            <h2
              className="section_title !text-white !text-xl md:!text-3xl"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              Achieve Your Fitness Goals at the
              <span className="highlights">Top Gym</span> in Ramamurthy Nagar,
              Bangalore
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="600"
              className="!text-white"
            >
              Sunshine Fitness is the vision of a Master Personal Trainer with
              over 8 years experience in the fitness industry.
              <br />
              Sunshine Fitness now has its first large commercial location to
              offer several styles of personal training to our clients.
            </p>
            <div
              className="hero_btns"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="700"
            >
              <a href="tel:988662339">
                <button className="text-white bg-teal-500 rounded py-1 px-3">
                  Contact
                </button>
              </a>
            </div>
          </div>
          <div className="hero_img mx-auto relative hidden md:flex">
            <div className="hero_img-wrapper">
              <div className="box-01">
                <div className="box-2">
                  <div className="box-3">
                    <div>
                      <img src={heroImg} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="heart_rate"
                data-aos="fade-right"
                data-aos-duration="600"
              >
                <h5>Heart rate</h5>
                <span>
                  <i class="ri-heart-pulse-fill"></i>
                </span>
                <h5>2567 BPM</h5>
              </div>
              <div
                className="gym_location"
                data-aos="fade-left"
                data-aos-duration="600"
              >
                <span>
                  <i class="ri-map-pin-2-fill"></i>
                </span>
                <h5>
                  Find a new <br />
                  Gym near you
                </h5>
              </div>
              <div
                className="dumble_icon"
                data-aos="fade-down"
                data-aos-duration="600"
              >
                <img src={dumbleIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

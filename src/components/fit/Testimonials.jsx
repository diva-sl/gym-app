import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";
import avatar01 from "../../assets/img/avatar01.png";
import avatar02 from "../../assets/img/avatar02.png";

export default function Testimonials() {
  return (
    <>
      <section>
        <div className=" w-full" data-aos="zoom-in" data-aos-duration="700">
          <h2 className="section_title !text-white text-xl">Testimonials</h2>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="!max-w-xs md:!max-w-sm w-full mx-auto"
          >
            <SwiperSlide>
              <div className="slide_item">
                <div className="slide_img-01">
                  <img src={avatar01} alt="" />
                </div>
                <h4>Jessica Fernandos</h4>
                <p>
                  Best training and trainers I have ever had in my life!.Super
                  friendly atmosphere,Every session is different and fun.The
                  trainers really push,motivate and helps us to exceed our
                  limits and achieve our goals.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_item">
                <div className="slide_img-02">
                  <img src={avatar02} alt="" />
                </div>
                <h4>Mike Ross</h4>
                <p>
                  Fitbody fitness is not just like any other fitness facility
                  but like a family!.Highly recommended for all the fitness
                  lovers irrespective of what level you are in. I am definitely
                  coming back!!!
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_item">
                <div className="slide_img-03">
                  <img src={avatar01} alt="" />
                </div>
                <h4>Lious Specter</h4>
                <p>
                  I knew I was in for some serious workouts when Mitch (Head
                  trainer) pushed me as hard as I’d been in 5 years on the first
                  day. Always with a smile but more importantly an awareness of
                  my abilities Mitch and team are the reason I am coming back to
                  train again.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}

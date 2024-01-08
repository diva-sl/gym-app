import React from "react";

const Pricing = () => {
  return (
    <section id="pricing-plan p-2">
      <div className=" mx-auto w-full md:w-[85%]">
        <div className="pricing_top">
          <h2 className="section_title !text-white">
            Gym <span className="highlights">Pricing</span>
          </h2>
          <p className="!text-white">
            We know decision-making is hard, but don’t sweat it. <br /> Choose
            the membership that’s right for you and start perspiring to
            greatness.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-2">
          <div
            className="pricing_item !w-[90%] mx-auto"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <div className="pricing_card-top">
              <h2 className="section-title">12 Months</h2>
              <h2 className="pricing_section-title">₹7500 /-</h2>
            </div>
            <div className="services">
              <ul>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Unlimited access to the gym
                </li>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Customer support
                </li>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  General Trainer
                </li>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Standard options
                </li>
                {/* <li>
                  <span>
                    <i className='ri-checkbox-blank-circle-fill'></i>
                  </span>
                  5 classes per week
                </li> */}
              </ul>
              <button className="register_btn">Join Now</button>
            </div>
          </div>
          <div
            className="pricing_item pricing_item-02 !w-[90%] mx-auto"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <div className="pricing_card-top">
              <h2 className="section_title">6 Months</h2>
              <h2 className="pricing_section-title">₹5500 /-</h2>
            </div>
            <div className="services">
              <ul>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Unlimited acess to the gym
                </li>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Customer support
                </li>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  General Trainer
                </li>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Standard options
                </li>
                {/* <li>
                  <span>
                    <i className='ri-checkbox-blank-circle-fill'></i>
                  </span>
                  5 classes per week
                </li> */}
              </ul>
              <button className="register_btn">Join Now</button>
            </div>
          </div>
          <div
            className="Pricing_item !w-[90] mx-auto"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <div className="pricing_card-top">
              <h2 className="section_title">3 Months</h2>
              <h2 className="pricing_section-title">₹4100 /-</h2>
            </div>

            <div className="services">
              <ul>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Unlimited acess to the gym
                </li>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Customer support
                </li>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  General Trainer
                </li>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Standard options
                </li>
                {/* <li>
                  <span>
                    <i className='ri-checkbox-blank-circle-fill'></i>
                  </span>
                  5 classes per week
                </li> */}
              </ul>
              <button className="register_btn">Join Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

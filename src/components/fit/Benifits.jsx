import React from "react";

function Benifits() {
  return (
    <>
      <div className="exercie_top">
        <h2 className="section_title !text-white">
          Benefits of <span className="highlights">Joining Us</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center w-full gap-2 md:w-[80%] mx-auto">
        <div class="maxx-w-sm bg-bg border shadow-white text-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-grey-700 mx-auto">
          <a>
            <img
              class="rounded-t-lg w-full h-56"
              src="https://img.freepik.com/free-photo/people-working-out-indoors-together-with-dumbbells_23-2149175410.jpg?size=626&ext=jpg&ga=GA1.1.502621527.1695136298&semt=ais"
              alt=""
            />
          </a>
          <div className="p-5">
            <a>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-grey-900 text-teal-300">
                Expert Trainers for Personalized Guidance
              </h5>
            </a>
            <p class="mb-3 font-normal text-grey-700 dark:text-grey-400">
              Our team of experienced and certified trainers is dedicated to
              helping you reach your fitness goals. They craft personalized
              workout routines and provide expert guidance, ensuring you get the
              most out of every session. Whether you're a beginner or a seasoned
              fitness enthusiast, our trainers are here to support you every
              step of the way.
            </p>
          </div>
        </div>
        <div class="max-w-sm bg-bg border shadow-white text-white  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto">
          <a>
            <img
              class="rounded-t-lg h-56 w-full"
              src="https://img.freepik.com/free-photo/buddha-bowl-dish-with-vegetables-legumes-top-view_1150-42589.jpg?size=626&ext=jpg&ga=GA1.1.502621527.1695136298&semt=sph"
              alt=""
            />
          </a>
          <div class="p-5">
            <a>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-teal-300">
                Tailored Diet and Exercise Plans
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              We understand that fitness isn't just about working out—it's also
              about nutrition. Our gym offers personalized diet plans to
              complement your fitness routine. We utilize advanced software
              trackers to monitor your progress and suggest appropriate diet and
              exercise adjustments, ensuring your journey towards your fitness
              goals is as efficient and effective as possible.
            </p>
          </div>
        </div>

        <div class="max-w-sm bg-bg border shadow-white text-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto">
          <a>
            <img
              class="rounded-t-lg h-56 w-full"
              src="https://img.freepik.com/free-photo/happy-entrepreneur-online-banking-with-credit-card-mobile-phone-office_637285-8760.jpg?size=626&ext=jpg&ga=GA1.1.502621527.1695136298&semt=sph"
              alt=""
            />
          </a>
          <div class="p-5">
            <a>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-teal-300">
                Affordable Membership Options
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              At our gym, we believe that achieving your fitness goals shouldn't
              break the bank. That's why we offer competitive pricing without
              compromising on quality. Our affordable membership options allow
              you to access top-tier facilities, experienced trainers, and
              cutting-edge technology without a hefty price tag
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Benifits;

import React from 'react';
import about from '../../assets/About.jpg';

const About = () => {
    return (
        <div id="about">
            <div className="grid md:grid-cols-2 place-items-center p-4 md:w-[70%] mx-auto">
                <div className="border-[3px] border-solid border-Teal rounded-lg">
                    <img src={'/assets/img/avatar02.png'} alt="" className="p-4" />
                </div>
                <div> 
                    <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5 text-white">
                        Welcome to Sunshine fitness <br />
                        <span className="text-blue-500">Your Path to Wellness and Strength .</span>
                    </div>
                    <p className="text-sm !text-white leading-7 mb-4">
                    At Sunshine Fitness, we're more than just a gym; we're your partners on the journey to a healthier, stronger, and happier you. Our mission is to provide a welcoming and motivating environment where individuals of all fitness levels can achieve their health and wellness goals.       </p>
          <button className="w-36 bg-green-500 font-medium py-2 rounded text-white"><a href="https://wa.me/9886623339">Contact</a></button>
                </div>
            </div>
        </div>
    );
};

export default About;

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = ({ images }) => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showArrows
      showStatus={false}
      showThumbs={false}
      interval={3000}
    >
      {images.map((images, index) => {
        <div key={index} className="border-[12px] border-teal-500">
          <img src={image} alt={`Gym ${index}`} />
        </div>;
      })}
    </Carousel>
  );
};

export default ImageSlider;

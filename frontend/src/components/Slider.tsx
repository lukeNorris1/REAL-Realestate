import images from "../assets/estates/estate_whole/index";
import React, { useState } from "react";

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  return (
    <div className="relative w-full h-[600px]">
      <div className="grid grid-cols-3">
        <div className="col-span-1">
            <img
                src={images[currentImage === 0 ? images.length - 1 : currentImage - 1].src}
                alt={images[currentImage].alt}
                className="opacity-50 h-full w-full object-cover"
            />
        </div>
        <div className="col-span-1 flex justify-center items-center">
            <img
                src={images[currentImage].src}
                alt={images[currentImage].alt}
                className="h-full w-full object-cover"
            />
        </div>
        <div className="col-span-1">
            <img 
                src={images[(currentImage + 1) % images.length].src}
                alt={images[currentImage].alt}
                className="opacity-50 h-full w-full object-cover"
                />
        </div>
      </div>
      
      <div className="absolute bottom-4 w-full left-0 transform -translate-y-1/2 w-full flex justify-center opacity-80">
        <button
          onClick={previousImage}
          className="bg-white px-4 mx-20 py-2 rounded-md text-3xl"
        >
          {"←"}
        </button>
        <button
          onClick={nextImage}
          className="bg-white px-4 mx-20 py-2 rounded-md text-3xl"
        >
          {"→"}
        </button>
      </div>
    </div>
  );
};

export default Slider;
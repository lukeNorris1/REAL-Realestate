import images from "../assets/estates/estate_whole/index";
import { useState } from "react";

type props = {
  totalImages: number
}

const Slider = (props: props) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };


  return (
<div className="relative min-w-full w-full">
  <div className="grid grid-cols-3">
    {props.totalImages != 1 ? (
    <>
      <div className="col-span-1" onClick={() => previousImage()}>
        <img
          src={images[currentImage === 0 ? images.length - 1 : currentImage - 1].src}
          alt={images[currentImage].alt}
          className="opacity-50 h-full w-full object-cover"
        />
      </div>
      <div className="col-span-1 flex justify-center items-center">
        <div className="relative h-full">
          <button
            className="absolute top-0 bottom-0  left-1 z-1"
            onClick={() => previousImage()}
          >
          <i className='fas fa-angle-left text-white text-6xl'></i>
          </button>
          <img
            src={images[currentImage].src}
            alt={images[currentImage].alt}
            className="h-full w-full object-cover"
          />
          <button
            className="absolute top-0 bottom-0 right-1 z-1"
            onClick={() => nextImage()}
          >
            <i className='fas fa-angle-right text-white text-6xl'></i>
          </button>
        </div>
      </div>
      <div className="col-span-1" onClick={() => nextImage()}>
        <img 
          src={images[(currentImage + 1) % images.length].src}
          alt={images[currentImage].alt}
          className="opacity-50 h-full w-full object-cover"
        />
      </div>
    </>) : 
    <>
      <div className="col-span-3 flex justify-center items-center">
          <div className="relative h-[400px] w-full">
            <button
              className="absolute top-0 bottom-0  left-1 z-1"
              onClick={() => previousImage()}
            >
            <i className='fas fa-angle-left text-white text-6xl'></i>
            </button>
            <img
              src={images[currentImage].src}
              alt={images[currentImage].alt}
              className="h-full w-full object-cover"
            />
            <button
              className="absolute top-0 bottom-0 right-1 z-1"
              onClick={() => nextImage()}
            >
              <i className='fas fa-angle-right text-white text-6xl'></i>
            </button>
          </div>
        </div>
    </>}
  </div>
</div>
  );
};

export default Slider;


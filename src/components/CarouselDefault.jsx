import React, { useEffect, useState } from "react";

const CarouselDefault = () => {
  const [carouselImages, setCarouselImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/carousel/")
      .then((response) => response.json())
      .then((data) => setCarouselImages(data));

    const interval = setInterval(() => {
      if (!isPaused) {
        goToNextSlide();
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1,
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative z-10 h-auto w-full object-cover">
      <div
        className="relative z-0 h-[calc(100vh-156px)] w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="z-0 flex h-full w-full transition-transform duration-500 md:h-fit"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {carouselImages.map((image, index) => (
            <img
              key={index}
              src={image.image}
              alt={`Slide ${index}`}
              className="z-0 h-auto w-auto"
            />
          ))}
        </div>
      </div>

      <button
        className="prev-next absolute left-4 top-1/2 z-10 -translate-y-1/2 transform rounded-sm"
        onClick={goToPrevSlide}
      >
        &#8592;
      </button>
      <button
        className="prev-next absolute right-4 top-1/2 z-10 -translate-y-1/2 transform rounded-sm"
        onClick={goToNextSlide}
      >
        &#8594;
      </button>

      <div className="absolute bottom-2 left-1/2 z-0 flex -translate-x-1/2 transform space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full ring-2 ring-white ${
              currentIndex === index
                ? "bg-red-700"
                : "bg-red-200 hover:bg-gray-500"
            } z-0`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CarouselDefault;

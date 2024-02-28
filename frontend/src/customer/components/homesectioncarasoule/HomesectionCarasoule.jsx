import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import HomesectionCard from "../homesectioncard/HomesectionCard";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function HomesectionCarasoule({ data, heading }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };
  const items = data.map((item) => {
    return <HomesectionCard data={item} />;
  });

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
    carouselRef.current.slidePrev();
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
    carouselRef.current.slideNext();
  };

  return (
    <div className="px-4 lg:px-8">
      <h2 className="text-gray-800 font-extrabold text-start text-xl">
        {heading}
      </h2>
      <div className="relative p-5">
        {currentIndex !== 0 && (
          <Button
            variant="contained"
            onClick={handlePrevSlide}
            className="z-50"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              bgcolor: "white",
              transform: "translateX(-50%) rotate(90deg)",
            }}>
            <ArrowForwardIosIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}
        <AliceCarousel
          items={items}
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
          activeIndex={currentIndex}
          ref={carouselRef}
        />
        {currentIndex !== items.length - 5 && (
          <Button
            variant="contained"
            className="z-50"
            onClick={handleNextSlide}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              bgcolor: "white",
              transform: "translateX(50%) rotate(90deg)",
            }}>
            <ArrowForwardIosIcon
              sx={{ transform: "rotate(-90deg)", color: "black" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
}

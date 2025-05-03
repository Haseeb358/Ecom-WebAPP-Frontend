import React from "react";
import { Carousel } from "@material-tailwind/react";

export default function Carousell() {
  return (
    <div className="h-[85vh] p-5">
      <Carousel
        autoplay={true}
        autoplayDelay={2000}
        className="rounded-xl"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <img
          src="https://res.cloudinary.com/drydjzval/image/upload/v1725028100/cr1_1_xrpmoc.jpg"
          className="h-full w-full object-cover"
        />
        <img
          src="https://res.cloudinary.com/drydjzval/image/upload/v1725028092/cr3_1_i1otpx.jpg"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src="https://res.cloudinary.com/drydjzval/image/upload/v1725028097/cr2_1_xj6lkf.jpg"
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </div>
  );
}

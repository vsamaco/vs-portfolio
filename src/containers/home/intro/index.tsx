import React from "react";
import { Pagination } from "swiper/modules";
import "swiper/scss/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Intro from "@/components/intro/index";
import HomeData from "@/data/home.json";

const IntroContainer = () => {
  const swiperOption = {
    modules: [Pagination],
    loop: true,
    speed: 750,
    spaceBetween: 0,
    slidesPerView: 1,
    pagination: { clickable: true },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  };
  return (
    <div className="intro-slider-wrap">
      <Swiper effect="fade" className="intro-slider" {...swiperOption}>
        {HomeData[0].slider &&
          HomeData[0].slider.map((single, key) => {
            return (
              <SwiperSlide key={key}>
                <Intro data={single} key={key} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default IntroContainer;

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

import "./SwiperStyles.css";
// import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

function Swiperr() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="sliderr container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper">
        <SwiperSlide>
          <img
            src="https://images.uzum.uz/cfb4jool08k0o9qimhbg/main_page_banner.jpg"
            alt="banner"
            height={350}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.uzum.uz/cfb4jool08k0o9qimhbg/main_page_banner.jpg"
            alt="banner"
            height={350}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.uzum.uz/cfb4jool08k0o9qimhbg/main_page_banner.jpg"
            alt="banner"
            height={350}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.uzum.uz/cfb4jool08k0o9qimhbg/main_page_banner.jpg"
            alt="banner"
            height={350}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.uzum.uz/cfb4jool08k0o9qimhbg/main_page_banner.jpg"
            alt="banner"
            height={350}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.uzum.uz/cfb4jool08k0o9qimhbg/main_page_banner.jpg"
            alt="banner"
            height={350}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.uzum.uz/cfb4jool08k0o9qimhbg/main_page_banner.jpg"
            alt="banner"
            height={350}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.uzum.uz/cfb4jool08k0o9qimhbg/main_page_banner.jpg"
            alt="banner"
            height={350}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.uzum.uz/cfb4jool08k0o9qimhbg/main_page_banner.jpg"
            alt="banner"
            height={350}
          />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}
export default Swiperr;

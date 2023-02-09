import React from "react";
import Hero from "../Components/Hero";
import Main from "../Components/Main";
import { SwiperSlider } from "../Components/Halpers/Swiper";
export default function Home() {
  return (
    <div>
      <Hero />
      <Main />
      <SwiperSlider/>
    </div>
  );
}

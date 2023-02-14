import React, { useState } from "react";
// import Hero from "../Components/Hero";
import Main from "../Components/Main";
import { SwiperSlider } from "../Components/Halpers/Swiper";
export default function Home() {
  const [lang, setLang] = useState("Uz");
  return (
    <div> 
      <Main />
      <SwiperSlider/>
    </div>
  );
}

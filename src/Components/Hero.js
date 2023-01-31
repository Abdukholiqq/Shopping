import { useState, useEffect } from "react"; 
const Hero = () => {
    return (
      <div className="mb-4">
        <div className="d-flex justify-content-center  gap-5 pt-5 pb-3">
          <a href="">Home</a>
          <a href="">Men's clothing</a>
          <a href="">Women's clothing </a>
          <a href="">Jewelery </a>
          <a href="">Electronics</a>
        </div>
        <img
          src="	https://shoptextile.uz/image/cache/catalog/image/cache/catalog/slider/Sale%2050-825x520.webp"
          alt="skidka" height={300} 
        />
      </div>
    );
};
export default Hero;

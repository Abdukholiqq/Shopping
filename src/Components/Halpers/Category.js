import React, { useContext, useEffect, useState } from "react";
import { languageContext } from "../../App";
import Swiperr from "./Swiper";

const Category = ({ setCard }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, []);

  const categoryHandler = (category) => {
    fetch(
      category === "all"
        ? "https://fakestoreapi.com/products/"
        : "category/" + category
    );
    fetch(
      category === "all"
        ? "https://fakestoreapi.com/products/"
        : "https://fakestoreapi.com/products/category/" + category
    )
      .then((res) => res.json())
      .then((json) => setCard(json));
  };
  const lang = useContext(languageContext) 
  return (
    <div> 
      <ul className="d-flex justify-content-evenly   pt-2 mt-2 gap-5">
        <li onClick={() => categoryHandler("all")} className="text-primary li"> 
          {lang === "Uz"
            ? "Barcha Mahsulotlar"
            : lang === "Ru"
            ? "Bce продукты"
            : lang === "En"
            ? "Products"
            : "Barcha Mahsulotlar"}
        </li>
        {categories.map((category, i) => (
          <li
            onClick={() => categoryHandler(category)}
            className="text-primary li" 
            key={i}>
            {category}
          </li>
        ))}
      </ul>
      <Swiperr></Swiperr>
    </div>
  );
};
export default Category;

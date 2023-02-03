import React, { useState, useEffect } from "react";
import Category from "./Halpers/Category";
import svg from "../star-regular.svg";
const Main = () => {
  useEffect(() => {
    //   https://api.escuelajs.co/api/v1/products/
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);
  const [card, setCard] = useState([]);

  return (
    <div>
      <Category setCard={setCard}/>
      <div className="d-flex justify-content-between container flex-wrap gap-3">
        {card.map((item) => {
          return (
            <div
              key={item.id}
              className="card w-25 p-2  d-flex justify-content-between flex-column">
              <img src={item.image} alt="image" height={350} />
              <h5 className="mt-2">{item.title}</h5>
              <div className="stars d-flex justify-content-center mt-2 mb-2 gap-1 ">
                <img src={svg} alt="star" width={20} height={20} />
                <img src={svg} alt="star" width={20} height={20} />
                <img src={svg} alt="star" width={20} height={20} />
                <img src={svg} alt="star" width={20} height={20} />
                <img src={svg} alt="star" width={20} height={20} />
                <h6 className="text-danger ms-3">
                  <del> {item.price - 5}$ </del>
                </h6>
              </div>

              <h6 className="text-primary">{item.price}$</h6>
              <button className="btn  bg-primary text-warning">Buy Now</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Main;

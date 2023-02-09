import React, { useState, useEffect } from "react";
import Category from "./Halpers/Category";

import { json, Link, useParams } from "react-router-dom";
import Stars from "./Halpers/Stars";
const Main = () => {
  const [card, setCard] = useState([]);
  const [rating, setRating] = useState({});
  const [paramm , setParam]= useState()
  const { productId } = useParams(); 
  useEffect(() => {
    //   https://api.escuelajs.co/api/v1/products/
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) =>
      //  {
        //    const list = Object.keys(data.rating).reduce((acc, key) => {
          //     acc[key] = data.rating[key];
          //     return acc;
          //   }, {});
          //   setCard(data)
          //    setRating(list)
          // }
          setCard(data)
  );
  }, []);
// console.log(paramm)
 
  return (
    
    <div>
      <div className="d-flex justify-content-between container flex-wrap gap-3">
        {card.map((item) => {
          //  const url = item.title.replace(/\s+/g, "-");
          // console.log(item.id)
        //  setParam(item.id)
          return (
            <div
              key={item.id}
              className="card w-25 p-2  d-flex justify-content-between flex-column">
              <img src={item.image} alt="image" height={350} />
              {/* <Link to={"https://fakestoreapi.com/products/" + item.title}> */}
              <h5 className="mt-2">{item.title}</h5>
              {/* </Link> */}

              <div className="stars d-flex justify-content-center mt-2 mb-2 gap-1 ">
                <Stars />

                <del className="text-danger ms-3">
                  {Math.ceil(item.price + 6)}.9${" "}
                </del>
              </div>

              <h6 className="text-primary">{item.price}$</h6>
              <Link to={"/products/" + item.id}>
              
                <button className="btn form-control bg-primary text-white">
                  Read More
                </button>
              </Link>
            </div>
          );
        }) }
      </div>
    </div>
  );
};
export default Main;

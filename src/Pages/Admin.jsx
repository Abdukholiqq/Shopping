import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Category from "../Components/Halpers/Category";
import svg from "../star-regular.svg";
const Admin = () => {
  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { 
    })
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);
  const [card, setCard] = useState([]);

  return (
    <div>
      {/* <Category setCard={setCard} /> */}
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
                  <del> {Math.ceil(item.price + 6)}.9$ </del>
                </h6>
              </div>

              <h6 className="text-primary">{item.price}$</h6>
              <div className="btns ">
                <button onClick={()=>{
                  fetch("https://fakestoreapi.com/products/" + item.id, {
                    method: "DELETE",
                    headers: { 
                      "Content-Type": "application/json",
                    },
                  })
                    .then((res) => res.json())
                    .then((dat) => console.log(dat));
                }} className="btn bg-danger text-white">Delete</button>
                <button className="btn bg-info ms-2 text-white">Update</button>
              </div>
            </div>
          );

        })}
      </div>
    </div>
  );
};
export default Admin;

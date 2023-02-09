import { logDOM } from "@testing-library/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import Stars from "../Components/Halpers/Stars";


export default function Singlepage() {
  const {productId} = useParams(); 
  const [json, setSingle] = useState([]);
  const [rating, setRating] = useState({});
  // console.log(productId)
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`).then((json) => {
        // const list = Object.keys(json.rating).reduce((acc, key) => {
        //   acc[key] = json.rating[key];
        //   return acc;
        // }, {});

        setSingle(json);
        // setRating(list)
      });
  }, [productId]); 
  
// console.log(json.id)
  return (
    <div className="container text-start">
      <div key={json.id} className="shadow mt-5  d-flex gap-5 p-3">
        <img src={json.image} alt="image" height={450} />
        <div className="w-50 px-5">
          <h1>{json.title}</h1>

          <h4><Stars/></h4>
          {/* <h4>Comment {rating.count}</h4> */}
          <del className="text-danger"> {Math.ceil(json.price + 6)}.9$ </del>
          <h4> {json.price} $</h4>
          <h6 className="text-secondary">
            {Math.ceil(json.price * 0.1)}.55$ / 12 Mounth
          </h6>
          <div className="d-flex gap-3 text-primary ">
            <h4>Status :</h4>
            <h6 className="mt-1 text-success">● Available for sale</h6>
            <div className="links"></div>
            </div>
            <div className="btns d-flex gap-3 ">
              <button className="btn bg-primary text-white">Muddatli to'lov</button>
              <button className="btn bg-primary text-white">Savatga Qo'shish</button>
              <button className="btn bg-primary text-white"> Sotib olish</button>
          </div>
        </div>
      </div>
      <div className="w-50 mt-5">
        <h2 className="text-start">Product description</h2>
        <h5 className="text-start my-3">{json.description}</h5>
      </div>
    </div>
  );
}

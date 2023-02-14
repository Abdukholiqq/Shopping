import { logDOM } from "@testing-library/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import EventsLoader from "../Components/Halpers/Loaderr";
import Stars from "../Components/Halpers/Stars";

export default function Singlepage() {
  const { name } = useParams();
  const [json, setSingle] = useState([]);
  const [rating, setRating] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    const getdata = async () => {
      const data = await axios.get(`https://fakestoreapi.com/products/${name}`);
{   
setLoading(false)
  setSingle(data.data);
}
    };

    getdata();
  }, [name]);

   if (loading) {
     return (
       <div className="d-flex container justify-content-center">
         <EventsLoader />
       </div>
     );
   }
  return (
    <div className="container text-start">
      <div key={json.id} className="shadow mt-5  d-flex gap-5 p-3">
        <img src={json.image} alt="image" height={300} width={250}/>
        <div className="w-50 px-5 d-flex flex-column justify-content-around">
          <h1>{json.title}</h1>

          <h4>
            <Stars />
          </h4>
          <h4>Comment {json.rating?.count}</h4>
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
            <button className="btn bg-primary text-white">
              Muddatli to'lov
            </button>
            <button className="btn bg-primary text-white">
              Savatga Qo'shish
            </button>
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

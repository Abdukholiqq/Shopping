import React, { useMemo, useState, useEffect } from "react";
import Category from "./Halpers/Category";

// // import { useMemo } from "react";
import Pagination from "./Pagination";
// let PageSize = 10
// const [currentPage, setCurrentPage] = useState(1);

// // pagination
// const currentTableData = useMemo(() => {
//   const firstPageIndex = (currentPage - 1) * PageSize;
//   const lastPageIndex = firstPageIndex + PageSize;
//   return card.slice(firstPageIndex, lastPageIndex);
// }, [currentPage]);

import hard from "../assets/images/hard.svg";
// import hardRed from "../assets/images/hard-red.svg";

import { json, Link, useNavigate, useParams } from "react-router-dom";
import Stars from "./Halpers/Stars";
import { usePagination } from "./usePagination";
import EventsLoader from "./Halpers/Loaderr";

const Main = () => {
   const [card, setCard] = useState([]);
   const [rating, setRating] = useState({});
   const [paramm, setParam] = useState();
   const { productId } = useParams();
   const navigate = useNavigate();
   const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  let PageSize = 4;
  // // pagination
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return card.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, card]);

  //  pagination
 
  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        //  {
        //    const list = Object.keys(data.rating).reduce((acc, key) => {
        //     acc[key] = data.rating[key];
        //     return acc;
        //   }, {});
        //   setCard(data)
        //    setRating(list)
        // }
        setLoading(false);
        setCard(data);
      });
  }, []);
  if (loading) {
    return (
      <div className="d-flex container flex-wrap">
        <EventsLoader />
        <EventsLoader />
        <EventsLoader />
        <EventsLoader />
        <EventsLoader />
        <EventsLoader />
      </div>
    );
  }
  <Pagination
    className="pagination-bar"
    currentPage={currentPage}
    totalCount={card.length}
    pageSize={PageSize}
    onPageChange={(page) => setCurrentPage(page)}
  />;
  return (
    <div className="container">
      <Category setCard={setCard} />
      <div className="d-flex justify-content-around container flex-wrap gap-2 ">
        {currentTableData.map((item) => {
          //  const url = item.title.replace(/\s+/g, "-"); 
          //  setParam(item.id)
          return (
            <div
              key={item.id}
              style={{ width: 310 }}
              className="card p-2 mb-2 d-flex justify-content-between flex-column position-relative">
              <img src={item.image} alt="image" height={350} width={280} />
              <div className="position-absolute top-0 end-0 pe-2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKOllBrKLZPFZL6dMeF4i6yI8rBy05MkU4vw&usqp=CAU"
                  alt="favourites"
                  width={25}
                  height={40}
                />
              </div>
              <div className="position-absolute end-0 pt-4 pe-2">
                <img src={hard} alt="favourites" />
              </div>
              <h5 className="mt-2">{item.title}</h5>

              <div className="stars d-flex justify-content-center mt-2 mb-2 gap-1 ">
                <Stars />

                <del className="text-danger ms-3">
                  {Math.ceil(item.price + 6)}.9$
                </del>
              </div>

              <h6 className="text-primary">{item.price}$</h6>
              <button
                className="btn form-control bg-primary text-white"
                onClick={() => navigate(`/products/${item.id}`)}>
                Read More
              </button>
            </div>
          );
        })}
        <div>
        </div>
      </div>
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={card.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
    </div>
  );
};
export default Main;

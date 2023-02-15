import React, { useState, useEffect, useContext } from "react"; 
import Category from "../Components/Halpers/Category"; 
import Stars from "../Components/Halpers/Stars";
import EventsLoader from "../Components/Halpers/Loaderr";
import Login from "./Login";
import { AuthContext } from "../Context/AuthContext";

const Admin = () => {
  const { user } = useContext(AuthContext); 
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setCard(data);
      });
  }, []);
  const [cards, setCard] = useState([]);
  if (loading) {
    return (
      <div className="container d-flex flex-wrap">
        <EventsLoader />
        <EventsLoader />
        <EventsLoader />
        <EventsLoader />
        <EventsLoader />
        <EventsLoader />
      </div>
    );
  }
  return (
    <div>
      {user?.isLogin ? (
        <>
        <p>Siz Admin paneldasiz</p>
          <Category setCard={setCard} />
          <div className="d-flex justify-content-between container flex-wrap gap-3">
            {cards.map((item) => {
              return (
                <div
                  key={item.id}
                  style={{ width: 200 }}
                  className="card p-2  d-flex justify-content-between flex-column">
                  <img src={item.image} alt="image" height={170} />
                  <h5 className="mt-2">{item.title}</h5>

                  <div className="stars d-flex justify-content-center mt-2 mb-2 gap-1 ">
                    <Stars></Stars>
                    <h6 className="text-danger ms-3">
                      <del> {Math.ceil(item.price + 6)}.9$ </del>
                    </h6>
                  </div>

                  <h6 className="text-primary">{item.price}$</h6>
                  <div className="btns ">
                    <button
                      // onClick={() => {

                      //   const getCard = async ()=> { const datta = await axios.delete(
                      //     `https://fakestoreapi.com/products/${item.id}`
                      //   );
                      //  setCard(datta.data) 
                      //      }
                      //      getCard()
                      // //     const getCard = async () => {
                      // //       const datta = await fetch(
                      // //         `https://63c3b5c0a9085635752b7972.mockapi.io/create/${item.id}`,
                      // //         {
                      // //           method: "DELETE",
                      // //         }
                      // //       )
                      // //         .then((res) => res.json())
                      // //         .then((dat) => {
                      // //           setCard(dat); 
                      // //         });
                      // //     };
                      // }}
                      className="btn bg-danger text-white">
                      Delete
                    </button>
                    <button className="btn bg-info ms-2 text-white">
                      Update
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};
export default Admin;

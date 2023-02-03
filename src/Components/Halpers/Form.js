// import { useState, useEffect } from "react";
// import Input from "./Input";
// import svg from "../../star-regular.svg";

// const Form = (e) => {
//   useEffect(() => {
//     let Title = e.target;
//     let Price = e.target;
//     let Image = e.target;

//     fetch(`https://fakestoreapi.com/products`, {
//       method: "POST",
//       body: JSON.stringify({
//         title: "test product",
//         price: 13.5,
//         description: "lorem ipsum set",
//         image: "https://i.pravatar.cc",
//         category: "electronic",
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => console.log(data));

    
//   }, []);

//   const [data, setdata] = useState([]);

//   const [state, setState] = useState({
//     title: "",
//     price: "",
//     image: "",
//   });
 

//   const onChangehandler = (e) => {
//     console.log("xb");
//     setState({ ...state, [e.target.name]: e.target.value });
//   };

//   const addPost = (e) => {
//     e.preventDefault(); 
//     setdata([...data, { ...state }]);
//     setState({ title: "", price: "", image: "" });
//   };

//   return (
//     //   <div>
//     <form
//       className="card w-50 d-flex flex-column justify-content-around p-2"
//       onSubmit={addPost}>
//       <h3>You can add a new post here</h3>
//       <Input
//         type={"text"}
//         placeholder={"Product name"}
//         name={"title"}
//         defaultValue={state.title}
//         onChangehandler={onChangehandler}
//       />
//       <Input
//         type={"number"}
//         placeholder={"Product price $"}
//         name={"price"}
//         defaultValue={state.price}
//         onChangehandler={onChangehandler}
//       />
//       <Input
//         type={"url"}
//         placeholder={"Product image"}
//         name={"image"}
//         defaultValue={state.image}
//         id={"image"}
//         onChangehandler={onChangehandler}
//       />
//       <Input
//         type={"category"}
//         placeholder={"Category"}
//         name={"category"}
//         defaultValue={state.category} 
//         onChangehandler={onChangehandler}
//       />
//       <button className="btn bg-primary text-white">Add Post</button>
//     </form>

//     //  {/* <div className="d-flex justify-content-between container flex-wrap gap-3">
//     //  {data.map((item) => {
//     //     return (
//     //       <div
//     //         key={item.id}
//     //         className="card w-25 p-2  d-flex justify-content-between flex-column">
//     //         <img src={item.image} alt="image" height={350} />
//     //         <h5 className="mt-2">{item.title}</h5>
//     //         <div className="stars d-flex justify-content-center mt-2 mb-2 gap-1 ">
//     //           <img src={svg} alt="star" width={20} height={20} />
//     //           <img src={svg} alt="star" width={20} height={20} />
//     //           <img src={svg} alt="star" width={20} height={20} />
//     //           <img src={svg} alt="star" width={20} height={20} />
//     //           <img src={svg} alt="star" width={20} height={20} />
//     //           <h6 className="text-danger ms-3">
//     //             <del> {item.price - 5}$ </del>
//     //           </h6>
//     //         </div>

//     //         <h6 className="text-primary">{item.price}$</h6>
//     //         <button className="btn  bg-primary text-warning">Buy Now</button>
//     //       </div>
//     //     );
//     //   })}
//     //  </div> */}

//     // {/* </div> */}
//   );
// };
// export default Form;






// // import React, { useEffect, useRef, useState } from 'react';
// // import './App.css';
// // import { getList, setItem } from '../../services/list';

// // function App() {
// //   const [alert, setAlert] = useState(false);
// //   const [itemInput, setItemInput] = useState('');
// //   const [list, setList] = useState([]);
// //   const mounted = useRef(true);

// //   useEffect(() => {
// //     mounted.current = true;
// //     if(list.length && !alert) {
// //       return;
// //     }
// //     getList()
// //       .then(items => {
// //         if(mounted.current) {
// //           setList(items)
// //         }
// //       })
// //     return () => mounted.current = false;
// //   }, [alert, list])

// //   useEffect(() => {
// //     if(alert) {
// //       setTimeout(() => {
// //         if(mounted.current) {
// //           setAlert(false);
// //         }
// //       }, 1000)
// //     }
// //   }, [alert])

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     setItem(itemInput)
// //       .then(() => {
// //         if(mounted.current) {
// //           setItemInput('');
// //           setAlert(true);
// //         }
// //       })
// //   };

// //   return(
// //     <div className="wrapper">
// //        ...
// //     </div>
// //   )
// // }

// // export default App;
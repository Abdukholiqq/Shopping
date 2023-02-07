import { useState, useEffect } from "react";
import Form from "./Halpers/Form";
import Category from "./Halpers/Category";
const Hero = () => {
  useEffect(() => {
    //   https://api.escuelajs.co/api/v1/products/
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);
  const [card, setCard] = useState([]);
  return (
      <Category setCard={setCard}/>
//     <div className="mb-4">
//       <div className="d-flex justify-content-center  mt-4 gap-5 pt-3 pb-2 fs-3 bg-secondary">
//         <Category></Category> 
//       </div>
//       <div className="d-flex container py-3 gap-2 ">
//         <img
//           className="w-50 rounded-3"
//           src="	https://shoptextile.uz/image/cache/catalog/image/cache/catalog/slider/Sale%2050-825x520.webp"
//           alt="skidka"
//           height={400}
//         />
//         {/* <Form></Form> */}
//       </div>
//     </div>
  );
};
export default Hero;

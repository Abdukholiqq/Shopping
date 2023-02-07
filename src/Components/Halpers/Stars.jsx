import React  from 'react'
 import svg from "../../star-regular.svg"
 const Stars = () => {
    return (
      <div>
        <img src={svg} alt="star" width={20} height={20} />
        <img src={svg} alt="star" width={20} height={20} />
        <img src={svg} alt="star" width={20} height={20} />
        <img src={svg} alt="star" width={20} height={20} />
        <img src={svg} alt="star" width={20} height={20} />
      </div>
    );
 }
 export default Stars;
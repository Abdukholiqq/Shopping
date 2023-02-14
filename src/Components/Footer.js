import { useState, useEffect } from "react";
const Footer = ({lang , setLang}) => {
    return (
      <div>
         
          {lang === "Uz" ? (
            <div>
                
            </div>
          ) : lang === "Ru" ? (
            <div>

            </div>
          ) : lang === "En" ? (
            <div>

            </div>
          ) : (
            <div>

            </div>
          )}
       
      </div>
    );
};
export default Footer;

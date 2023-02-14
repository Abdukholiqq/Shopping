import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { languageContext } from "../App";
import { AuthContext } from "../Context/AuthContext";

const Header = ({lang , setLang}) => {
  const langg = useContext(languageContext) 
  const {user , logOut} = useContext(AuthContext)
const changeLanguage = (e) =>{
  setLang(e.target.value)
} 
  return (
    <div>
      <div className=" container d-flex justify-content-between  align-items-center pt-2">
        <Link to={"/"}>
          <img
            width="100"
            height="35"
            src="https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo.svg"
            alt="logo"
          />
        </Link>
        <div
          className=" d-flex   bg-primary border  rounded-4"
          style={{ width: 500 }}>
          <input
            className="bg-white p-2 w-75 border border-primary rounded-4"
            type="search"
            name="search"
            id="search"
            placeholder={
              lang === "Uz"
                ? "Qidirish ..."
                : lang === "Ru"
                ? "Поиск ..."
                : lang === "En"
                ? "Search ..."
                : "Qidirish ..."
            }
          />
          <label
            htmlFor="search"
            className=" d-flex justify-content-center gap-2 px-2  pt-2  text-light ">
            <img
              width="24"
              height="24"
              className="mx-1"
              src="https://asaxiy.uz/custom-assets/images/search-icon.svg"
              alt="lupa"
            />
            <h5>
              {lang === "Uz"
                ? "Qidirish"
                : lang === "Ru"
                ? "Поиск"
                : lang === "En"
                ? "Search"
                : "Qidirish"}
            </h5>
          </label>
        </div>
        <div className="d-flex justify-content-between  gap-3">
          <Link to={"/main"}>
            <div className="d-flex flex-column align-items-center gap-1">
              <img
                width="25"
                height="24"
                src="https://asaxiy.uz/custom-assets/images/icons/header/payment.svg"
                alt="To'lov"
              />
              <span>
                {lang === "Uz"
                  ? "To'lov"
                  : lang === "Ru"
                  ? "Oплaтa"
                  : lang === "En"
                  ? "Payment"
                  : "To'lov"}
              </span>
            </div>
          </Link>
          <Link to={"/hero"}>
            <div className="d-flex flex-column align-items-center gap-1">
              <img
                width="25"
                height="24"
                src="https://asaxiy.uz/custom-assets/images/icons/header/tracker.svg"
                alt="delivery"
              />
              <span>
                {lang === "Uz"
                  ? "Yetkazish"
                  : lang === "Ru"
                  ? "Доставка"
                  : lang === "En"
                  ? "Delivery"
                  : "Yetkazish"}
              </span>
            </div>
          </Link>

          <div className="d-flex flex-column align-items-center gap-1">
            <img
              width="25"
              height="24"
              src="https://asaxiy.uz/custom-assets/images/icons/header/language.svg"
              alt="language"
            />
            <select
              className="border border-2 rounded-2 text-primary border-primary"
              onChange={changeLanguage}
              name="select"
              id="select">
              <option value="Uz">Uz</option>
              <option value="En">En</option>
              <option value="Ru">Ru</option>
            </select>
          </div>

          <Link to={"/"}>
            <div className="d-flex flex-column align-items-center gap-1">
              <img
                width="25"
                height="24"
                src="https://asaxiy.uz/custom-assets/images/icons/header/cart.svg"
                alt="Savatcha"
              />
              <span>
                {lang === "Uz"
                  ? "Savatcha"
                  : lang === "Ru"
                  ? "Корзина"
                  : lang === "En"
                  ? "Cart"
                  : "Savatcha"}
              </span>
            </div>
          </Link>
          <Link to={"/main"}>
            <div className="d-flex flex-column align-items-center gap-1">
              <img
                width="25"
                height="24"
                src="https://asaxiy.uz/custom-assets/images/icons/header/heart.svg"
                alt="Sevimlilar"
              />
              <span>
                {lang === "Uz"
                  ? "Sevimlilar"
                  : lang === "Ru"
                  ? "Избранное"
                  : lang === "En"
                  ? "Favorites"
                  : "Sevimlilar"}
              </span>
            </div>
          </Link>

          <Link to={"/admin"}>
            <div className="d-flex flex-column align-items-center gap-1">
              <img
                width="28"
                height="24"
                src="https://asaxiy.uz/custom-assets/images/icons/header/avatar.svg"
                alt="Kabinet"
              />
              <span>
                {lang === "Uz"
                  ? "Profil"
                  : lang === "Ru"
                  ? "Профиль"
                  : lang === "En"
                  ? "Profile"
                  : "Profil"}
              </span>
            </div>
          </Link>
          {user?.isLogin ? (
            <button
              className="btn mt-2 text-white bg-primary opacity-75"
              onClick={logOut}>
              LogOut
            </button>
          ) : (
            <Link to={"/admin"}>
              <button className="btn mt-2 text-white p-2 bg-primary">Login</button>
            </Link>
          )}
        </div>
      </div>
      <hr />
    </div>
  );
};
export default Header;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" container d-flex justify-content-between  align-items-center pt-2">
      <Link to={"/"}>
        <img
          width="100"
          height="35"
          src="https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo.svg"
          alt="logo"
        />
      </Link>
      <div className="w-50  d-flex   bg-primary border  rounded-4">
        <input
          className="bg-white p-2 w-75 border border-primary rounded-4"
          type="search"
          name="search"
          id="search"
          placeholder="Search ..."
        />
        <label
          htmlFor="search"
          className=" d-flex justify-content-center gap-2 ps-3  pt-2  text-light ">
          <img
            width="24"
            height="24"
            className="mx-1"
            src="https://asaxiy.uz/custom-assets/images/search-icon.svg"
            alt="lupa"
          />
          Qidirish
        </label>
      </div>
      <div className="d-flex justify-content-between  gap-3">
        <Link to={"/main"}>
          <div className="d-flex flex-column align-items-center  gap-1">
            <img
              width="25"
              height="24"
              src="https://asaxiy.uz/custom-assets/images/icons/header/payment.svg"
              alt="To'lov"
            />
            <span>To'lov</span>
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
            <span>Delivery</span>
          </div>
        </Link>

        <div className="d-flex flex-column align-items-center gap-1">
          <img
            width="25"
            height="24"
            src="https://asaxiy.uz/custom-assets/images/icons/header/language.svg"
            alt="language"
          />
          <select name="select" id="select">
            <option value="Uzb">Uz</option>
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
            <span>Savatcha</span>
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
            <span>Sevimlilar</span>
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
            <span>Kabinet</span>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Header;


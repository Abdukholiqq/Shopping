import { useState, useEffect } from "react";
import logoo from "../logoo.jpg"
const Header = () => {
  return (
    <div className=" container d-flex justify-content-between  align-items-center pt-2">
      <img
        width="88"
        height="54"
        src={logoo}
        alt="logo"
      />
      <div className="w-50 d-flex justify-content-between bg-primary border rounded-3">
        <input
          className="bg-white p-2 w-75 border-0 border-primary rounded-3"
          type="search"
          name="search"
          id="search"
          placeholder="Search ..."
        />
        <label htmlFor="search" className=" me-4 p-2  text-light ">
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
        <a
          className="d-flex flex-column align-items-center  gap-1"
          href="">
          <img
            width="25"
            height="24"
            src="https://asaxiy.uz/custom-assets/images/icons/header/payment.svg"
            alt="To'lov"
          />
          <span>To'lov</span>
        </a>

        <a
          className="d-flex flex-column align-items-center gap-1"
          href="">
          <img
            width="25"
            height="24"
            src="https://asaxiy.uz/custom-assets/images/icons/header/tracker.svg"
            alt="Trek"
          />
          <span>Trek</span>
        </a>

        <a
          className="d-flex flex-column align-items-center gap-1"
          href="">
          <img
            width="25"
            height="24"
            src="https://asaxiy.uz/custom-assets/images/icons/header/language.svg"
            alt="language"
          />
          <select name="select" id="select">
            <option value="Uzb">Uzb</option>
            <option value="Ru">Ru</option>
          </select>
        </a>

        <a
          className="d-flex flex-column align-items-center gap-1"
          href="">
          <img
            width="25"
            height="24"
            src="https://asaxiy.uz/custom-assets/images/icons/header/cart.svg"
            alt="Savatcha"
          />
          <span>Savatcha</span>
        </a>

        <a
          className="d-flex flex-column align-items-center gap-1"
          href="">
          <img
            width="25"
            height="24"
            src="https://asaxiy.uz/custom-assets/images/icons/header/heart.svg"
            alt="Sevimlilar"
          />
          <span>Sevimlilar</span>
        </a>

        <a
          className="d-flex flex-column align-items-center gap-1"
          href="">
          <img
            width="28"
            height="24"
            src="https://asaxiy.uz/custom-assets/images/icons/header/avatar.svg"
            alt="Kabinet"
          />
          <span>Kabinet</span>
        </a>
      </div>
    </div>
  );
};
export default Header;

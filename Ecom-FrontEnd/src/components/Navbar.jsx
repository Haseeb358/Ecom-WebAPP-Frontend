import React, { useState, useContext } from "react";

import SignInButton from "./SignInButton";
import SignUpButton from "./SignUpButton";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";
import profile_icon from "../assets/profile_icon.png";
import cart_icon from "../assets/cart_icon.png";
import logo from "../assets/logo.png";
import menu_icon from "../assets/menu_icon.png";
import { MycartContext } from "../Context/CartContext";
export default function Navbar() {
  let [menu, Setmenu] = useState(true);
  let { cartArray } = useContext(MycartContext);
  function updateState(val) {
    Setmenu(val);
  }

  return (
    <>
      <div className="border-2 flex items-center justify-between p-3 font-medium bg-[#9ACD32] fixed top-0 right-0 left-0 container mx-auto z-10">
        <Link to={""}>
          <img
            src={logo}
            alt="logo"
            className="w-36"
            onClick={() => updateState(true)}
          />
          {/* <h1 className="text-3xl font-bold font-serif">
            DRESS<span className="text-orange-900">-DECENT</span>
          </h1> */}
        </Link>
        <div className="hidden md:block">
          <NavLinks updateState={updateState} />
        </div>
        <div className="flex justify-center items-center gap-5">
          <Link to={"/user-profile"}>
            <img
              src={profile_icon}
              alt="profile icon"
              className="w-5 cursor-pointer"
              onClick={() => updateState(true)}
            />
          </Link>

          <div className="relative">
            <Link to={"/cart"}>
              <img
                src={cart_icon}
                alt="carticon"
                className="w-6 min-w-5 cursor-pointer"
                onClick={() => updateState(true)}
              />
            </Link>
            <Link to={"/cart"}>
              <p
                onClick={() => updateState(true)}
                className=" absolute bottom-[-5px] right-[-5px] w-4 border  rounded-full text-center leading-5  bg-black text-white aspect-square"
              >
                {cartArray.reduce((res, val) => {
                  res = val.Quantity + res;
                  return res;
                }, 0)}
              </p>
            </Link>
          </div>
          <div className="hidden md:block">
            <SignInButton updateState={updateState} />
          </div>
          <div className="hidden md:block">
            <SignUpButton updateState={updateState} />
          </div>
          {menu ? (
            <img
              className="w-5 md:hidden cursor-pointer"
              src={menu_icon}
              alt=""
              onClick={() => Setmenu(false)}
            />
          ) : (
            <span
              onClick={() => Setmenu(true)}
              className="w-5 md:hidden cursor-pointer text-3xl font-mono"
            >
              X
            </span>
          )}
        </div>
        {!menu && (
          <div className="absolute  top-0 right-0 w-full mt-[4.1rem] flex flex-col items-center gap-2 p-3 md:hidden z-50 bg-white">
            <NavLinks updateState={updateState} />
            <div className="flex gap-3">
              <SignInButton updateState={updateState} />
              <SignUpButton updateState={updateState} />
              {/* <button className="border-2 px-3 py-1 hover:bg-gray-300">
                LOGIN
              </button>
              <button className="border-green-500 border-2 px-3 py-1 hover:bg-gray-300 ">
                SignUp
              </button> */}
            </div>
            <hr className="w-[70%] border-none h-[1.5px] bg-gray-600" />
          </div>
        )}
      </div>
    </>
  );
}

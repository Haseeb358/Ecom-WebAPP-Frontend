import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function NavLinks({ updateState }) {
  return (
    <>
      <ul className="h-40 md:h-auto flex flex-col justify-evenly md:flex md:flex-row gap-5 text-[1rem] font-semibold ">
        <li className="" onClick={() => updateState(true)}>
          <NavLink
            to={""}
            className={({ isActive }) =>
              `${
                isActive ? `underline text-orange-900 underline-offset-8` : ""
              }`
            }
          >
            HOME
          </NavLink>
        </li>
        <li className="" onClick={() => updateState(true)}>
          <NavLink
            to={"/products"}
            className={({ isActive }) =>
              `${
                isActive ? `underline text-orange-900 underline-offset-8` : ""
              }`
            }
          >
            PRODUCTS
          </NavLink>
        </li>
        <li className="" onClick={() => updateState(true)}>
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              `${
                isActive ? `underline text-orange-900 underline-offset-8` : ""
              }`
            }
          >
            OTP
          </NavLink>
        </li>
        <li className="" onClick={() => updateState(true)}>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              `${
                isActive ? `underline text-orange-900 underline-offset-8` : ""
              }`
            }
          >
            ABOUT
          </NavLink>
        </li>
      </ul>
    </>
  );
}

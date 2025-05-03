import React from "react";
import { Link } from "react-router-dom";

export default function SignInButton({ updateState }) {
  return (
    <>
      <Link to={"/login"}>
        <button
          onClick={() => updateState(true)}
          className="border-2 border-green-500 px-3 py-2 hover:bg-gray-300 "
        >
          LogIn
        </button>
      </Link>
    </>
  );
}

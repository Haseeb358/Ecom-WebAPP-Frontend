import React from "react";
import { Link } from "react-router-dom";
export default function SignUpButton({ updateState }) {
  return (
    <>
      <Link to={"/signup"}>
        <button
          onClick={() => updateState(true)}
          className="border-2 px-3 py-2 hover:bg-gray-300 "
        >
          SignUp
        </button>
      </Link>
    </>
  );
}

import React, { useState } from "react";

export default function OTP() {
  const [otp, setOtp] = useState(new Array(5).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus on the next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  //  your OTP validation logic
  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");

    // console.log(enteredOtp, " ", typeofenteredOtp);
  };

  //  your Get OTP  logic
  let GetOTPagain = () => {};

  //------------------
  return (
    <div className="mt-20 mb-3 pt-6">
      <div className="flex flex-col gap-6 items-center justify-start min-h-screen bg-gray-100 ">
        <h2 className="text-2xl font-bold mb-4">OTP Verification</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6  rounded shadow-md border-2 border-green-700"
        >
          <div className="flex space-x-2">
            {otp.map((data, index) => (
              <input
                className="w-10 h-10 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                name="otp"
                maxLength="1"
                key={index}
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
                required
              />
            ))}
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Verify OTP
          </button>
        </form>
        <button
          type="submit"
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={() => GetOTPagain()}
        >
          Get OTP Again
        </button>
      </div>
    </div>
  );
}

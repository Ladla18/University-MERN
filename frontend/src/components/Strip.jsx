import { CircleUserRound, Globe, ShoppingCart } from 'lucide-react';
import React, { useState } from 'react'

const Strip = ({ isReg, setisReg }) => {
  const [active, setActive] = useState(false);

  const showOption = () => {
    setActive(!active);
  };
  const signuppage = () => {
    setisReg("loggedinpage");
  };


  return (
    <div className="bg-blue-900 text-white py-3 flex justify-between">
      <div className="contact-num ps-10 roboto-regular">+1(514)312-5678</div>
      <div className="flex pe-10 gap-5">
        <div className="language-selector flex">
          <Globe />
          <select name="" id="" className="bg-transparent roboto-regular">
            <option value="" className="bg-black roboto-regular">
              English
            </option>
            <option value="" className="bg-black">
              French
            </option>
            <option value="" className="bg-black">
              Hindi
            </option>
          </select>
        </div>
        <div className="user-logo cursor-pointer relative" onClick={showOption}>
          <CircleUserRound />
          {active == true ? (
            <div className="absolute p-2 top-9 bg-slate-600">
              <button>Login</button> <br />
              <button onClick={signuppage}>Signup</button>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="cart-icon">
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default Strip
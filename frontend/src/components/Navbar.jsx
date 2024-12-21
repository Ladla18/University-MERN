import { Search } from 'lucide-react';
import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-around items-center mt-5 roboto-medium">
      <div >
        <img src="logo.png" width="150px" alt="" />
      </div>
      <div className='flex gap-5'>
        <select name="" id="">
          <option value="">Home</option>
        </select>
        <select name="" id="">
          <option value="">Courses</option>
        </select>
        <select name="" id="">
          <option value="">Pages</option>
        </select>
        <select name="" id="">
          <option value="">Events</option>
        </select>
        <select name="" id="">
          <option value="">Shop</option>
        </select>
        <select name="" id="">
          <option value="">Blog</option>
        </select>
        <select name="" id="">
          <option value="">Contact</option>
        </select>
      </div>
      <div className="flex justify-between gap-5 items-center">
        <button className='bg-red-700 p-2 text-white'>Application Form</button>
        <Search />
      </div>
    </div>
  );
}

export default Navbar
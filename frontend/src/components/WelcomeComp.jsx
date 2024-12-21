import { Search } from 'lucide-react';
import React from 'react'

const WelcomeComp
 = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-5 mt-10">
        <h1 className="roboto-regular text-red-600">Welcome To AIMT</h1>
        <h2 className="roboto-bold text-7xl w-4/6 text-center ">
          Life the journey get the bright career
        </h2>
      </div>
      <div className="mt-10">
        <form action="" className="flex items-center ">
          <input type="text" className="border p-4 w-[300px] outline-none" name="" id="" />
          <select name="" id="" className="p-4 w-[300px] border outline-none roboto-medium">
            <option value="" className=''>Category Course</option>
            <option value="">BTECH</option>
            <option value="">MTECH</option>
          </select>
          <div className='relative'>
            <button className="bg-red-700 roboto-bold text-white w-[145px] p-4">
              Search
            </button>
            <Search className="absolute  top-4 left-24 text-white" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default WelcomeComp

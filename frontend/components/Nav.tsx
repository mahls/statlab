import React from 'react';
import { FaFlaskVial } from "react-icons/fa6";
import { FiSun } from "react-icons/fi";
import { BsMoonStars } from "react-icons/bs";

const Nav = () => {
  return (
    <div className='bg-stone-900 flex justify-between  rounded-lg p-5 mx-5 mt-5 font-bold border border-stone-700'>
      <div><p className='flex pr-2'>StatLab <FaFlaskVial className='flex text-violet-600'/></p></div>
    </div>
  );
};

export default Nav;

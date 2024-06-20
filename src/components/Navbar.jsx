import React from "react";
import logo from '../assets/airbnb-logo.png';
import { BiWorld, BiUser } from "react-icons/bi";
import { FiMenu, FiSearch } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { FaHouseChimney } from "react-icons/fa6";

const Navbar = () =>{
    return(
        <div className="border-b mx-4 sticky top-0 bg-white">

            <div className="flex justify-between items-center">
            {/* LEFT */}
            <div className="h-20 flex ml-3 justify-center items-center">
                <img src={logo} alt="" className="w-13 h-7 md:w-20 md:h-9 lg:w-full lg:h-11"/>
            </div>
            {/* MIDDLE */}
            <div className="hidden md:flex justify-center items-center relative shadow-md shadow-gray-400 border rounded-full">
                <input type="search" name="" id="" className="py-2.5 w-[20rem] rounded-full outline-0"/>
                <div className="flex justify-between absolute w-full pr-16 pl-6 font-semibold text-gray-600">
                    <button className="w-full">Anywhere</button>
                    <button className="border-l border-x px-6">Any </button>
                    <button className="w-full text-gray-600/60 pl-2">Add guests</button>
                </div>
                <div className="bg-[#ff5a60] p-2 rounded-full mr-2">
                    <FiSearch className="text-white"/>
                </div>
            </div>
            {/* RIGHT */}
            <div className="flex items-center pr-3 font-semibold text-gray-600">
                <div>

                    <p className="text-sm lg:text-md">Airbnb your home</p>
                    {/* <FaHouseChimney /> */}
                </div>
                <div className="flex items-center mx-4 gap-1">

                    <BiWorld className=""/>
                    <div>EN</div>
                </div>
                <div className="flex items-center border px-3 py-2 rounded-full gap-3 text-gray font-bold shadow-lg shadow-gray-300 hover:bg-[#f9787c] duration-100 ease-out">
                    {/* <FiMenu className="text-[19px]"/> */}
                    <p className="text-[10px] hidden md:flex">Sign In</p>
                    {/* <AiOutlineUser className="pr-4 text-black"/> */}
                    <BiUser className="text-[19px]" />
                </div>
            </div>
        </div>
        </div>
    )
};

export default Navbar;
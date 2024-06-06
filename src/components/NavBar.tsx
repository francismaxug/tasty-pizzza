import React from "react"
import { IoIosSearch } from "react-icons/io"
import NavLinks from "@/components/NavLinks"


const NavBar = () => {
  return (
    <nav className=" border-b py-1 pb-[0.4rem] flex justify-between items-center bg-white z-30 sticky top-0 left-0 right-0">
      <h1 className=" font-bold text-[1.2rem] text-slate-600 ">Home</h1>
      <NavLinks />
      <div className=" flex gap-x-1 w-[10rem] justify-center border-black/5 items-center rounded-full bg-[#e4e4e4] border-2 px-1 py-[0.2rem]">
        <IoIosSearch className=" text-[#808080]" />
        <input
          type="text"
          placeholder="Search menu here..."
          className=" placeholder:text-[#929292] bg-[#e4e4e4] border-none outline-none text-[0.65rem] w-[7rem] h-full p-1"
        />
      </div>
    </nav>
  )
}

export default NavBar

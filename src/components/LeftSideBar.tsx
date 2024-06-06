import React from "react"
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md"
import { LuLayoutGrid } from "react-icons/lu"
import { GoHomeFill } from "react-icons/go"
import { IoMdPerson } from "react-icons/io"
import { FiLayout } from "react-icons/fi"
import { IoSettingsOutline } from "react-icons/io5"
import Image from "next/image"

const LeftSideBar = () => {
  return (
    <nav className=" border-r ">
      <div className=" flex flex-col gap-y-3 items-center justify-center px-1 sticky top-4">
        <div className=" flex flex-col gap-y-3 items-center">
          <MdOutlineKeyboardDoubleArrowRight className=" text-blue-400 text-2xl ml-5" />
          <div>
            <Image
              src="/pizzas/logo0.png"
              width={500}
              height={500}
              alt="logo"
              className=" w-16 h-10 bg-transparent"
            />
          </div>
          <div className=" bg-blue-500 p-[0.7rem] rounded">
            <GoHomeFill className=" text-white" />
          </div>
          <div className=" bg-[#e4e4e4] p-[0.7rem] rounded">
            <LuLayoutGrid className=" text-[#929292]" />
          </div>
          <div className=" bg-[#e4e4e4] p-[0.7rem] rounded">
            <IoMdPerson className="text-[#929292]" />
          </div>
          <div className=" bg-[#e4e4e4] p-[0.7rem] rounded">
            <FiLayout className=" text-[#929292]" />
          </div>
        </div>
        <div className="  p-[0.7rem] rounded mt-44 fixed bottom-3">
          <IoSettingsOutline className=" text-gray-400 animate-spin text-2xl" />
        </div>
      </div>
    </nav>
  )
}

export default LeftSideBar

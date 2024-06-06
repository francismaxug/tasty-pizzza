import React from "react"
import LeftSideBar from "@/components/LeftSideBar"
import Image from "next/image"
import { TableDemo } from "@/components/TableDemo"
import NavLinks from "@/components/NavLinks"
const Summary = () => {
  return (
    <div className=" grid grid-cols-[63px_1fr] max-w-[50em] mx-auto border  h-full bg-white rounded-lg  ">
      <LeftSideBar />
      <div className="p-3">
        <nav className=" border-b py-1 pb-[0.4rem] flex justify-between items-center bg-white z-30 sticky top-0 left-0 right-0">
          <h1 className=" font-bold text-[1.2rem] text-slate-600 ">
            Shift summary
          </h1>
          <NavLinks />
          <div className=" flex gap-x-4">
            <div className=" flex justify-center text-blue-500 items-center rounded bg-[#ede7ee] hover:bg-[#f1ebeb] cursor-pointer  text-xs py-[0.5rem] px-4">
              Print report
            </div>
            <div className=" flex justify-center text-white items-center rounded bg-blue-500 hover:bg-blue-600 cursor-pointer  text-xs py-[0.4rem] px-6">
              Exit shift
            </div>
          </div>
        </nav>
        <div className=" flex justify-between items-center">
          <div className=" mt-4 flex gap-x-3 items-center">
            <div className="size-10 relative flex items-center justify-center  rounded-full border cursor-pointer ">
              <Image
                alt="profile"
                src="/pizzas/pro.jpg"
                width={500}
                height={500}
                quality={80}
                className=" w-full h-full object-fill object-center rounded-full"
              />
            </div>
            <h1 className=" font-bold text-[1.1rem] text-slate-600 ">
              Mr. Francis
            </h1>
            <p className=" text-xs">Wed, 6 June</p>
            <p className=" text-xs">6:30 PM - 8:30 PM</p>
          </div>
          <p className="text-xs text-blue-500">08:30:06 PM</p>
        </div>
        <div className="grid  grid-cols-1  sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-3 mt-3">
          <div className="border bg-white  border-gray-300 rounded-sm dark:border-gray-600 h-32 md:h-20 px-3 py-2">
            <div className="text-[0.85rem]">Working hours</div>
            <div className=" text-[1.2rem] mt-2 text-blue-600 font-semibold">
              6h45min
            </div>
          </div>
          <div className="border bg-white   rounded-sm border-gray-300 dark:border-gray-600 h-32 md:h-20 px-3 py-2 ">
            <div className="text-[0.85rem]">Cash sale</div>
            <div className=" text-[1.2rem] mt-2 text-blue-600 font-semibold">
              5678 EGP
            </div>
          </div>
          <div className="border bg-white  rounded-sm border-gray-300 dark:border-gray-600 h-32 md:h-20 px-3 py-2">
            <div className="text-[0.85rem]">Credit sales</div>
            <div className=" text-[1.2rem] mt-2 text-blue-600 font-semibold">
              6678 EGP
            </div>
          </div>
          <div className="border  bg-white rounded-sm border-gray-300 dark:border-gray-600 h-32 md:h-20 px-3 py-2">
            <div className="text-[0.85rem]">Total orders</div>
            <div className=" text-[1.2rem] mt-2 text-blue-600 font-semibold">
              89
            </div>
          </div>
        </div>

        <TableDemo />
      </div>
    </div>
  )
}

export default Summary

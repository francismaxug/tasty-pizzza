import Image from "next/image"
import React from "react"
import { MdDelete } from "react-icons/md"
import { PiPencilLineFill } from "react-icons/pi"

const RigthSideBar = () => {
  return (
    <nav className=" border-l  ">
      <div className=" flex flex-col gap-y-3 px-2 sticky top-4  bottom-0  ">
        <div className=" border-b py-1 ">
          <p className=" font-bold text-[1.2rem] text-slate-600 ">
            Order details
          </p>
        </div>
        <div className=" w-full rounded-full grid grid-cols-2 border-2 border-black/5 ">
          <div className=" px-5 bg-blue-500 py-2 flex justify-center text-white rounded-full text-xs">
            Dien in
          </div>
          <div className=" px-5 py-2 rounded-full text-xs text-[#929292]">
            Takeaway
          </div>
        </div>
        <div className=" -mt-3">
          <p className="text-[0.9rem] font-bold text-slate-600 mb-3 mt-3">
            Order details
          </p>
          <div className=" px-1  rounded border-2 border-black/5">
            <div className=" flex justify-between items-center py-2 btn text-[0.8rem] text-[#929292]">
              <p>Order ID</p>
              <p className="text-[#3f3f3f]">#345768</p>
            </div>
            <div className=" flex justify-between items-center py-2  text-[0.8rem] text-[#929292]">
              <p>Date</p>
              <p className="text-[#3f3f3f]">April 28, 2024</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-[0.9rem] font-bold text-slate-600 mb-3 mt-3  flex items-center">
            Items{" "}
            <span className=" rounded-full w-4 h-4 flex items-center ml-2 justify-center bg-orange-200 text-[0.65rem]">
              4
            </span>
          </p>

          <div className=" px-1 py-1  rounded border-2 border-black/5 space-y-2">
            <div className=" flex justify-between items-center ">
              <div className=" flex gap-x-2">
                <div>
                  <Image
                    quality={80}
                    width={1000}
                    height={1000}
                    src="/pizzas/p-3.jpg"
                    alt="pizza"
                    className=" w-[4rem] h-[4rem] object-cover rounded"
                  />
                </div>
                <div className=" space-y-1">
                  <p className="text-[0.8rem] font-bold text-slate-600">
                    Beef bugger
                  </p>
                  <div className=" flex items-center gap-x-1">
                    <p className="text-[0.7rem]  text-slate-600">Extra:</p>
                    <p className="text-[0.6rem] font-bold text-slate-400">
                      Mustard
                    </p>
                  </div>
                  <div className=" flex items-center gap-x-1">
                    <p className="text-[0.7rem]  text-slate-600">Note:</p>
                    <p className="text-[0.6rem] font-bold text-slate-400">
                      No cheese
                    </p>
                  </div>
                </div>
              </div>

              <div className=" flex flex-col gap-y-2 ">
                <div className=" rounded-full w-5 h-5 flex items-center ml-2 justify-center bg-orange-100/50 text-[0.65rem]">
                  <PiPencilLineFill className=" text-xs text-blue-600" />
                </div>
                <div className=" rounded-full w-5 h-5 flex items-center ml-2 justify-center bg-orange-100/50 text-[0.65rem]">
                  <MdDelete className=" text-xs text-red-500" />
                </div>
              </div>
            </div>
            <div className=" flex justify-between items-center pt-2">
              <div className=" flex items-center gap-x-2">
                <p className=" rounded-full w-4 h-4 flex items-center  justify-center bg-gray-200 text-[0.65rem]">
                  -
                </p>
                <p className=" text-xs">2</p>
                <p className=" rounded-full w-4 h-4 flex items-center justify-center bg-blue-500 text-[0.65rem]">
                  +
                </p>
              </div>
              <p className=" text-xs font-semibold">250 L.E</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" fixed bottom-1 z-30 bg-white px-2 py-1 border-2 w-[16rem] rounded-t-xl border-black/5 shadow-xl ">
        <div className=" px-1  rounded border-2 border-black/5 mb-2">
          <div className=" py-2 btn text-[0.8rem] text-[#929292] space-y-1">
            <div className=" flex justify-between items-center">
              <p>Subtotal</p>
              <p className="text-[#313131] font-semibold">850L.E</p>
            </div>
            <div className=" flex justify-between items-center">
              <p>Tax 5%</p>
              <p className="text-[#2f2f2f] font-semibold">8.75L.E</p>
            </div>
          </div>
          <div className=" flex justify-between items-center py-2  text-[0.8rem] text-[#929292]">
            <p>Total Amount</p>
            <p className="text-[#2a2a2a] font-semibold">858.75 L.E</p>
          </div>
        </div>
        <button className=" text-xs bg-blue-500 hover:bg-blue-600 rounded text-center py-[0.7rem] w-full">
          Continue
        </button>
      </div>
    </nav>
  )
}

export default RigthSideBar

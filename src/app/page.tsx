import LeftSideBar from "@/components/LeftSideBar"
import NavBar from "@/components/NavBar"
import RigthSideBar from "@/components/RighSideBar"
import { CiBurger } from "react-icons/ci"
import { PiPizzaLight } from "react-icons/pi"
import { RiDrinks2Fill } from "react-icons/ri"
import { LiaHamburgerSolid } from "react-icons/lia"
import { GiDrinkMe } from "react-icons/gi"
import Pizzas from "@/components/Pizzas"
import NavLinks from "@/components/NavLinks"
import Link from "next/link"
const Home = () => {
  return (
    <div className=" grid grid-cols-[63px_1fr_320px] max-w-[61rem] mx-auto border relative  h-full bg-white rounded-lg shadow-inner ">
      <LeftSideBar />
      <div className="p-3">
        <NavBar />

        <div className=" py-4 border-b bg-white z-30 sticky top-[2.738rem]  left-0 right-0">
          <h1 className=" text-xs font-bold text-slate-600 mb-3">Categories</h1>
          <div className=" flex gap-x-[0.55rem] gap-y-2 items-center  flex-wrap">
            <Link
              href="#"
              className=" rounded-full py-1 border-2 border-black/5 px-4 text-xs  bg-blue-500 text-white"
            >
              All
            </Link>
            <Link
              href="#"
              className=" rounded-full group flex border-2 border-black/5 hover:text-white duration-300 transition-all ease-in-ou hover:bg-blue-400 items-center gap-x-1 justify-center py-1 px-4 bg-[#e4e4e4] text-xs text-[#929292]"
            >
              <CiBurger className=" text-[#929292] inline-block  text-[0.9rem] group-hover:text-white " />
              <p>Burger</p>
            </Link>
            <Link
              href="#"
              className=" rounded-full group flex border-2 border-black/5 hover:text-white duration-300 transition-colors ease-in-ou hover:bg-blue-400 items-center gap-x-1 justify-center py-1 px-4 bg-[#e4e4e4] text-xs text-[#929292]"
            >
              <PiPizzaLight className=" text-[#929292] inline-block  text-[0.9rem] group-hover:text-white " />
              <p>Pizza</p>
            </Link>
            <Link
              href="#"
              className="  rounded-full group flex border-2 border-black/5 hover:text-white duration-300 transition-colors ease-in-ou hover:bg-blue-400  items-center gap-x-1 justify-center py-1 px-4 bg-[#e4e4e4] text-xs text-[#929292]"
            >
              <RiDrinks2Fill className=" text-[#929292] inline-block  text-[0.9rem] group-hover:text-white " />
              <p>Drink</p>
            </Link>
            <Link
              href="#"
              className=" rounded-full flex group border-2 border-black/5 hover:text-white duration-300 transition-colors ease-in-ou hover:bg-blue-400 items-center gap-x-1 justify-center py-1 px-4 bg-[#e4e4e4] text-xs text-[#929292]"
            >
              <LiaHamburgerSolid className=" text-[#929292] inline-block  text-[1rem] group-hover:text-white " />
              <p>Desert</p>
            </Link>
            <Link
              href="#"
              className="  rounded-full flex group border-2 border-black/5 duration-300 transition-colors ease-in-out hover:text-white hover:bg-blue-400 items-center gap-x-1 justify-center py-1 px-4 bg-[#e4e4e4] text-xs text-[#929292]"
            >
              <GiDrinkMe className=" text-[#929292] inline-block  text-[0.9rem]  group-hover:text-white  " />
              <p>Appetizer</p>
            </Link>
          </div>
        </div>
        <Pizzas />
      </div>
      <RigthSideBar />
    </div>
  )
}
export default Home

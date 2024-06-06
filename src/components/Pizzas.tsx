import { Burger, MostPopularPizzas } from "@/lib/loops"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const Pizzas = () => {
  return (
    <div>
      <div className=" py-3">
        <div>
          <h1 className="text-[0.9rem] font-bold text-slate-600 mb-3">
            Most popular
          </h1>
          <div className=" grid grid-cols-5">
            {MostPopularPizzas.map((pizza, index) => (
              <Link
                href="#"
                key={index}
                className=" flex flex-col gap-y-1 items-center group"
              >
                <div className="group rounded-lg overflow-hidden w-[5rem] h-[5rem]">
                  <Image
                    quality={80}
                    width={1000}
                    height={1000}
                    src={pizza.image}
                    alt={pizza.name}
                    className=" w-[5rem] h-[5rem] object-cover mb-2 rounded-lg group-hover:size-[6rem] duration-300"
                  />
                </div>
                <p className=" text-xs text-slate-600 font-semibold">
                  {pizza.name}
                </p>
                <p className=" text-[0.6rem] text-slate-600">{pizza.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className=" py-3">
        <div>
          <h1 className="text-[0.9rem] font-bold text-slate-600 mb-3">
            Most popular
          </h1>
          <div className=" grid grid-cols-5 gap-y-7">
            {Burger.map((pizza, index) => (
              <Link href="#" key={index} className=" flex flex-col gap-y-1 items-center">
                <div className="group rounded-lg overflow-hidden w-[5rem] h-[5rem]">
                  <Image
                    quality={80}
                    width={1000}
                    height={1000}
                    src={pizza.image}
                    alt={pizza.name}
                    className=" w-[5rem] h-[5rem] object-cover mb-2 rounded-lg group-hover:size-[6rem] duration-300"
                  />
                </div>
                <p className=" text-xs text-slate-600 font-semibold">
                  {pizza.name}
                </p>
                <p className=" text-[0.6rem] text-slate-600">{pizza.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Pizzas

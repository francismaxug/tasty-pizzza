"use client"
import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLinks = () => {
  const pathname = usePathname()
  return (
    <div className=" py-3 px-2 flex  gap-x-4">
      <Link
        href="/"
        className={`px-3 py-1 ${
          pathname === "/" ? "bg-blue-600" : " bg-blue-300"
        }  border-2 border-white text-[0.65rem] rounded-full text-white`}
      >
        Layout 1
      </Link>
      <Link
        href="/summary"
        className={`px-3 py-1   ${
          pathname === "/summary" ? "bg-blue-600" : "bg-blue-300"
        }  border-2 border-white text-[0.65rem] rounded-full text-white`}
      >
        Layout 2
      </Link>
    </div>
  )
}

export default NavLinks

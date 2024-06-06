import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "../styles/globals.css"
import NavLinks from "@/components/NavLinks"

const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className=" bg-orange-50 p-1 relative ">
       

          {children}
        </main>
      </body>
    </html>
  )
}

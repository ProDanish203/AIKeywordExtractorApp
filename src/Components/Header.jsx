// import React from 'react'
import logo from "../assets/logo.svg"

export const Header = () => {
  return (
    <header className="flex items-center justify-between py-2 px-10 bg-black text-white">
        {/* <h2 className="font-bold text-2xl">D-Extractor</h2> */}
        <img src={logo} className="w-36" />
        <div>
            <button className="bg-red-500 p-2 rounded-md px-3 cursor-pointer shadow-2xl">Github</button>
        </div>
    </header>
  )
}

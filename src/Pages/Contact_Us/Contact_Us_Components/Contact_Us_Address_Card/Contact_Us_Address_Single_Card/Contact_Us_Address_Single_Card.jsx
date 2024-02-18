import React from 'react'
import { TfiLocationPin } from "react-icons/tfi";
const Contact_Us_Address_Single_Card = ({ title, address, phone, fax, email }) => {
  return (
  <>
      <div className="relative flex flex-col justify-center overflow-hidden shadow-lg">
      <div className="group relative cursor-pointer overflow-hidden px-6 pt-10 pb-5 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
        <div className="relative z-10 mx-auto max-w-md ">
          <span className="grid h-20 w-20 place-items-center rounded-full bg-green-100  shadow-2xl transition-all duration-300 group-hover:bg-sky-400">
            <TfiLocationPin className="h-8 w-8 text-green-500 group-hover:text-white" />
          </span>
          <div className="pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
            <h2 className="uppercase  text-green-500 group-hover:text-white/90 font-medium">
              {title}
            </h2>
            <p>{address}</p>
            <p>PBX Range: {phone}</p>
            <p>Fax: {fax}</p>
            <p>E-mail: {email}</p>
          </div>
        </div>
      </div>
    </div></>
  )
}

export default Contact_Us_Address_Single_Card

import React from 'react'
import { motion } from 'framer-motion'
import phnapp from '../../../../../public/Group1000003558.png'
import Maskgroup1 from '../../../../../public/Maskgroup1.png'
import Maskgroup2 from '../../../../../public/Maskgroup2.png'
const SBX_Mobile_App_Section = () => {
  return (
    <>
      <section className=" bg-[#CDFFDB] text-gray-600 body-font mt-20  ">
        <div className="container mx-auto grid md:grid-cols-2 gap-5 items-center lg:items-start px-2">
          <motion.div
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className=" "
          >
            <h2 className="text-2xl text-center md:text-start font-extrabold leading-10 tracking-tight text-gray-800  sm:leading-none md:text-4xl lg:text-6xl mt-10 mb-2">
              Easy banking and Money
            </h2>
            <h2>
              <span className="text-2xl text-center md:text-start font-extrabold leading-10 tracking-tight  sm:leading-none md:text-4xl lg:text-6xl  text-[#2DBE61] transition-all duration-1000 animate-pulse">
                {" "}
                Transfer on the SBX APP
              </span>
              <span className="text-xl  font-semibold rounded-full text-blueGray-500  transition-all duration-1000 animate-pulse ">
                2.0
              </span>
            </h2>

            <div className="flex mt-10">
              <button className="bg-black rounded-lg text-white text-xs text-center self-center px-2  my-2 mx-2">
                <img src={Maskgroup1} alt="" />
              </button>
              <button className="bg-black rounded-lg text-white text-xs text-center self-center px-2 my-2 mx-2">
                <img src={Maskgroup2} alt="" />
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className=" "
          >
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-[#2DBE61] pt-10">
              Download the APP for free
            </h2>
            <p className="max-w-md mx-auto mt-2 text-gray-600 font-medium  sm:text-lg  md:text-xl md:max-w-3xl">
              Just pure value at your fingertips. Join our ever-growing
              community of users who have embraced the freedom and flexibility
              our app offers.
            </p>
            <img
              className="object-cover object-center rounded mt-5 w-full  "
              alt="hero"
              src={phnapp}
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default SBX_Mobile_App_Section

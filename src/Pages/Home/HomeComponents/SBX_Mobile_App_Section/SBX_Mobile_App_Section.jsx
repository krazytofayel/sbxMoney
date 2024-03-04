import React from 'react'
import { motion } from 'framer-motion'
const SBX_Mobile_App_Section = () => {
  return (
    <>  
      <section className=" bg-[#CDFFDB] text-gray-600 body-font mt-20  ">


        <div className="container mx-auto grid md:grid-cols-2 gap-5 items-center lg:items-start px-2">
          <motion.div initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className=" ">
            <h2
              className="text-2xl text-center md:text-start font-extrabold leading-10 tracking-tight text-gray-800  sm:leading-none md:text-4xl lg:text-6xl mt-10">
              Easy banking and Money
              <span className="font-bold text-[#2DBE61] transition-all duration-1000 animate-pulse"> Transfer on the SBX APP</span>
              <span className="text-xl font-semibold rounded-full text-blueGray-500  transition-all duration-1000 animate-pulse ">2.0</span>
            </h2>

            <div className="flex mt-10">
              <button className="bg-black rounded-lg text-white text-xs text-center self-center px-3  my-2 mx-2"><img src="./src/assets/Maskgroup1.png" alt="" /></button>
              <button className="bg-black rounded-lg text-white text-xs text-center self-center px-3 my-2 mx-2"><img src="./src/assets/Maskgroup2.png" alt="" /></button>
            </div>
          </motion.div>
          <motion.div initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }} className=" ">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-[#2DBE61] pt-10">Download the APP for free</h2>
            <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate dignissim augue, Nullam vulputate dignissim augue.
            </p>
            <img className="object-cover object-center rounded mt-5 w-full  " alt="hero" src="./src/assets/Group1000003558.png" />
          </motion.div>
        </div>
      </section>

    </>
  )
}

export default SBX_Mobile_App_Section

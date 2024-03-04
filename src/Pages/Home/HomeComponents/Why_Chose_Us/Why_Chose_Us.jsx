import React from 'react'
import { motion } from 'framer-motion'
import { HiOutlineLightBulb } from "react-icons/hi";
import { GrShieldSecurity } from "react-icons/gr";
  import { RiTimerFlashLine } from "react-icons/ri";
  import { CiLocationArrow1 } from "react-icons/ci";
const Why_Chose_Us = () => {
  return (
    <>
      <section id="features" className=" px-4 space-y-6 bg-[#CDFFDB] py-8 dark:bg-transparent md:py-12 lg:py-20">


        <div className="relative container flex flex-col justify-between items-center  px-4 mx-auto md:flex-row sm:px-6 ">
          <div className="flex justify-between md:mb-16 md:py-5 max-w-2xl md:p-8 ">
            <motion.div initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1 }} className="text-left">
              <h2
                className="text-2xl font-extrabold leading-10 tracking-tight text-gray-800  sm:leading-none md:text-4xl">
                Discover why we're the
                <span className="font-bold text-[#2DBE61] transition-all duration-1000 animate-pulse "> preferred option for many</span>
                {/* <span className="text-xl font-semibold rounded-full text-blueGray-500">2.0</span> */}
              </h2>


            </motion.div>
          </div>
          <motion.div initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }} className="text-left">
            <h2 className="text-2xl font-extrabold leading-10 tracking-tight text-[#2DBE61] ">Why Chose Us?</h2>
            <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate dignissim augue, Nullam vulputate dignissim augue.
            </p>

          </motion.div>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
          <motion.div initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }} className="">
            <div className="relative flex  flex-col justify-center overflow-hidden shadow-lg max-h-[25rem]">
              <div
                className="group relative cursor-pointer overflow-hidden  px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-green-500 transition-all duration-300 group-hover:scale-[10]"></span>
                <div className="relative z-10 mx-auto max-w-md ">
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-green-100  shadow-2xl transition-all duration-300 group-hover:bg-green-400">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-green-500 group-hover:text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg> */}
                    <HiOutlineLightBulb  className="h-8 w-8 text-green-500 group-hover:text-white"/>
                  {/* <img src="https://cdn-icons-png.flaticon.com/512/4341/4341966.png"   className="h-8 w-8 text-green-500 group-hover:text-white" alt="" /> */}
                  </span>
                  <div
                    className="pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                    <h2 className="uppercase  text-green-500 group-hover:text-white/90 font-medium">
                      Competitive Technology
                    </h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                  <div className="pt-5 text-base font-semibold leading-7">
                    <p>
                      <a className="text-green-500 flex items-center group-hover:text-white/90 truncate" href="#">
                        More  Competitive Technology
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }} className="">
            <div className="relative flex  flex-col justify-center overflow-hidden shadow-lg max-h-[25rem]">
              <div
                className="group relative cursor-pointer overflow-hidden  px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                <div className="relative z-10 mx-auto max-w-md ">
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-green-100  shadow-2xl transition-all duration-300 group-hover:bg-sky-400">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-green-500 group-hover:text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg> */}
                    <GrShieldSecurity className="h-8 w-8 text-green-500 group-hover:text-white"/>
                  </span>
                  <div
                    className="pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                    <h2 className="uppercase  text-green-500 group-hover:text-white/90 font-medium">
                      Security Driven
                    </h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                  <div className="pt-5 text-base font-semibold leading-7">
                    <p>
                      <a className="text-green-500 flex items-center group-hover:text-white/90 truncate" href="#">
                        More Security Driven
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }} className="">
            <div className="relative flex  flex-col justify-center overflow-hidden shadow-lg max-h-[25rem]">
              <div
                className="group relative cursor-pointer overflow-hidden  px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-green-500 transition-all duration-300 group-hover:scale-[10]"></span>
                <div className="relative z-10 mx-auto max-w-md ">
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-green-100  shadow-2xl transition-all duration-300 group-hover:bg-green-400">
                 
                   <RiTimerFlashLine  className="h-8 w-8 text-green-500 group-hover:text-white"/>
                  </span>
                  <div
                    className="pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                    <h2 className="uppercase  text-green-500 group-hover:text-white/90 font-medium">
                      Real time Money
                    </h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                  <div className="pt-5 text-base font-semibold leading-7">
                    <p>
                      <a className="text-green-500 flex items-center group-hover:text-white/90 truncate" href="#">
                        More  Transparency
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }} className="">
            <div className="relative flex  flex-col justify-center overflow-hidden shadow-lg max-h-[25rem]">
              <div
                className="group relative cursor-pointer overflow-hidden  px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300  hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-green-500 transition-all duration-300 group-hover:scale-[10]"></span>
                <div className="relative z-10 mx-auto max-w-md ">
                  <span className="grid h-20 w-20  place-items-center rounded-full bg-green-100  shadow-2xl transition-all duration-300 group-hover:bg-green-400">
                   
                    <CiLocationArrow1  className="h-8 w-8 text-green-500 group-hover:text-white"/>
                  </span>
                  <div
                    className="pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                    <h2 className="uppercase  text-green-500 group-hover:text-white/90 font-medium">
                      Cost Effective
                    </h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                  <div className="pt-5 text-base font-semibold leading-7">
                    <p>
                      <a className="text-green-500 flex items-center group-hover:text-white/90 truncate" href="#">
                        More  Cost Effective
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* <div className="p-8">
            <div
              className="bg-green-100 rounded-full w-16 h-16 flex justify-center items-center text-green-500 shadow-2xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h2 className="uppercase mt-6 text-green-500 font-medium mb-3">
              Social conversations
            </h2>
            <p className="font-light text-sm text-gray-500 mb-3">
              We get insulted by others, lose trust for those others. We get back
              stabbed by friends. It becomes harder for us to give others a hand.
            </p>
            <a className="text-green-500 flex items-center hover:text-green-600" href="/">
              More about us icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div> */}


        </div>

      </section>
    </>
  )
}

export default Why_Chose_Us

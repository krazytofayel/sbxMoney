import React from 'react'
import { motion } from 'framer-motion'
import { TiTickOutline } from "react-icons/ti";
import benefit from '../../../../../public/Group2.avif'
const Prestige_Benifit = () => {
  const items = [
    {
      title: "Easy Transaction",
      description: "Make sending money a breeze with our easy-to-use interface, guaranteeing a hassle-free experience every time. "
    },
    {
      title: "Guaranteed Security like no other",
      description: "Rest assured knowing your financial transactions are safeguarded with the utmost level of protection."
    },
    {
      title: "Innovation",
      description: "Bringing you cutting-edge solutions that redefine the way you manage and transfer funds, making your financial journey more efficient and convenient. "
    }
  ];
  return (
    <>
      <section className="overflow-hidden bg-white py-8 sm:py-16">
        <div className="container mx-auto ">
          <div className="mx-auto grid  grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2  ">
            <motion.img initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }} src={benefit} alt="Product screenshot" className="w-full h-auto flex justify-center items-center" />
            <div className="lg:pr-8 l">

              <div className="">
                <motion.p
                  initial={{ x: "-100vw", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ ease: "easeInOut", duration: 1 }}
                  className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center lg:text-start"
                >
                  Prestige Benefits
                </motion.p>
                <motion.p
                  initial={{ x: "-100vw", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
                  className="mt-6 text-lg leading-8 text-gray-600  text-center lg:text-start font-medium"
                >
                  Enjoy exclusive perks and privileges with our Prestige Benefits program.
                </motion.p>


                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {items.map((item, index) => (
                    <div key={index} className="relative flex items-center gap-5 pl-4">
                      <motion.dt initial={{ x: "-100vw", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ ease: "easeInOut", duration: 1 }} className="inline font-semibold text-gray-900">

                        <span className=" grid h-10 w-10 place-items-center rounded-full bg-[#F0FFF4] border-2 relative overflow-hidden transition-bg duration-500 hover:bg-green-500 shadow-lg">
                          <TiTickOutline className="h-8 w-8 text-green-400 hover:text-white absolute top-0 left-0 right-0 bottom-0 m-auto" />
                          <span className="bg-gradient-to-t from-green-100 to-green-500 absolute bottom-0 left-0 right-0 top-full"></span>
                        </span>
                      </motion.dt>
                      <dd className="inline">
                        <motion.h6 initial={{ x: "-100vw", opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ ease: "easeInOut", duration: 1 }} className="mb-2 font-semibold leading-5 text-black">{item.title}</motion.h6>
                        <motion.p initial={{ x: "-100vw", opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ ease: "easeInOut", duration: 1 }} className="mb-3 text-sm max-w-md text-gray-900">{item.description}</motion.p>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
              {/* <div class="mt-10 flex items-center gap-x-6">
                <a href="#"
                  class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Start
                  for free
                </a>
                <a href="#" class="text-sm font-semibold leading-6 text-gray-700">Schedule a demo
                  <span aria-hidden="true">→</span>
                </a>
              </div> */}
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Prestige_Benifit

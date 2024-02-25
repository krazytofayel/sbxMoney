import React from 'react'
import { motion } from 'framer-motion'

const Prestige_Benifit = () => {
  const items = [
    {
      title: "Easy Transaction",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod tempor incididunt"
    },
    {
      title: "Guaranteed Security like no other",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod tempor incididunt"
    },
    {
      title: "Innovation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod tempor incididunt"
    }
  ];
  return (
    <>
      <section class="overflow-hidden bg-white py-8 sm:py-16">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div class="lg:pr-8 lg:pt-4">
              <div class="lg:max-w-lg">
                <motion.p
                  initial={{ x: "-100vw", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ ease: "easeInOut", duration: 1 }}
                  className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                >
                  Prestige Benefits
                </motion.p>
                <motion.p
                  initial={{ x: "-100vw", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
                  className="mt-6 text-lg leading-8 text-gray-600"
                >
                  Lorem ipsum dolor sit amet, consectetur dipiscing elit eius mod tempor incididunt ut labore Lorem ipsum dolor
                  sit amet, consectetur dipiscing elit eius mod tempor incididunt ut labore
                </motion.p>

                {/* <motion.p  initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "linear", duration: 3 }} class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Prestige Benefits</motion.p>
                <motion.p  initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "linear", duration: 2 }} class="mt-6 text-lg leading-8 text-gray-600">Lorem ipsum dolor sit amet, consectetur dipiscing elit eius mod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur dipiscing elit eius mod tempor incididunt ut labore
                </motion.p> */}
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {items.map((item, index) => (
                    <div key={index} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <motion.img
                          src="/src/assets/Animationbest.gif"
                          alt=""
                          className="absolute left-[-25px] h-20 w-20"
                          initial={{ x: "-100vw", opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ ease: "easeInOut", duration: 1 }}
                        />
                      </dt>
                      <dd className="inline">
                        <motion.h6 initial={{ x: "-100vw", opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ ease: "easeInOut", duration: 1 }} className="mb-2 font-semibold leading-5">{item.title}</motion.h6>
                        <motion.p initial={{ x: "-100vw", opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ ease: "easeInOut", duration: 1 }} className="mb-3 text-sm text-gray-900">{item.description}</motion.p>
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
            <motion.img initial={{ x: "100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }} src="/src/assets/Group2.png" alt="Product screenshot" class="w-full h-full" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Prestige_Benifit

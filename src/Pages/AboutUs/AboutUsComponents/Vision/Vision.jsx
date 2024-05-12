import React from 'react'

import Visions from '../../../../../public/Vision.png'
import { TiTickOutline } from "react-icons/ti";
const Vision = () => {
    const items = [
   {
      title: "Transformative vision",
      description: "Make sending money a breeze with our easy-to-use interface, guaranteeing a hassle-free experience every time. "
    },
    {
      title: "Transformative vision",
      description: "Rest assured knowing your financial transactions are safeguarded with the utmost level of protection."
    },
 
  ];
  return (
    <div>
      <section class="overflow-hidden bg-[#CDFFDB] py-8 sm:py-16">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto grid max-w-3xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">

            <div class="lg:pr-8 ">
              <div class="lg:max-w-lg">

                <p class="mt-2 text-3xl font-bold tracking-tight text-gray-700 max-w-xs sm:text-4xl">The Vision that Fuels our Team</p>
                <p class="mt-6 text-lg leading-8 text-gray-600">United by a shared purpose that transcends borders and cultures. Our vision is the beacon that guides our every step, reminding us that we are not just facilitating transactions but changing lives, one transfer at a time.
                </p>
               <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {items.map((item, index) => (
                    <div key={index} className="relative flex items-center gap-5 pl-4">
                      <dt  className="inline font-semibold text-gray-900">

                        <span className=" grid h-10 w-10 place-items-center rounded-full bg-[#F0FFF4] border-2 relative overflow-hidden transition-bg duration-500 hover:bg-green-500 shadow-lg">
                          <TiTickOutline className="h-8 w-8 text-green-400 hover:text-white absolute top-0 left-0 right-0 bottom-0 m-auto" />
                          <span className="bg-gradient-to-t from-green-100 to-green-500 absolute bottom-0 left-0 right-0 top-full"></span>
                        </span>
                      </dt>
                      <dd className="inline">
                        <h6  className="mb-2 font-semibold leading-5 text-black">{item.title}</h6>
                        <p  className="mb-3 text-sm text-gray-900">{item.description}</p>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

            </div>
            <div className='w-full '>
              <img src={Visions} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Vision

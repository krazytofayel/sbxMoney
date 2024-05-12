import React from 'react'
import Foundations from '../../../../../public/Foundation.png'
import { TiTickOutline } from "react-icons/ti";
const Foundation = () => {
      const items = [
    {
      title: "Absulate transparency ",
      description: "We take care of dreams, connecting families, helping businesses succeed, and supporting communities across borders. Each transfer is important to us, and we handle it carefully and securely. "
    },
    {
      title: "Commitment to Safety ",
      description: "We embrace compliance not merely as a regulatory obligation, but as a moral imperative, safeguarding the financial well-being of those who place their faith in us. "
    },
    
 
  ];
  return (
    <>

      <section class="overflow-hidden bg-gradient-to-b from-[#cdffdb] to-transparent py-8 sm:py-16">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto grid max-w-3xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className='w-full '>
              <img src={Foundations} alt="" />
            </div>
            <div class="lg:pr-8 ">
              <div class="lg:max-w-lg">

                <p class="mt-2 text-3xl font-bold tracking-tight text-gray-700 max-w-sm sm:text-4xl">Our Values are foundations of Trust</p>
                <p class="mt-6 text-lg leading-8 text-gray-600">Our Values are the guiding principles that have forged an unbreakable bond with our customers, assuring them that their hard-earned funds are in safe hands. 
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

          </div>
        </div>
      </section></>
  )
}

export default Foundation

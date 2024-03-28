import React from 'react'
import Gridgroup1 from '../../../../../public/Gridgroup1.png'
import gridgroup2 from '../../../../../public/gridgroup2.png'
import gridimg2 from '../../../../../public/gridimg1-2.jpg'
import Animationbest from '../../../../../public/Animationbest.gif'
import { TiTickOutline } from "react-icons/ti";
const Transfer_Ur_Money = () => {
 
  const items = [
    {
      title: "Powerful Mobile & Online App",
      description: "Make sending money a breeze with our easy-to-use interface, guaranteeing a hassle-free experience every time. "
    },
    {
      title: "Brings More Transperency & Speed",
      description: "Rest assured knowing your financial transactions are safeguarded with the utmost level of protection."
    },
    {
      title: "Special For Multiple User Capabilities",
      description: "Bringing you cutting-edge solutions that redefine the way you manage and transfer funds, making your financial journey more efficient and convenient. "
    }
  ];
  return (
    <>

      <section class="overflow-hidden bg-white py-8 sm:py-16">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto grid max-w-3xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className='w-full '>
              <h2 className='text-xl lg:text-4xl font-bold max-w-lg mb-10 text-gray-700'>Fast and Easy Money Transfer Anytime, Anywhere</h2>
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 ">
                <div class="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
                  <a href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                    <img src={Gridgroup1} alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                    <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>

                  </a>
                </div>
                <div class="col-span-2 sm:col-span-1 md:col-span-1 bg-stone-50">
                  <a href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
                    <img src={gridgroup2} alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                    <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>

                  </a>

                  <a href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 ">
                    <img src={gridimg2} alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                    <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>

                  </a>
                  {/* <div class="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                <a href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                  <img src="https://images.unsplash.com/photo-1571104508999-893933ded431?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                  <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Whiskey</h3>
                </a>
                <a href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                  <img src="https://images.unsplash.com/photo-1626897505254-e0f811aa9bf7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                  <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Vodka</h3>
                </a>
              </div> */}
                </div>

              </div>
            </div>
            <div class="lg:pr-8 ">
              <div class="lg:max-w-lg">

                <p class="mt-2 text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl">About Us</p>
                <p class="mt-6 text-lg leading-8 text-gray-600">Lorem ipsum dolor sit amet, consectetur dipiscing elit eius mod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur dipiscing elit eius mod tempor incididunt ut labore
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
                        <h6 
                           className="mb-2 font-semibold leading-5 text-black">{item.title}</h6>
                        <p  className="mb-3 text-sm max-w-md text-gray-900">{item.description}</p>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Transfer_Ur_Money

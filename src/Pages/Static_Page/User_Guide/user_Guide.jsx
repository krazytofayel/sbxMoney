import React, { useState } from 'react'
import Footer from '../../../Components/ShareableComponents/Footer/Footer'
import Neumorphism_Text_Header from '../Static_Page_Components/Neumorphism_Text_Header/Neumorphism_Text_Header'
import { TiTickOutline } from "react-icons/ti";
import GlobalButton from '../../../Components/ShareableComponents/GlobalComponents/GlobalButton/GlobalButton';
import NavBar from '../../../Components/ShareableComponents/NavBar/NavBar';
import userguied from '../../../../public/userguied.png'
const User_Guide = () => {
  const [navfix, setNavfix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 70) {
      setNavfix(true);
      //console.log(scrollY)
    } else {
      setNavfix(false);
    }
  }
  window.addEventListener("scroll", setFixed);
  const handleButtonClick = () => {
    // Handle button click logic here
  };
  return (
    <>

        <div className={`z-20 fixed top-0 bg-white w-full transition-all duration-300 ease-in-out ${navfix ? "shadow-lg bg-white" : ""}`}>
        <NavBar />
      </div>
      <section>

        <div>
          <div className='flex justify-center align-middle items-center bg-[#CDFFDB] h-[30rem] '>
            <div>
              <Neumorphism_Text_Header text="User Guide" />
              <p className='d-block max-w-2xl text-center max-h-36'>This web site is owned and provided by SBX Money and its subsidiaries and affiliates. By using this web site, you agree to the following Conditions of Use. Please review this information often, as it may change at any time, without notice.</p>

            </div>
          </div>
          <div>
            <section class="overflow-hidden bg-gradient-to-b from-[#cdffdb] to-transparent py-8 sm:py-16 mb-16">
              <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto grid max-w-3xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                  <div className='w-full '>
                    <h2 className='text-xl lg:text-4xl font-bold max-w-lg mb-10 text-gray-700'>How to send money with SBX Money?</h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 h-[100%]">
                      <div class="col-span-2 sm:col-span-1 md:col-span-2 bg-sky-50  flex flex-col">
                        <a href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                          <img src={userguied} alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                          <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>

                        </a>
                      </div>


                    </div>
                  </div>
                  <div class="lg:pr-8 ">
                    <div class="lg:max-w-lg">

                      <p class="mt-2 text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl">User guide</p>
                      <p class="mt-6 text-lg leading-8 text-gray-600">We make international money transfer fast, simple and secure. Whichever method you choose, it only takes a few steps to send money online with us.
                      </p>
                      <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                        <div class="relative flex items-center gap-5 pl-4">
                          <dt className="inline font-semibold text-gray-900">
                            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#F0FFF4] border-2 relative overflow-hidden transition-bg duration-500 hover:bg-green-500 shadow-lg">
                              <TiTickOutline className="h-8 w-8 text-green-400 hover:text-white absolute top-0 left-0 right-0 bottom-0 m-auto" />
                              <span className="bg-gradient-to-t from-green-100 to-green-500 absolute bottom-0 left-0 right-0 top-full"></span>
                            </span>
                          </dt>

                          <dd class="inline"> <h6 class="mb-2 font-semibold leading-5">Register or log in</h6>

                          </dd>
                        </div>
                        <div class="relative flex items-center gap-5 pl-4">
                          <dt className="inline font-semibold text-gray-900">
                            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#F0FFF4] border-2 relative overflow-hidden transition-bg duration-500 hover:bg-green-500 shadow-lg">
                              <TiTickOutline className="h-8 w-8 text-green-400 hover:text-white absolute top-0 left-0 right-0 bottom-0 m-auto" />
                              <span className="bg-gradient-to-t from-green-100 to-green-500 absolute bottom-0 left-0 right-0 top-full"></span>
                            </span>
                          </dt>

                          <dd class="inline"> <h6 class="mb-2 font-semibold leading-5">Add your recipient's details</h6>

                          </dd>
                        </div>
                        <div class="relative flex items-center gap-5 pl-4">
                          <dt className="inline font-semibold text-gray-900">
                            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#F0FFF4] border-2 relative overflow-hidden transition-bg duration-500 hover:bg-green-500 shadow-lg">
                              <TiTickOutline className="h-8 w-8 text-green-400 hover:text-white  absolute top-0 left-0 right-0 bottom-0 m-auto" />
                              <span className="bg-gradient-to-t from-green-100 to-green-500 absolute bottom-0 left-0 right-0 top-full"></span>
                            </span>
                          </dt>

                          <dd class="inline"> <h6 class="mb-2 font-semibold leading-5">Choose how much you want to transfer</h6>

                          </dd>
                        </div>
                        <div class="relative flex items-center gap-5 pl-4">
                          <dt className="inline font-semibold text-gray-900">
                            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#F0FFF4] border-2 relative overflow-hidden transition-bg duration-500 hover:bg-green-500 shadow-lg">
                              <TiTickOutline className="h-8 w-8 text-green-400 hover:text-white absolute top-0 left-0 right-0 bottom-0 m-auto" />
                              <span className="bg-gradient-to-t from-green-100 to-green-500 absolute bottom-0 left-0 right-0 top-full"></span>
                            </span>
                          </dt>

                          <dd class="inline"> <h6 class="mb-2 font-semibold leading-5">Pay for your transfer</h6>

                          </dd>
                        </div>

                      </dl>
                      <div className='mt-10 pl-5'>
                        <GlobalButton onClick={handleButtonClick}
                          text="Open A Free Account"
                          bgColor="bg-green-500"
                          hoverBgColor="red-100"
                          textColor="white"
                          hoverTextColor="black" />
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </section>

    </>
  )
}

export default User_Guide
